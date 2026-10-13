import type { LucideIcon } from 'lucide-react';

export type TitledText = {
  title: string;
  text: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  heroImage: string;
  summary: string;
  intro: string;
  description: string[];
  scope: string[];
  capabilities: TitledText[];
  industries: string[];
  benefits: TitledText[];
};

export type ProjectCategory =
'Engineering' |
'Oilfield Supply' |
'Pipeline Infrastructure' |
'Facility Maintenance' |
'Procurement' |
'Inspection Services';

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  sector: string;
  client: string;
  duration: string;
  image: string;
  imageAlt: string;
  gallery: {src: string;alt: string;}[];
  summary: string;
  overview: string[];
  scope: string[];
  services: string[];
  highlights: TitledText[];
  featured?: boolean;
};

export type ArticleCategory =
'Company Updates' |
'Industry Insights' |
'Engineering & Technology' |
'Safety & Sustainability' |
'Energy Market Developments';

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  author: string;
  featured?: boolean;
  body: {heading?: string;paragraphs: string[];}[];
};

export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export type NavItem = {
  label: string;
  to: string;
  hasDropdown?: boolean;
};