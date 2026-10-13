import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Logo } from '../Logo';
import { SocialLinks } from '../SocialLinks';
import { company } from '../../data/company';
import { footerQuickLinks } from '../../data/navigation';
import { services } from '../../data/services';

export function Footer() {
  const year = new Date().getFullYear();
  const linkClass = 'text-[15px] text-white/65 transition-colors duration-150 hover:text-gold';
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">{company.description}</p>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <nav aria-labelledby="footer-quick">
          <h2 id="footer-quick" className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Company
          </h2>
          <ul className="mt-6 space-y-3">
            {footerQuickLinks.map((l) =>
            <li key={l.to}>
                <Link to={l.to} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Our Services
          </h2>
          <ul className="mt-6 space-y-3">
            {services.map((s) =>
            <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className={linkClass}>
                  {s.shortTitle}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Contact</h2>
          <address className="mt-6 space-y-4 not-italic">
            <p className="flex gap-3 text-[15px] leading-relaxed text-white/65">
              <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.country}
              </span>
            </p>
            <a href={company.phoneHref} className={`flex items-center gap-3 ${linkClass}`}>
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className={`flex items-center gap-3 ${linkClass}`}>
              <MailIcon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {company.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link to="/privacy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gold">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>);

}