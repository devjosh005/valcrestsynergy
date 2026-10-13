import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, BriefcaseIcon, CheckIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ApplicationForm } from '../components/ApplicationForm';
import { DemoNotice } from '../components/DemoNotice';
import { ButtonLink } from '../components/ButtonLink';
import { getJob } from '../data/jobs';
import { images } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFound } from './NotFound';

export function JobDetail() {
  const { slug } = useParams();
  const job = getJob(slug);
  usePageMeta(job ? `${job.title} — Careers` : 'Role not found', job?.summary ?? 'The requested role could not be found.');

  if (!job) return <NotFound />;

  const facts = [
  { icon: BriefcaseIcon, label: 'Department', value: job.department },
  { icon: MapPinIcon, label: 'Location', value: job.location },
  { icon: ClockIcon, label: 'Employment type', value: job.type },
  { icon: CheckIcon, label: 'Experience', value: job.experience }];


  return (
    <>
      <PageHero
        title={job.title}
        subtitle={job.summary}
        image={images.careersTeam}
        imageAlt="Engineers walking through an industrial facility"
        breadcrumbs={[{ label: 'Careers', to: '/careers' }, { label: job.title }]}>
        
        <ButtonLink to={`/careers/${job.slug}#apply`} arrow>
          Apply for this role
        </ButtonLink>
      </PageHero>

      <section className="py-20 md:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div>
            <DemoNotice>Example vacancy for illustration — not an actual open position.</DemoNotice>
            <h2 className="mt-8 text-2xl font-extrabold text-navy md:text-3xl">Key responsibilities</h2>
            <ul className="mt-6">
              {job.responsibilities.map((r) =>
              <li key={r} className="flex gap-3 border-b border-navy/10 py-4 text-ink/80">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-petrol" aria-hidden="true" />
                  {r}
                </li>
              )}
            </ul>
            <h2 className="mt-14 text-2xl font-extrabold text-navy md:text-3xl">Requirements</h2>
            <ul className="mt-6">
              {job.requirements.map((r) =>
              <li key={r} className="flex gap-3 border-b border-navy/10 py-4 text-ink/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {r}
                </li>
              )}
            </ul>
            <Link to="/careers#opportunities" className="mt-10 inline-flex items-center gap-2 font-semibold text-petrol hover:text-navy">
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> All opportunities
            </Link>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Role summary">
            <dl className="rounded-xl bg-navy p-8 text-white">
              {facts.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex gap-4 border-b border-white/10 py-4 first:pt-0 last:border-0 last:pb-0">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <div>
                      <dt className="text-sm text-white/60">{f.label}</dt>
                      <dd className="mt-0.5 font-semibold">{f.value}</dd>
                    </div>
                  </div>);

              })}
            </dl>
          </aside>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 bg-mist py-20 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Apply for {job.title}</h2>
            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-navy/5 md:p-10">
              <ApplicationForm key={job.slug} defaultPosition={job.title} />
            </div>
          </div>
        </div>
      </section>
    </>);

}