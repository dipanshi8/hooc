import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useState } from 'react';

const Navbar = forwardRef(function Navbar({ isLoaded }, logoRef) {
  const [isLoginOverlayOpen, setIsLoginOverlayOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Mental Health Test', href: '#mental-health-test' },
    { label: 'Blogs', href: '#blogs' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent">
      <AnimatePresence>
        {isLoginOverlayOpen ? (
          <motion.div
            key="login-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.43, -0.01, 0.14, 1] }}
            className="fixed inset-0 z-[60]"
          >
            <button
              type="button"
              aria-label="Close login overlay"
              onClick={() => setIsLoginOverlayOpen(false)}
              className="absolute inset-0 cursor-default bg-white/95"
            />
            <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center px-6">
              <div className="w-full max-w-xl rounded-2xl border border-black/10 bg-white p-6 shadow-2xl shadow-black/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-nunito text-2xl font-semibold text-slate-900">Frame 2</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Replace this overlay content with your login screen.
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsLoginOverlayOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="relative z-20 mx-auto flex min-h-[135px] w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 items-center">
          {/* Slot logo — kept hidden until App.jsx unlocks it */}
          <img
            ref={logoRef}
            src="/images/cropped-Calmscious 1.png"
            alt="Calmscious"
            className="invisible h-[81px] w-[257px] flex-shrink-0 select-none opacity-0"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -4 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="hidden flex-1 justify-center md:flex"
        >
          <div className="flex h-[56px] w-[548px] items-center justify-center gap-6 px-[18px] py-3 font-noto text-[20px] font-normal leading-[31.38px]">
            {navLinks.map((l) => {
              const isActive = l.label === 'Home';
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className={[
                    'group relative whitespace-nowrap text-[#1F2A3A] transition-colors duration-200 hover:text-[#1ECAD3]',
                    isActive ? 'text-[#1ECAD3]' : '',
                  ].join(' ')}
                >
                  {l.label}
                  <span
                    className={[
                      'pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#1ECAD3] transition-transform duration-200',
                      isActive ? 'scale-x-100' : 'origin-left scale-x-0 group-hover:scale-x-100',
                    ].join(' ')}
                  />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -4 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative flex flex-shrink-0 items-center"
        >
          <motion.button
            type="button"
            onClick={() => setIsLoginOverlayOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex h-[68px] w-[117px] items-center justify-center gap-[10px] rounded-[16px] bg-[#1ECAD3] px-[18px] py-3 text-white shadow-sm shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-[#1ECAD3]/40 focus:ring-offset-2"
          >
            <span className="h-[44px] w-[81px] text-center font-nunito text-[32px] font-semibold leading-none text-white">
              Login
            </span>
          </motion.button>
        </motion.div>
      </div>
    </nav>
  );
});

export default Navbar;
