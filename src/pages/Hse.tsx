import { Link } from 'react-router-dom';
import { CheckIcon, FileTextIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { CTASection } from '../components/CTASection';
import { DemoNotice } from '../components/DemoNotice';
import { hsePillars, riskSteps, supportingAreas, hsePolicies, improvementCycle } from '../data/hse';
import { images } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';

export function Hse() {
  usePageMeta('Health, Safety & Environment', 'Our approach to occupational health and safety, environmental responsibility, risk management, training and continuous improvement.');

  return (
    <>
      <PageHero
        title="Health, Safety & Environment"
        subtitle="Responsible operations are not a department. They are how every person in our company plans and performs their work."
        image={images.engineersPpe}
        imageAlt="Engineers in hard hats and coveralls at a gas facility"
        breadcrumbs={[{ label: 'HSE' }]} />
      

      {/* Philosophy */}
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Our HSE philosophy
            </p>
            <blockquote className="font-display text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-[42px]">
              “No job is so important, and no schedule so urgent, that we cannot take the time to do it safely.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.05} className="space-y-5 text-[17px] leading-relaxed text-ink/75 lg:pt-12">
            <p>
              We believe that all incidents are preventable. Our HSE management approach is built on visible leadership, competent
              people, clear procedures and the authority for anyone to stop unsafe work.
            </p>
            <p>We hold ourselves and our subcontractors to the same standards, and we integrate with our clients’ own HSE systems on every site.</p>
            <DemoNotice>Certifications, accreditations and safety statistics will be shown here once verified.</DemoNotice>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      {hsePillars.map((p, i) => {
        const Icon = p.icon;
        const flip = i % 2 === 1;
        return (
          <section key={p.title} className={`py-14 md:py-20 ${flip ? '' : 'bg-mist'}`}>
            <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={flip ? 'lg:order-2' : ''}>
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <Icon className="h-9 w-9 text-petrol" strokeWidth={1.5} aria-hidden="true" />
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{p.title}</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-ink/75">{p.text}</p>
                <ul className="mt-6 space-y-3">
                  {p.points.map((pt) =>
                  <li key={pt} className="flex gap-3 text-ink/80">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-petrol" aria-hidden="true" />
                      {pt}
                    </li>
                  )}
                </ul>
              </Reveal>
            </div>
          </section>);

      })}

      {/* Risk management */}
      <section className="bg-navy py-20 text-white md:py-28" aria-labelledby="risk-heading">
        <div className="container-site">
          <SectionHeading
            eyebrow="Risk management"
            title="A structured process for every task."
            text="Risk is managed through a repeatable cycle applied from tender stage to job close-out."
            tone="light" />
          
          <ol className="relative mt-14 grid gap-8 md:grid-cols-5 md:gap-4">
            <span className="absolute left-5 top-5 hidden h-px w-[calc(100%-40px)] bg-white/15 md:block" aria-hidden="true" />
            {riskSteps.map((s, i) =>
            <li key={s.title} className="relative flex gap-5 md:block">
                <Reveal delay={i * 0.05} className="flex gap-5 md:block">
                  <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold font-display font-extrabold text-navy">
                    {i + 1}
                  </span>
                  <div className="md:mt-6">
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/70">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            )}
          </ol>
        </div>
      </section>

      {/* Supporting areas */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHeading title="Quality, sustainability and preparedness." />
          <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {supportingAreas.map((a, i) => {
              const Icon = a.icon;
              return (
                <li key={a.title} className="border-t border-navy/10 pt-8">
                  <Reveal delay={i * 0.05}>
                    <Icon className="h-8 w-8 text-petrol" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-bold text-navy">{a.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink/70">{a.text}</p>
                  </Reveal>
                </li>);

            })}
          </ul>
        </div>
      </section>

      {/* Policies & continuous improvement */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-site grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">HSE policies</h2>
            <p className="mt-3 leading-relaxed text-ink/70">Policy documents are available to clients and partners on request.</p>
            <ul className="mt-8 divide-y divide-navy/10 rounded-xl bg-white">
              {hsePolicies.map((p) =>
              <li key={p.title} className="flex items-start gap-4 p-5">
                  <FileTextIcon className="mt-0.5 h-5 w-5 shrink-0 text-petrol" aria-hidden="true" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{p.text}</p>
                  </div>
                </li>
              )}
            </ul>
            <Link to="/contact" className="mt-6 inline-flex font-semibold text-petrol hover:text-navy">
              Request policy documents →
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Continuous improvement</h2>
            <p className="mt-3 leading-relaxed text-ink/70">
              Our HSE performance is reviewed through a Plan–Do–Check–Act cycle, with lessons learned shared across every project.
            </p>
            <ol className="mt-8 grid grid-cols-2 gap-3">
              {improvementCycle.map((c, i) =>
              <li key={c.title} className={`rounded-xl p-6 ${i === 0 ? 'bg-navy text-white' : 'bg-white'}`}>
                  <span className={`font-display text-sm font-extrabold ${i === 0 ? 'text-gold' : 'text-gold-deep'}`}>0{i + 1}</span>
                  <h3 className={`mt-2 text-xl font-extrabold ${i === 0 ? 'text-white' : 'text-navy'}`}>{c.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? 'text-white/70' : 'text-ink/70'}`}>{c.text}</p>
                </li>
              )}
            </ol>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Work with a partner who puts safety first."
        text="Discuss your project requirements with a team that plans every task around people, assets and the environment."
        image={images.offshoreCrew} />
      
    </>);

}