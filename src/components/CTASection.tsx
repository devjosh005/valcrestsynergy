import React from 'react';
import { ButtonLink } from './ButtonLink';
import { Reveal } from './Reveal';
import { images } from '../data/images';

type Action = {label: string;to: string;};

type CTASectionProps = {
  title?: string;
  text?: string;
  primary?: Action;
  secondary?: Action;
  image?: string;
};

export function CTASection({
  title = 'Let’s Build the Future of Energy Together.',
  text = 'Partner with a team committed to delivering dependable solutions for your most demanding energy projects.',
  primary = { label: 'Request a Quote', to: '/contact?type=quote' },
  secondary = { label: 'Contact Our Team', to: '/contact' },
  image = images.pumpjacksSunset
}: CTASectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy/80" aria-hidden="true" />
      <div className="container-site py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{text}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink to={primary.to} arrow>
              {primary.label}
            </ButtonLink>
            <ButtonLink to={secondary.to} variant="light">
              {secondary.label}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>);

}