import { useRef, useState } from "react";

const returnItems = [
  {
    title: "Top-Line Summary",
    detail:
      "A concise opening read that states what the first ten pages are doing to the read overall.",
  },
  {
    title: "Primary Findings",
    detail:
      "Headline observations about reader pull, directional clarity, and where the opening is applying or diffusing pressure.",
  },
  {
    title: "Category Assessment",
    detail:
      "A structured breakdown aligned to the report logic used on the diagnostic page itself.",
  },
];

const methodologyItems = [
  {
    title: "Focused read window",
    detail:
      "This diagnostic evaluates the screenplay as an opening instrument. The read is bounded to the first ten pages and calibrated to what has consolidated by page 10.",
  },
  {
    title: "Writer-facing, not workshop-facing",
    detail:
      "The report is designed to be precise and usable without drifting into broad development coaching or general note-giving.",
  },
  {
    title: "Productized structure",
    detail:
      "The return is disciplined and repeatable: summary judgment, findings, category-level assessment, and next-step priorities where warranted.",
  },
];

const nextStepItems = [
  "Submit the title, writer, format, genre, and a single PDF containing the first ten screenplay pages.",
  "The material is then positioned for a first-ten-pages-only read using the same diagnostic framework reflected on the report screen.",
  "This UI prototype records the setup locally only. Live file handling and delivery workflow are intentionally not connected in this pass.",
];

