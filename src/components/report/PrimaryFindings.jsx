function PrimaryFindings({ findings }) {
  return (
    <section
      id="primary-findings"
      className="report-section report-section--findings"
      aria-labelledby="primary-findings-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Headline findings</p>
        <h2 id="primary-findings-title">Primary Findings</h2>
      </div>

      <ul className="headline-list">
        {findings.map((finding) => (
          <li key={finding}>{finding}</li>
        ))}
      </ul>
    </section>
  );
}

export default PrimaryFindings;
