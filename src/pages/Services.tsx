import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { CTASection } from '../components/CTASection';
import { ButtonLink } from '../components/ButtonLink';
import { services } from '../data/services';
import { images } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';

export function Services() {
  usePageMeta('Our Services', 'Engineering, equipment supply, procurement, pipeline, inspection and operations & maintenance services for the oil and gas industry.');

  return (
    <>
      <PageHero
        title="Services that keep energy moving."
        subtitle="Six integrated service lines supporting operators from early engineering through decades of reliable operation."
        image={images.gasPlant}
        imageAlt="Natural gas processing plant with vessels and pipework"
        breadcrumbs={[{ label: 'Services' }]}>
        
        <ButtonLink to="/contact?type=quote" arrow>
          Request a Quote
        </ButtonLink>
      </PageHero>

      <section className="py-20 md:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading title="One partner. Every stage of the asset lifecycle." />
          <p className="text-[17px] leading-relaxed text-ink/75 lg:pt-2">
            Engage a single service line for a defined scope, or combine several under one contract with a single point of
            accountability. Either way, you get the same technical standards, safety culture and documentation quality.
          </p>
        </div>
        <nav aria-label="Jump to service" className="container-site mt-12">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) =>
            <li key={s.slug}>
                <a
                href={`#${s.slug}`}
                className="inline-flex h-10 items-center rounded-full border border-navy/15 px-4 text-sm font-medium text-navy transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-white">
                
                  {s.shortTitle}
                </a>
              </li>
            )}
          </ul>
        </nav>
      </section>

      <div className="pb-8">
        {services.map((s, i) => {
          const Icon = s.icon;
          const flip = i % 2 === 1;
          return (
            <section key={s.slug} id={s.slug} className={`scroll-mt-24 py-14 md:py-20 ${flip ? 'bg-mist' : ''}`}>
              <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={flip ? 'lg:order-2' : ''}>
                  <Link to={`/services/${s.slug}`} className="group block aspect-[4/3] overflow-hidden rounded-xl" tabIndex={-1} aria-hidden="true">
                    <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                  </Link>
                </Reveal>
                <Reveal delay={0.05}>
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-[17px] leading-relaxed text-ink/75">{s.intro}</p>
                  <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {s.scope.slice(0, 6).map((item) =>
                    <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-ink/80">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-petrol" aria-hidden="true" />
                        {item}
                      </li>
                    )}
                  </ul>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 font-semibold text-petrol hover:text-navy">
                    
                    View service details
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>
            </section>);

        })}
      </div>

      <CTASection
        title="Need more than one service?"
        text="Tell us about your project and we will propose the right combination of engineering, supply and field services." />
      
    </>);

}