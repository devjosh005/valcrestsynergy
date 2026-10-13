import React from 'react';
import { company } from '../data/company';

type LogoProps = {
  tone?: 'light' | 'dark';
};

export function Logo({ tone = 'dark' }: LogoProps) {
  const text = tone === 'light' ? 'text-white' : 'text-navy';
  const sub = tone === 'light' ? 'text-white/60' : 'text-petrol';
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <path d="M20 2 36 11v18L20 38 4 29V11Z" fill="#071C2F" stroke="#D9A441" strokeWidth="2" />
        <path d="M20 9c4.5 6 7 10 7 13.5a7 7 0 1 1-14 0C13 19 15.5 15 20 9Z" fill="#D9A441" />
        <path d="M20 18c2 2.8 3 4.6 3 6a3 3 0 1 1-6 0c0-1.4 1-3.2 3-6Z" fill="#071C2F" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[17px] font-extrabold tracking-[0.18em] ${text}`}>{company.wordmark}</span>
        <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] ${sub}`}>{company.wordmarkSub}</span>
      </span>
    </span>);

}