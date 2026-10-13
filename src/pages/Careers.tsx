import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, BriefcaseIcon, ClockIcon, GraduationCapIcon, HardHatIcon, HeartHandshakeIcon, MapPinIcon, TrendingUpIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { ButtonLink } from '../components/ButtonLink';
import { DemoNotice } from '../components/DemoNotice';
import { ApplicationForm } from '../components/ApplicationForm';
import { jobs } from '../data/jobs';
import { images } from '../data/images';
import { company } from '../data/company';
import { usePageMeta } from '../hooks/usePageMeta';

const benefits = [
{ icon: HardHatIcon, title: 'A safe place to work', text: 'Every person has the authority and support to stop unsafe work.' },
{ icon: TrendingUpIcon, title: 'Meaningful projects', text: 'Work on the facilities and pipelines that deliver energy to communities.' },
{ icon: GraduationCapIcon, title: 'Continuous learning', text: 'Structured training, mentoring and support for professional certification.' },
{ icon: HeartHandshakeIcon, title: 'Respect and inclusion', text: 'Diverse teams where every voice is heard and good work is recognised.' }];


const pathway = [
{ title: 'Induction', text: 'Company, HSE and site-specific induction before you start work.' },
{ title: 'Mentored field experience', text: 'Work alongside experienced engineers and supervisors.' },
{ title: 'Technical certification', text: 'Support to obtain recognised qualifications in your discipline.' },
{ title: 'Leadership development', text: 'Supervisory and management programmes for future leaders.' }];


export function Careers() {
  usePageMeta('Careers', `Build your career with ${company.name}. Explore our culture, development opportunities and example vacancies.`);
  const departments = ['All', ...Array.from(new Set(jobs.map((j) => j.department)))];
  const [dept, setDept] = useState('All');
  const visible = dept === 'All' ? jobs : jobs.filter((j) => j.department === dept);

  return (
    <>
      <PageHero
        title="Build a career that powers progress."
        subtitle="Join engineers, technicians and specialists who keep critical energy infrastructure running safely."
        image={images.careersTeam}
        imageAlt="Team of engineers in hard hats and coveralls walking through a processing facility"
        breadcrumbs={[{ label: 'Careers' }]}>
        
        <ButtonLink to="/careers#opportunities" arrow>
          View Opportunities
        </ButtonLink>
        <ButtonLink to="/careers#apply" variant="light">
          Apply Now
        </ButtonLink>
      </PageHero>

      {/* Culture */}
      <section className="py-20 md:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Our culture" title="Professional, practical and proud of the work." />
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink/75">
              <p>
                We are a team of problem-solvers who enjoy the challenge of demanding environments. Our culture is built on
                safety, accountability and respect — for each other, for our clients and for the communities where we work.
              </p>
              <p>
                Whether you are early in your career or an experienced specialist, you will find colleagues who share their
                knowledge and a company that invests in your growth.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img src={images.teamEngineering} alt="Engineers collaborating on a facility walkway" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why work with us */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Why work with us" title="What you can expect from us." />
          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <li key={b.title} className="border-t border-navy/15 py-8">
                  <Reveal delay={i * 0.05}>
                    <Icon className="h-8 w-8 text-petrol" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-bold text-navy">{b.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink/70">{b.text}</p>
                  </Reveal>
                </li>);

            })}
          </ul>
        </div>
      </section>

      {/* Development */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Employee development" title="A clear path to grow your career." tone="light" />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-4">
            {pathway.map((p, i) =>
            <li key={p.title} className="bg-navy p-7">
                <span className="font-display text-sm font-extrabold text-gold">Stage {i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">{p.text}</p>
              </li>
            )}
          </ol>
        </div>
      </section>

      {/* Opportunities */}
      <section id="opportunities" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Available opportunities" title="Current openings" />
            <DemoNotice>Example vacancies shown for illustration — not actual open positions.</DemoNotice>
          </div>
          <div role="group" aria-label="Filter by department" className="mt-10 flex gap-2 overflow-x-auto pb-1">
            {departments.map((d) =>
            <button
              key={d}
              type="button"
              aria-pressed={dept === d}
              onClick={() => setDept(d)}
              className={`h-10 shrink-0 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors duration-150 ${
              dept === d ? 'bg-navy text-white' : 'bg-mist text-navy hover:bg-navy/10'}`
              }>
              
                {d}
              </button>
            )}
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {visible.map((j) =>
            <li key={j.slug}>
                <Link
                to={`/careers/${j.slug}`}
                className="group flex h-full flex-col rounded-xl p-7 ring-1 ring-navy/10 transition-[box-shadow,background-color] duration-200 ease-out hover:shadow-[0_20px_40px_-24px_rgba(7,28,47,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                
                  <span className="text-xs font-bold uppercase tracking-wider text-petrol">{j.department}</span>
                  <h3 className="mt-2 text-xl font-bold text-navy">{j.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{j.summary}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm text-ink/65">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPinIcon className="h-4 w-4" aria-hidden="true" /> {j.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BriefcaseIcon className="h-4 w-4" aria-hidden="true" /> {j.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon className="h-4 w-4" aria-hidden="true" /> {j.experience}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 font-semibold text-petrol group-hover:text-navy">
                      View role
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="scroll-mt-24 bg-mist py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <SectionHeading title="Apply now" text="Don’t see the right role? Submit a general application and we will contact you when a suitable position opens." />
            <p className="mt-6 text-[15px] text-ink/70">
              Questions? Email{' '}
              <a href={`mailto:${company.careersEmail}`} className="font-semibold text-petrol hover:text-navy">
                {company.careersEmail}
              </a>
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-navy/5 md:p-10">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>);

}