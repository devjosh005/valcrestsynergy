import { FormEvent, useState } from 'react';
import { isBlank, isValidEmail, isValidPhone } from '../utils/validation';
import type { FormStatus } from './useContactForm';

export type ApplicationValues = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  coverLetter: string;
};

type Key = keyof ApplicationValues | 'resume';
export type ApplicationErrors = Partial<Record<Key, string>>;

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED = ['pdf', 'doc', 'docx'];
const order: Key[] = ['fullName', 'email', 'phone', 'position', 'resume'];

function validateText(name: keyof ApplicationValues, value: string): string | undefined {
  if (name === 'fullName') return isBlank(value) ? 'Please enter your full name.' : undefined;
  if (name === 'email') {
    if (isBlank(value)) return 'Please enter your email address.';
    return isValidEmail(value) ? undefined : 'Please enter a valid email address.';
  }
  if (name === 'phone') {
    if (isBlank(value)) return 'Please enter your phone number.';
    return isValidPhone(value) ? undefined : 'Please enter a valid phone number.';
  }
  if (name === 'position') return isBlank(value) ? 'Please select a position.' : undefined;
  return undefined;
}

function validateResume(file: File | null): string | undefined {
  if (!file) return 'Please upload your resume.';
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  if (!ALLOWED.includes(ext)) return 'Accepted formats: PDF, DOC or DOCX.';
  if (file.size > MAX_SIZE) return 'File must be 5 MB or smaller.';
  return undefined;
}

export function useApplicationForm(defaultPosition = '') {
  const initial: ApplicationValues = { fullName: '', email: '', phone: '', position: defaultPosition, coverLetter: '' };
  const [values, setValues] = useState<ApplicationValues>(initial);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<ApplicationErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const setField = (name: keyof ApplicationValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validateText(name, value) }));
  };

  const blurField = (name: keyof ApplicationValues) => {
    setErrors((prev) => ({ ...prev, [name]: validateText(name, values[name]) }));
  };

  const selectResume = (file: File | null) => {
    setResume(file);
    setErrors((prev) => ({ ...prev, resume: file ? validateResume(file) : undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: ApplicationErrors = {};
    (['fullName', 'email', 'phone', 'position'] as const).forEach((k) => {
      const err = validateText(k, values[k]);
      if (err) next[k] = err;
    });
    const resumeErr = validateResume(resume);
    if (resumeErr) next.resume = resumeErr;
    setErrors(next);
    const first = order.find((k) => next[k]);
    if (first) {
      document.getElementById(`apply-${first}`)?.focus();
      return;
    }
    setStatus('submitting');
    // INTEGRATION POINT: upload `resume` and send `values` to your ATS or HR inbox here.
    // No data is transmitted in this front-end demonstration.
    window.setTimeout(() => setStatus('success'), 900);
  };

  const reset = () => {
    setValues(initial);
    setResume(null);
    setErrors({});
    setStatus('idle');
  };

  return { values, resume, errors, status, setField, blurField, selectResume, handleSubmit, reset };
}