import SectionJumpNav from "../components/report/SectionJumpNav";

const signalGroups = [
  {
    title: "Reader movement",
    detail:
      "The opening is read as a pressure system: whether the pages generate pull, sustain momentum, and consolidate into a meaningful line of movement by page 10.",
    signals: ["Reader pull", "Page-10 direction", "Setup and organizing clarity"],
  },
  {
    title: "Tonal and world authority",
    detail:
      "The report reads for whether the screenplay establishes its tonal terms cleanly and gives the reader a usable sense of the world it is asking them to enter.",
    signals: ["Tone, mood, and genre clarity", "World and setting clarity", "Control of emphasis"],
  },
  {
    title: "Character legibility",
    detail:
      "The instrument tracks how the opening introduces people, assigns attention, and creates enough reader care to make the unfolding line worth following.",
    signals: [
      "Character introduction",
      "Empathy and reader care",
      "Goals, motivations, obstacles, and stakes",
    ],
  },
  {
    title: "Page execution",
    detail:
      "The read also accounts for how the pages are being delivered on the page itself: whether dialogue, exposition, and formatting are supporting clarity or creating drag.",
    signals: [
      "Dialogue distinctness and control",
      "Visible exposition",
      "Formatting and white space",
    ],
  },
];

const reportSections = [
  {
    title: "Top-Line Summary",
    detail:
      "A concise opening judgment stating what the first ten pages are doing to the read overall.",
  },
  {
    title: "Notable Strengths",
    detail:
      "The clearest early-page strengths already operating with authority or control.",
  },
  {
    title: "Core Weaknesses / Risk Areas",
    detail:
      "Visible limiting issues surfaced at summary level when they are materially affecting the opening read.",
  },
  {
    title: "Revision Priorities",
    detail:
      "A restrained action order when the opening would benefit from a clear next sequence of attention.",
  },
  {
    title: "Primary Findings",
    detail:
      "Compact headline findings designed to scan quickly before the fuller category read.",
  },
  {
    title: "Category-by-Category Assessment",
    detail:
      "The main diagnostic body, organized by the instrument's core evaluation categories.",
  },
  {
    title: "Secondary Findings",
    detail:
      "Supporting observations included only when they materially sharpen the usefulness of the document.",
  },
  {
    title: "Technical Flags",
    detail:
      "Formatting and presentation issues that are visibly affecting readability or professional control.",
  },
  {
    title: "Next-Step Guidance",
    detail:
      "A measured closing read on what deserves attention next, without drifting into coaching mode.",
  },
];

const boundaryItems = [
  "Not screenplay coverage.",
  "Not coaching or an open-ended development pass.",
  "Not a full-script evaluation.",
  "Not a generic notes product detached from page-10 evidence.",
];

const postureItems = [
  {
    title: "Bounded by design",
    detail:
      "The instrument is intentionally limited to the opening ten pages so the judgment stays sharp, repeatable, and tied to what the read has actually consolidated early.",
  },
  {
    title: "Repeatable, not improvisational",
    detail:
      "The report follows a fixed diagnostic structure. It is meant to return disciplined first-ten-pages judgment rather than broad interpretive commentary.",
  },
  {
    title: "Writer-facing in tone",
    detail:
      "The language is direct, restrained, and usable. It is built to inform revision decisions without becoming classroom instruction or workshop narration.",
  },
];

const snapshotItems = [
  {
    label: "Window",
    value: "Pages 1-10 only",
  },
  {
    label: "Read lens",
    value: "Early-page diagnostic",
  },
  {
    label: "Return",
    value: "Structured written report",
  },
  {
    label: "Excludes",
    value: "Coverage, coaching, full-script notes",
  },
];

const limitItems = [
  "The read is bounded to what the opening is doing by page 10.",
  "The instrument favors visible page evidence over broad interpretive speculation.",
  "A strong opening is allowed to be strong without manufactured caveat language.",
];

