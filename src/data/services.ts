import {
  DraftingCompassIcon,
  CogIcon,
  TruckIcon,
  WaypointsIcon,
  ScanSearchIcon,
  WrenchIcon,
  FuelIcon,
  UsersRoundIcon,
  ShieldCheckIcon,
  ContainerIcon,
  HardHatIcon } from
'lucide-react';
import { images } from './images';
import type { Service } from '../types/content';

export const services: Service[] = [
{
  slug: 'engineering-technical-services',
  title: 'Engineering, EPC/EPCI & Technical Services',
  shortTitle: 'Engineering & EPC/EPCI',
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
  'EPC/EPCI project delivery and owner’s engineering',
  'Fabrication and approved equipment manufacturing',
  'Project planning, scheduling and cost estimation',
  'Construction, installation and commissioning support',
  'Project management, technical audit, research and technology'],

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

},
{
  slug: 'oilfield-well-services', title: 'Oilfield & Well Services', shortTitle: 'Oilfield & Well Services', icon: HardHatIcon,
  image: images.offshoreCrew, imageAlt: 'Oilfield crew working safely on an offshore facility', heroImage: images.pumpjacksSunset,
  summary: 'Drilling support, well-site, completion, intervention, workover, pressure control and well testing services.',
  intro: 'We provide coordinated field support for well construction, completion, intervention and production activities, with competent personnel and disciplined operating controls.',
  description: ['Our oilfield teams support operators and drilling contractors through critical well activities, from mobilisation and well-site preparation to completion, intervention, workover and testing programmes.', 'Every scope is planned around well integrity, pressure control, clear interfaces and accurate reporting, with services configured to the client’s programme and applicable regulatory requirements.'],
  scope: ['Drilling and well-site support', 'Well completion services', 'Well intervention and workover support', 'Pressure control services', 'Well testing and production testing support', 'Equipment mobilisation and field logistics', 'Technical personnel and supervision'],
  capabilities: [
  { title: 'Well-site coordination', text: 'Clear interfaces between operator, rig, service companies and logistics teams.' },
  { title: 'Pressure-control discipline', text: 'Procedures and competent personnel aligned with well-control requirements.' },
  { title: 'Flexible field support', text: 'Personnel and equipment configured for campaign, call-off or project scopes.' },
  { title: 'Operational reporting', text: 'Structured field records, service reports and close-out documentation.' }],
  industries: ['Exploration & production', 'Drilling contractors', 'Onshore wells', 'Offshore wells', 'Well intervention campaigns'],
  benefits: [
  { title: 'Safer execution', text: 'Planned interfaces and pressure-control discipline reduce operational risk.' },
  { title: 'Responsive support', text: 'Field teams mobilised around programme and well-site priorities.' },
  { title: 'Integrated delivery', text: 'Personnel, equipment and logistics coordinated through one point of contact.' },
  { title: 'Traceable outcomes', text: 'Clear reporting supports operational review and regulatory records.' }]
},
{
  slug: 'energy-products-gas-services', title: 'Petroleum Products, Gas & Energy Services', shortTitle: 'Products, Gas & Energy', icon: FuelIcon,
  image: images.storageTanks, imageAlt: 'Petroleum storage tanks and distribution infrastructure', heroImage: images.gasPlant,
  summary: 'Licensed supply and distribution support for petroleum products, lubricants, natural gas and emerging energy solutions.',
  intro: 'We support reliable energy supply through product trading, distribution coordination and storage, terminal and depot services, subject to applicable licences and approvals.',
  description: ['Our commercial scope covers PMS, AGO, DPK, ATK, AVGAS, LPFO, HPFO, LPG, CNG, LNG, lubricants and related products. We coordinate sourcing, quality documentation, logistics and delivery for approved transactions.', 'We also pursue natural gas, renewable and other energy services that help clients diversify supply and develop practical lower-emission solutions.'],
  scope: ['PMS, AGO and DPK supply and distribution', 'ATK and AVGAS supply support', 'LPFO and HPFO distribution', 'LPG, CNG and LNG services', 'Lubricants and related products', 'Storage, terminal and depot support', 'Natural gas and renewable energy services'],
  capabilities: [
  { title: 'Product range', text: 'Coverage across transport, aviation, industrial fuel, gas and lubricant requirements.' },
  { title: 'Distribution coordination', text: 'Commercial, logistics and delivery activities managed through defined controls.' },
  { title: 'Infrastructure support', text: 'Storage, terminal and depot activities aligned to product-handling requirements.' },
  { title: 'Energy transition', text: 'Natural gas and renewable opportunities assessed around client needs and viability.' }],
  industries: ['Oil & gas', 'Aviation', 'Industrial manufacturing', 'Transport & logistics', 'Power & utilities'],
  benefits: [
  { title: 'Coordinated supply', text: 'One commercial interface from sourcing through delivery.' },
  { title: 'Product assurance', text: 'Documentation and handling controls appropriate to each product.' },
  { title: 'Flexible solutions', text: 'Support for conventional fuel, gas and emerging energy needs.' },
  { title: 'Compliance focus', text: 'Activities undertaken subject to applicable licences and approvals.' }]
},
{
  slug: 'manpower-training', title: 'Manpower, Recruitment & Training', shortTitle: 'Manpower & Training', icon: UsersRoundIcon,
  image: images.careersTeam, imageAlt: 'Engineering and technical personnel walking through an industrial facility', heroImage: images.hseTraining,
  summary: 'Technical staffing, recruitment, manpower supply, training and capacity development for energy and allied industries.',
  intro: 'We connect projects and operating facilities with competent people, then help those people build the skills required for safe and reliable performance.',
  description: ['Our workforce services cover role definition, candidate sourcing, screening, mobilisation and ongoing personnel coordination for engineering, construction, operations, maintenance and support functions.', 'Training and capacity-development programmes can be tailored to project requirements, client procedures, technical disciplines, HSE expectations and Nigerian local-content objectives.'],
  scope: ['Manpower supply and mobilisation', 'Technical and professional recruitment', 'Project and maintenance staffing', 'Competency assessment and verification', 'Technical and HSE training', 'Supervisor and workforce development', 'Local-content capacity development'],
  capabilities: [
  { title: 'Role-based screening', text: 'Candidates assessed against technical, experience and project-specific requirements.' },
  { title: 'Mobilisation support', text: 'Documentation, onboarding and deployment coordinated for site readiness.' },
  { title: 'Competence development', text: 'Training plans linked to roles, risk and client operating standards.' },
  { title: 'Local talent', text: 'Workforce development aligned with participation and local-content priorities.' }],
  industries: ['Oil & gas', 'Energy', 'Engineering & construction', 'Petrochemicals', 'Allied industrial sectors'],
  benefits: [
  { title: 'Faster mobilisation', text: 'Structured recruitment and onboarding reduce staffing delays.' },
  { title: 'Verified competence', text: 'Personnel matched to defined technical and safety requirements.' },
  { title: 'Scalable teams', text: 'Workforce levels adapt to projects, shutdowns and operating demand.' },
  { title: 'Lasting capability', text: 'Training strengthens individual performance and organisational capacity.' }]
},
{
  slug: 'hsse-environmental-services', title: 'HSSE & Environmental Services', shortTitle: 'HSSE & Environmental', icon: ShieldCheckIcon,
  image: images.environmentMonitoring, imageAlt: 'Environmental specialist carrying out field monitoring near an energy facility', heroImage: images.engineersPpe,
  summary: 'Health, safety, security and environmental consultancy, waste management, spill response, remediation and risk services.',
  intro: 'We help organisations prevent harm, prepare for emergencies and manage environmental liabilities through practical, field-focused HSSE services.',
  description: ['Our specialists support risk assessment, safety management, environmental monitoring, waste planning, security awareness and compliance activities across projects and operating assets.', 'For environmental incidents and legacy impacts, we support oil-spill preparedness and response, site assessment, remediation planning, implementation oversight and close-out monitoring.'],
  scope: ['HSSE management and safety consultancy', 'Project and task risk assessment', 'Waste management services', 'Oil-spill preparedness and response', 'Environmental remediation support', 'Environmental monitoring and reporting', 'Security risk support and emergency planning'],
  capabilities: [
  { title: 'Integrated HSSE', text: 'Health, safety, security and environmental risks considered together.' },
  { title: 'Incident readiness', text: 'Response plans, drills and resources aligned to credible scenarios.' },
  { title: 'Environmental recovery', text: 'Assessment and remediation support focused on responsible restoration.' },
  { title: 'Practical assurance', text: 'Field inspections, audits and advice translated into actionable controls.' }],
  industries: ['Upstream operations', 'Pipelines', 'Terminals & depots', 'Construction projects', 'Industrial facilities'],
  benefits: [
  { title: 'Reduced exposure', text: 'Risks identified and controlled before work or incidents escalate.' },
  { title: 'Response confidence', text: 'Prepared teams and defined arrangements improve incident response.' },
  { title: 'Responsible recovery', text: 'Remediation activity planned around environmental and stakeholder needs.' },
  { title: 'Clear oversight', text: 'Auditable reporting supports management and regulatory review.' }]
},
{
  slug: 'equipment-rental-heavy-lifting', title: 'Equipment Rental, Lifting & Heavy Handling', shortTitle: 'Equipment Rental & Lifting', icon: ContainerIcon,
  image: images.procurementLogistics, imageAlt: 'Industrial equipment and heavy materials prepared for project logistics', heroImage: images.pipelineConstruction,
  summary: 'Industrial equipment hire with lifting, rigging, crane and heavy-duty handling support for projects and operations.',
  intro: 'We help clients access fit-for-purpose industrial equipment and coordinated heavy-handling support without adding permanent fleet capacity.',
  description: ['Our rental and hire services are structured around the work scope, site conditions, equipment certification and mobilisation plan. Available solutions are matched to project and operational requirements.', 'For lifting and heavy handling, we support lift planning, rigging selection, crane coordination, competent personnel and controlled execution in line with site procedures and applicable requirements.'],
  scope: ['Industrial equipment lease, rental and hire', 'Crane and lifting support', 'Rigging and heavy-duty handling', 'Lift planning and coordination', 'Certified lifting accessories', 'Equipment mobilisation and demobilisation', 'Operators, riggers and lifting supervision'],
  capabilities: [
  { title: 'Fit-for-purpose selection', text: 'Equipment matched to load, access, environment and operating requirements.' },
  { title: 'Lift planning', text: 'Defined lift methods, responsibilities and controls before execution.' },
  { title: 'Competent teams', text: 'Operators, riggers and supervisors aligned to project requirements.' },
  { title: 'Coordinated logistics', text: 'Mobilisation, site access and demobilisation planned as one work package.' }],
  industries: ['EPC projects', 'Oilfield operations', 'Pipeline construction', 'Plant maintenance', 'Industrial logistics'],
  benefits: [
  { title: 'Capital flexibility', text: 'Access equipment capacity without permanent ownership.' },
  { title: 'Controlled lifting', text: 'Planning and competent supervision improve heavy-handling safety.' },
  { title: 'Project responsiveness', text: 'Rental periods and mobilisation aligned to the work programme.' },
  { title: 'Single coordination point', text: 'Equipment, logistics and lifting support managed together.' }]
}];


export function getService(slug: string | undefined): Service | undefined {
  return services.find((s) => s.slug === slug);
}
