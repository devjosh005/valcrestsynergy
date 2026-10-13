import React from 'react';
import { ButtonLink } from '../components/ButtonLink';
import { images } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFound() {
  usePageMeta('Page not found', 'The page you are looking for could not be found.');
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-navy">
      <img src={images.pumpjacksSunset} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy/85" aria-hidden="true" />
      <div className="container-site py-32">
        <p className="font-display text-7xl font-extrabold text-gold md:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-white md:text-5xl">This page could not be found.</h1>
        <p className="mt-4 max-w-lg text-lg text-white/70">The link may be outdated or the page may have moved.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink to="/" arrow>
            Back to Home
          </ButtonLink>
          <ButtonLink to="/contact" variant="light">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>);

}