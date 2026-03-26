import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

function CategoryAssessment({ categories }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="category-assessment"
      className="report-section report-section--assessment"
      aria-labelledby="category-assessment-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Full category read</p>
        <h2 id="category-assessment-title">Category-by-Category Assessment</h2>
      </div>

      <div className="category-stack">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            defaultOpen={!isMobile || index < 2}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoryAssessment;
