export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
        padding: 'var(--space-lg) var(--space-md)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--page-max-width)',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'var(--space-sm)',
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: 'var(--text-muted)',
          }}
        >
          COMP 214 &mdash; Human-Computer Interaction
        </span>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          Built for educational purposes
        </span>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          Interactive Course Site
        </span>
      </div>
    </footer>
  );
}
