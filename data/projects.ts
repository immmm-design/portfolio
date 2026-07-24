import { Project, MiniProject } from '@/types';

export const projects: Project[] = [
  {
    id: 'foldride',
    title: 'FoldRide Pro',
    role: 'Inventor & Product Lead',
    context: 'Foldable Electric Skateboard · New York, NY (2025 - Present)',
    tags: ['Consumer Hardware', 'DFM', 'Patent Pending'],
    status: 'Engineering & manufacturing feasibility stage · U.S. provisional patent filed',
    description: [
      'Designed a foldable electric skateboard around two hard problems: a structural spine lock that stays rigid under riding loads, and a truck system that removes without tools. Translated user needs into product requirements, system architecture, engineering drawings, and factory-ready STEP files.',
      'Filed a U.S. provisional patent application covering the folding architecture and the truck release system.',
      'Working with factory engineers to improve manufacturability, safety systems, the dual motor drive, and backpack integration, toward a retail target below $999.',
    ],
  },
  {
    id: 'perkpulse',
    title: 'PerkPulse AI',
    role: 'Creator & Product Lead',
    context: 'AI Product Prototype · Personal Project',
    tags: ['AI Product', 'Consumer Software', 'Prototype'],
    status: 'Working prototype',
    description: [
      'Credit card benefits are scattered across dense issuer guides, so most people never use what they already pay for. PerkPulse parses issuer benefits into structured data and turns them into clear monthly actions.',
      'Scoped the MVP around three jobs: structured benefit parsing, monthly action prioritization, and purchase-category recommendations, with a privacy-first approach that avoids handling raw card data. Built on Supabase.',
      'Next steps: evaluation against real issuer benefit guides and user testing before any go/no-go decision on a public release.',
    ],
    link: 'https://perk-pulse-zeta.vercel.app/',
    linkText: 'View Live Prototype',
  },
  {
    id: 'nasa-psyche',
    title: 'Robotic Driving System for the NASA Psyche Mission',
    role: 'Mechanical & Electrical Subsystem Design',
    context: 'ASU Senior Capstone · Psyche Student Collaborations Program (Jan - Dec 2024)',
    tags: ['Robotics', 'Space Systems', 'Capstone'],
    status: 'Prototype delivered · Earth-analog tested',
    description: [
      'Four-person ASU senior capstone in the Psyche Student Collaborations program, guided by NASA mission mentors. Led mechanical and electrical subsystem design for an asteroid rover concept targeting 16 Psyche: near-zero gravity, no atmosphere, metallic dust terrain.',
      'Placed roughly 70% of rover mass in the wheels for traction and developed independent suspension that enables 360-degree turns without reversing.',
      'Worked with NASA mission mentors to replace hydraulic actuation with a vacuum-compatible spring system, then delivered a prototype that met the project\'s weight, size, speed, and budget requirements, validated through calculations and Earth-analog testing.',
    ],
    link: 'https://psyche.ssl.berkeley.edu/get-involved/capstone-projects/capstone-projects-tungsten-class/robotic-explorer-for-hypothesized-surfaces-asu-f/',
    linkText: 'View Project Details',
  },
];

export const additionalProjects: MiniProject[] = [
  {
    id: 'solar-hat',
    title: 'Wearable Heat-Stroke Prevention Prototype',
    description:
      'Arduino-based hat with temperature and humidity sensors, a custom Cadence PCB, and threshold alerts for outdoor workers. Early survey feedback showed initial interest.',
    tags: ['Embedded Systems', 'PCB Design'],
  },
  {
    id: 'algo-trading',
    title: 'Algorithmic Trading System',
    description:
      'Automated BTC/ETH futures pipeline on Google Cloud covering market data ingestion, signal generation, risk controls, and order execution.',
    tags: ['Python', 'Cloud'],
  },
];
