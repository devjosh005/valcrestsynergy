import {
  HardHatIcon,
  LeafIcon,
  ShieldAlertIcon,
  GraduationCapIcon,
  ClipboardCheckIcon,
  RecycleIcon } from
'lucide-react';
import { images } from './images';

export const hsePillars = [
{
  icon: HardHatIcon,
  title: 'Occupational Health & Safety',
  text: 'We plan every job to protect the people doing it. Hazards are identified before work starts, controls are verified in the field, and everyone holds stop-work authority.',
  points: ['Job hazard analysis and permit-to-work', 'PPE selection and fit for task', 'Fitness-for-work and fatigue management'],
  image: images.engineersPpe,
  imageAlt: 'Engineers in full PPE reviewing work at a gas facility'
},
{
  icon: LeafIcon,
  title: 'Environmental Responsibility',
  text: 'We work to minimise our footprint: preventing spills and releases, managing waste responsibly and restoring sites to agreed standards after work is complete.',
  points: ['Spill prevention and response planning', 'Waste segregation and responsible disposal', 'Site reinstatement and environmental monitoring'],
  image: images.environmentMonitoring,
  imageAlt: 'Environmental specialist taking water samples'
},
{
  icon: GraduationCapIcon,
  title: 'Workforce Training',
  text: 'Competent people are the most important safety control. We invest in induction, role-specific training and verification of competence before people work unsupervised.',
  points: ['Site and project-specific inductions', 'Role-based technical and safety training', 'Supervisor leadership development'],
  image: images.hseTraining,
  imageAlt: 'Supervisor delivering a safety briefing to field crew'
}];


export const riskSteps = [
{ title: 'Identify', text: 'Recognise hazards through site surveys, task analysis and worker input.' },
{ title: 'Assess', text: 'Evaluate likelihood and consequence to prioritise the highest risks.' },
{ title: 'Control', text: 'Apply the hierarchy of controls — eliminate first, PPE last.' },
{ title: 'Monitor', text: 'Verify controls in the field through inspections and observations.' },
{ title: 'Review', text: 'Learn from incidents, near misses and audits to improve.' }];


export const supportingAreas = [
{ icon: ClipboardCheckIcon, title: 'Quality Management', text: 'Documented procedures, inspection and test plans, and corrective action processes that keep quality consistent across projects.' },
{ icon: RecycleIcon, title: 'Sustainability Initiatives', text: 'Reducing fuel use, emissions and waste across our operations, and supporting clients’ own emissions-reduction goals.' },
{ icon: ShieldAlertIcon, title: 'Emergency Preparedness', text: 'Site-specific emergency response plans, drills and coordination with client and local emergency services.' }];


export const hsePolicies = [
{ title: 'HSE Policy Statement', text: 'Our overarching commitment to health, safety and environmental protection.' },
{ title: 'Stop Work Authority', text: 'Every person’s right and responsibility to stop unsafe work.' },
{ title: 'Drug & Alcohol Policy', text: 'Ensuring everyone on site is fit for work.' },
{ title: 'Environmental Policy', text: 'Our approach to pollution prevention and resource use.' },
{ title: 'Quality Policy', text: 'How we deliver consistent, verified quality to clients.' }];


export const improvementCycle = [
{ title: 'Plan', text: 'Set objectives and plan controls based on risk.' },
{ title: 'Do', text: 'Implement controls, training and procedures.' },
{ title: 'Check', text: 'Measure performance through audits and leading indicators.' },
{ title: 'Act', text: 'Review results and drive corrective improvement.' }];