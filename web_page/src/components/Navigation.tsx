import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Topic 1', path: '/topic-1' },
  { label: 'Topic 2', path: '/topic-2' },
  { label: 'Topic 3', path: '/topic-3' },
  { label: 'Topic 4', path: '/topic-4' },
  { label: 'Gallery', path: '/gallery' },
];

export default function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 'var(--nav-height)',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--page-max-width)',
            margin: '0 auto',
            padding: '0 var(--space-md)',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--accent-color)',
              textDecoration: 'none',
            }}
          >
            COMP 214
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ gap: 'var(--space-sm)', alignItems: 'center' }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--accent-color)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: '0.5rem 0.75rem',
                    borderBottom: isActive ? '2px solid var(--accent-color)' : '2px solid transparent',
                    transition: 'color var(--duration-fast) var(--ease-smooth), border-color var(--duration-fast) var(--ease-smooth)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--accent-color)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
            aria-label="Open menu"
          >
            <Menu size={24} color="var(--text-primary)" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'rgba(247, 243, 238, 0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-md)',
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
              }}
              aria-label="Close menu"
            >
              <X size={28} color="var(--text-primary)" />
            </button>

            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1, duration: 0.3, ease: "easeOut" }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: isActive ? 'var(--accent-color)' : 'var(--text-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
