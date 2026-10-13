import { company } from '../data/company';
import { Reveal } from './Reveal';

export function StatsSection() {
  return (
    <section className="bg-navy py-20 text-white md:py-28" aria-labelledby="stats-heading">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-end">
        <Reveal>
          <h2 id="stats-heading" className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            Experience measured in delivery.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/70">
            Decades of combined field experience across upstream, midstream and downstream operations.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-4">
            {company.stats.map((stat) =>
            <div key={stat.label} className="flex flex-col-reverse bg-navy p-6 md:p-7">
                <dt className="mt-2 text-sm leading-snug text-white/70">{stat.label}</dt>
                <dd className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                  {stat.value}
                  <span className="text-gold">{stat.suffix}</span>
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </div>
      <div className="container-site mt-6 lg:text-right">
        <p className="text-xs text-white/50">Placeholder figures — replace with verified company data.</p>
      </div>
    </section>);

}