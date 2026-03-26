function AssessmentSnapshot({ snapshot }) {
  return (
    <section className="side-panel" aria-labelledby="assessment-snapshot-title">
      <div className="side-panel__header">
        <p className="side-panel__eyebrow">Assessment snapshot</p>
        <h2 id="assessment-snapshot-title">At a glance</h2>
      </div>

      <dl className="snapshot-list">
        {snapshot.map((item) => (
          <div key={item.label} className="snapshot-row">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default AssessmentSnapshot;
