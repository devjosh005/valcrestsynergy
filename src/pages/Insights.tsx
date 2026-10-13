import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SearchIcon, XIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ArticleCard } from '../components/ArticleCard';
import { DemoNotice } from '../components/DemoNotice';
import { Reveal } from '../components/Reveal';
import { articles, articleCategories } from '../data/articles';
import { images } from '../data/images';
import { formatDate } from '../utils/format';
import { usePageMeta } from '../hooks/usePageMeta';
import type { ArticleCategory } from '../types/content';

type Filter = 'All' | ArticleCategory;

export function Insights() {
  usePageMeta('News & Insights', 'Company updates, industry insights, engineering and technology, safety and sustainability, and energy market commentary.');
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');

  const featured = articles.find((a) => a.featured) ?? articles[0];
  const isFiltering = filter !== 'All' || query.trim() !== '';

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (!isFiltering && a.slug === featured.slug) return false;
      if (filter !== 'All' && a.category !== filter) return false;
      if (!q) return true;
      return `${a.title} ${a.excerpt} ${a.category}`.toLowerCase().includes(q);
    });
  }, [filter, query, isFiltering, featured.slug]);

  const clear = () => {
    setFilter('All');
    setQuery('');
  };

  return (
    <>
      <PageHero
        title="News & Insights"
        subtitle="Company updates and practical perspectives on engineering, operations, safety and the energy market."
        image={images.controlRoom}
        imageAlt="Operators monitoring screens in an energy control room"
        breadcrumbs={[{ label: 'Insights' }]} />
      

      {!isFiltering &&
      <section className="pt-20 md:pt-24" aria-label="Featured article">
          <div className="container-site">
            <Reveal>
              <article className="group grid overflow-hidden rounded-xl bg-navy lg:grid-cols-2">
                <Link to={`/insights/${featured.slug}`} tabIndex={-1} aria-hidden="true" className="block aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <img src={featured.image} alt="" className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                </Link>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <span className="rounded bg-gold px-2 py-1 uppercase tracking-wider text-navy">Featured</span>
                    <span className="uppercase tracking-wider text-white/70">{featured.category}</span>
                    <time dateTime={featured.date} className="text-white/60">
                      {formatDate(featured.date)}
                    </time>
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold leading-tight text-white md:text-4xl">
                    <Link to={`/insights/${featured.slug}`} className="hover:text-gold-light">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="mt-4 leading-relaxed text-white/70">{featured.excerpt}</p>
                  <Link to={`/insights/${featured.slug}`} className="mt-8 inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light">
                    Read article <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </section>
      }

      <section className="py-20 md:py-24">
        <div className="container-site">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div role="group" aria-label="Filter by category" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {(['All', ...articleCategories] as Filter[]).map((c) =>
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`h-10 shrink-0 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                filter === c ? 'bg-navy text-white' : 'bg-mist text-navy hover:bg-navy/10'}`
                }>
                
                  {c}
                </button>
              )}
            </div>
            <div className="relative w-full lg:max-w-xs">
              <label htmlFor="article-search" className="sr-only">
                Search articles
              </label>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" aria-hidden="true" />
              <input
                id="article-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles"
                className="h-11 w-full rounded-full border border-navy/15 bg-white pl-11 pr-10 text-[15px] focus:border-petrol focus:outline-none focus:ring-4 focus:ring-petrol/15" />
              
              {query &&
              <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-ink/50 hover:bg-mist hover:text-navy">
                  <XIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              }
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-ink/60" aria-live="polite">
              {isFiltering ? `${results.length} ${results.length === 1 ? 'article' : 'articles'} found` : 'Latest articles'}
            </p>
            <DemoNotice>Demo editorial content for layout purposes.</DemoNotice>
          </div>

          {results.length > 0 ?
          <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {results.map((a) =>
            <ArticleCard key={a.slug} article={a} />
            )}
            </div> :

          <div className="mt-10 rounded-xl bg-mist px-6 py-16 text-center">
              <p className="text-lg font-semibold text-navy">No articles match your search.</p>
              <p className="mt-2 text-ink/70">Try a different keyword or category.</p>
              <button type="button" onClick={clear} className="mt-6 h-11 rounded-md bg-navy px-5 text-sm font-semibold text-white hover:bg-petrol">
                Clear filters
              </button>
            </div>
          }
        </div>
      </section>
    </>);

}