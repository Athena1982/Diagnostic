function ReportHeader({ data, canonicalPath, isCanonicalPath }) {
  return (
    <header className="report-header">
      <div className="report-header__intro">
        <p className="report-eyebrow">{data.provider}</p>
        <h1>{data.productName}</h1>
        <p className="report-subtitle">{data.overviewLabel}</p>
      </div>

      <div className="report-header__meta">
        <div className="meta-card">
          <span className="meta-label">Script</span>
          <strong>{data.screenplayTitle}</strong>
        </div>
        <div className="meta-card">
          <span className="meta-label">Writer</span>
          <strong>{data.writerName}</strong>
        </div>
        <div className="meta-card">
          <span className="meta-label">Issued</span>
          <strong>{data.submissionDate}</strong>
        </div>
        <div className="meta-card">
          <span className="meta-label">Reference</span>
          <strong>{data.reportId}</strong>
        </div>
      </div>

      <div className="report-header__footnote">
        <span>{data.readTime}</span>
        <span>{canonicalPath}</span>
        {!isCanonicalPath ? <span>Rendered outside canonical route</span> : null}
      </div>
    </header>
  );
}

export default ReportHeader;
