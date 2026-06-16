import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TopicPage, { fadeUp } from '../components/TopicPage';

const technologies = [
  {
    name: 'HTML',
    description: 'The structural foundation of web pages. Semantic HTML ensures content is meaningful and accessible to all users, including those using assistive technologies.',
    badge: 'Structure',
  },
  {
    name: 'CSS',
    description: 'Controls the visual presentation and layout. Modern CSS includes Flexbox, Grid, animations, and responsive design capabilities.',
    badge: 'Presentation',
  },
  {
    name: 'JavaScript',
    description: 'Adds interactivity and dynamic behavior. Frameworks like React, Vue, and Angular extend its capabilities for building complex applications.',
    badge: 'Behavior',
  },
];

export default function Topic4() {
  return (
    <TopicPage
      label="TOPIC 4"
      title="Web & Programming"
      subtitle="Understanding the technical foundations behind interactive web experiences and how programming enables dynamic user interfaces."
      heroImage="/images/topic4-hero.jpg"
    >
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '1.0625rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: 'var(--space-lg)',
        }}
      >
        Web development and programming form the backbone of modern interactive interfaces. This topic explores how HTML, CSS, and JavaScript work together to create responsive, accessible, and engaging web experiences.
      </motion.p>

      <motion.h2
        custom={1}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: 'var(--space-md)',
          lineHeight: 1.2,
        }}
      >
        Core Web Technologies
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-md)',
          marginBottom: 'var(--space-lg)',
        }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            custom={index + 2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: 'var(--space-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <h3
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {tech.name}
              </h3>
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  backgroundColor: 'var(--accent-light)',
                  color: 'var(--accent-color)',
                  borderRadius: '4px',
                  padding: '2px 8px',
                }}
              >
                {tech.badge}
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}
            >
              {tech.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <a
          href="https://developer.mozilla.org/en-US/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--accent-color)',
            color: '#FFFFFF',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '0.875rem',
            fontWeight: 500,
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all var(--duration-fast) var(--ease-smooth)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-color)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Explore MDN Web Docs <ExternalLink size={16} />
        </a>
      </motion.div>
    </TopicPage>
  );
}
