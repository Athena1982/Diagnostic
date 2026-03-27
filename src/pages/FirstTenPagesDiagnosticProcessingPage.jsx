import { useEffect, useMemo, useState } from "react";

const preparedItems = [
  {
    title: "Top-Line Summary",
    detail:
      "A concise statement of what the opening is doing to the read overall by page 10.",
  },
  {
    title: "Notable Strengths",
    detail:
      "The strongest early-page qualities the opening is already establishing with clarity and control.",
  },
  {
    title: "Primary Findings",
    detail:
      "Compact headline observations about reader pull, page-10 direction, and where pressure is concentrating or diffusing.",
  },
  {
    title: "Category-by-Category Assessment",
    detail:
      "A structured first-ten-pages evaluation across the report's core diagnostic categories.",
  },
  {
    title: "Next-Step Guidance",
    detail:
      "A restrained closing read on what most usefully deserves attention next, if action is warranted.",
  },
];

const statusItems = [
  {
    label: "Submission logged",
    detail:
      "The screenplay title, writer information, and first-ten-pages packet are recorded for this prototype flow.",
    state: "Received",
    tone: "complete",
  },
  {
    label: "Diagnostic frame established",
    detail:
      "The read is being bounded to the opening only, with the finished return shaped as a first-ten-pages diagnostic rather than coverage.",
    state: "In preparation",
    tone: "active",
  },
  {
    label: "Report structure assembling",
    detail:
      "The finished return is organized as a deliberate document with summary judgment, findings, assessment blocks, and next-step guidance.",
    state: "Queued",
    tone: "pending",
  },
];

const boundaryItems = [
  "First ten pages only.",
  "Not screenplay coverage.",
  "Not coaching.",
  "Not full-script notes.",
];

const methodologyItems = [
  {
    title: "Reader pull",
    detail: "Whether the opening is generating momentum and sustaining the read page by page.",
  },
  {
    title: "Page-10 direction",
    detail:
      "Whether the opening has consolidated into a clear narrative line, is still distributing direction, or remains insufficiently clear.",
  },
  {
    title: "Setup clarity",
    detail:
      "How efficiently the pages establish situation, organizing elements, and the terms of the read.",
  },
  {
    title: "Tonal and structural control",
    detail:
      "How coherently the opening governs tone, emphasis, and character organization across the first ten pages.",
  },
];

