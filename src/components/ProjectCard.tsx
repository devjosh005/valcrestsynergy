import { Link } from 'react-router-dom';
import { ArrowRightIcon, MapPinIcon } from 'lucide-react';
import type { Project } from '../types/content';

type ProjectCardProps = {
  project: Project;
  tall?: boolean;
};

export function ProjectCard({ project, tall = false }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-xl bg-navy text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
      tall ? 'min-h-[480px]' : 'min-h-[420px]'}`
      }>
      
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/70 to-navy/0" aria-hidden="true" />
      <span className="absolute right-4 top-4 rounded bg-navy/70 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
        Sample project
      </span>
      <div className="p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold">
          <span className="rounded bg-gold px-2 py-1 text-navy">{project.category}</span>
          <span className="inline-flex items-center gap-1 text-white/80">
            <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {project.location}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-bold leading-snug md:text-2xl">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-white/75">{project.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
          View project
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>);

}