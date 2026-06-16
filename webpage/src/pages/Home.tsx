import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const topics = [
  {
    number: 'Topic 1',
    title: 'Introduction to HCI',
    description:
      'Explore the evolution of human-computer interaction from punch cards to modern touch interfaces. Discover key milestones including Douglas Engelbart\'s mouse invention and the Xerox Alto GUI.',
    path: '/topic-1',
  },
  {
    number: 'Topic 2',
    title: 'Interface Design Tools',
    description:
      'Learn about the essential tools and software used in designing user interfaces, from wireframing to prototyping and user testing platforms.',
    path: '/topic-2',
  },
  {
    number: 'Topic 3',
    title: 'Evaluating Interfaces',
    description:
      'Understand the methods and frameworks for evaluating user interfaces, including usability testing, heuristic evaluation, and user feedback collection.',
    path: '/topic-3',
  },
  {
    number: 'Topic 4',
    title: 'Web & Programming',
    description:
      'Dive into web development fundamentals, programming concepts, and how they relate to creating interactive and accessible user experiences.',
    path: '/topic-4',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'calc(var(--nav-height) + var(--space-xl))',
          paddingBottom: 'var(--space-lg)',
          paddingLeft: 'var(--space-md)',
          paddingRight: 'var(--space-md)',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
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
            COMP 214 COURSE SITE
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
              marginBottom: 'var(--space-md)',
            }}
          >
            Welcome to My COMP 214 Interactive Site
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
            }}
          >
            This site contains links to relevant websites on major topic areas from the course. Use the navigation menu to explore each topic and learn more through the provided links.
          </motion.p>
        </div>
      </section>

      {/* Topic Overview Cards */}
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--space-md)',
          }}
        >
          {topics.map((topic, index) => (
            <motion.div
              key={topic.number}
              custom={index + 3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -4,
                boxShadow: '0 12px 40px rgba(44, 36, 32, 0.08)',
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Link
                to={topic.path}
                style={{
                  display: 'block',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: 'var(--space-lg)',
                  textDecoration: 'none',
                  transition: 'border-color var(--duration-normal) var(--ease-smooth)',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: 'var(--accent-color)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase' as const,
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  {topic.number}
                </span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-sm)',
                    lineHeight: 1.2,
                  }}
                >
                  {topic.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  {topic.description}
                </p>
                <span
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--accent-color)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  Explore <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
