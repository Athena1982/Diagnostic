import { useEffect, useMemo, useState } from "react";
import AssessmentSnapshot from "../components/report/AssessmentSnapshot";
import CategoryAssessment from "../components/report/CategoryAssessment";
import CoreWeaknesses from "../components/report/CoreWeaknesses";
import NextStepGuidance from "../components/report/NextStepGuidance";
import NotableStrengths from "../components/report/NotableStrengths";
import PrimaryFindings from "../components/report/PrimaryFindings";
import QuietActions from "../components/report/QuietActions";
import ReportHeader from "../components/report/ReportHeader";
import RevisionPriorities from "../components/report/RevisionPriorities";
import SecondaryFindings from "../components/report/SecondaryFindings";
import SectionJumpNav from "../components/report/SectionJumpNav";
import TechnicalFlags from "../components/report/TechnicalFlags";
import TopLineSummary from "../components/report/TopLineSummary";
import { reportData } from "../data/reportData";

function FirstTenPagesDiagnosticReportPage({ canonicalPath, isCanonicalPath }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedValue = window.localStorage.getItem("ftpd-report-saved");
    setIsSaved(savedValue === "true");
  }, []);

  const jumpSections = useMemo(() => {
    const sections = [
      { id: "top-line-summary", label: "Top-Line Summary" },
      { id: "notable-strengths", label: "Notable Strengths" },
      ...(reportData.coreWeaknesses.length
        ? [{ id: "core-weaknesses", label: "Core Weaknesses" }]
        : []),
      ...(reportData.revisionPriorities.length
        ? [{ id: "revision-priorities", label: "Revision Priorities" }]
        : []),
      { id: "primary-findings", label: "Primary Findings" },
      { id: "category-assessment", label: "Category Assessment" },
      ...(reportData.secondaryFindings.length
        ? [{ id: "secondary-findings", label: "Secondary Findings" }]
        : []),
      ...(reportData.technicalFlags.length
        ? [{ id: "technical-flags", label: "Technical Flags" }]
        : []),
      { id: "next-step-guidance", label: "Next-Step Guidance" },
    ];

    return sections;
  }, []);

  const handleSave = () => {
    const nextValue = !isSaved;
    setIsSaved(nextValue);
    window.localStorage.setItem("ftpd-report-saved", String(nextValue));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportPdf = () => {
    window.print();
  };

  return (
    <div className="app-shell">
      <div className="report-page">
        <ReportHeader
          canonicalPath={canonicalPath}
          data={reportData}
          isCanonicalPath={isCanonicalPath}
        />

        <div className="report-layout">
          <main className="report-main">
            <TopLineSummary summary={reportData.topLineSummary} />
            <NotableStrengths strengths={reportData.notableStrengths} />

            {reportData.coreWeaknesses.length > 0 ? (
              <CoreWeaknesses weaknesses={reportData.coreWeaknesses} />
            ) : null}

            {reportData.revisionPriorities.length > 0 ? (
              <RevisionPriorities priorities={reportData.revisionPriorities} />
            ) : null}

            <PrimaryFindings findings={reportData.primaryFindings} />
            <CategoryAssessment categories={reportData.categories} />

            {reportData.secondaryFindings.length > 0 ? (
              <SecondaryFindings findings={reportData.secondaryFindings} />
            ) : null}

            {reportData.technicalFlags.length > 0 ? (
              <TechnicalFlags flags={reportData.technicalFlags} />
            ) : null}

            <NextStepGuidance guidance={reportData.nextStepGuidance} />
          </main>

          <aside className="report-rail">
            <div className="rail-stack">
              <AssessmentSnapshot snapshot={reportData.snapshot} />
              <SectionJumpNav sections={jumpSections} />
              <QuietActions
                isSaved={isSaved}
                onExportPdf={handleExportPdf}
                onPrint={handlePrint}
                onSave={handleSave}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default FirstTenPagesDiagnosticReportPage;
