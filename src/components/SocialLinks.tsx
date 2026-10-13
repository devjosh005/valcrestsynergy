import { company } from '../data/company';
import { SocialIcon } from './SocialIcon';

export function SocialLinks({ tone = 'light' }: {tone?: 'light' | 'dark';}) {
  const styles =
  tone === 'light' ?
  'border-white/15 text-white/70 hover:border-gold hover:bg-gold hover:text-navy' :
  'border-navy/15 text-navy hover:border-navy hover:bg-navy hover:text-white';
  return (
    <ul className="flex gap-3">
      {company.socials.map((s) =>
      <li key={s.name}>
          <a
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${company.name} on ${s.name}`}
          className={`grid h-10 w-10 place-items-center rounded-full border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${styles}`}>
          
            <SocialIcon name={s.icon} />
          </a>
        </li>
      )}
    </ul>);

}