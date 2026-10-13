import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import type { Article } from '../types/content';
import { formatDate } from '../utils/format';

export function ArticleCard({ article }: {article: Article;}) {
  const href = `/insights/${article.slug}`;
  return (
    <article className="group flex h-full flex-col">
      <Link to={href} tabIndex={-1} aria-hidden="true" className="block aspect-[16/10] overflow-hidden rounded-xl bg-mist">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
        
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold">
          <span className="uppercase tracking-wider text-petrol">{article.category}</span>
          <span className="h-1 w-1 rounded-full bg-ink/30" aria-hidden="true" />
          <time dateTime={article.date} className="text-ink/60">
            {formatDate(article.date)}
          </time>
        </div>
        <h3 className="mt-3 text-lg font-bold leading-snug text-navy md:text-xl">
          <Link to={href} className="transition-colors duration-150 hover:text-petrol focus-visible:outline-none focus-visible:underline">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-ink/70">{article.excerpt}</p>
        <Link
          to={href}
          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-petrol hover:text-navy"
          aria-label={`Read more: ${article.title}`}>
          
          Read more
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>);

}