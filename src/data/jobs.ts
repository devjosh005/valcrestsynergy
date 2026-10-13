import type { Job } from '../types/content';

// EXAMPLE VACANCIES — placeholders only, not actual open positions.
export const jobs: Job[] = [
{
  slug: 'senior-mechanical-engineer',
  title: 'Senior Mechanical Engineer',
  department: 'Engineering',
  location: '[City], [Country]',
  type: 'Full-time',
  experience: '8+ years',
  summary: 'Lead mechanical and piping design activities on brownfield modification and upgrade projects for oil and gas facilities.',
  responsibilities: [
  'Lead mechanical engineering deliverables from concept through detailed design',
  'Prepare and review equipment specifications, datasheets and calculations',
  'Coordinate with process, piping, electrical and instrumentation disciplines',
  'Support procurement with technical bid evaluations',
  'Provide site support during construction and commissioning'],

  requirements: [
  'Degree in Mechanical Engineering or equivalent',
  'Experience in oil and gas facility design',
  'Working knowledge of applicable API and ASME codes',
  'Strong communication and client-facing skills',
  'Professional registration is an advantage']

},
{
  slug: 'pipeline-construction-supervisor',
  title: 'Pipeline Construction Supervisor',
  department: 'Pipeline Services',
  location: '[Project Site], [Country]',
  type: 'Rotational',
  experience: '10+ years',
  summary: 'Supervise pipeline construction crews, ensuring work is delivered safely, to specification and on schedule.',
  responsibilities: [
  'Plan and supervise daily construction activities on the right-of-way',
  'Enforce permit-to-work, lifting and excavation controls',
  'Coordinate welding, NDT and coating activities',
  'Report progress, quality and HSE performance',
  'Lead toolbox talks and promote stop-work authority'],

  requirements: [
  'Extensive onshore pipeline construction experience',
  'Recognised supervisory and safety training',
  'Familiarity with welding and hydrotest procedures',
  'Ability to work in remote locations on rotation',
  'Valid driving licence']

},
{
  slug: 'ndt-technician-level-ii',
  title: 'NDT Technician (Level II)',
  department: 'Inspection & Integrity',
  location: '[City], [Country]',
  type: 'Full-time',
  experience: '3+ years',
  summary: 'Perform conventional NDT inspections on pressure equipment, piping and storage tanks across client facilities.',
  responsibilities: [
  'Carry out UT, MT and PT inspections to approved procedures',
  'Perform thickness surveys and corrosion mapping',
  'Record results accurately and prepare inspection reports',
  'Maintain and calibrate inspection equipment',
  'Comply with site HSE requirements at all times'],

  requirements: [
  'Level II certification in at least two NDT methods',
  'Experience in oil and gas or petrochemical facilities',
  'Attention to detail and clear reporting',
  'Willingness to travel to client sites',
  'Phased array experience is an advantage']

},
{
  slug: 'procurement-specialist',
  title: 'Procurement Specialist',
  department: 'Supply Chain',
  location: '[City], [Country]',
  type: 'Full-time',
  experience: '5+ years',
  summary: 'Manage the purchase cycle for engineered equipment and bulk materials on energy projects.',
  responsibilities: [
  'Issue enquiries and coordinate technical and commercial evaluations',
  'Place and administer purchase orders',
  'Expedite suppliers and report on delivery status',
  'Maintain vendor records and performance data',
  'Coordinate with logistics on shipping and customs'],

  requirements: [
  'Degree in Supply Chain, Engineering or Business',
  'Procurement experience in oil and gas or heavy industry',
  'Strong negotiation and organisational skills',
  'Proficiency with ERP or procurement systems',
  'Professional procurement qualification is an advantage']

}];


export function getJob(slug: string | undefined): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}