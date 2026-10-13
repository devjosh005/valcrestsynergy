import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { CTASection } from '../components/CTASection';
import { DemoNotice } from '../components/DemoNotice';
import { projects, projectCategories } from '../data/projects';
import { images } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';
import type { ProjectCategory } from '../types/content';

type Filter = 'All' | ProjectCategory;

export function Projects() {
  usePageMeta('Projects & Experience', 'Explore sample engineering, supply, pipeline, maintenance, procurement and inspection projects.');
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter((p) => p.category === filter), [filter]);
  const options: Filter[] = ['All', ...projectCategories];

  return (
    <>
      <PageHero
        title="Experience delivered across the energy value chain."
        subtitle="A selection of project types that illustrate how our teams support operators onshore and offshore."
        image={images.pipelineAerial}
        imageAlt="Aerial view of a pipeline crossing open terrain"
        breadcrumbs={[{ label: 'Projects' }]} />
      

      <section className="py-20 md:py-24">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-20">
            <SectionHeading title="Our experience" />
            <div>
              <p className="text-[17px] leading-relaxed text-ink/75">
                Each project combines technical scope with the safety, quality and documentation standards our clients expect.
                Filter by category to explore the work most relevant to you.
              </p>
              <div className="mt-5">
                <DemoNotice>The projects shown are clearly labelled samples. Replace with verified company projects.</DemoNotice>
              </div>
            </div>
          </div>

          <div role="group" aria-label="Filter projects by category" className="mt-12 flex gap-2 overflow-x-auto pb-2">
            {options.map((opt) => {
              const count = opt === 'All' ? projects.length : projects.filter((p) => p.category === opt).length;
              const active = filter === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(opt)}
                  className={`inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  active ? 'bg-navy text-white' : 'bg-mist text-navy hover:bg-navy/10'}`
                  }>
                  
                  {opt}
                  <span className={`text-xs ${active ? 'text-gold' : 'text-ink/50'}`}>{count}</span>
                </button>);

            })}
          </div>

          <p className="sr-only" aria-live="polite">
            Showing {filtered.length} projects
          </p>

          <motion.ul layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((p) =>
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}>
                
                  <ProjectCard project={p} />
                </motion.li>
              )}
            </AnimatePresence>
          </motion.ul>
          {filtered.length === 0 &&
          <div className="mt-10 rounded-xl bg-mist p-10 text-center">
              <p className="font-semibold text-navy">No projects in this category yet.</p>
              <button type="button" onClick={() => setFilter('All')} className="mt-3 text-sm font-semibold text-petrol hover:text-navy">
                Show all projects
              </button>
            </div>
          }
        </div>
      </section>

      <CTASection title="Have a similar project in mind?" text="Tell us about your scope, location and schedule. We will help you plan the right approach." />
    </>);

}