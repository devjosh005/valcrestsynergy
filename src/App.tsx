import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { About } from './pages/About';
import { ComingSoon } from './pages/ComingSoon';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Hse } from './pages/Hse';
import { Legal } from './pages/Legal';
import { NotFound } from './pages/NotFound';
import { ProjectDetail } from './pages/ProjectDetail';
import { Projects } from './pages/Projects';
import { ServiceDetail } from './pages/ServiceDetail';
import { Services } from './pages/Services';

const previewKey = 'valcrest-client-preview';
const previewValue = 'valcrest-2026';

function hasPreviewAccess() {
  const params = new URLSearchParams(window.location.search);
  const pathPreviewRequested = window.location.pathname === '/client-preview';
  const previewRequested = params.get('preview') === previewValue || pathPreviewRequested;

  if (previewRequested) {
    try {
      window.sessionStorage.setItem(previewKey, 'enabled');
    } catch {
      // Preview access still works when a browser blocks session storage.
    }

    if (pathPreviewRequested) window.history.replaceState(null, '', '/');
    return true;
  }

  try {
    return window.sessionStorage.getItem(previewKey) === 'enabled';
  } catch {
    return false;
  }
}

export function App() {
  if (!hasPreviewAccess()) return <ComingSoon />;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/hse" element={<Hse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
