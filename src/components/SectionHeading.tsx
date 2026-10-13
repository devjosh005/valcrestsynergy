
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  as?: 'h2' | 'h3';
};

export function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'dark', as = 'h2' }: SectionHeadingProps) {
  const Heading = as;
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow &&
      <p
        className={`mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
        tone === 'light' ? 'text-gold' : 'text-gold-deep'}`
        }>
        
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
      }
      <Heading
        className={`text-3xl font-extrabold leading-[1.15] tracking-tight md:text-4xl lg:text-[44px] ${
        tone === 'light' ? 'text-white' : 'text-navy'}`
        }>
        
        {title}
      </Heading>
      {text &&
      <p className={`mt-5 text-base leading-relaxed md:text-lg ${tone === 'light' ? 'text-white/70' : 'text-ink/70'}`}>
          {text}
        </p>
      }
    </div>);

}