import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

export type Crumb = {label: string;to?: string;};

export function Breadcrumbs({ items }: {items: Crumb[];}) {
  const all: Crumb[] = [{ label: 'Home', to: '/' }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
        {all.map((item, i) => {
          const last = i === all.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.to && !last ?
              <Link to={item.to} className="rounded transition-colors duration-150 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                  {item.label}
                </Link> :

              <span aria-current={last ? 'page' : undefined} className={last ? 'font-medium text-white' : ''}>
                  {item.label}
                </span>
              }
              {!last && <ChevronRightIcon className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />}
            </li>);

        })}
      </ol>
    </nav>);

}