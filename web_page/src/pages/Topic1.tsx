import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TopicPage, { fadeUp } from '../components/TopicPage';

const milestones = [
  { year: '1968', text: "Douglas Engelbart demonstrates the computer mouse and interactive computing at 'The Mother of All Demos'" },
  { year: '1973', text: 'Xerox Alto becomes the first computer with a graphical user interface (GUI)' },
  { year: '1984', text: 'Apple Macintosh brings GUIs to the mainstream consumer market' },
  { year: '2007', text: 'Apple iPhone launches the multi-touch mobile revolution' },
];

export default function Topic1() {
  return (
    <TopicPage
      label="TOPIC 1"
      title="Introduction to HCI"
      subtitle="Explore the history and foundations of human-computer interaction, from early computing devices to modern touch-based interfaces."
      heroImage="/images/topic1-hero.jpg"
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
        This topic covers the history of human-computer interaction, from punch cards to modern touch interfaces. Key milestones include the invention of the mouse by Douglas Engelbart in 1968, the first GUI by Xerox Alto, and the mobile revolution led by the iPhone.
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
        Key Milestones
      </motion.h2>

      <div
        style={{
          borderLeft: '3px solid var(--accent-light)',
          paddingLeft: 'var(--space-md)',
          marginBottom: 'var(--space-lg)',
        }}
      >
        {milestones.map((m, index) => (
          <motion.div
            key={m.year}
            custom={index + 2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              marginBottom: index < milestones.length - 1 ? 'var(--space-md)' : 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--accent-color)',
                marginRight: '0.5rem',
              }}
            >
              {m.year}
            </span>
            <span
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              &mdash; {m.text}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        custom={6}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <a
          href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"
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
          Learn more about HCI history <ExternalLink size={16} />
        </a>
      </motion.div>
    </TopicPage>
  );
}
