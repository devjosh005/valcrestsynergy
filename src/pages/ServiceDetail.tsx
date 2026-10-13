import { Link, useParams } from 'react-router-dom';
import { CheckIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { ServiceCard } from '../components/ServiceCard';
import { CTASection } from '../components/CTASection';
import { ButtonLink } from '../components/ButtonLink';
import { getService, services } from '../data/services';
import { company } from '../data/company';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFound } from './NotFound';

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  usePageMeta(service?.title ?? 'Service not found', service?.summary ?? 'The requested service could not be found.');

  if (!service) return <NotFound />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const quoteLink = `/contact?type=quote&service=${service.slug}`;

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.summary}
        image={service.heroImage}
        imageAlt={service.imageAlt}
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: service.shortTitle }]}>
        
        <ButtonLink to={quoteLink} arrow>
          Request a Quote
        </ButtonLink>
        <ButtonLink to="/projects" variant="light">
          View Related Projects
        </ButtonLink>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="font-display text-2xl font-bold leading-snug text-navy md:text-[28px]">{service.intro}</p>
              <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/75">
                {service.description.map((p) =>
                <p key={p.slice(0, 24)}>{p}</p>
                )}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Scope of services</h2>
              <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
                {service.scope.map((item) =>
                <li key={item} className="flex gap-3 border-b border-navy/10 py-4 text-ink/80">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-petrol" aria-hidden="true" />
                    {item}
                  </li>
                )}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Request support">
            <div className="rounded-xl bg-navy p-8 text-white">
              <h2 className="text-xl font-bold">Discuss your requirement</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                Share your scope and timeline and our team will respond with a tailored proposal.
              </p>
              <ButtonLink to={quoteLink} className="mt-6 w-full" arrow>
                Request a Quote
              </ButtonLink>
              <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-[15px]">
                <a href={company.phoneHref} className="flex items-center gap-3 text-white/80 hover:text-gold">
                  <PhoneIcon className="h-4 w-4 text-gold" aria-hidden="true" /> {company.phone}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-white/80 hover:text-gold">
                  <MailIcon className="h-4 w-4 text-gold" aria-hidden="true" /> {company.email}
                </a>
              </div>
            </div>
            <nav aria-label="Other services" className="mt-6 rounded-xl bg-mist p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink/60">All services</h2>
              <ul className="mt-4 space-y-1">
                {services.map((s) =>
                <li key={s.slug}>
                    <Link
                    to={`/services/${s.slug}`}
                    aria-current={s.slug === service.slug ? 'page' : undefined}
                    className={`block rounded-md px-3 py-2 text-[15px] transition-colors duration-150 ${
                    s.slug === service.slug ? 'bg-white font-semibold text-navy shadow-sm' : 'text-ink/75 hover:bg-white hover:text-navy'}`
                    }>
                    
                      {s.title}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Key capabilities" title="What sets our delivery apart." />
          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.capabilities.map((c, i) =>
            <li key={c.title} className="border-t-2 border-navy pt-6 pb-8">
                <Reveal delay={i * 0.05}>
                  <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{c.text}</p>
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Relevant industries</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {service.industries.map((ind) =>
              <li key={ind} className="rounded-full bg-mist px-4 py-2 text-[15px] font-medium text-navy">
                  {ind}
                </li>
              )}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Business benefits</h2>
            <dl className="mt-6 space-y-6">
              {service.benefits.map((b) =>
              <div key={b.title} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  <div>
                    <dt className="font-bold text-navy">{b.title}</dt>
                    <dd className="mt-1 leading-relaxed text-ink/70">{b.text}</dd>
                  </div>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="container-site">
          <SectionHeading title="Related services" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) =>
            <ServiceCard key={s.slug} service={s} />
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to discuss ${service.shortTitle.toLowerCase()}?`}
        primary={{ label: 'Request a Quote', to: quoteLink }} />
      
    </>);

}