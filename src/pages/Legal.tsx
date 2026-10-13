import { PageHero } from '../components/PageHero';
import { DemoNotice } from '../components/DemoNotice';
import { company } from '../data/company';
import { images } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';

type LegalProps = {kind: 'privacy' | 'terms';};

const content = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
    { heading: 'Information we collect', text: 'We collect information you provide through our contact and application forms, such as your name, company, email address, phone number and any documents you choose to upload.' },
    { heading: 'How we use information', text: 'We use this information to respond to inquiries, prepare proposals, assess job applications and improve our services. We do not sell personal information.' },
    { heading: 'Data retention', text: 'Information is retained only as long as necessary for the purposes described, or as required by applicable law.' },
    { heading: 'Your rights', text: 'Depending on your location, you may have rights to access, correct or delete your personal information. Contact us to make a request.' }]

  },
  terms: {
    title: 'Terms of Use',
    sections: [
    { heading: 'Use of this website', text: 'This website provides general information about our company and services. Content may be updated or changed without notice.' },
    { heading: 'No professional advice', text: 'Information on this website does not constitute engineering, legal or commercial advice. Formal proposals are provided separately.' },
    { heading: 'Intellectual property', text: 'Website content, logos and materials are the property of the company unless otherwise stated and may not be reproduced without permission.' },
    { heading: 'Limitation of liability', text: 'To the extent permitted by law, the company is not liable for losses arising from the use of this website.' }]

  }
};

export function Legal({ kind }: LegalProps) {
  const page = content[kind];
  usePageMeta(page.title, `${page.title} for ${company.name}.`);
  return (
    <>
      <PageHero title={page.title} image={images.storageTanks} imageAlt="" breadcrumbs={[{ label: page.title }]} />
      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-[720px]">
            <DemoNotice>Template text — have this page reviewed by qualified legal counsel before publishing.</DemoNotice>
            {page.sections.map((s) =>
            <section key={s.heading} className="mt-10">
                <h2 className="text-2xl font-extrabold text-navy">{s.heading}</h2>
                <p className="mt-4 text-[17px] leading-[1.8] text-ink/80">{s.text}</p>
              </section>
            )}
            <p className="mt-12 text-[15px] text-ink/70">
              Questions? Contact us at{' '}
              <a href={`mailto:${company.email}`} className="font-semibold text-petrol hover:text-navy">
                {company.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>);

}