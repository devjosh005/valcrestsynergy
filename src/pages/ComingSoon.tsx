import { ArrowUpRightIcon, MailIcon } from 'lucide-react';
import { Logo } from '../components/Logo';
import { company } from '../data/company';
import { images } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';

const capabilities = ['Engineering', 'Asset integrity', 'Energy services'];

export function ComingSoon() {
  usePageMeta(
    'Coming Soon',
    `${company.name} is preparing a new digital experience for clients and partners across the energy value chain.`
  );

  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-hidden bg-navy text-white">
      <img
        src={images.heroOffshore}
        alt="Offshore energy platform operating at dusk"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-navy/75" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,20,31,0.96)_0%,rgba(5,20,31,0.78)_50%,rgba(5,20,31,0.3)_100%)]"
        aria-hidden="true"
      />

      <header className="container-site flex items-center justify-between border-b border-white/15 py-5 sm:py-6">
        <Logo tone="light" />
        <a
          href={`mailto:${company.email}`}
          className="grid h-11 w-11 place-items-center rounded-md border border-white/25 text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:flex sm:w-auto sm:gap-2 sm:px-5"
          aria-label={`Email ${company.email}`}
        >
          <MailIcon className="h-4 w-4" aria-hidden="true" />
          <span className="hidden text-sm font-semibold sm:inline">Contact us</span>
        </a>
      </header>

      <section className="container-site flex flex-1 items-center py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold sm:text-sm">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            New website coming soon
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            {company.name}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            We are building a stronger digital home for the expertise, reliability, and integrated solutions we bring to the
            energy industry.
          </p>
          <a
            href={`mailto:${company.email}`}
            className="group mt-10 inline-flex h-12 items-center gap-3 rounded-md bg-gold px-6 text-[15px] font-semibold text-navy transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            {company.email}
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="container-site border-t border-white/15 py-6 sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Core capabilities">
          {capabilities.map((capability) => (
            <li key={capability} className="flex items-center gap-2 text-sm font-medium text-white/65">
              <span className="h-1.5 w-1.5 bg-gold" aria-hidden="true" />
              {capability}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-white/45 sm:mt-0">© {new Date().getFullYear()} {company.name}</p>
      </footer>
    </main>
  );
}
