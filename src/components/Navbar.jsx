import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Navbar = forwardRef(function Navbar({ isLoaded }, logoRef) {
  return (
    <nav style={{
      position: 'relative', zIndex: 10,
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem 5rem',
      width: '100%', boxSizing: 'border-box',
    }}>
      {/*
        Slot logo — opacity:0 + visibility:hidden by default.
        App.jsx imperatively sets both to visible/1 the instant
        the flying logo settles, BEFORE unmounting it.
        This guarantees zero blink — slot is painted before flying logo leaves.
      */}
      <img
        ref={logoRef}
        src="/images/cropped-Calmscious 1.png"
        alt="Calmscious"
        style={{
          height: '44px',
          width: 'auto',
          objectFit: 'contain',
          flexShrink: 0,
          opacity: 0,
          visibility: 'hidden',
        }}
      />

      {/* Nav links — fade in the moment isLoaded fires (no extra delay) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.95rem', fontWeight: 500 }}
      >
        <a href="#" style={{ color: '#0d9488', borderBottom: '2px solid #0d9488', paddingBottom: '2px', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: '#1A1A1A', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: '#1A1A1A', textDecoration: 'none' }}>Contact</a>
        <a href="#" style={{ color: '#1A1A1A', textDecoration: 'none' }}>Mental Health Test</a>
        <a href="#" style={{ color: '#1A1A1A', textDecoration: 'none' }}>Blogs</a>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: '#2dd4bf', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.5rem 1.5rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer' }}
      >
        Login
      </motion.button>
    </nav>
  );
});

export default Navbar;
