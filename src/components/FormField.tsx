import React from 'react';
import { AlertCircleIcon } from 'lucide-react';

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
};

export function FormField({ id, label, required, error, hint, className = '', children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
        {label}
        {required &&
        <span className="ml-0.5 text-red-600" aria-hidden="true">
            *
          </span>
        }
      </label>
      {children}
      {error ?
      <p id={`${id}-error`} role="alert" className="mt-2 flex items-center gap-1.5 text-sm text-red-600">
          <AlertCircleIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p> :
      hint ?
      <p id={`${id}-hint`} className="mt-2 text-xs text-ink/60">
          {hint}
        </p> :
      null}
    </div>);

}