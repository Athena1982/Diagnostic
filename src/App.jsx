import { useEffect, useState } from "react";
import FirstTenPagesDiagnosticMethodologyPage from "./pages/FirstTenPagesDiagnosticMethodologyPage";
import FirstTenPagesDiagnosticProcessingPage from "./pages/FirstTenPagesDiagnosticProcessingPage";
import FirstTenPagesDiagnosticReportPage from "./pages/FirstTenPagesDiagnosticReportPage";
import FirstTenPagesDiagnosticSubmissionPage from "./pages/FirstTenPagesDiagnosticSubmissionPage";

const METHODOLOGY_PATH = "/first-ten-pages-diagnostic/methodology";
const REPORT_PATH = "/reports/first-ten-pages-diagnostic";
const SUBMISSION_PATH = "/submit/first-ten-pages-diagnostic";
const PROCESSING_PATH = "/submit/first-ten-pages-diagnostic/processing";

function normalizePath(pathname) {
  if (
    pathname === METHODOLOGY_PATH ||
    pathname === REPORT_PATH ||
    pathname === SUBMISSION_PATH ||
    pathname === PROCESSING_PATH
  ) {
    return pathname;
  }

  return SUBMISSION_PATH;
}

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  const navigate = (nextPath) => {
    const normalizedPath = normalizePath(nextPath);
    window.history.pushState({}, "", normalizedPath);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setPath(normalizedPath);
  };

  useEffect(() => {
    const syncPath = () => {
      const normalizedPath = normalizePath(window.location.pathname);

      if (window.location.pathname !== normalizedPath) {
        window.history.replaceState({}, "", normalizedPath);
      }

      setPath(normalizedPath);
    };

    syncPath();
    window.addEventListener("popstate", syncPath);

    return () => {
      window.removeEventListener("popstate", syncPath);
    };
  }, []);

  if (path === METHODOLOGY_PATH) {
    return (
      <FirstTenPagesDiagnosticMethodologyPage
        canonicalPath={METHODOLOGY_PATH}
        onNavigate={navigate}
        reportPath={REPORT_PATH}
        submissionPath={SUBMISSION_PATH}
      />
    );
  }

  if (path === REPORT_PATH) {
    return (
      <FirstTenPagesDiagnosticReportPage
        canonicalPath={REPORT_PATH}
        isCanonicalPath={path === REPORT_PATH}
      />
    );
  }

  if (path === PROCESSING_PATH) {
    return (
      <FirstTenPagesDiagnosticProcessingPage
        canonicalPath={PROCESSING_PATH}
        onNavigate={navigate}
        submissionPath={SUBMISSION_PATH}
      />
    );
  }

  return (
    <FirstTenPagesDiagnosticSubmissionPage
      canonicalPath={SUBMISSION_PATH}
      onNavigate={navigate}
      processingPath={PROCESSING_PATH}
    />
  );
}

export default App;
