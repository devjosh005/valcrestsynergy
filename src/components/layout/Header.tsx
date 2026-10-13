import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { Logo } from '../Logo';
import { primaryNav } from '../../data/navigation';
import { services } from '../../data/services';

const ease = [0.23, 1, 0.32, 1] as const;

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<number>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openServices = () => {
    window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

  const solid = scrolled || mobileOpen;
  const linkTone = solid ? 'text-navy hover:text-petrol' : 'text-white/90 hover:text-white';
  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ease-out ${
      solid ? 'bg-white shadow-[0_1px_0_rgba(7,28,47,0.08),0_8px_24px_-12px_rgba(7,28,47,0.15)]' : 'bg-transparent'}`
      }>
      
      <div className="container-site flex h-[76px] items-center justify-between gap-6 lg:h-[84px]">
        <Link to="/" aria-label="Home" className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
          <Logo tone={solid ? 'dark' : 'light'} />
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) =>
            item.hasDropdown ?
            <li key={item.to} className="relative" onMouseEnter={openServices} onMouseLeave={scheduleClose}>
                  <div className="flex items-center">
                    <NavLink
                  to={item.to}
                  className={`relative px-3 py-2 text-[14px] font-semibold transition-colors duration-150 ${linkTone}`}>
                  
                      {item.label}
                      {isServicesActive && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gold" aria-hidden="true" />}
                    </NavLink>
                    <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  aria-label="Toggle services menu"
                  onClick={() => setServicesOpen((o) => !o)}
                  className={`-ml-2 rounded p-1 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${linkTone}`}>
                  
                      <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true" />
                  
                    </button>
                  </div>
                  <AnimatePresence>
                    {servicesOpen &&
                <div className="absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-3" id="services-menu">
                        <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease }}
                    style={{ transformOrigin: 'top center' }}
                    className="overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-20px_rgba(7,28,47,0.45)] ring-1 ring-navy/10">
                    
                          <ul className="grid grid-cols-2 gap-1 p-3">
                            {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <li key={s.slug}>
                                  <Link
                              to={`/services/${s.slug}`}
                              className="flex gap-3 rounded-lg p-3 transition-colors duration-150 hover:bg-mist focus-visible:bg-mist focus-visible:outline-none">
                              
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-navy text-gold">
                                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                                    </span>
                                    <span>
                                      <span className="block text-sm font-semibold text-navy">{s.title}</span>
                                      <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-ink/60">{s.summary}</span>
                                    </span>
                                  </Link>
                                </li>);

                      })}
                          </ul>
                          <div className="flex items-center justify-between border-t border-navy/10 bg-mist px-6 py-4">
                            <p className="text-sm text-ink/70">Integrated solutions across the asset lifecycle.</p>
                            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-petrol hover:text-navy">
                              View all services <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                            </Link>
                          </div>
                        </motion.div>
                      </div>
                }
                  </AnimatePresence>
                </li> :

            <li key={item.to}>
                  <NavLink
                to={item.to}
                end={item.to === '/'}
                className={`relative block px-3 py-2 text-[14px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${linkTone}`}>
                
                    {({ isActive }) =>
                <>
                        {item.label}
                        {isActive && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gold" aria-hidden="true" />}
                      </>
                }
                  </NavLink>
                </li>

            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className={`grid h-11 w-11 place-items-center rounded-md xl:hidden ${
            solid ? 'text-navy hover:bg-mist' : 'text-white hover:bg-white/10'} transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`
            }>
            
            {mobileOpen ? <XIcon className="h-6 w-6" aria-hidden="true" /> : <MenuIcon className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease }}
          className="fixed inset-x-0 bottom-0 top-[76px] overflow-y-auto border-t border-navy/10 bg-white xl:hidden lg:top-[84px]">
          
            <ul className="container-site py-4">
              {primaryNav.map((item) =>
            <li key={item.to} className="border-b border-navy/10">
                  {item.hasDropdown ?
              <>
                      <div className="flex items-center justify-between">
                        <NavLink to={item.to} className="block flex-1 py-4 text-lg font-semibold text-navy">
                          {item.label}
                        </NavLink>
                        <button
                    type="button"
                    onClick={() => setMobileServicesOpen((o) => !o)}
                    aria-expanded={mobileServicesOpen}
                    aria-label="Show individual services"
                    className="grid h-11 w-11 place-items-center rounded-md text-navy hover:bg-mist">
                    
                          <ChevronDownIcon
                      className={`h-5 w-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true" />
                    
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen &&
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease }}
                    className="overflow-hidden">
                    
                            {services.map((s) =>
                    <li key={s.slug}>
                                <Link to={`/services/${s.slug}`} className="block border-l-2 border-gold/40 py-2.5 pl-4 text-[15px] text-ink/80 hover:border-gold hover:text-navy">
                                  {s.title}
                                </Link>
                              </li>
                    )}
                            <li className="pb-4" />
                          </motion.ul>
                  }
                      </AnimatePresence>
                    </> :

              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `block py-4 text-lg font-semibold ${isActive ? 'text-petrol' : 'text-navy'}`}>
                
                      {item.label}
                    </NavLink>
              }
                </li>
            )}
            </ul>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}
