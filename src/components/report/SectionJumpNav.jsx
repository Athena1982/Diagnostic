function SectionJumpNav({ sections }) {
  return (
    <nav className="side-panel side-panel--nav" aria-labelledby="jump-nav-title">
      <div className="side-panel__header">
        <p className="side-panel__eyebrow">Report navigation</p>
        <h2 id="jump-nav-title">Jump to</h2>
      </div>

      <ul className="jump-nav">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SectionJumpNav;
