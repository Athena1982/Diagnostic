function NextStepGuidance({ guidance }) {
  return (
    <section
      id="next-step-guidance"
      className="report-section report-section--closing"
      aria-labelledby="next-step-guidance-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Procedural next pass</p>
        <h2 id="next-step-guidance-title">Next-Step Guidance</h2>
      </div>

      <div className="guidance-stack">
        {guidance.map((item) => (
          <article key={item.title} className="guidance-card">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NextStepGuidance;
