import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import TopicPage, { fadeUp } from '../components/TopicPage';

const methods = [
  {
    title: 'Usability Testing',
    content: 'Observing real users as they attempt to complete tasks with an interface. Metrics include task success rate, time on task, error rate, and user satisfaction scores.',
  },
  {
    title: 'Heuristic Evaluation',
    content: "Expert reviewers inspect an interface against established usability principles (heuristics). Jakob Nielsen's 10 usability heuristics are the most widely used framework.",
  },
  {
    title: 'Cognitive Walkthrough',
    content: "Simulating a user's problem-solving process at each step to identify cognitive barriers and confusion points in the interface.",
  },
  {
    title: 'A/B Testing',
    content: 'Comparing two versions of an interface to determine which performs better on specific metrics like conversion rate or engagement.',
  },
];

export default function Topic3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <TopicPage
      label="TOPIC 3"
      title="Evaluating Interfaces"
      subtitle="Learn systematic approaches to assessing the usability and effectiveness of user interfaces through proven evaluation methods."
      heroImage="/images/topic3-hero.jpg"
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
        Evaluating interfaces is a critical step in the design process. It involves systematically assessing how well a user interface supports users in accomplishing their goals. Various methods exist, from expert-based inspections to empirical user testing.
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
        Key Evaluation Methods
      </motion.h2>

      <div style={{ marginBottom: 'var(--space-lg)' }}>
        {methods.map((method, index) => (
          <motion.div
            key={method.title}
            custom={index + 2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              borderBottom: '1px solid var(--border-color)',
              padding: 'var(--space-sm) 0',
            }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem 0',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '1.0625rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}
              >
                {method.title}
              </span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ChevronDown size={20} color="var(--text-secondary)" />
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      paddingTop: 'var(--space-sm)',
                      paddingBottom: '0.5rem',
                    }}
                  >
                    {method.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
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
          href="https://www.nngroup.com/articles/ten-usability-heuristics/"
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
          Learn about Nielsen's heuristics <ExternalLink size={16} />
        </a>
      </motion.div>
    </TopicPage>
  );
}
