import { useEffect, useState } from "react";

function CategoryCard({ category, defaultOpen, isMobile }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  const contentId = `${category.id}-content`;

  return (
    <article
      className={`category-card${category.emphasis ? " category-card--emphasis" : ""}`}
    >
      <button
        type="button"
        className="category-card__header"
        onClick={() => {
          if (isMobile) {
            setIsOpen((current) => !current);
          }
        }}
        aria-expanded={isMobile ? isOpen : true}
        aria-controls={contentId}
      >
        <div>
          <h3>{category.title}</h3>
          <p>{category.judgment}</p>
        </div>
        <div className="category-card__meta">
          <span
            className={`state-pill${category.emphasis ? " state-pill--emphasis" : ""}`}
          >
            {category.state}
          </span>
          <span className="category-card__toggle" aria-hidden="true">
            {isMobile ? (isOpen ? "−" : "+") : "Section"}
          </span>
        </div>
      </button>

      {isOpen || !isMobile ? (
        <div id={contentId} className="category-card__body">
          <div className="category-card__block">
            <span className="category-card__label">Judgment</span>
            <p>{category.judgment}</p>
          </div>
          <div className="category-card__block">
            <span className="category-card__label">Assessment</span>
            <p>{category.analysis}</p>
          </div>

          {category.evidenceNote ? (
            <div className="evidence-note">
              <span className="category-card__label">Evidence note</span>
              <p>{category.evidenceNote}</p>
            </div>
          ) : null}

          <div className="category-card__effect">
            <span className="category-card__label">Reader effect</span>
            <p>{category.readerEffect}</p>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default CategoryCard;
