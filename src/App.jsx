import { useEffect, useState } from "react";
import FirstTenPagesDiagnosticReportPage from "./pages/FirstTenPagesDiagnosticReportPage";
import FirstTenPagesDiagnosticSubmissionPage from "./pages/FirstTenPagesDiagnosticSubmissionPage";

const REPORT_PATH = "/reports/first-ten-pages-diagnostic";
const SUBMISSION_PATH = "/submit/first-ten-pages-diagnostic";

function normalizePath(pathname) {
  if (pathname === REPORT_PATH || pathname === SUBMISSION_PATH) {
    return pathname;
  }

  return SUBMISSION_PATH;
}

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

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

  if (path === REPORT_PATH) {
    return (
      <FirstTenPagesDiagnosticReportPage
        canonicalPath={REPORT_PATH}
        isCanonicalPath={path === REPORT_PATH}
      />
    );
  }

  return (
    <FirstTenPagesDiagnosticSubmissionPage
      canonicalPath={SUBMISSION_PATH}
    />
  );
}

export default App;
