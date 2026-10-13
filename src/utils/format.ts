import { format, parseISO } from 'date-fns';

export function formatDate(iso: string): string {
  return format(parseISO(iso), 'd MMMM yyyy');
}

export function inputClass(hasError: boolean): string {
  return [
  'block w-full rounded-md border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/40',
  'transition-[border-color,box-shadow] duration-150 ease-out',
  'focus:outline-none focus:ring-4',
  hasError ?
  'border-red-500 focus:border-red-500 focus:ring-red-500/15' :
  'border-navy/15 focus:border-petrol focus:ring-petrol/15'].
  join(' ');
}