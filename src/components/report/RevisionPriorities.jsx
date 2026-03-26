function RevisionPriorities({ priorities }) {
  return (
    <section
      id="revision-priorities"
      className="report-section"
      aria-labelledby="revision-priorities-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Action order</p>
        <h2 id="revision-priorities-title">Revision Priorities</h2>
      </div>

      <ol className="ordered-list">
        {priorities.map((priority) => (
          <li key={priority}>{priority}</li>
        ))}
      </ol>
    </section>
  );
}

export default RevisionPriorities;
