import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';

const CARDS = [
  {
    title: 'Individual Therapy',
    img: '/images/it1.png',
    hoverImg: '/images/it2.png',
    desc: "Get personal support with Dr. Mehar's Individual Therapy. Whether you're dealing with stress, anxiety, or depression, our one-on-one sessions are designed to help you feel better, available online or in-person.",
  },
  {
    title: 'Couple Therapy',
    img: '/images/ct1.png',
    hoverImg: '/images/ct2.png',
    desc: 'Rebuild trust and deepen connection with our Couple Therapy sessions. Our expert therapists guide you and your partner through communication challenges and emotional barriers.',
  },
  {
    title: 'Family Therapy',
    img: '/images/ft1.png',
    hoverImg: '/images/ft2.png',
    desc: 'Strengthen family bonds and resolve conflicts with compassionate Family Therapy. We help families navigate difficult transitions and build healthier dynamics together.',
  },
];

const BLOG_POSTS = [
  { title: 'Power of Calmscious Therapy to Manage Stress and Anxiety' },
  { title: 'Unlock the Power of Your Brain to Manage Anxiety' },
  { title: 'Easy Self-Care Ideas for a Happier You' },
  { title: 'Best Self-Care Ideas for a Healthier and Happier You' },
  { title: '10 Best Self-Care Ideas for Mental and Physical Wellbeing' },
  { title: 'Power of Calmscious Therapy to Manage Stress and Anxiety' },
];

// Duplicate cards so the seam is invisible during the loop
const TESTI_ITEMS = [...Array(8)].map((_, i) => i);

function TestiCard() {
  return (
    <div
      className="bg-white rounded-3xl shadow-sm p-5 flex-shrink-0"
      style={{ width: '280px' }}
    >
      <div className="flex items-center gap-3 mb-3">
        <img
          src="/images/sideimage1.png"
          alt="Kamal Kanan"
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900 text-sm">Kamal Kanan</p>
          <p className="text-gray-400 text-xs">20 December 2024</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: '#f5a623', fontSize: '16px' }}>★</span>
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-3">
        Really useful madam. I knew this, but i forgot. Now I remember this technique by joining this zoom meeting
      </p>
      <button className="text-gray-400 text-xs hover:text-teal-500 transition">Read More</button>
    </div>
  );
}

function TherapyCard({ card }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
      className="relative rounded-3xl overflow-hidden cursor-pointer"
      style={{ height: '420px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.img src={card.img} alt={card.title} animate={{ opacity: hovered ? 0 : 1 }} transition={{ duration: 0.4 }} className="absolute inset-0 w-full h-full object-cover" />
      <motion.img src={card.hoverImg} alt="" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 w-full h-full object-cover" />
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.35 }} className="absolute inset-0 flex items-center justify-center p-8 text-center" style={{ background: 'rgba(15,15,15,0.82)' }}>
        <p className="text-white text-base leading-relaxed">{card.desc}</p>
      </motion.div>
      <motion.div animate={{ opacity: hovered ? 0 : 1 }} transition={{ duration: 0.3 }} className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)' }}>
        <h3 className="text-white text-2xl font-bold tracking-tight leading-tight">{card.title}</h3>
      </motion.div>
    </motion.div>
  );
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay } },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay } },
});

