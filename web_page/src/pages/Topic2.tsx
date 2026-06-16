import { motion } from 'framer-motion';
import { ExternalLink, Layout, Layers, Users } from 'lucide-react';
import TopicPage, { fadeUp } from '../components/TopicPage';

const categories = [
  {
    icon: Layout,
    name: 'Wireframing',
    description: 'Low-fidelity tools for quickly sketching layout ideas and information architecture. Examples include Balsamiq and Whimsical.',
  },
  {
    icon: Layers,
    name: 'Prototyping',
    description: 'High-fidelity tools for creating interactive mockups with transitions and animations. Figma and Adobe XD lead this space.',
  },
  {
    icon: Users,
    name: 'User Testing',
    description: 'Platforms for gathering feedback from real users through remote testing sessions and surveys.',
  },
];

export default function Topic2() {
  return (
    <TopicPage
      label="TOPIC 2"
      title="Interface Design Tools"
      subtitle="Discover the essential toolkit for designing modern user interfaces, from initial sketches to interactive prototypes."
      heroImage="/images/topic2-hero.jpg"
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
        Interface design tools are the software applications used to create, prototype, and test user interfaces. These tools range from simple sketching applications to sophisticated collaborative platforms that support the entire design workflow.
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
        Design Tool Categories
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-md)',
          marginBottom: 'var(--space-lg)',
        }}
      >
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.name}
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
              <Icon size={28} color="var(--accent-color)" style={{ marginBottom: 'var(--space-sm)' }} />
              <h3
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {cat.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {cat.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <a
          href="https://www.figma.com/design/"
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
          Explore Figma design tools <ExternalLink size={16} />
        </a>
      </motion.div>
    </TopicPage>
  );
}
