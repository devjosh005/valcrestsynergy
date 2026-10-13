import React from 'react';
import { InfoIcon } from 'lucide-react';

type DemoNoticeProps = {
  children: React.ReactNode;
  tone?: 'light' | 'dark';
};

export function DemoNotice({ children, tone = 'light' }: DemoNoticeProps) {
  const styles = tone === 'dark' ? 'bg-white/10 text-white/80' : 'bg-gold/15 text-gold-deep';
  return (
    <p className={`inline-flex items-start gap-2 rounded-md px-3 py-2 text-xs font-medium leading-snug ${styles}`}>
      <InfoIcon className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>);

}