function formatReceivedAt(receivedAt) {
  if (!receivedAt) {
    return "Prototype flow";
  }

  const date = new Date(receivedAt);

  if (Number.isNaN(date.getTime())) {
    return "Prototype flow";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function FirstTenPagesDiagnosticProcessingPage({
  canonicalPath,
  onNavigate,
  submissionPath,
}) {
  const [submissionRecord, setSubmissionRecord] = useState(null);

  useEffect(() => {
    const storedRecord = window.localStorage.getItem("ftpd-submission-record");

    if (!storedRecord) {
      return;
    }

    try {
      setSubmissionRecord(JSON.parse(storedRecord));
    } catch {
      setSubmissionRecord(null);
    }
  }, []);

  const receiptMeta = useMemo(
    () => [
      {
        label: "Script",
        value: submissionRecord?.scriptTitle || "Current submission",
      },
      {
        label: "Writer",
        value: submissionRecord?.writerName || "Writer name recorded at submission",
      },
      {
        label: "Format",
        value: submissionRecord?.format || "First-ten-pages screenplay packet",
      },
      {
        label: "Status",
        value: "Preparing diagnostic",
      },
    ],
    [submissionRecord],
  );

  const submissionDetails = useMemo(
    () => [
      {
        label: "Received",
        value: formatReceivedAt(submissionRecord?.receivedAt),
      },
      {
        label: "Genre",
        value: submissionRecord?.genre || "Genre recorded at submission",
      },
      {
        label: "Packet",
        value: submissionRecord?.fileName
          ? `${submissionRecord.fileName}${submissionRecord.fileSizeKb ? ` (${submissionRecord.fileSizeKb} KB)` : ""}`
          : "First-ten-pages PDF",
      },
    ],
    [submissionRecord],
  );

  const jumpToPreparedBlock = () => {
    document
      .getElementById("processing-prepared-title")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app-shell">
      <div className="report-page">
        <header className="report-header processing-header">
          <div className="report-header__intro">
            <p className="report-eyebrow">Screenwriters Online</p>
            <h1>The First Ten Pages Diagnostic</h1>
            <p className="report-subtitle">
              Submission received. The diagnostic is being prepared as a
              structured first-ten-pages report with a restrained, writer-facing
              return.
            </p>
          </div>

          <div className="report-header__meta processing-header__meta">
            {receiptMeta.map((item) => (
              <div className="meta-card" key={item.label}>
                <span className="meta-label">{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="report-header__footnote">
            <span>First ten pages only</span>
            <span>Structured diagnostic in preparation</span>
            <span>{canonicalPath}</span>
          </div>
        </header>

        <div className="submission-layout processing-layout">
          <main className="submission-main processing-main">
            <section
              className="report-section report-section--hero processing-status-section"
              aria-labelledby="processing-status-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Status</p>
                <h2 id="processing-status-title">Submission received</h2>
              </div>

              <div className="processing-status-grid">
                <div className="processing-status-copy">
                  <p className="summary-copy processing-summary-copy">
                    The submission is now in the report-preparation stage. This
                    screen holds the handoff between setup and the finished
                    diagnostic, while keeping the scope bounded to what the
                    opening is doing by page 10.
                  </p>

                  <div className="guidance-card processing-note-card">
                    <h3>Preparation posture</h3>
                    <p>
                      The diagnostic is framed as a deliberate editorial read,
                      not an animated loading state. The emphasis here is on a
                      controlled return: receipt, bounded scope, structured
                      assessment, and a disciplined finished document.
                    </p>
                  </div>
                </div>

                <div className="processing-status-block" aria-label="Processing stages">
                  <div className="processing-status-block__header">
                    <p className="section-kicker">Preparation stack</p>
                    <h3>Current status</h3>
                  </div>

                  <div className="processing-status-stack">
                    {statusItems.map((item) => (
                      <article
                        className={`processing-status-row processing-status-row--${item.tone}`}
                        key={item.label}
                      >
                        <div className="processing-status-row__meta">
                          <h4>{item.label}</h4>
                          <span className="state-pill">{item.state}</span>
                        </div>
                        <p>{item.detail}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section
              className="report-section processing-prepared-section"
              aria-labelledby="processing-prepared-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Return</p>
                <h2 id="processing-prepared-title">What is being prepared</h2>
              </div>

              <div className="submission-return-list" role="list">
                {preparedItems.map((item) => (
                  <article className="submission-return-row" key={item.title} role="listitem">
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="report-section report-section--closing processing-method-section"
              aria-labelledby="processing-boundaries-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Method</p>
                <h2 id="processing-boundaries-title">Scope and procedure</h2>
              </div>

              <div className="processing-detail-grid">
                <div className="subtle-card processing-boundary-card">
                  <h3>Boundaries</h3>
                  <ul className="subordinate-list">
                    {boundaryItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="subtle-card processing-boundary-card">
                  <h3>Procedure</h3>
                  <p>
                    The finished diagnostic is structured around early-page
                    signals such as reader pull, page-10 direction, setup
                    clarity, tonal control, and character organization. The aim
                    is a measured first-ten-pages judgment, not a broad notes
                    document.
                  </p>
                </div>
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

            <section
              className="report-section processing-action-section"
              aria-labelledby="processing-actions-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Actions</p>
                <h2 id="processing-actions-title">Pending state</h2>
              </div>

              <div className="submission-action-area processing-action-area">
                <div>
                  <button className="primary-action" type="button" disabled>
                    Diagnostic in preparation
                  </button>
                  <p className="submission-support">
                    This UI-only pass does not simulate backend progress,
                    delivery timing, or file processing states.
                  </p>
                </div>

                <div className="processing-secondary-actions">
                  <button className="quiet-button" type="button" onClick={jumpToPreparedBlock}>
                    View report structure
                  </button>
                  <button
                    className="quiet-button"
                    type="button"
                    onClick={() => onNavigate(submissionPath)}
                  >
                    Return to submission
                  </button>
                </div>
              </div>
            </section>
          </main>

          <aside className="report-rail">
            <div className="rail-stack">
              <section className="side-panel">
                <div className="side-panel__header">
                  <p className="side-panel__eyebrow">Receipt</p>
                  <h2>Submission record</h2>
                </div>

                <dl className="snapshot-list">
                  {submissionDetails.map((item) => (
                    <div className="snapshot-row" key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="side-panel">
                <div className="side-panel__header">
                  <p className="side-panel__eyebrow">Scope</p>
                  <h2>Opening-only lens</h2>
                </div>

                <ul className="subordinate-list">
                  <li>The read is bounded to the first ten pages only.</li>
                  <li>The finished return is structured and diagnostic.</li>
                  <li>The product remains distinct from coverage and coaching.</li>
                </ul>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default FirstTenPagesDiagnosticProcessingPage;
