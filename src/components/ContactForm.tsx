import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, Loader2Icon, SendIcon } from 'lucide-react';
import { FormField } from './FormField';
import { DemoNotice } from './DemoNotice';
import { useContactForm, type ContactValues } from '../hooks/useContactForm';
import { services } from '../data/services';
import { inputClass } from '../utils/format';

type ContactFormProps = {
  initial?: Partial<ContactValues>;
};

export function ContactForm({ initial }: ContactFormProps) {
  const { values, errors, status, setField, blurField, handleSubmit, reset } = useContactForm(initial);

  const fieldProps = (name: keyof ContactValues) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onBlur: () => blurField(name),
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: inputClass(Boolean(errors[name]))
  });

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'success' ?
      <motion.div
        key="success"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        role="status"
        className="flex flex-col items-start py-6">
        
          <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <h3 className="mt-6 text-2xl font-bold text-navy">Thank you, {values.fullName.split(' ')[0]}.</h3>
          <p className="mt-3 max-w-md leading-relaxed text-ink/70">
            Your inquiry about <strong className="font-semibold text-navy">{values.service}</strong> passed validation and is ready to send.
          </p>
          <div className="mt-6">
            <DemoNotice>
              Demo only: this form is not yet connected to a backend, so no message has been delivered. Connect your email service or CRM at the form’s submit handler before going live.
            </DemoNotice>
          </div>
          <button
          type="button"
          onClick={reset}
          className="mt-8 h-11 rounded-md border border-navy/20 px-5 text-sm font-semibold text-navy transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-white">
          
            Send another inquiry
          </button>
        </motion.div> :

      <motion.form
        key="form"
        initial={false}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onSubmit={handleSubmit}
        noValidate
        aria-label="Business inquiry form"
        className="grid gap-5 sm:grid-cols-2">
        
          <FormField id="contact-fullName" label="Full Name" required error={errors.fullName}>
            <input type="text" autoComplete="name" placeholder="Jane Smith" {...fieldProps('fullName')} onChange={(e) => setField('fullName', e.target.value)} />
          </FormField>
          <FormField id="contact-company" label="Company Name" required error={errors.company}>
            <input type="text" autoComplete="organization" placeholder="Company Ltd." {...fieldProps('company')} onChange={(e) => setField('company', e.target.value)} />
          </FormField>
          <FormField id="contact-email" label="Business Email" required error={errors.email}>
            <input type="email" autoComplete="email" placeholder="name@company.com" {...fieldProps('email')} onChange={(e) => setField('email', e.target.value)} />
          </FormField>
          <FormField id="contact-phone" label="Phone Number" error={errors.phone}>
            <input type="tel" autoComplete="tel" placeholder="+00 000 000 0000" {...fieldProps('phone')} onChange={(e) => setField('phone', e.target.value)} />
          </FormField>
          <FormField id="contact-service" label="Service of Interest" required error={errors.service}>
            <select {...fieldProps('service')} onChange={(e) => setField('service', e.target.value)}>
              <option value="">Select a service</option>
              {services.map((s) =>
            <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
            )}
              <option value="Multiple / integrated services">Multiple / integrated services</option>
              <option value="General inquiry">General inquiry</option>
            </select>
          </FormField>
          <FormField id="contact-subject" label="Subject" required error={errors.subject}>
            <input type="text" placeholder="e.g. Request for quotation" {...fieldProps('subject')} onChange={(e) => setField('subject', e.target.value)} />
          </FormField>
          <FormField id="contact-message" label="Message" required error={errors.message} className="sm:col-span-2">
            <textarea
            rows={6}
            placeholder="Briefly describe your project, location, scope and timeline."
            {...fieldProps('message')}
            onChange={(e) => setField('message', e.target.value)} />
          
          </FormField>
          <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-ink/60">
              Fields marked <span className="text-red-600">*</span> are required.
            </p>
            <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-navy px-7 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-petrol active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
            
              {status === 'submitting' ?
            <>
                  <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" /> Submitting…
                </> :

            <>
                  Submit Inquiry <SendIcon className="h-4 w-4" aria-hidden="true" />
                </>
            }
            </button>
          </div>
        </motion.form>
      }
    </AnimatePresence>);

}