function FirstTenPagesDiagnosticSubmissionPage({ canonicalPath }) {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [hasPreparedSubmission, setHasPreparedSubmission] = useState(false);
  const [formValues, setFormValues] = useState({
    scriptTitle: "",
    writerName: "",
    format: "Feature",
    genre: "",
    email: "",
    context: "",
  });

  const isSubmissionReady =
    formValues.scriptTitle.trim() &&
    formValues.writerName.trim() &&
    formValues.genre.trim() &&
    selectedFile;

  const handleFieldChange = ({ target }) => {
    const { name, value } = target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleFileSelect = ({ target }) => {
    const nextFile = target.files?.[0] ?? null;
    setSelectedFile(nextFile);
    setHasPreparedSubmission(false);
  };

  const handlePrepareSubmission = (event) => {
    event.preventDefault();

    if (!isSubmissionReady) {
      return;
    }

    setHasPreparedSubmission(true);
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="app-shell">
      <div className="report-page">
        <header className="report-header submission-header">
          <div className="report-header__intro">
            <p className="report-eyebrow">Screenwriters Online</p>
            <h1>The First Ten Pages Diagnostic</h1>
            <p className="report-subtitle">
              A premium first-ten-pages evaluation designed to assess how the
              opening is reading by page 10: what is pulling, what is
              consolidating, and where the screenplay is already applying or
              diffusing pressure.
            </p>
          </div>

          <div className="report-header__meta submission-header__meta">
            <div className="meta-card">
              <span className="meta-label">Scope</span>
              <strong>First ten pages only</strong>
            </div>
            <div className="meta-card">
              <span className="meta-label">Return</span>
              <strong>Structured diagnostic report</strong>
            </div>
            <div className="meta-card">
              <span className="meta-label">Read lens</span>
              <strong>Early-page evaluation</strong>
            </div>
            <div className="meta-card">
              <span className="meta-label">Posture</span>
              <strong>Writer-facing and restrained</strong>
            </div>
          </div>

          <div className="report-header__footnote">
            <span>Not screenplay coverage</span>
            <span>Not coaching</span>
            <span>Not full-script notes</span>
            <span>{canonicalPath}</span>
          </div>
        </header>

        <div className="submission-layout">
          <main className="submission-main">
            <section
              className="report-section report-section--hero submission-intro-section"
              aria-labelledby="submission-scope-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Scope</p>
                <h2 id="submission-scope-title">Opening Diagnostic</h2>
              </div>

              <div className="submission-hero-grid">
                <p className="summary-copy submission-summary-copy">
                  A focused evaluation of how the opening is reading by page 10:
                  reader pull, directional clarity, character organization, and
                  whether the pages are consolidating into a meaningful line of
                  movement.
                </p>

                <div className="subtle-card submission-boundary-card">
                  <h3>Boundaries</h3>
                  <ul className="subordinate-list">
                    <li>Not screenplay coverage or a broad notes document.</li>
                    <li>Not coaching or an open-ended development pass.</li>
                    <li>Not a substitute for full-script evaluation.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              className="report-section submission-form-section"
              aria-labelledby="submission-materials-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Submission</p>
                <h2 id="submission-materials-title">Submission Materials</h2>
              </div>

              <form className="submission-form" onSubmit={handlePrepareSubmission}>
                <div className="submission-form-grid">
                  <div className="field-group">
                    <label htmlFor="scriptTitle">Script title</label>
                    <input
                      id="scriptTitle"
                      name="scriptTitle"
                      type="text"
                      placeholder="The Long Midwinter"
                      value={formValues.scriptTitle}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="field-group">
                    <label htmlFor="writerName">Writer name</label>
                    <input
                      id="writerName"
                      name="writerName"
                      type="text"
                      placeholder="Avery Rhodes"
                      value={formValues.writerName}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="field-group">
                    <label htmlFor="format">Format</label>
                    <select
                      id="format"
                      name="format"
                      value={formValues.format}
                      onChange={handleFieldChange}
                    >
                      <option value="Feature">Feature</option>
                      <option value="Pilot">Pilot</option>
                    </select>
                  </div>

                  <div className="field-group">
                    <label htmlFor="genre">Genre</label>
                    <input
                      id="genre"
                      name="genre"
                      type="text"
                      placeholder="Psychological drama"
                      value={formValues.genre}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="field-group field-group--full">
                    <label htmlFor="pagesUpload">Upload first ten pages</label>
                    <div className="upload-panel">
                      <input
                        ref={fileInputRef}
                        id="pagesUpload"
                        name="pagesUpload"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileSelect}
                      />

                      <div className="upload-panel__body">
                        <div className="upload-panel__copy">
                          <strong>Attach a single PDF containing pages 1-10.</strong>
                          <p>
                            The upload surface is intentionally limited to the
                            material required for this diagnostic.
                          </p>
                        </div>

                        <button
                          className="quiet-button"
                          type="button"
                          onClick={openFilePicker}
                        >
                          {selectedFile ? "Replace file" : "Choose PDF"}
                        </button>
                      </div>

                      <div className="upload-panel__meta">
                        <span>Accepted format: PDF</span>
                        <span>Screenplay pages only</span>
                      </div>

                      {selectedFile ? (
                        <div className="upload-file-chip" aria-live="polite">
                          <span>{selectedFile.name}</span>
                          <span>{Math.max(selectedFile.size / 1024, 1).toFixed(0)} KB</span>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="field-group">
                    <label htmlFor="email">Email (optional)</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="avery@writerstudio.com"
                      value={formValues.email}
                      onChange={handleFieldChange}
                    />
                  </div>

                  <div className="field-group field-group--full">
                    <label htmlFor="context">Administrative note (optional)</label>
                    <textarea
                      id="context"
                      name="context"
                      placeholder="Optional administrative context, such as pilot length, alternate contact detail, or a brief submission note."
                      value={formValues.context}
                      onChange={handleFieldChange}
                    />
                    <p className="field-note">
                      Keep this brief and factual. This field is not intended
                      for developmental questions or note requests.
                    </p>
                  </div>
                </div>

                <div className="submission-action-area">
                  <div>
                    <button
                      className="primary-action"
                      type="submit"
                      disabled={!isSubmissionReady}
                    >
                      Prepare Diagnostic Submission
                    </button>
                    <p className="submission-support">
                      This pass is UI-only. Preparing the submission records the
                      setup state locally and does not transmit files.
                    </p>
                  </div>
                </div>

                {hasPreparedSubmission ? (
                  <div className="guidance-card submission-confirmation" aria-live="polite">
                    <h3>Submission package prepared</h3>
                    <p>
                      The title, writer, format, genre, and first-ten-pages PDF
                      have been captured for the prototype flow. Backend intake,
                      confirmation delivery, and report fulfillment remain
                      intentionally out of scope for this pass.
                    </p>
                  </div>
                ) : null}
              </form>
            </section>

            <section
              className="report-section report-section--closing submission-methodology-section"
              aria-labelledby="methodology-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Methodology</p>
                <h2 id="methodology-title">What the Report Returns</h2>
              </div>

              <div className="submission-return-list" role="list">
                {returnItems.map((item) => (
                  <article className="submission-return-row" key={item.title} role="listitem">
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>

              <div className="submission-methodology-list" role="list">
                {methodologyItems.map((item) => (
                  <article
                    className="submission-methodology-row"
                    key={item.title}
                    role="listitem"
                  >
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>
          </main>

          <aside className="report-rail">
            <div className="rail-stack">
              <section className="side-panel">
                <div className="side-panel__header">
                  <p className="side-panel__eyebrow">Report structure</p>
                  <h2>Return profile</h2>
                </div>
                <div className="guidance-stack side-panel__stack">
                  {returnItems.map((item) => (
                    <article className="row-card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="side-panel">
                <div className="side-panel__header">
                  <p className="side-panel__eyebrow">Trust</p>
                  <h2>What Happens Next</h2>
                </div>
                <ul className="subordinate-list submission-next-steps">
                  {nextStepItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default FirstTenPagesDiagnosticSubmissionPage;
