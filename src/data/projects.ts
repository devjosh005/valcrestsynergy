import { images } from './images';
import type { Project, ProjectCategory } from '../types/content';

// SAMPLE PROJECTS — illustrative only. Replace with verified company project information.
export const projectCategories: ProjectCategory[] = [
'Engineering',
'Oilfield Supply',
'Pipeline Infrastructure',
'Facility Maintenance',
'Procurement',
'Inspection Services'];


export const projects: Project[] = [
{
  slug: 'gas-processing-debottlenecking',
  title: 'Gas Processing Facility Debottlenecking Study',
  category: 'Engineering',
  location: '[Region], [Country]',
  sector: 'Gas Processing',
  client: '[Client Name]',
  duration: '[Duration]',
  image: images.gasPlant,
  imageAlt: 'Onshore natural gas processing facility under clear sky',
  gallery: [
  { src: images.gasPlant, alt: 'Gas processing plant overview' },
  { src: images.engineeringDesign, alt: 'Engineers reviewing the plant 3D model' },
  { src: images.compressorStation, alt: 'Compressor units within the facility' }],

  summary: 'Process and mechanical study to identify capacity constraints and define a phased upgrade plan for an operating gas plant.',
  overview: [
  'The operator required additional processing capacity from an existing facility without a major new-build investment. Our engineering team was engaged to assess current performance, identify bottlenecks and define practical modifications.',
  'Working from operating data, site surveys and process simulation, the team developed a prioritised set of modifications and a phased implementation plan aligned with planned maintenance windows.'],

  scope: [
  'Review of operating data and existing design documentation',
  'Process simulation of current and target throughput cases',
  'Hydraulic and equipment rating checks',
  'Identification and ranking of capacity constraints',
  'Concept-level modification design and cost estimate',
  'Phased implementation and tie-in strategy'],

  services: ['engineering-technical-services', 'inspection-asset-integrity'],
  highlights: [
  { title: 'Delivery model', text: 'Integrated study team working alongside client operations' },
  { title: 'Key outcome', text: 'Phased upgrade roadmap aligned to shutdown windows' },
  { title: 'Disciplines', text: 'Process, mechanical, piping and instrumentation' }],

  featured: true
},
{
  slug: 'wellhead-valve-supply-programme',
  title: 'Wellhead & Valve Package Supply Programme',
  category: 'Oilfield Supply',
  location: '[Field Name], [Country]',
  sector: 'Exploration & Production',
  client: '[Client Name]',
  duration: '[Duration]',
  image: images.equipmentValves,
  imageAlt: 'Gate valves and flanges prepared for dispatch',
  gallery: [
  { src: images.equipmentValves, alt: 'Valves staged in the warehouse' },
  { src: images.procurementLogistics, alt: 'Equipment loading at the logistics yard' },
  { src: images.pumpjacksSunset, alt: 'Onshore oilfield at sunset' }],

  summary: 'Framework supply of valves, fittings and wellhead consumables for an onshore drilling and workover campaign.',
  overview: [
  'An onshore operator required a reliable supply of certified valves and consumables to support an ongoing drilling and workover programme across multiple well pads.',
  'We established a call-off framework with agreed specifications, stocking arrangements and delivery commitments, supported by full documentation for every item supplied.'],

  scope: [
  'Specification review and technical clarification',
  'Supplier selection from the approved vendor network',
  'Pre-dispatch inspection and documentation review',
  'Stock holding of agreed fast-moving items',
  'Scheduled and urgent deliveries to well sites'],

  services: ['oilfield-equipment-supply', 'procurement-supply-chain'],
  highlights: [
  { title: 'Supply model', text: 'Call-off framework with stocked critical items' },
  { title: 'Documentation', text: 'Material certificates supplied with every delivery' },
  { title: 'Coverage', text: 'Multiple well pads served from a single supply point' }]

},
{
  slug: 'cross-country-trunk-line',
  title: 'Cross-Country Trunk Line Installation',
  category: 'Pipeline Infrastructure',
  location: '[Route], [Country]',
  sector: 'Midstream Transmission',
  client: '[Client Name]',
  duration: '[Duration]',
  image: images.pipelineAerial,
  imageAlt: 'Aerial view of a pipeline crossing desert terrain at sunset',
  gallery: [
  { src: images.pipelineAerial, alt: 'Completed pipeline section from the air' },
  { src: images.pipelineConstruction, alt: 'Pipe stringing and welding along the right-of-way' },
  { src: images.inspectionNdt, alt: 'Ultrasonic testing of a girth weld' }],

  summary: 'Construction support for an onshore trunk line, including welding, NDT, hydrotesting and right-of-way reinstatement.',
  overview: [
  'The project involved installation of a buried onshore trunk line connecting production facilities to a regional processing hub, crossing varied terrain and several infrastructure corridors.',
  'Our teams supported welding, inspection and testing activities, with dedicated HSE supervision and environmental controls throughout construction and reinstatement.'],

  scope: [
  'Right-of-way preparation and pipe stringing',
  'Mainline welding and weld inspection',
  'Road and utility crossings',
  'Hydrostatic testing and dewatering',
  'Coating inspection and repair',
  'Reinstatement and as-built documentation'],

  services: ['pipeline-services', 'inspection-asset-integrity'],
  highlights: [
  { title: 'Asset type', text: 'Buried onshore transmission pipeline' },
  { title: 'Quality focus', text: '100% weld inspection to project specification' },
  { title: 'Environment', text: 'Reinstatement to landowner and regulatory requirements' }],

  featured: true
},
{
  slug: 'offshore-platform-maintenance',
  title: 'Offshore Platform Maintenance Campaign',
  category: 'Facility Maintenance',
  location: '[Offshore Field], [Country]',
  sector: 'Offshore Production',
  client: '[Client Name]',
  duration: '[Duration]',
  image: images.offshoreCrew,
  imageAlt: 'Offshore crew working on the deck of a production platform',
  gallery: [
  { src: images.offshoreCrew, alt: 'Maintenance crew on the platform deck' },
  { src: images.heroOffshore, alt: 'Offshore platform at dusk' },
  { src: images.maintenanceTechnician, alt: 'Technician servicing rotating equipment' }],

  summary: 'Multi-discipline maintenance campaign to address deferred work and improve equipment reliability on an offshore platform.',
  overview: [
  'A backlog of deferred maintenance was affecting equipment availability on an offshore production platform. The operator engaged us to plan and execute a focused campaign within strict bed-space limits.',
  'Work was prioritised by safety and production criticality and executed by multi-skilled crews under the operator’s permit-to-work system.'],

  scope: [
  'Backlog review and criticality-based prioritisation',
  'Campaign planning within bed-space constraints',
  'Mechanical, electrical and instrumentation maintenance',
  'Rotating equipment overhauls',
  'Close-out reporting and maintenance history updates'],

  services: ['operations-maintenance', 'inspection-asset-integrity'],
  highlights: [
  { title: 'Execution model', text: 'Self-managed multi-skilled campaign team' },
  { title: 'Priority', text: 'Safety-critical and production-critical equipment first' },
  { title: 'Handover', text: 'Updated maintenance records for the operator’s CMMS' }],

  featured: true
},
{
  slug: 'compression-upgrade-procurement',
  title: 'Long-Lead Procurement for Compression Upgrade',
  category: 'Procurement',
  location: '[Region], [Country]',
  sector: 'Gas Compression',
  client: '[Client Name]',
  duration: '[Duration]',
  image: images.compressorStation,
  imageAlt: 'Gas compressor units inside a compressor station',
  gallery: [
  { src: images.compressorStation, alt: 'Compressor hall' },
  { src: images.procurementLogistics, alt: 'Equipment freight at the port' },
  { src: images.controlRoom, alt: 'Control room monitoring compression systems' }],

  summary: 'Procurement, expediting and logistics management for long-lead compression equipment on a capacity upgrade project.',
  overview: [
  'A compression upgrade project depended on several long-lead equipment packages sourced from international manufacturers. Schedule certainty for these items was critical to the overall project.',
  'We managed the procurement cycle from enquiry to delivery, with structured expediting and logistics planning aligned to the site installation sequence.'],

  scope: [
  'Enquiry packages and technical bid evaluation',
  'Purchase order placement and administration',
  'Manufacturing progress expediting',
  'Factory acceptance test coordination',
  'International freight and customs coordination'],

  services: ['procurement-supply-chain', 'oilfield-equipment-supply'],
  highlights: [
  { title: 'Focus', text: 'Critical-path long-lead equipment' },
  { title: 'Visibility', text: 'Regular expediting reports to the project team' },
  { title: 'Logistics', text: 'Delivery sequenced to installation readiness' }]

},
{
  slug: 'tank-farm-integrity-assessment',
  title: 'Tank Farm Integrity Assessment',
  category: 'Inspection Services',
  location: '[Terminal], [Country]',
  sector: 'Storage & Terminals',
  client: '[Client Name]',
  duration: '[Duration]',
  image: images.storageTanks,
  imageAlt: 'Row of large white petroleum storage tanks',
  gallery: [
  { src: images.storageTanks, alt: 'Storage tanks at the terminal' },
  { src: images.inspectionNdt, alt: 'Thickness measurement on steel plate' },
  { src: images.environmentMonitoring, alt: 'Environmental sampling near the facility' }],

  summary: 'Condition assessment and risk-based inspection planning for a petroleum storage terminal.',
  overview: [
  'The terminal operator needed a clear picture of the condition of its storage tanks and associated piping to plan maintenance and future investment.',
  'Our inspection team carried out external inspections and thickness surveys, consolidated historical data and developed a risk-based inspection plan for the facility.'],

  scope: [
  'Review of historical inspection records',
  'External visual and thickness surveys',
  'Settlement and foundation observations',
  'Corrosion assessment of associated piping',
  'Risk ranking and inspection interval recommendations'],

  services: ['inspection-asset-integrity', 'engineering-technical-services'],
  highlights: [
  { title: 'Asset type', text: 'Above-ground storage tanks and terminal piping' },
  { title: 'Deliverable', text: 'Risk-based inspection plan and condition register' },
  { title: 'Outcome', text: 'Prioritised maintenance and investment programme' }]

}];


export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug);
}