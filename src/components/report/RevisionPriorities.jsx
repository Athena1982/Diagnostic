function RevisionPriorities({ priorities }) {
  return (
    <section
      id="revision-priorities"
      className="report-section report-section--priorities"
      aria-labelledby="revision-priorities-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Action order</p>
        <h2 id="revision-priorities-title">Revision Priorities</h2>
      </div>

      <ol className="ordered-list">
        {priorities.map((priority, index) => (
          <li key={priority}>
            <span className="ordered-list__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>{priority}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default RevisionPriorities;
