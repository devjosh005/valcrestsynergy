// Central company profile. Replace every bracketed or placeholder value with verified company information.
export const company = {
  name: 'Valcrest Integreated Synergy Limited',
  shortName: 'Valcrest',
  wordmark: 'VALCREST',
  wordmarkSub: 'Integreated Synergy Limited',
  description:
  'An integrated energy services company delivering oilfield support, engineering, EPC/EPCI, equipment supply, operations, integrity, workforce and HSSE solutions across the energy value chain.',
  foundedYear: '[Year]',
  address: {
    line1: '[Street Address], [Suite / Floor]',
    line2: '[City], [State / Region] [Postal Code]',
    country: '[Country]'
  },
  phone: '+00 (000) 000 0000',
  phoneHref: 'tel:+000000000000',
  email: 'info@valcrestsynergy.com',
  careersEmail: 'careers@yourcompany.com',
  hours: [
  { days: 'Monday – Friday', time: '08:00 – 17:00' },
  { days: 'Saturday', time: 'By appointment' },
  { days: 'Sunday & public holidays', time: 'Closed' }],

  // Configurable office location used by the embedded map on the Contact page.
  mapQuery: 'Houston, Texas',
  socials: [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { name: 'X', href: 'https://x.com/', icon: 'x' },
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { name: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' }] as
  const,
  // Placeholder metrics — replace with verified figures before publishing.
  stats: [
  { value: '25', suffix: '+', label: 'Years of industry experience' },
  { value: '350', suffix: '+', label: 'Projects successfully delivered' },
  { value: '120', suffix: '+', label: 'Clients served' },
  { value: '800', suffix: '+', label: 'Dedicated professionals' }]

};
