function CoreWeaknesses({ weaknesses }) {
  return (
    <section
      id="core-weaknesses"
      className="report-section report-section--rows"
      aria-labelledby="core-weaknesses-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Material pressures on the read</p>
        <h2 id="core-weaknesses-title">Core Weaknesses / Risk Areas</h2>
      </div>

      <div className="row-stack">
        {weaknesses.map((weakness) => (
          <article key={weakness.title} className="row-card">
            <h3>{weakness.title}</h3>
            <p>{weakness.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CoreWeaknesses;
