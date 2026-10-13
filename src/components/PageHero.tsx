import { motion, useReducedMotion } from 'framer-motion';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  breadcrumbs: Crumb[];
  meta?: React.ReactNode;
  children?: React.ReactNode;
};

export function PageHero({ title, subtitle, image, imageAlt, breadcrumbs, meta, children }: PageHeroProps) {
  const reduce = useReducedMotion();
  const ease = [0.23, 1, 0.32, 1] as const;
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img src={image} alt={imageAlt} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-navy/50 to-transparent" aria-hidden="true" />
      <div className="container-site pb-16 pt-36 md:pb-24 md:pt-44">
        <Breadcrumbs items={breadcrumbs} />
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease }}
          className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
          
          {title}
        </motion.h1>
        {subtitle &&
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease, delay: 0.06 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          
            {subtitle}
          </motion.p>
        }
        {meta && <div className="mt-8">{meta}</div>}
        {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>);

}
import type React from 'react';
