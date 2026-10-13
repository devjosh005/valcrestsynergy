import { useSearchParams } from 'react-router-dom';
import { CalendarClockIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ContactForm } from '../components/ContactForm';
import { SocialLinks } from '../components/SocialLinks';
import { DemoNotice } from '../components/DemoNotice';
import { company } from '../data/company';
import { getService } from '../data/services';
import { images } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';

export function Contact() {
  const [params] = useSearchParams();
  const isQuote = params.get('type') === 'quote';
  const service = getService(params.get('service') ?? undefined);
  usePageMeta(isQuote ? 'Request a Quote' : 'Contact Us', `Contact ${company.name} to discuss your project, request a quotation or schedule a consultation.`);

  const initial = {
    subject: isQuote ? 'Request for quotation' : '',
    service: service?.title ?? ''
  };

  return (
    <>
      <PageHero
        title={isQuote ? 'Request a Quote' : 'Contact Us'}
        subtitle="Tell us about your project. Our team will review your requirements and respond with the right specialists."
        image={images.controlRoom}
        imageAlt="Energy operations control room"
        breadcrumbs={[{ label: 'Contact' }]} />
      

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-[5fr_8fr] lg:gap-12">
          <aside className="rounded-xl bg-navy p-8 text-white md:p-10" aria-label="Contact details">
            <h2 className="text-2xl font-extrabold">{company.name}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">Head office</p>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <address className="not-italic leading-relaxed text-white/85">
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.country}
                </address>
              </li>
              <li className="flex gap-4">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <a href={company.phoneHref} className="text-white/85 hover:text-gold">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="break-all text-white/85 hover:text-gold">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-4">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <dl className="w-full space-y-2 text-[15px]">
                  {company.hours.map((h) =>
                  <div key={h.days} className="flex justify-between gap-4">
                      <dt className="text-white/65">{h.days}</dt>
                      <dd className="text-right text-white/90">{h.time}</dd>
                    </div>
                  )}
                </dl>
              </li>
            </ul>
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-4 text-sm font-semibold text-white/70">Follow us</p>
              <SocialLinks />
            </div>
            <div className="mt-8">
              <DemoNotice tone="dark">Contact details are placeholders — update them in one place in the company profile.</DemoNotice>
            </div>
          </aside>

          <div className="rounded-xl bg-white p-6 ring-1 ring-navy/10 md:p-10">
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{isQuote ? 'Tell us what you need' : 'Send us an inquiry'}</h2>
            <p className="mt-2 text-ink/70">We typically respond within [X] business days.</p>
            <div className="mt-8">
              <ContactForm key={params.toString()} initial={initial} />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="map-heading" className="bg-mist">
        <h2 id="map-heading" className="sr-only">
          Office location map
        </h2>
        <iframe
          title={`Map showing ${company.name} office location`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
          className="block h-[380px] w-full border-0 md:h-[460px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" />
        
      </section>

      <section className="bg-navy py-16 md:py-20">
        <div className="container-site flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-5">
            <CalendarClockIcon className="h-10 w-10 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
            <div>
              <h2 className="text-2xl font-extrabold text-white md:text-3xl">Prefer to talk it through?</h2>
              <p className="mt-2 max-w-xl text-white/70">
                Schedule a consultation with our technical team to discuss scope, schedule and the best way to approach your project.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={company.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gold px-6 text-[15px] font-semibold text-navy transition-colors duration-150 hover:bg-gold-light">
              
              <PhoneIcon className="h-4 w-4" aria-hidden="true" /> Call {company.phone}
            </a>
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent('Consultation request')}`}
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/40 px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white hover:text-navy">
              
              <MailIcon className="h-4 w-4" aria-hidden="true" /> Schedule a consultation
            </a>
          </div>
        </div>
      </section>
    </>);

}