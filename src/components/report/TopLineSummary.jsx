function TopLineSummary({ summary }) {
  return (
    <section
      id="top-line-summary"
      className="report-section report-section--hero"
      aria-labelledby="top-line-summary-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Executive read</p>
        <h2 id="top-line-summary-title">Top-Line Summary</h2>
      </div>
      <p className="summary-copy">{summary}</p>
    </section>
  );
}

export default TopLineSummary;
