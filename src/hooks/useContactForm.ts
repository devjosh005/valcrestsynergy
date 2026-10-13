import { FormEvent, useState } from 'react';
import { isBlank, isValidEmail, isValidPhone } from '../utils/validation';

export type ContactValues = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
export type FormStatus = 'idle' | 'submitting' | 'success';

const empty: ContactValues = { fullName: '', company: '', email: '', phone: '', service: '', subject: '', message: '' };
const order: (keyof ContactValues)[] = ['fullName', 'company', 'email', 'phone', 'service', 'subject', 'message'];

function validateField(name: keyof ContactValues, value: string): string | undefined {
  switch (name) {
    case 'fullName':
      return isBlank(value) ? 'Please enter your full name.' : undefined;
    case 'company':
      return isBlank(value) ? 'Please enter your company name.' : undefined;
    case 'email':
      if (isBlank(value)) return 'Please enter your business email.';
      return isValidEmail(value) ? undefined : 'Please enter a valid email address.';
    case 'phone':
      if (isBlank(value)) return undefined;
      return isValidPhone(value) ? undefined : 'Please enter a valid phone number.';
    case 'service':
      return isBlank(value) ? 'Please select a service of interest.' : undefined;
    case 'subject':
      return isBlank(value) ? 'Please add a subject.' : undefined;
    case 'message':
      if (isBlank(value)) return 'Please tell us about your requirement.';
      return value.trim().length < 20 ? 'Please provide a little more detail (at least 20 characters).' : undefined;
    default:
      return undefined;
  }
}

export function useContactForm(initial: Partial<ContactValues> = {}) {
  const [values, setValues] = useState<ContactValues>({ ...empty, ...initial });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const setField = (name: keyof ContactValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const blurField = (name: keyof ContactValues) => {
    setErrors((prev) => ({ ...prev, [name]: validateField(name, values[name]) }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: ContactErrors = {};
    order.forEach((key) => {
      const err = validateField(key, values[key]);
      if (err) next[key] = err;
    });
    setErrors(next);
    const first = order.find((k) => next[k]);
    if (first) {
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setStatus('submitting');
    // INTEGRATION POINT: send `values` to your form backend, CRM or email API here.
    // No data is transmitted in this front-end demonstration.
    window.setTimeout(() => setStatus('success'), 800);
  };

  const reset = () => {
    setValues({ ...empty, ...initial });
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, setField, blurField, handleSubmit, reset };
}