import { useState } from 'react';
import { motion } from 'framer-motion';

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

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "'Inter', 'Outfit', sans-serif", WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>

      {/* ── Hero + Navbar share the bg1 background ── */}
      <div style={{ backgroundImage: "url('/images/bg1.png')", backgroundSize: 'cover', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', width: '100%' }}>

          {/* ── Navbar ── */}
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 5rem', width: '100%', boxSizing: 'border-box' }}>
            <motion.div variants={fadeIn(0)} initial="hidden" animate="show" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/images/header.png" alt="Calmscious" style={{ height: '48px', objectFit: 'contain' }} />
            </motion.div>
            <motion.div variants={fadeIn(0.1)} initial="hidden" animate="show" style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.95rem', fontWeight: 500, color: '#1A1A1A' }}>
              <a href="#" style={{ color: '#0d9488', borderBottom: '2px solid #0d9488', paddingBottom: '2px' }}>Home</a>
              <a href="#" style={{ color: '#1A1A1A', textDecoration: 'none' }}>About</a>
              <a href="#" style={{ color: '#1A1A1A', textDecoration: 'none' }}>Contact</a>
              <a href="#" style={{ color: '#1A1A1A', textDecoration: 'none' }}>Mental Health Test</a>
              <a href="#" style={{ color: '#1A1A1A', textDecoration: 'none' }}>Blogs</a>
            </motion.div>
            <motion.button variants={fadeIn(0.2)} initial="hidden" animate="show"
              style={{ background: '#2dd4bf', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.5rem 1.5rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer' }}>
              Login
            </motion.button>
          </nav>

          {/* ── Hero ── */}
          <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '7rem 1.5rem 10rem', width: '100%', boxSizing: 'border-box' }}>
            <motion.h1 variants={fadeUp(0.1)} initial="hidden" animate="show"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f1a1a', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '900px' }}>
              Find Relief, Regain Balance,<br />and Feel in Control
            </motion.h1>
            <motion.p variants={fadeUp(0.25)} initial="hidden" animate="show"
              style={{ fontSize: '1.2rem', color: '#2d4a4a', marginTop: '0.5rem', marginBottom: '2.5rem' }}>
              Get the peace of mind you deserve—start today!
            </motion.p>
            <motion.button variants={fadeUp(0.4)} initial="hidden" animate="show"
              style={{ background: '#2dd4bf', color: '#fff', fontSize: '1.1rem', fontWeight: 600, padding: '1rem 3rem', borderRadius: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(45,212,191,0.4)' }}
              whileHover={{ scale: 1.05, filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97 }}>
              Book a session
            </motion.button>
          </section>

      </div>

      <div style={{ width: '100%' }}>

        {/* ── Feeling Lost ── */}
        <section style={{
          backgroundImage: "url('/images/header1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
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