function FirstTenPagesDiagnosticMethodologyPage({
  canonicalPath,
  onNavigate,
  reportPath,
  submissionPath,
}) {
  const jumpSections = [
    { id: "why-first-ten", label: "Why the first ten pages" },
    { id: "diagnostic-signals", label: "What the diagnostic evaluates" },
    { id: "report-structure", label: "Report structure" },
    { id: "instrument-boundaries", label: "What this is not" },
    { id: "instrument-posture", label: "Instrument posture" },
    { id: "ai-comparison", label: "General AI comparison" },
    { id: "methodology-actions", label: "Next step" },
  ];

  return (
    <div className="app-shell">
      <div className="report-page">
        <header className="report-header methodology-header">
          <div className="report-header__intro">
            <p className="report-eyebrow">Screenwriters Online</p>
            <p className="methodology-header__product">
              The First Ten Pages Diagnostic
            </p>
            <h1>Diagnostic Framework</h1>
            <p className="report-subtitle">
              A structured explanation of what the instrument evaluates in the
              opening ten pages, how the finished report is organized, and why
              the read remains bounded to the opening only.
            </p>
          </div>

          <div className="report-header__meta methodology-header__meta">
            <div className="meta-card">
              <span className="meta-label">Scope</span>
              <strong>Opening ten pages only</strong>
            </div>
            <div className="meta-card">
              <span className="meta-label">Measures</span>
              <strong>Early-read signals and page-10 consolidation</strong>
            </div>
            <div className="meta-card">
              <span className="meta-label">Return</span>
              <strong>Structured diagnostic report</strong>
            </div>
            <div className="meta-card">
              <span className="meta-label">Posture</span>
              <strong>Restrained, writer-facing, repeatable</strong>
            </div>
          </div>

          <div className="report-header__footnote">
            <span>Not screenplay coverage</span>
            <span>Not coaching</span>
            <span>Bounded early-read instrument</span>
            <span>{canonicalPath}</span>
          </div>
        </header>

        <div className="submission-layout methodology-layout">
          <main className="submission-main methodology-main">
            <section
              className="report-section report-section--hero methodology-rationale-section"
              id="why-first-ten"
              aria-labelledby="why-first-ten-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Purpose</p>
                <h2 id="why-first-ten-title">Why the first ten pages</h2>
              </div>

              <div className="methodology-summary-grid">
                <p className="summary-copy methodology-summary-copy">
                  The opening pages establish whether the screenplay is giving
                  the reader a coherent line to follow. By page 10, the read
                  has usually declared its level of pull, its setup clarity, its
                  tonal authority, and whether the story is consolidating into a
                  discernible direction. This diagnostic is built around that
                  bounded moment rather than around later-act performance or
                  broad developmental theory.
                </p>

                <div className="subtle-card methodology-note-card">
                  <h3>Diagnostic frame</h3>
                  <p>
                    The instrument reads the opening as an opening instrument.
                    It asks what is already organizing the experience of the
                    screenplay, what is still distributing or diffusing that
                    experience, and what the reader is being asked to hold by
                    page 10.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="report-section methodology-signals-section"
              id="diagnostic-signals"
              aria-labelledby="diagnostic-signals-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Signals</p>
                <h2 id="diagnostic-signals-title">
                  What the diagnostic evaluates
                </h2>
              </div>

              <p className="summary-copy methodology-section-copy">
                The report reads for a defined set of early-page signals. These
                are not treated as isolated scores. They are read together to
                determine how the opening is functioning as a controlled
                experience for the reader.
              </p>

              <div className="methodology-signal-grid">
                {signalGroups.map((group) => (
                  <article className="subtle-card methodology-signal-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.detail}</p>
                    <ul className="subordinate-list">
                      {group.signals.map((signal) => (
                        <li key={signal}>{signal}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="report-section report-section--closing methodology-structure-section"
              id="report-structure"
              aria-labelledby="report-structure-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Return</p>
                <h2 id="report-structure-title">How the finished report is organized</h2>
              </div>

              <p className="summary-copy methodology-section-copy">
                The finished document is designed to scan cleanly at the top and
                deepen into structured analysis beneath that top line. Each
                block exists to keep the read legible and usable rather than to
                simulate comprehensive coverage.
              </p>

              <div className="submission-return-list methodology-structure-list" role="list">
                {reportSections.map((section) => (
                  <article className="submission-return-row" key={section.title} role="listitem">
                    <h3>{section.title}</h3>
                    <p>{section.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="report-section methodology-boundaries-section"
              id="instrument-boundaries"
              aria-labelledby="instrument-boundaries-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Boundaries</p>
                <h2 id="instrument-boundaries-title">What this is not</h2>
              </div>

              <div className="methodology-boundary-grid">
                <div className="subtle-card methodology-boundary-card">
                  <h3>Bounded scope</h3>
                  <p>
                    This page and the product it describes are intentionally
                    narrow. The diagnostic does not attempt to answer every
                    question about the screenplay. It answers a specific one:
                    what the opening is doing to the read by page 10.
                  </p>
                </div>

                <div className="subtle-card methodology-boundary-card">
                  <h3>Outside scope</h3>
                  <ul className="subordinate-list">
                    {boundaryItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section
              className="report-section report-section--closing methodology-posture-section"
              id="instrument-posture"
              aria-labelledby="instrument-posture-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Philosophy</p>
                <h2 id="instrument-posture-title">Instrument posture</h2>
              </div>

              <p className="summary-copy methodology-section-copy">
                The First Ten Pages Diagnostic is a bounded, repeatable,
                early-read instrument. It is not positioned as a broad
                interpretive critique. Its job is to identify how the opening is
                functioning now, in document form, with enough discipline to be
                useful across submissions.
              </p>

              <div className="methodology-posture-grid">
                {postureItems.map((item) => (
                  <article className="subtle-card methodology-posture-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="report-section methodology-comparison-section"
              id="ai-comparison"
              aria-labelledby="ai-comparison-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Comparison</p>
                <h2 id="ai-comparison-title">
                  How this differs from a general AI read
                </h2>
              </div>

              <div className="methodology-section-copy">
                <p className="summary-copy">
                  Using AI tools like ChatGPT and Claude can produce useful
                  feedback, but the output changes with the prompt, the
                  follow-up questions, and the tone of the exchange.
                </p>

                <p className="summary-copy">
                  A conversational AI read may also adapt to the writer’s
                  framing and priorities as the exchange develops.
                </p>

                <p className="summary-copy">
                  This diagnostic is narrower: it stays on the first ten pages,
                  applies a fixed evaluation structure grounded in
                  Screenwriters Online First-Ten-Pages masterclass principles,
                  and returns a standardized report through a consistent lens
                  rather than an open-ended conversation.
                </p>
              </div>
            </section>

            <section
              className="report-section methodology-action-section"
              id="methodology-actions"
              aria-labelledby="methodology-actions-title"
            >
              <div className="section-heading">
                <p className="section-kicker">Next step</p>
                <h2 id="methodology-actions-title">Submit your first ten pages</h2>
              </div>

              <div className="submission-action-area methodology-action-area">
                <div>
                  <button
                    className="primary-action"
                    type="button"
                    onClick={() => onNavigate(submissionPath)}
                  >
                    Start submission
                  </button>
                </div>

                <div className="processing-secondary-actions methodology-secondary-actions">
                  <button
                    className="quiet-button"
                    type="button"
                    onClick={() => onNavigate(reportPath)}
                  >
                    View report example
                  </button>
                </div>
              </div>
            </section>
          </main>

          <aside className="report-rail">
            <div className="rail-stack">
              <section className="side-panel side-panel--snapshot">
                <div className="side-panel__header">
                  <p className="side-panel__eyebrow">At a glance</p>
                  <h2>Framework profile</h2>
                </div>

                <dl className="snapshot-list">
                  {snapshotItems.map((item) => (
                    <div className="snapshot-row" key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <SectionJumpNav
                sections={jumpSections}
                eyebrow="Framework navigation"
                title="On this page"
                titleId="methodology-jump-nav-title"
              />

              <section className="side-panel">
                <div className="side-panel__header">
                  <p className="side-panel__eyebrow">Limits</p>
                  <h2>Reading posture</h2>
                </div>

                <ul className="subordinate-list">
                  {limitItems.map((item) => (
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

export default FirstTenPagesDiagnosticMethodologyPage;
