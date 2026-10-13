import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import type { Service } from '../types/content';

type ServiceCardProps = {
  service: Service;
  useShortTitle?: boolean;
};

export function ServiceCard({ service, useShortTitle = false }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white ring-1 ring-navy/10 transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(7,28,47,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
      
      <div className="relative">
        <div className="aspect-[16/10] overflow-hidden bg-mist">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
          
        </div>
        <span className="absolute bottom-0 left-6 grid h-12 w-12 translate-y-1/2 place-items-center rounded-lg bg-navy text-gold shadow-lg">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
        <h3 className="text-xl font-bold leading-snug text-navy">{useShortTitle ? service.shortTitle : service.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{service.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-petrol transition-colors duration-150 group-hover:text-navy">
          Explore service
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>);

}