import {
  DraftingCompassIcon,
  CogIcon,
  TruckIcon,
  WaypointsIcon,
  ScanSearchIcon,
  WrenchIcon } from
'lucide-react';
import { images } from './images';
import type { Service } from '../types/content';

export const services: Service[] = [
{
  slug: 'engineering-technical-services',
  title: 'Engineering & Technical Services',
  shortTitle: 'Engineering & Technical Services',
  icon: DraftingCompassIcon,
  image: images.engineeringDesign,
  imageAlt: 'Engineers reviewing a 3D plant design model on large monitors',
  heroImage: images.gasPlant,
  summary:
  'Multidisciplinary design engineering and technical consultancy that turns operating requirements into buildable, compliant solutions.',
  intro:
  'From concept studies to detailed design and site support, our engineers help operators make sound technical decisions early — where they have the greatest influence on cost, schedule and safety.',
  description: [
  'Our engineering teams work across process, mechanical, piping, electrical and instrumentation disciplines to deliver integrated designs for greenfield and brownfield facilities. We combine practical field knowledge with recognised industry codes and standards so that designs are not only correct on paper, but constructible and maintainable in the field.',
  'Whether you need a feasibility assessment, a debottlenecking study or a complete detailed design package, we scale our involvement to your project and integrate with your in-house engineering, procurement and construction teams.'],

  scope: [
  'Conceptual and feasibility studies',
  'Front-end engineering design (FEED)',
  'Detailed mechanical, piping and structural design',
  'Electrical, instrumentation and control engineering',
  'Process simulation and debottlenecking',
  'Technical consultancy and owner’s engineering',
  'Project planning, scheduling and cost estimation',
  'Construction and commissioning support'],

  capabilities: [
  { title: 'Integrated disciplines', text: 'Process, mechanical, piping, civil, electrical and I&C engineering coordinated under one technical lead.' },
  { title: 'Brownfield expertise', text: 'Laser-scan-based modification design and tie-in planning that minimises shutdown windows.' },
  { title: 'Codes & standards', text: 'Designs prepared in line with applicable API, ASME, IEC and client-specific standards.' },
  { title: 'Digital deliverables', text: '3D models, intelligent P&IDs and data-rich handover packages ready for operations.' }],

  industries: ['Upstream production', 'Gas processing', 'Refining & petrochemicals', 'Midstream & storage', 'Power & utilities'],
  benefits: [
  { title: 'Fewer late changes', text: 'Rigorous early-phase engineering reduces costly rework during construction.' },
  { title: 'Constructible designs', text: 'Field-experienced engineers review every package for buildability and access.' },
  { title: 'Lifecycle thinking', text: 'Maintainability and operability are designed in, not added later.' },
  { title: 'Single point of accountability', text: 'One coordinated team from study through commissioning support.' }]

},
{
  slug: 'oilfield-equipment-supply',
  title: 'Oilfield Equipment & Material Supply',
  shortTitle: 'Oilfield Equipment Supply',
  icon: CogIcon,
  image: images.equipmentValves,
  imageAlt: 'Industrial gate valves, flanges and pipe fittings in an equipment warehouse',
  heroImage: images.storageTanks,
  summary:
  'Certified valves, pipe, fittings, rotating equipment and instrumentation sourced and delivered to specification and schedule.',
  intro:
  'We supply the equipment and materials that keep wells, plants and pipelines running — with documentation, traceability and delivery performance operators can depend on.',
  description: [
  'Our supply teams source from a vetted network of manufacturers and stockists, matching each requirement to the correct material grade, pressure rating and certification. Every order is checked against the purchase specification before dispatch, and supplied with the material certificates and test records your quality team expects.',
  'From urgent replacement parts to complete material packages for new facilities, we manage expediting, inspection and delivery so that equipment arrives complete and ready to install.'],

  scope: [
  'Valves — gate, globe, ball, check and control',
  'Line pipe, fittings and flanges',
  'Pumps, compressors and rotating equipment',
  'Instrumentation and control components',
  'Wellhead and drilling consumables',
  'Industrial tools and safety equipment',
  'Spare parts and critical spares programmes'],

  capabilities: [
  { title: 'Vetted manufacturer network', text: 'Approved suppliers assessed for quality systems, capacity and delivery history.' },
  { title: 'Full traceability', text: 'Material test certificates and documentation dossiers supplied with every order.' },
  { title: 'Pre-dispatch inspection', text: 'Third-party or in-house inspection against purchase specifications prior to shipment.' },
  { title: 'Expedited delivery', text: 'Dedicated handling for critical and breakdown requirements.' }],

  industries: ['Exploration & production', 'Drilling contractors', 'Refineries', 'Pipeline operators', 'Industrial facilities'],
  benefits: [
  { title: 'Right first time', text: 'Specification checks reduce rejected deliveries and site delays.' },
  { title: 'Reduced downtime', text: 'Fast access to critical spares when unplanned repairs arise.' },
  { title: 'Consolidated sourcing', text: 'One accountable supplier across multiple equipment categories.' },
  { title: 'Audit-ready records', text: 'Organised documentation that supports regulatory and client audits.' }]

},
{
  slug: 'procurement-supply-chain',
  title: 'Procurement & Supply Chain Management',
  shortTitle: 'Procurement & Logistics',
  icon: TruckIcon,
  image: images.procurementLogistics,
  imageAlt: 'Logistics yard with stacked steel pipes and containers being loaded',
  heroImage: images.procurementLogistics,
  summary:
  'End-to-end procurement, vendor management and logistics coordination for complex, multi-supplier energy projects.',
  intro:
  'Long lead times, global suppliers and strict documentation requirements make procurement a critical-path activity. We manage it with the same discipline as engineering.',
  description: [
  'Our procurement specialists handle the full purchase cycle: from requisition review and vendor sourcing through bid evaluation, purchase order placement, expediting and close-out. We work to your approved vendor lists or help you qualify new sources where needed.',
  'Logistics coordinators plan freight, customs clearance and site delivery around your construction sequence, giving you clear visibility of where every critical item is at any point in time.'],

  scope: [
  'Vendor identification, prequalification and audits',
  'Request for quotation and technical bid evaluation',
  'Purchase order management and expediting',
  'Supplier performance management',
  'Freight forwarding and customs coordination',
  'Materials management and warehousing',
  'Surplus material management'],

  capabilities: [
  { title: 'Structured bid evaluation', text: 'Transparent technical and commercial comparisons that support defensible awards.' },
  { title: 'Expediting & tracking', text: 'Regular supplier progress reviews and early warning on schedule risks.' },
  { title: 'Logistics planning', text: 'Multimodal transport plans aligned to site readiness and access constraints.' },
  { title: 'Materials control', text: 'Receiving, preservation and issue tracking for project materials.' }],

  industries: ['EPC contractors', 'National and international operators', 'Gas processing', 'Industrial manufacturing', 'Government & public sector'],
  benefits: [
  { title: 'Schedule certainty', text: 'Proactive expediting protects the critical path.' },
  { title: 'Cost control', text: 'Competitive sourcing and clear commercial evaluation.' },
  { title: 'Reduced supplier risk', text: 'Prequalified vendors with documented quality systems.' },
  { title: 'Full visibility', text: 'Regular reporting on order status, deliveries and exceptions.' }]

},
{
  slug: 'pipeline-services',
  title: 'Pipeline Services',
  shortTitle: 'Pipeline Construction & Maintenance',
  icon: WaypointsIcon,
  image: images.pipelineConstruction,
  imageAlt: 'Large diameter steel pipeline sections under construction in open terrain',
  heroImage: images.pipelineAerial,
  summary:
  'Installation, inspection, maintenance and rehabilitation of pipelines and associated infrastructure.',
  intro:
  'Pipelines are long-life assets that operate in demanding environments. We help operators build them right and keep them performing safely for decades.',
  description: [
  'Our pipeline teams support the full asset lifecycle — from right-of-way preparation, stringing, welding and hydrotesting through to in-service inspection, repair and rehabilitation. Work is planned around rigorous permit-to-work, ground disturbance and hot-work controls.',
  'For operating pipelines, we deliver planned and reactive maintenance, coating repair, cathodic protection support and tie-in works with careful attention to minimising throughput interruption.'],

  scope: [
  'Onshore pipeline installation and tie-ins',
  'Welding, NDT and hydrostatic testing',
  'Pipeline pigging and cleaning support',
  'Coating inspection and repair',
  'Cathodic protection surveys and maintenance',
  'Pipeline rehabilitation and replacement',
  'Station piping and associated facilities'],

  capabilities: [
  { title: 'Qualified welding', text: 'Welding procedures and welder qualifications managed to the applicable code.' },
  { title: 'Integrity-led maintenance', text: 'Maintenance planned around inspection data and risk ranking.' },
  { title: 'Controlled tie-ins', text: 'Detailed isolation, purging and tie-in procedures for live systems.' },
  { title: 'Right-of-way management', text: 'Landowner, environmental and reinstatement requirements respected throughout.' }],

  industries: ['Midstream transmission', 'Gathering systems', 'Gas distribution', 'Terminals & storage', 'Water injection networks'],
  benefits: [
  { title: 'Safer operations', text: 'Disciplined controls on high-risk pipeline activities.' },
  { title: 'Extended asset life', text: 'Timely rehabilitation defers costly replacement.' },
  { title: 'Minimal disruption', text: 'Tie-ins and repairs planned to protect throughput.' },
  { title: 'Regulatory confidence', text: 'Complete records to support integrity and compliance obligations.' }]

},
{
  slug: 'inspection-asset-integrity',
  title: 'Inspection, Testing & Asset Integrity',
  shortTitle: 'Inspection & Asset Integrity',
  icon: ScanSearchIcon,
  image: images.inspectionNdt,
  imageAlt: 'Technician performing ultrasonic testing on a steel pipe weld',
  heroImage: images.storageTanks,
  summary:
  'Non-destructive testing, condition assessment and corrosion monitoring that keep critical assets safe and compliant.',
  intro:
  'Reliable data on the condition of your equipment is the foundation of every sound maintenance and investment decision. Our inspection teams provide it.',
  description: [
  'We deliver a full range of conventional and advanced NDT methods, visual inspection and condition assessments for pressure equipment, piping, tanks and structures. Findings are reported clearly, with severity ranking and practical recommendations — not just raw data.',
  'Beyond individual inspections, we help operators build and maintain risk-based inspection programmes, corrosion management strategies and integrity databases that support long-term planning.'],

  scope: [
  'Ultrasonic, radiographic, magnetic particle and dye penetrant testing',
  'Phased array and advanced ultrasonic techniques',
  'Visual and dimensional inspection',
  'Storage tank inspection and assessment',
  'Corrosion monitoring and thickness surveys',
  'Fitness-for-service support',
  'Risk-based inspection planning',
  'Vendor and fabrication inspection'],

  capabilities: [
  { title: 'Qualified technicians', text: 'Inspectors qualified to recognised NDT certification schemes.' },
  { title: 'Actionable reporting', text: 'Clear findings, severity ranking and recommended actions.' },
  { title: 'Risk-based planning', text: 'Inspection intervals focused where risk and consequence are highest.' },
  { title: 'Integrity data management', text: 'Structured history that supports trend analysis and audits.' }],

  industries: ['Refineries', 'Gas plants', 'Offshore facilities', 'Tank farms & terminals', 'Petrochemical plants'],
  benefits: [
  { title: 'Prevent failures', text: 'Detect degradation before it becomes a loss of containment.' },
  { title: 'Optimised shutdowns', text: 'Focus turnaround scope on what the data says matters.' },
  { title: 'Compliance support', text: 'Documented inspection records for regulators and insurers.' },
  { title: 'Informed investment', text: 'Repair-or-replace decisions backed by condition evidence.' }]

},
{
  slug: 'operations-maintenance',
  title: 'Operations & Maintenance',
  shortTitle: 'Operations & Maintenance Support',
  icon: WrenchIcon,
  image: images.maintenanceTechnician,
  imageAlt: 'Maintenance technician servicing an industrial pump inside a gas plant',
  heroImage: images.offshoreCrew,
  summary:
  'Preventive, corrective and shutdown maintenance that improves reliability and keeps facilities producing.',
  intro:
  'Unplanned downtime is expensive and often avoidable. Our maintenance teams help operators move from reactive repair to planned, reliability-focused maintenance.',
  description: [
  'We provide skilled mechanical, electrical and instrumentation personnel for routine maintenance, breakdown response and planned shutdowns. Teams can be deployed as self-managed work packages or integrated into your existing maintenance organisation.',
  'Our reliability specialists help refine maintenance strategies, critical spares holdings and work management processes, so that effort is directed to the equipment that matters most to production and safety.'],

  scope: [
  'Preventive and predictive maintenance programmes',
  'Mechanical, electrical and instrumentation maintenance',
  'Rotating equipment overhaul and alignment',
  'Shutdown and turnaround support',
  'Maintenance planning and scheduling',
  'Reliability and criticality assessments',
  'Operations support personnel'],

  capabilities: [
  { title: 'Multi-skilled crews', text: 'Mechanical, electrical and I&C technicians under experienced supervision.' },
  { title: 'Turnaround execution', text: 'Detailed planning, permit coordination and progress control for shutdowns.' },
  { title: 'Reliability engineering', text: 'Failure analysis and strategy optimisation for critical equipment.' },
  { title: 'Flexible engagement', text: 'Campaign, call-off or long-term maintenance contracts.' }],

  industries: ['Onshore production facilities', 'Offshore platforms', 'Refineries', 'Gas processing plants', 'Industrial utilities'],
  benefits: [
  { title: 'Higher availability', text: 'Planned maintenance reduces unplanned stoppages.' },
  { title: 'Predictable costs', text: 'Structured programmes replace costly reactive repair.' },
  { title: 'Safer work', text: 'Maintenance executed under robust permit-to-work controls.' },
  { title: 'Scalable workforce', text: 'Additional skilled personnel when campaigns demand it.' }]

}];


export function getService(slug: string | undefined): Service | undefined {
  return services.find((s) => s.slug === slug);
}