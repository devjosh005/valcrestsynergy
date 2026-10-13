import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, MapPinIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { CTASection } from '../components/CTASection';
import { DemoNotice } from '../components/DemoNotice';
import { getProject, projects } from '../data/projects';
import { getService } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFound } from './NotFound';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  usePageMeta(project?.title ?? 'Project not found', project?.summary ?? 'The requested project could not be found.');

  if (!project) return <NotFound />;

  const delivered = project.services.map((s) => getService(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  const facts = [
  { label: 'Client', value: project.client },
  { label: 'Sector', value: project.sector },
  { label: 'Location', value: project.location },
  { label: 'Category', value: project.category },
  { label: 'Duration', value: project.duration }];


  return (
    <>
      <PageHero
        title={project.title}
        subtitle={project.summary}
        image={project.image}
        imageAlt={project.imageAlt}
        breadcrumbs={[{ label: 'Projects', to: '/projects' }, { label: project.title }]}
        meta={
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span className="rounded bg-gold px-2.5 py-1 text-navy">{project.category}</span>
            <span className="inline-flex items-center gap-1.5 text-white/80">
              <MapPinIcon className="h-4 w-4" aria-hidden="true" /> {project.location}
            </span>
            <span className="rounded bg-white/10 px-2.5 py-1 text-white/80">Sample project</span>
          </div>
        } />
      

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Project overview</h2>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink/75">
                {project.overview.map((p) =>
                <p key={p.slice(0, 24)}>{p}</p>
                )}
              </div>
            </Reveal>
            <Reveal className="mt-14">
              <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Scope of work</h2>
              <ul className="mt-6 space-y-0">
                {project.scope.map((s) =>
                <li key={s} className="flex gap-3 border-b border-navy/10 py-4 text-ink/80">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-petrol" aria-hidden="true" />
                    {s}
                  </li>
                )}
              </ul>
            </Reveal>
            <Reveal className="mt-14">
              <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Services delivered</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {delivered.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="group flex h-full items-center gap-4 rounded-xl bg-mist p-5 transition-colors duration-150 hover:bg-navy hover:text-white">
                        
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy text-gold group-hover:bg-white/10">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="font-semibold text-navy group-hover:text-white">{s.title}</span>
                      </Link>
                    </li>);

                })}
              </ul>
            </Reveal>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Project details">
            <div className="rounded-xl bg-navy p-8 text-white">
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Project details</h2>
              <dl className="mt-6 divide-y divide-white/10">
                {facts.map((f) =>
                <div key={f.label} className="flex justify-between gap-4 py-3 text-[15px]">
                    <dt className="text-white/60">{f.label}</dt>
                    <dd className="text-right font-semibold">{f.value}</dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="rounded-xl bg-mist p-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink/60">Project highlights</h2>
              <dl className="mt-6 space-y-5">
                {project.highlights.map((h) =>
                <div key={h.title}>
                    <dt className="text-sm text-ink/60">{h.title}</dt>
                    <dd className="mt-1 font-semibold leading-snug text-navy">{h.text}</dd>
                  </div>
                )}
              </dl>
            </div>
            <DemoNotice>Sample project — client details and outcomes to be supplied.</DemoNotice>
          </aside>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28" aria-labelledby="gallery-heading">
        <div className="container-site">
          <h2 id="gallery-heading" className="text-2xl font-extrabold text-navy md:text-3xl">
            Project gallery
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {project.gallery.map((g, i) =>
            <li key={g.src + i} className={`overflow-hidden rounded-xl ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <figure className="h-full">
                  <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover ${i === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-[4/3]'}`} />
                
                </figure>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">More projects</h2>
            <Link to="/projects" className="inline-flex items-center gap-2 font-semibold text-petrol hover:text-navy">
              All projects <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((p) =>
            <ProjectCard key={p.slug} project={p} />
            )}
          </div>
        </div>
      </section>

      <CTASection title="Planning a similar project?" />
    </>);

}