export default function LandingPage({ isLoaded = true, logoSlotRef }) {
  const [isFrame473Open, setIsFrame473Open] = useState(false);

  return (
    <div style={{ fontFamily: "'Inter', 'Outfit', sans-serif", WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>

      {/* ── Hero + Navbar — layered background system ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '1024px',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 0,
        isolation: 'isolate',
      }}>

        {/* Animated Hero background */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: '1500px',
            height: '1024px',
            transform: 'translateX(-50%)',
            zIndex: -1,
            pointerEvents: 'none',
            userSelect: 'none',
            background: '#EAF8F9',
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          }}
        >
          <motion.img
            src="/images/bg1.png"
            alt=""
            draggable={false}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              WebkitFilter: 'blur(15px) brightness(1.1)',
              filter: 'blur(15px) brightness(1.1)',
              transform: 'scale(1.1)',
              opacity: 1,
            }}
            animate={{ opacity: [1, 0, 0, 1] }}
            transition={{ duration: 12, times: [0, 0.33, 0.66, 1], ease: 'easeInOut', repeat: Infinity }}
          />
          <motion.img
            src="/images/bg2.png"
            alt=""
            draggable={false}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              WebkitFilter: 'blur(15px) brightness(1.1)',
              filter: 'blur(15px) brightness(1.1)',
              transform: 'scale(1.1)',
              opacity: 1,
            }}
            animate={{ opacity: [0, 1, 0, 0] }}
            transition={{ duration: 12, times: [0, 0.33, 0.66, 1], ease: 'easeInOut', repeat: Infinity }}
          />
          <motion.img
            src="/images/bg3.png"
            alt=""
            draggable={false}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              WebkitFilter: 'blur(15px) brightness(1.1)',
              filter: 'blur(15px) brightness(1.1)',
              transform: 'scale(1.1)',
              opacity: 1,
            }}
            animate={{ opacity: [0, 0, 1, 0] }}
            transition={{ duration: 12, times: [0, 0.33, 0.66, 1], ease: 'easeInOut', repeat: Infinity }}
          />
        </div>

        {/* Pillar texture overlay (extends behind Navbar + Hero text) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.7,
            mixBlendMode: 'overlay',
            background:
              // 3D pillar rib: left shadow → white highlight → clear body (100px cadence)
              'repeating-linear-gradient(90deg,' +
              'rgba(0, 100, 120, 0.4) 0px,' +
              'rgba(0, 70, 90, 0.5) 4px,' +
              '#FFFFFF 5px,' +
              '#FFFFFF 10px,' +
              'rgba(255,255,255,0) 15px,' +
              'rgba(255,255,255,0) 100px)',
            boxShadow: 'inset 10px 0 15px -10px rgba(0,0,0,0.2)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
          }}
        />

        {/* Hero → next section bridge (Rectangle 16) */}
        <div
          aria-hidden="true"
          className="hero-bottom-blur"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '105px',
            bottom: '-52px',
            background: '#7FDDE2',
            zIndex: 5,
            pointerEvents: 'none',
            backdropFilter: 'blur(53px)',
            WebkitBackdropFilter: 'blur(53px)',
            // fallback if backdrop-filter is unsupported/weak:
            filter: 'blur(53px)',
            WebkitFilter: 'blur(53px)',
          }}
        />

        {/* Layer 4 — UI content, always on top */}
        <div style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>

          {/* ── Navbar — always visible, not gated by isLoaded ── */}
          <Navbar isLoaded={isLoaded} ref={logoSlotRef} />

          {/* ── Hero — fades in after logo lands ── */}
          <motion.section
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              /*
                Figma: h1 top = 296px from frame top, navbar = 135px
                h1 is absolutely positioned at top=296px (relative to Layer 4 container),
                so section padding-top starts content beneath the heading box.
                Book a Session button top = 638px
                → section padding-bottom covers remaining space
              */
              paddingTop: '355px',
              paddingBottom: '9rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <AnimatePresence>
              {isFrame473Open ? (
                <motion.div
                  key="frame-473-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 80,
                    background: 'rgba(255,255,255,0.95)',
                  }}
                >
                  <button
                    type="button"
                    aria-label="Close Frame 473 overlay"
                    onClick={() => setIsFrame473Open(false)}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                      cursor: 'default',
                    }}
                  />
                  <div
                    style={{
                      position: 'relative',
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '24px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        width: 'min(720px, 100%)',
                        borderRadius: '18px',
                        border: '1px solid rgba(0,0,0,0.1)',
                        background: '#fff',
                        padding: '24px',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.12)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontFamily: "'Nunito', 'Inter', sans-serif", fontWeight: 600, fontSize: '28px', color: '#1F2A3A' }}>
                            Frame 473
                          </div>
                          <div style={{ marginTop: '6px', fontSize: '14px', color: '#53606f' }}>
                            Replace this overlay with your booking flow.
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsFrame473Open(false)}
                          style={{
                            border: 'none',
                            background: '#f1f5f9',
                            color: '#1F2A3A',
                            padding: '10px 12px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            fontWeight: 600,
                          }}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* H1 — Figma: Nexa Heavy 900, 64px, line-height 100%, color #2B2D42
                Box: 890×194px | top: 296px from frame (296-135 navbar = 161px from section top)
                letter-spacing: 0px, text-align: center, opacity: 1 */}
            <motion.h1
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={isLoaded ? 'show' : 'hidden'}
              style={{
                position: 'absolute',
                top: '296px',
                left: '275px',
                fontFamily: "'Nexa', 'Inter', sans-serif",
                fontSize: '64px',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '0px',
                color: '#1F2A3A',
                textAlign: 'center',
                width: '890px',
                height: '194px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginBottom: '1.5rem',
                /* contrast guard — light bg needs no shadow, color #2B2D42 is dark enough */
                textShadow: 'none',
              }}
            >
              Find Relief, Regain Balance,<br />and Feel in Control
            </motion.h1>

            {/* Subtext — Figma: Noto Sans Devanagari 400, 32px, line-height 100%, color #000 */}
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={isLoaded ? 'show' : 'hidden'}
              style={{
                fontFamily: "'Noto Sans Devanagari', 'Inter', sans-serif",
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: 1,
                color: '#1a1a1a',
                marginBottom: '3rem',
              }}
            >
              Get the peace of mind you deserve—start today!
            </motion.p>

            {/* Book a Session — Figma: 253×68px, bg #1ECAD3, radius 16px, padding 12px 18px */}
            <motion.button
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={isLoaded ? 'show' : 'hidden'}
              whileHover={{ scale: 1.04, filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsFrame473Open(true)}
              style={{
                position: 'absolute',
                top: '638px',
                left: '575px',
                width: '253px',
                height: '68px',
                background: '#1ECAD3',
                color: '#fff',
                borderRadius: '16px',
                padding: '12px 18px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                fontFamily: "'Nunito', 'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '32px',
                lineHeight: 1,
                textAlign: 'center',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 28px rgba(30,202,211,0.4)',
                letterSpacing: '0.01em',
                /* dissolve to Frame 473 on click: ease-out 800ms */
                transition: 'opacity 800ms ease-out',
              }}
            >
              <span
                style={{
                  width: '217px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Nunito', 'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '32px',
                  lineHeight: 1,
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                Book a Session
              </span>
            </motion.button>
          </motion.section>

        </div>{/* /Layer 4 UI content */}
      </div>{/* /Hero+Navbar layered bg */}

      <div style={{ width: '100%' }}>

        {/* ── Feeling Lost ── */}
        <section style={{
          backgroundImage: "url('/images/header1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          backgroundColor: '#7FDDE2',
          marginTop: 0,
          padding: '4rem 6rem',
          boxSizing: 'border-box',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: '4rem', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>

            {/* Single collage image */}
            <motion.div variants={fadeIn(0)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <img src="/images/sideimage1.png" alt="People experiencing emotional distress"
                style={{ width: '100%', height: 'auto', borderRadius: '1.25rem', display: 'block' }} />
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeUp(0.15)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#0a1a1a', lineHeight: 1.2, marginBottom: '1rem', marginTop: 0 }}>
                Feeling lost, stressed, or alone?
              </h2>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0a1a1a', lineHeight: 1.45, marginBottom: '1.25rem' }}>
                Stress, anxiety, sadness, or emotional numbness can make life feel heavy and isolating.
              </p>
              <p style={{ color: '#0a2a2a', marginBottom: '0.6rem', fontSize: '1rem' }}>You're not alone if you're experiencing:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.4rem', color: '#0a2a2a', fontSize: '1rem', lineHeight: 1.9, marginBottom: '0.75rem', marginTop: 0 }}>
                <li>Loss of interest or emotional numbness</li>
                <li>Constant irritation or anger</li>
                <li>Frequent panic or anxious thoughts</li>
                <li>A lingering sense of fear or unease</li>
              </ul>
              <p style={{ color: '#0a2a2a', marginBottom: '2rem', fontSize: '1rem' }}>With compassionate, expert-led care, relief is possible.</p>
              <button style={{ background: '#2dd4bf', color: '#fff', fontWeight: 700, fontSize: '1.1rem', padding: '0.9rem 2.5rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                Book a session
              </button>
            </motion.div>

          </div>
        </section>

        {/* ── Therapy Programs ── */}
        <section className="py-20 px-10" style={{ position: 'relative', zIndex: 2 }}>
          <div className="max-w-5xl mx-auto">
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-4xl font-bold tracking-tight text-gray-900 mb-12 max-w-lg leading-tight"
            >
              Comprehensive Therapy Programs to Meet Your Needs
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {CARDS.map((card) => <TherapyCard key={card.title} card={card} />)}
            </div>
          </div>
        </section>

        {/* ── Mental Wellness Blog ── */}
        <section className="py-20 px-10 pb-32" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-4xl font-bold tracking-tight text-gray-900 mb-12"
            >
              Exploring Paths to Mental Wellness
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {BLOG_POSTS.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
                  style={{ background: '#fff', borderRadius: '1rem', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}
                >
                  <img src="/images/mental1.png" alt={post.title} style={{ width: '100%', height: '192px', objectFit: 'cover', display: 'block' }} />
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: '1.4', color: '#111', marginBottom: '0.5rem' }}>{post.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '1rem' }}>By Dr. Mehar · August 21, 2024</p>
                    <button style={{ background: '#2dd4bf', color: '#fff', fontSize: '0.85rem', fontWeight: 600, padding: '0.5rem 1.25rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
                      Read Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="py-20 px-10" style={{ background: 'rgba(240,255,254,0.6)' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-10">
              Celebrating Success: Dr. Mehar's Journey of Impact
            </h2>
            <img src="/images/mehar.png" alt="Dr. Mehar's journey of impact" className="w-full rounded-2xl" />
          </div>
        </section>

        {/* ── Testimonials Marquee ── */}
        <section className="py-20 pb-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #e0faf7 0%, #f0fffe 100%)' }}>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-12 px-10">
            Real stories real lives transformed
          </h2>

          {/* Row 1 — left */}
          <div className="overflow-hidden mb-5">
            <motion.div
              className="flex gap-5 px-5"
              style={{ width: 'max-content' }}
              animate={{ x: ['0%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            >
              {/* doubled for seamless loop */}
              {[...TESTI_ITEMS, ...TESTI_ITEMS].map((_, i) => <TestiCard key={i} />)}
            </motion.div>
          </div>

          {/* Row 2 — right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5 px-5"
              style={{ width: 'max-content' }}
              animate={{ x: ['-100%', '0%'] }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            >
              {[...TESTI_ITEMS, ...TESTI_ITEMS].map((_, i) => <TestiCard key={i} />)}
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
