import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';
import { ScrollManager } from './ScrollManager';

export function SiteLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-gold px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>);

}