function TechnicalFlags({ flags }) {
  return (
    <section
      id="technical-flags"
      className="report-section report-section--subordinate"
      aria-labelledby="technical-flags-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Technical watchpoints</p>
        <h2 id="technical-flags-title">Technical Flags</h2>
      </div>

      <div className="flag-stack">
        {flags.map((flag) => (
          <article key={flag.title} className="flag-row">
            <h3>{flag.title}</h3>
            <p>{flag.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechnicalFlags;
