function QuietActions({ isSaved, onExportPdf, onPrint, onSave }) {
  return (
    <section className="side-panel" aria-labelledby="quiet-actions-title">
      <div className="side-panel__header">
        <p className="side-panel__eyebrow">Quiet actions</p>
        <h2 id="quiet-actions-title">Document actions</h2>
      </div>

      <div className="quiet-actions">
        <button type="button" onClick={onExportPdf}>
          Export PDF
        </button>
        <button type="button" onClick={onPrint}>
          Print
        </button>
        <button type="button" onClick={onSave}>
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </section>
  );
}

export default QuietActions;
