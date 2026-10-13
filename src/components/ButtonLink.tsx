import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

type Variant = 'primary' | 'light' | 'dark' | 'outline';

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

const base =
'group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 text-[15px] font-semibold transition-[background-color,color,border-color,transform] duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-navy hover:bg-gold-light',
  light: 'border border-white/40 text-white hover:border-white hover:bg-white hover:text-navy focus-visible:ring-offset-navy',
  dark: 'bg-navy text-white hover:bg-petrol',
  outline: 'border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white'
};

export function ButtonLink({ to, children, variant = 'primary', arrow = false, className = '' }: ButtonLinkProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow &&
      <ArrowRightIcon
        className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        aria-hidden="true" />

      }
    </Link>);

}
import type React from 'react';
