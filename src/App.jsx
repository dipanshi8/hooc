import { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';
import LandingPage from './LandingPage';

const IMG_H = 44;

export default function App() {
  const [phase, setPhase] = useState('reveal'); // reveal | glide | done
  const flyRef  = useRef(null);
  const slotRef = useRef(null);

  useEffect(() => {
    // Reveal takes 0.6s — start glide at 700ms
    const t = setTimeout(startGlide, 700);
    return () => clearTimeout(t);
  }, []);

  async function startGlide() {
    const fly  = flyRef.current;
    const slot = slotRef.current;
    if (!fly || !slot) return;

    setPhase('glide');

    const flyRect  = fly.getBoundingClientRect();
    const slotRect = slot.getBoundingClientRect();
    const dx = slotRect.left - flyRect.left;
    const dy = slotRect.top  - flyRect.top;

    // Curtain fades immediately as glide begins
    animate('#curtain', { opacity: 0 }, { duration: 0.45, ease: 'easeInOut' });

    // Fast-launch, hard-stop spring — high stiffness snaps it in place
    await animate(fly, { x: dx, y: dy }, {
      type: 'spring', stiffness: 300, damping: 30, mass: 0.8,
    });

    // Slot logo becomes visible WHILE flying logo is still at exact same coords
    if (slotRef.current) {
      slotRef.current.style.opacity = '1';
      slotRef.current.style.visibility = 'visible';
    }

    // 300ms overlap — both logos at identical position, zero blink window
    await new Promise(r => setTimeout(r, 300));

    // Safe to unmount flying logo — slot logo already painted
    setPhase('done');
  }

  const isDone = phase === 'done';

  return (
    <div>
      {/* White curtain */}
      {!isDone && (
        <div
          id="curtain"
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: '#fff',
            pointerEvents: phase === 'glide' ? 'none' : 'all',
          }}
        />
      )}

      {/* Flying logo — fixed, above everything */}
      {!isDone && (
        <motion.img
          ref={flyRef}
          src="/images/cropped-Calmscious 1.png"
          alt="Calmscious"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            top: '50%', left: '5%',
            translateY: '-50%',
            height: `${IMG_H}px`,
            width: 'auto',
            objectFit: 'contain',
            zIndex: 102,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Site always rendered — navbar slot is measurable from frame 1 */}
      <LandingPage isLoaded={isDone} logoSlotRef={slotRef} />
    </div>
  );
}
