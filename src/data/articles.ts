import { images } from './images';
import type { Article, ArticleCategory } from '../types/content';

// DEMO EDITORIAL CONTENT — sample articles for layout purposes only.
export const articleCategories: ArticleCategory[] = [
'Company Updates',
'Industry Insights',
'Engineering & Technology',
'Safety & Sustainability',
'Energy Market Developments'];


export const articles: Article[] = [
{
  slug: 'expanding-integrated-services',
  title: 'Expanding Our Integrated Services Offering for Operators',
  category: 'Company Updates',
  date: '2026-09-22',
  readTime: '4 min read',
  image: images.refineryDusk,
  imageAlt: 'Refinery distillation columns illuminated at dusk',
  excerpt: 'Why we are bringing engineering, supply, inspection and maintenance closer together — and what it means for the clients we serve.',
  author: 'Editorial Team',
  featured: true,
  body: [
  { paragraphs: [
    'Operators increasingly ask for fewer interfaces and clearer accountability. Every additional contractor on a project adds coordination effort, handover risk and potential for information to be lost between teams.',
    'This sample update describes how a services company might respond: by structuring its engineering, equipment supply, inspection and maintenance teams so they can be engaged individually or as a single integrated package.']
  },
  { heading: 'One technical thread', paragraphs: [
    'When the engineers who design a modification also understand how it will be inspected and maintained, decisions made early in a project carry through to operations. Integrated delivery is less about scale and more about continuity of knowledge.']
  },
  { heading: 'What stays the same', paragraphs: [
    'Integration should never mean bundling services clients do not need. Each service line remains available on its own, with the same standards of safety, quality and documentation.',
    'Replace this demo article with your own company announcement before publishing.']
  }]

},
{
  slug: 'managing-ageing-infrastructure',
  title: 'Managing Ageing Infrastructure: Why Integrity Programmes Matter More Than Ever',
  category: 'Industry Insights',
  date: '2026-09-08',
  readTime: '6 min read',
  image: images.pipelineConstruction,
  imageAlt: 'Steel pipeline sections on supports during construction',
  excerpt: 'Many facilities are operating well beyond their original design life. A structured integrity programme is the difference between managed risk and unmanaged risk.',
  author: 'Editorial Team',
  body: [
  { paragraphs: [
    'A significant share of the world’s production, processing and pipeline infrastructure was built decades ago. Much of it continues to perform well — but only where degradation is understood and actively managed.']
  },
  { heading: 'From inspection to integrity', paragraphs: [
    'Inspection produces data; integrity management turns that data into decisions. The most effective programmes link inspection findings to risk ranking, maintenance planning and investment cases.',
    'Risk-based inspection helps operators concentrate effort where both the likelihood and the consequence of failure are highest, rather than inspecting everything on a fixed calendar.']
  },
  { heading: 'Practical first steps', paragraphs: [
    'Start with a reliable asset register, consolidate historical inspection records and agree clear acceptance criteria. These foundations make every subsequent decision faster and more defensible.']
  }]

},
{
  slug: 'digital-twins-brownfield-engineering',
  title: 'Digital Twins in Brownfield Engineering: Practical Gains and Pitfalls',
  category: 'Engineering & Technology',
  date: '2026-08-19',
  readTime: '5 min read',
  image: images.controlRoom,
  imageAlt: 'Operators monitoring process screens in a control room',
  excerpt: 'Laser scanning and 3D models can transform modification projects — if the data is maintained and the scope is realistic.',
  author: 'Editorial Team',
  body: [
  { paragraphs: [
    'Brownfield modifications are notoriously difficult to design accurately. As-built drawings are often out of date, and clashes discovered during construction are expensive to resolve.']
  },
  { heading: 'Where the value is', paragraphs: [
    'Point-cloud surveys combined with 3D design models allow engineers to check fit-up, access and tie-in points before any steel is cut. Even a partial digital twin of the affected area can significantly reduce field rework.']
  },
  { heading: 'Common pitfalls', paragraphs: [
    'The most common failure is treating the model as a one-off deliverable. Without a plan to keep it current, a digital twin quickly becomes another out-of-date drawing set.',
    'Define ownership, update triggers and data standards at the outset, and scale ambition to what operations can realistically maintain.']
  }]

},
{
  slug: 'reducing-methane-through-maintenance',
  title: 'Reducing Methane Emissions Through Better Maintenance Practices',
  category: 'Safety & Sustainability',
  date: '2026-07-30',
  readTime: '5 min read',
  image: images.environmentMonitoring,
  imageAlt: 'Environmental specialist taking water samples near a facility',
  excerpt: 'Many emission sources are maintenance issues in disguise. Leak detection, valve care and disciplined work practices make a measurable difference.',
  author: 'Editorial Team',
  body: [
  { paragraphs: [
    'Fugitive emissions from valves, flanges, seals and connectors are often small individually but significant in aggregate. Addressing them is one of the most direct ways operators can reduce their environmental footprint.']
  },
  { heading: 'Maintenance as an emissions lever', paragraphs: [
    'Regular leak detection and repair surveys, correct valve packing, and timely seal replacement on rotating equipment all reduce losses. These are routine tasks — the gain comes from doing them consistently.']
  },
  { heading: 'Building it into the plan', paragraphs: [
    'Integrating emissions checks into preventive maintenance routines, rather than running them as separate campaigns, helps sustain results and keeps records in one place.']
  }]

},
{
  slug: 'supply-chain-lead-times',
  title: 'Equipment Lead Times and What Operators Can Do About Them',
  category: 'Energy Market Developments',
  date: '2026-07-14',
  readTime: '4 min read',
  image: images.procurementLogistics,
  imageAlt: 'Steel pipe and containers at a logistics yard',
  excerpt: 'Long lead times for critical equipment continue to shape project schedules. Earlier engagement and smarter specifications can help.',
  author: 'Editorial Team',
  body: [
  { paragraphs: [
    'Lead times for certain categories of engineered equipment remain a planning challenge for many projects. Waiting until detailed design is complete before engaging the supply chain can put schedules at risk.']
  },
  { heading: 'Engage earlier', paragraphs: [
    'Identifying long-lead items during front-end engineering and placing early enquiries gives project teams a realistic view of delivery windows while there is still flexibility in the schedule.']
  },
  { heading: 'Specify sensibly', paragraphs: [
    'Over-specification narrows the pool of qualified suppliers. Where standards allow, accepting equivalent manufacturer designs can widen options without compromising integrity.']
  }]

},
{
  slug: 'building-stop-work-culture',
  title: 'Building a Stop-Work Culture on Every Site',
  category: 'Safety & Sustainability',
  date: '2026-06-26',
  readTime: '4 min read',
  image: images.hseTraining,
  imageAlt: 'Supervisor leading a safety briefing with a field crew',
  excerpt: 'A stop-work policy is only as strong as the confidence people have to use it. Leadership behaviour makes the difference.',
  author: 'Editorial Team',
  body: [
  { paragraphs: [
    'Almost every company has a written stop-work authority. Far fewer have a workforce that uses it without hesitation, particularly when schedules are tight.']
  },
  { heading: 'Recognise the stop', paragraphs: [
    'When someone stops a job, the first response from supervision shapes whether they will do it again. Thanking people publicly, even when the concern proves unfounded, reinforces the behaviour.']
  },
  { heading: 'Make it practical', paragraphs: [
    'Toolbox talks, clear escalation routes and visible follow-up on concerns raised all help turn a policy statement into everyday practice.']
  }]

}];


export function getArticle(slug: string | undefined): Article | undefined {
  return articles.find((a) => a.slug === slug);
}