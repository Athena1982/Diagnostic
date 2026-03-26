function NotableStrengths({ strengths }) {
  return (
    <section
      id="notable-strengths"
      className="report-section"
      aria-labelledby="notable-strengths-title"
    >
      <div className="section-heading">
        <p className="section-kicker">What is materially helping the read</p>
        <h2 id="notable-strengths-title">Notable Strengths</h2>
      </div>

      <div className="strength-grid">
        {strengths.map((strength) => (
          <article key={strength.title} className="mini-card">
            <h3>{strength.title}</h3>
            <p>{strength.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NotableStrengths;
