import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, CheckIcon, CompassIcon, EyeIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { CTASection } from '../components/CTASection';
import { DemoNotice } from '../components/DemoNotice';
import { images } from '../data/images';
import { company } from '../data/company';
import { services } from '../data/services';
import { timeline, coreValues, leadership, qualityPoints } from '../data/about';
import { usePageMeta } from '../hooks/usePageMeta';

export function About() {
  usePageMeta('About Us', `Learn about ${company.name}: our history, mission, values, leadership and commitment to safe, reliable energy services.`);

  return (
    <>
      <PageHero
        title="An energy services partner built on trust."
        subtitle="We help operators design, supply, build, inspect and maintain the infrastructure that delivers energy safely and reliably."
        image={images.refineryDusk}
        imageAlt="Refinery at dusk with illuminated distillation columns"
        breadcrumbs={[{ label: 'About Us' }]} />
      

      {/* Overview */}
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Company overview" title="Practical expertise for demanding environments." />
          </Reveal>
          <Reveal delay={0.05} className="space-y-5 text-[17px] leading-relaxed text-ink/75">
            <p>
              {company.name} provides integrated engineering, equipment supply, procurement, pipeline, inspection and maintenance
              services to the oil and gas industry. We work with national and international operators, EPC contractors and
              industrial organisations on onshore and offshore assets.
            </p>
            <p>
              Our approach is simple: understand the operating reality of each facility, apply recognised technical standards,
              and put safety ahead of schedule. That approach has shaped our company since it was founded in{' '}
              {company.foundedYear}.
            </p>
            <DemoNotice>Replace bracketed values throughout this page with verified company information.</DemoNotice>
          </Reveal>
        </div>
      </section>

      {/* History */}
      <section className="bg-mist py-20 md:py-28" aria-labelledby="history">
        <div className="container-site">
          <SectionHeading eyebrow="Our history" title="Growing alongside our clients." />
          <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
            <span className="absolute left-[7px] top-2 h-[calc(100%-8px)] w-px bg-navy/15 md:left-0 md:top-[7px] md:h-px md:w-full" aria-hidden="true" />
            {timeline.map((t, i) =>
            <li key={i} className="relative pl-10 md:pl-0 md:pt-10">
                <span className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-[3px] border-mist bg-gold ring-1 ring-gold md:top-0" aria-hidden="true" />
                <Reveal delay={i * 0.05}>
                  <p className="font-display text-2xl font-extrabold text-navy">{t.year}</p>
                  <h3 className="mt-2 font-bold text-navy">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{t.text}</p>
                </Reveal>
              </li>
            )}
          </ol>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-site grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-2">
          {[
          { icon: CompassIcon, label: 'Our mission', text: 'To deliver safe, reliable and technically excellent services that help our clients produce and transport energy responsibly.' },
          { icon: EyeIcon, label: 'Our vision', text: 'To be the most trusted integrated services partner for energy operators in every region we serve.' }].
          map((m) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.label} className="h-full bg-navy p-8 md:p-12">
                <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <h2 className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-gold">{m.label}</h2>
                <p className="mt-4 font-display text-2xl font-bold leading-snug md:text-3xl">{m.text}</p>
              </Reveal>);

          })}
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Core values" title="The principles behind every decision." align="center" />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-xl bg-navy/10 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <li key={v.title} className="bg-white p-7">
                  <Reveal delay={i * 0.04}>
                    <Icon className="h-7 w-7 text-petrol" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-bold text-navy">{v.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{v.text}</p>
                  </Reveal>
                </li>);

            })}
          </ul>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Areas of expertise"
              title="Capabilities across the asset lifecycle."
              text="From early-phase engineering to long-term operations support, our service lines are designed to work together." />
            
          </div>
          <ul className="divide-y divide-navy/10 border-y border-navy/10">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="group flex items-center gap-5 py-5 transition-colors duration-150 hover:text-petrol">
                    <Icon className="h-6 w-6 shrink-0 text-petrol" strokeWidth={1.5} aria-hidden="true" />
                    <span className="flex-1 text-lg font-semibold text-navy group-hover:text-petrol">{s.title}</span>
                    <ArrowUpRightIcon className="h-5 w-5 text-ink/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-petrol" aria-hidden="true" />
                  </Link>
                </li>);

            })}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Leadership & management" title="Experienced leadership, accountable to our people and clients." />
            <DemoNotice>Placeholder profiles — add executive names, photos and biographies.</DemoNotice>
          </div>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l, i) =>
            <li key={l.role}>
                <Reveal delay={i * 0.05}>
                  <div className="grid aspect-[4/5] place-items-center rounded-xl bg-petrol">
                    <span className="font-display text-5xl font-extrabold text-white/25" aria-hidden="true">
                      {l.initials}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{l.name}</h3>
                  <p className="mt-1 text-[15px] text-ink/70">{l.role}</p>
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* Our people */}
      <section className="grid bg-navy lg:grid-cols-2">
        <div className="flex items-center px-5 py-16 sm:px-8 md:py-24 lg:order-1 lg:px-16 xl:px-24">
          <Reveal className="max-w-xl">
            <SectionHeading eyebrow="Our people" title="Skilled, supported and safe." tone="light" />
            <p className="mt-6 text-[17px] leading-relaxed text-white/75">
              Our engineers, technicians, supervisors and support teams are the reason clients return. We invest in their
              competence, give them the authority to stop unsafe work, and create clear pathways for them to grow with the company.
            </p>
            <Link to="/careers" className="mt-8 inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light">
              Explore careers <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <div className="relative min-h-[360px] lg:order-2 lg:min-h-[560px]">
          <img src={images.careersTeam} alt="Team of engineers in hard hats walking along a pipe rack" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      {/* Quality & sustainability */}
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Quality & excellence" title="Quality that is planned, not inspected in." />
            <ul className="mt-8 space-y-4">
              {qualityPoints.map((q) =>
              <li key={q} className="flex gap-3 leading-relaxed text-ink/80">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-petrol" aria-hidden="true" />
                  {q}
                </li>
              )}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="aspect-[16/10] overflow-hidden rounded-xl">
              <img src={images.environmentMonitoring} alt="Environmental specialist sampling water near a facility" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <h2 className="mt-8 text-2xl font-extrabold text-navy md:text-3xl">Sustainability commitment</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              We support the industry’s transition to lower-emission operations by reducing our own fuel use and waste, helping
              clients detect and repair emission sources, and designing modifications with efficiency in mind.
            </p>
            <Link to="/hse" className="mt-6 inline-flex items-center gap-2 font-semibold text-petrol hover:text-navy">
              Read our HSE approach <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>);

}