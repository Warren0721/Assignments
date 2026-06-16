import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const galleryItems = [
  { src: '/images/gallery-xerox.jpg', caption: 'Figure 1: Early GUI — Xerox Alto' },
  { src: '/images/gallery-mouse.jpg', caption: "Figure 2: Douglas Engelbart's Mouse Prototype, 1968" },
  { src: '/images/gallery-iphone.jpg', caption: 'Figure 3: Modern Touch Interface — iPhone' },
  { src: '/images/gallery-timeline.jpg', caption: 'Figure 4: Timeline of HCI Milestones' },
  { src: '/images/gallery-figma.jpg', caption: 'Figure 5: Interface Design in Figma' },
  { src: '/images/gallery-google-earth.jpg', caption: 'Figure 6: Google Earth Interface Analysis' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  }, [lightboxIndex]);
  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'calc(var(--nav-height) + var(--space-lg))',
          paddingBottom: 'var(--space-lg)',
          paddingLeft: 'var(--space-md)',
          paddingRight: 'var(--space-md)',
        }}
      >
        <div style={{ maxWidth: 'var(--page-max-width)', margin: '0 auto' }}>
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              display: 'block',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'var(--accent-color)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              marginBottom: 'var(--space-sm)',
            }}
          >
            GALLERY
          </motion.span>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: 'var(--space-sm)',
            }}
          >
            Image Gallery
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '640px',
            }}
          >
            A collection of course-related screenshots and visual artifacts from assignments and topic explorations.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: 'var(--space-xl) var(--space-md)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--page-max-width)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--space-md)',
          }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button
                onClick={() => setLightboxIndex(index)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    position: 'relative',
                  }}
                >
                  <motion.img
                    src={item.src}
                    alt={item.caption}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(44, 36, 32, 0.5), transparent)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    paddingTop: 'var(--space-xs)',
                  }}
                >
                  {item.caption}
                </p>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              backgroundColor: 'rgba(247, 243, 238, 0.95)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: '#FFFFFF',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                zIndex: 10,
              }}
              aria-label="Close lightbox"
            >
              <X size={20} color="var(--text-primary)" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              style={{
                position: 'absolute',
                left: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#FFFFFF',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                zIndex: 10,
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} color="var(--text-primary)" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              style={{
                position: 'absolute',
                right: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#FFFFFF',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                zIndex: 10,
              }}
              aria-label="Next image"
            >
              <ChevronRight size={20} color="var(--text-primary)" />
            </button>

            {/* Image container */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'default',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].caption}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 20px 60px rgba(44, 36, 32, 0.15)',
                }}
              />
              <p
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  marginTop: 'var(--space-sm)',
                  textAlign: 'center',
                }}
              >
                {galleryItems[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
