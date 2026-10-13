import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ClockIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ArticleCard } from '../components/ArticleCard';
import { DemoNotice } from '../components/DemoNotice';
import { CTASection } from '../components/CTASection';
import { articles, getArticle } from '../data/articles';
import { company } from '../data/company';
import { formatDate } from '../utils/format';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFound } from './NotFound';

export function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticle(slug);
  usePageMeta(article?.title ?? 'Article not found', article?.excerpt ?? 'The requested article could not be found.');

  if (!article) return <NotFound />;

  const related = [
  ...articles.filter((a) => a.slug !== article.slug && a.category === article.category),
  ...articles.filter((a) => a.slug !== article.slug && a.category !== article.category)].
  slice(0, 3);

  return (
    <>
      <PageHero
        title={article.title}
        image={article.image}
        imageAlt={article.imageAlt}
        breadcrumbs={[{ label: 'Insights', to: '/insights' }, { label: article.category }]}
        meta={
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/75">
            <span className="rounded bg-gold px-2.5 py-1 font-semibold text-navy">{article.category}</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" aria-hidden="true" /> {article.readTime}
            </span>
          </div>
        } />
      

      <article className="py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-[720px]">
            <DemoNotice>Demo article — replace with your own published content.</DemoNotice>
            <p className="mt-8 font-display text-xl font-semibold leading-relaxed text-navy md:text-2xl">{article.excerpt}</p>
            {article.body.map((section, i) =>
            <section key={i} className="mt-10">
                {section.heading && <h2 className="text-2xl font-extrabold text-navy">{section.heading}</h2>}
                {section.paragraphs.map((p) =>
              <p key={p.slice(0, 24)} className="mt-5 text-[17px] leading-[1.8] text-ink/80">
                    {p}
                  </p>
              )}
              </section>
            )}
            <footer className="mt-14 flex flex-col gap-6 border-t border-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy font-display font-extrabold text-gold" aria-hidden="true">
                  {company.shortName.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-navy">{article.author}</p>
                  <p className="text-sm text-ink/60">{company.name}</p>
                </div>
              </div>
              <Link to="/insights" className="inline-flex items-center gap-2 font-semibold text-petrol hover:text-navy">
                <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> Back to Insights
              </Link>
            </footer>
          </div>
        </div>
      </article>

      <section className="bg-mist py-20 md:py-24" aria-labelledby="related-heading">
        <div className="container-site">
          <h2 id="related-heading" className="text-2xl font-extrabold text-navy md:text-3xl">
            Related articles
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {related.map((a) =>
            <ArticleCard key={a.slug} article={a} />
            )}
          </div>
        </div>
      </section>

      <CTASection title="Talk to our specialists." text="Have a question about a topic covered here? Our engineers and field specialists are happy to help." />
    </>);

}