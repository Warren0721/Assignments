import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Layout from './Layout';

interface TopicPageProps {
  label: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  children: ReactNode;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function TopicPage({ label, title, subtitle, heroImage, children }: TopicPageProps) {
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
          {heroImage && (
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: 'var(--space-lg)',
              }}
            >
              <img
                src={heroImage}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          )}
          <div style={{ maxWidth: '720px' }}>
            <motion.span
              custom={1}
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
              {label}
            </motion.span>
            <motion.h1
              custom={2}
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
              {title}
            </motion.h1>
            <motion.p
              custom={3}
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
              {subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
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
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            {children}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export { fadeUp };
