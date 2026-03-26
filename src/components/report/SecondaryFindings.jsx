function SecondaryFindings({ findings }) {
  return (
    <section
      id="secondary-findings"
      className="report-section report-section--subordinate"
      aria-labelledby="secondary-findings-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Supporting observations</p>
        <h2 id="secondary-findings-title">Secondary Findings</h2>
      </div>

      <ul className="subordinate-list">
        {findings.map((finding) => (
          <li key={finding}>{finding}</li>
        ))}
      </ul>
    </section>
  );
}

export default SecondaryFindings;
