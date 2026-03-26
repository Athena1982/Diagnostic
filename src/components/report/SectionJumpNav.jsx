function SectionJumpNav({ sections }) {
  return (
    <nav className="side-panel" aria-labelledby="jump-nav-title">
      <div className="side-panel__header">
        <p className="side-panel__eyebrow">Jump navigation</p>
        <h2 id="jump-nav-title">Sections</h2>
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
