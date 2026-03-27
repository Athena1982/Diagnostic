function SectionJumpNav({
  sections,
  eyebrow = "Report navigation",
  title = "Jump to",
  titleId = "jump-nav-title",
}) {
  return (
    <nav className="side-panel side-panel--nav" aria-labelledby={titleId}>
      <div className="side-panel__header">
        <p className="side-panel__eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
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
