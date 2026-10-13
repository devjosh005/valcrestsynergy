import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, FileTextIcon, Loader2Icon, UploadCloudIcon, XIcon } from 'lucide-react';
import { FormField } from './FormField';
import { DemoNotice } from './DemoNotice';
import { useApplicationForm, type ApplicationValues } from '../hooks/useApplicationForm';
import { jobs } from '../data/jobs';
import { inputClass } from '../utils/format';

export function ApplicationForm({ defaultPosition = '' }: {defaultPosition?: string;}) {
  const { values, resume, errors, status, setField, blurField, selectResume, handleSubmit, reset } =
  useApplicationForm(defaultPosition);
  const fileRef = useRef<HTMLInputElement>(null);

  const fieldProps = (name: keyof ApplicationValues) => ({
    id: `apply-${name}`,
    name,
    value: values[name],
    onBlur: () => blurField(name),
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `apply-${name}-error` : undefined,
    className: inputClass(Boolean(errors[name]))
  });

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        role="status"
        className="py-4">
        
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-navy">Application ready, {values.fullName.split(' ')[0]}.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-ink/70">
          Your application for <strong className="font-semibold text-navy">{values.position}</strong> with{' '}
          <strong className="font-semibold text-navy">{resume?.name}</strong> passed validation.
        </p>
        <div className="mt-6">
          <DemoNotice>
            Demo only: applications are not yet connected to an applicant tracking system, so nothing has been submitted.
          </DemoNotice>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-8 h-11 rounded-md border border-navy/20 px-5 text-sm font-semibold text-navy transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-white">
          
          Start a new application
        </button>
      </motion.div>);

  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Job application form" className="grid gap-5 sm:grid-cols-2">
      <FormField id="apply-fullName" label="Full Name" required error={errors.fullName}>
        <input type="text" autoComplete="name" {...fieldProps('fullName')} onChange={(e) => setField('fullName', e.target.value)} />
      </FormField>
      <FormField id="apply-email" label="Email Address" required error={errors.email}>
        <input type="email" autoComplete="email" {...fieldProps('email')} onChange={(e) => setField('email', e.target.value)} />
      </FormField>
      <FormField id="apply-phone" label="Phone Number" required error={errors.phone}>
        <input type="tel" autoComplete="tel" {...fieldProps('phone')} onChange={(e) => setField('phone', e.target.value)} />
      </FormField>
      <FormField id="apply-position" label="Position Applied For" required error={errors.position}>
        <select {...fieldProps('position')} onChange={(e) => setField('position', e.target.value)}>
          <option value="">Select a position</option>
          {jobs.map((j) =>
          <option key={j.slug} value={j.title}>
              {j.title}
            </option>
          )}
          <option value="General application">General application</option>
        </select>
      </FormField>

      <FormField id="apply-resume" label="Resume Upload" required error={errors.resume} hint="PDF, DOC or DOCX, up to 5 MB." className="sm:col-span-2">
        <input
          ref={fileRef}
          id="apply-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          aria-invalid={Boolean(errors.resume)}
          aria-describedby={errors.resume ? 'apply-resume-error' : 'apply-resume-hint'}
          onChange={(e) => selectResume(e.target.files?.[0] ?? null)} />
        
        <AnimatePresence mode="wait" initial={false}>
          {resume ?
          <motion.div
            key="file"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-between gap-3 rounded-md border border-navy/15 bg-mist px-4 py-3">
            
              <span className="flex min-w-0 items-center gap-3">
                <FileTextIcon className="h-5 w-5 shrink-0 text-petrol" aria-hidden="true" />
                <span className="truncate text-sm font-medium text-navy">{resume.name}</span>
                <span className="shrink-0 text-xs text-ink/60">{(resume.size / 1024 / 1024).toFixed(2)} MB</span>
              </span>
              <button
              type="button"
              onClick={() => {
                selectResume(null);
                if (fileRef.current) fileRef.current.value = '';
              }}
              aria-label="Remove file"
              className="grid h-8 w-8 place-items-center rounded text-ink/60 hover:bg-white hover:text-navy">
              
                <XIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </motion.div> :

          <motion.label
            key="drop"
            htmlFor="apply-resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={`flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed px-4 py-8 text-center transition-colors duration-150 hover:border-petrol hover:bg-mist ${
            errors.resume ? 'border-red-400' : 'border-navy/20'}`
            }>
            
              <UploadCloudIcon className="h-7 w-7 text-petrol" aria-hidden="true" />
              <span className="mt-3 text-sm font-semibold text-navy">Click to choose a file</span>
              <span className="mt-1 text-xs text-ink/60">Your resume or CV</span>
            </motion.label>
          }
        </AnimatePresence>
      </FormField>

      <FormField id="apply-coverLetter" label="Cover Letter / Additional Information" className="sm:col-span-2">
        <textarea rows={5} {...fieldProps('coverLetter')} onChange={(e) => setField('coverLetter', e.target.value)} />
      </FormField>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink/60">
          Fields marked <span className="text-red-600">*</span> are required.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 text-[15px] font-semibold text-navy transition-[background-color,transform] duration-150 ease-out hover:bg-gold-light active:scale-[0.98] disabled:opacity-70">
          
          {status === 'submitting' ?
          <>
              <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" /> Submitting…
            </> :

          'Submit Application'
          }
        </button>
      </div>
    </form>);

}