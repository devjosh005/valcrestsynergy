import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  BrainCircuitIcon,
  ShieldCheckIcon,
  BadgeCheckIcon,
  CalendarCheckIcon,
  FactoryIcon,
  UsersRoundIcon } from
'lucide-react';
import { HomeHero } from '../components/home/HomeHero';
import { SectionHeading } from '../components/SectionHeading';
import { ButtonLink } from '../components/ButtonLink';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { ArticleCard } from '../components/ArticleCard';
import { StatsSection } from '../components/StatsSection';
import { CTASection } from '../components/CTASection';
import { Reveal } from '../components/Reveal';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { articles } from '../data/articles';
import { images } from '../data/images';
import { company } from '../data/company';
import { usePageMeta } from '../hooks/usePageMeta';

const reasons = [
{ icon: BrainCircuitIcon, title: 'Technical Expertise', text: 'Engineers and technicians with deep field experience across upstream, midstream and downstream assets.' },
{ icon: ShieldCheckIcon, title: 'Safety-First Operations', text: 'Every task is planned, risk-assessed and executed under disciplined safety controls.' },
{ icon: BadgeCheckIcon, title: 'Quality Assurance', text: 'Documented procedures, inspection and test plans, and traceable records on every job.' },
{ icon: CalendarCheckIcon, title: 'Reliable Project Delivery', text: 'Realistic planning, transparent reporting and teams that deliver on their commitments.' },
{ icon: FactoryIcon, title: 'Industry-Focused Solutions', text: 'Solutions shaped by how oil and gas facilities actually operate — not generic templates.' },
{ icon: UsersRoundIcon, title: 'Customer-Centric Approach', text: 'One accountable point of contact and a team that adapts to your systems and priorities.' }];


export function Home() {
  usePageMeta(
    'Integrated Oil & Gas Solutions',
    'Engineering, equipment supply, procurement, pipeline, inspection and maintenance services for oil and gas operators.'
  );
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const latest = articles.slice(0, 3);

  return (
    <>
      <HomeHero />

      {/* Introduction */}
      <section id="introduction" className="scroll-mt-20 py-20 md:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl sm:aspect-[5/4] lg:aspect-[4/5]">
              <img src={images.teamEngineering} alt="Engineering team on a walkway at a processing facility" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 right-4 max-w-[240px] rounded-lg bg-navy p-6 text-white shadow-xl sm:right-[-24px]">
              <p className="font-display text-3xl font-extrabold text-gold">Since {company.foundedYear}</p>
              <p className="mt-2 text-sm leading-snug text-white/75">Serving energy operators across [Region].</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading eyebrow="Who we are" title="Your Trusted Partner in Energy Excellence." />
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink/75">
              <p>
                {company.name} is an integrated oil and gas services company supporting operators, contractors and industrial
                organisations through every stage of the asset lifecycle — from engineering and procurement to construction,
                inspection and long-term maintenance.
              </p>
              <p>
                Our multidisciplinary teams combine practical field experience with rigorous technical standards. We plan every
                activity around the safety of our people and the integrity of our clients’ assets, and we measure success by the
                reliability of the facilities we help to build and maintain.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink to="/about" variant="dark" arrow>
                Learn More About Us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core services */}
      <section className="bg-mist py-20 md:py-28" aria-labelledby="services-heading">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Core services"
              title="Integrated capabilities across the energy value chain."
              text="Six service lines, engaged individually or as a single coordinated package." />
            
            <Link to="/services" className="inline-flex shrink-0 items-center gap-2 font-semibold text-petrol hover:text-navy">
              All services <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) =>
            <Reveal key={s.slug} delay={i % 3 * 0.05} className="h-full">
                <ServiceCard service={s} useShortTitle />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="Built on discipline. Measured by reliability."
              text="Operators choose partners they can trust with their people, assets and production. These principles shape how we work on every site." />
            
            <div className="mt-10 hidden aspect-[4/3] overflow-hidden rounded-xl lg:block">
              <img src={images.engineersPpe} alt="Engineers in PPE reviewing data beside process pipework" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <ul className="grid gap-x-12 sm:grid-cols-2">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <li key={r.title} className="border-t border-navy/10 py-8">
                  <Reveal delay={i % 2 * 0.05}>
                    <Icon className="h-8 w-8 text-petrol" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-bold text-navy">{r.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink/70">{r.text}</p>
                  </Reveal>
                </li>);

            })}
          </ul>
        </div>
      </section>

      <StatsSection />

      {/* Featured projects */}
      <section className="py-20 md:py-28" aria-labelledby="projects-heading">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Featured projects" title="Experience delivered in the field." />
            <Link to="/projects" className="inline-flex shrink-0 items-center gap-2 font-semibold text-petrol hover:text-navy">
              View all projects <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:grid-rows-2">
            {featured.map((p, i) =>
            <Reveal key={p.slug} delay={i * 0.05} className={i === 0 ? 'h-full lg:row-span-2' : 'h-full'}>
                <ProjectCard project={p} tall={i === 0} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* HSE commitment */}
      <section className="grid bg-navy lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-[620px]">
          <img
            src={images.hseTraining}
            alt="Field crew in hard hats and coveralls during a safety briefing"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover" />
          
        </div>
        <div className="flex items-center px-5 py-16 sm:px-8 md:py-24 lg:px-16 xl:px-24">
          <Reveal className="max-w-xl">
            <SectionHeading
              eyebrow="Health, safety & environment"
              title="Safety Is at the Core of Everything We Do."
              tone="light" />
            
            <p className="mt-6 text-[17px] leading-relaxed text-white/75">
              We believe every incident is preventable. Our people are trained, equipped and empowered to stop any task they
              believe is unsafe. We work to protect the environments in which we operate, prevent pollution and leave every site in
              the condition we agreed with our clients and communities.
            </p>
            <ul className="mt-8 space-y-3 text-white/85">
              {['Stop-work authority for every person on site', 'Risk assessment before every task', 'Environmental controls and responsible waste management'].map(
                (t) =>
                <li key={t} className="flex gap-3">
                    <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    {t}
                  </li>

              )}
            </ul>
            <div className="mt-10">
              <ButtonLink to="/hse" arrow>
                Our HSE Commitment
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* News */}
      <section className="py-20 md:py-28" aria-labelledby="news-heading">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="News & insights" title="Perspectives from the field." />
            <Link to="/insights" className="inline-flex shrink-0 items-center gap-2 font-semibold text-petrol hover:text-navy">
              All articles <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {latest.map((a, i) =>
            <Reveal key={a.slug} delay={i * 0.05} className="h-full">
                <ArticleCard article={a} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>);

}