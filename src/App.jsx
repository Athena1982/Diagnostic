import { useEffect, useState } from "react";
import FirstTenPagesDiagnosticReportPage from "./pages/FirstTenPagesDiagnosticReportPage";

const SUPPORTED_PATH = "/reports/first-ten-pages-diagnostic";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    if (path === "/") {
      window.history.replaceState({}, "", SUPPORTED_PATH);
      setPath(SUPPORTED_PATH);
    }
  }, [path]);

  return (
    <FirstTenPagesDiagnosticReportPage
      canonicalPath={SUPPORTED_PATH}
      isCanonicalPath={path === SUPPORTED_PATH}
    />
  );
}

export default App;
