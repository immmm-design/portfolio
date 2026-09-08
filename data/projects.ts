import { Project, MiniProject } from '@/types';

export const projects: Project[] = [
  {
    id: 'foldride',
    title: 'FoldRide Pro',
    role: 'Inventor & Product Lead',
    context: 'Consumer Mobility Hardware (2025 - Present)',
    tags: ['Consumer Hardware', 'DFM', 'Patent Pending'],
    status: 'In development · U.S. provisional patent filed',
    description: [
      'A foldable electric skateboard built around a novel folding architecture and trucks that release without tools, aimed at riders who need a board that collapses for a commute and holds up on the street.',
      'Translated user needs into product requirements, system architecture, engineering drawings, and production-ready STEP files, weighing usability, structural performance, weight, cost, serviceability, and manufacturability at each decision.',
      'Filed a U.S. provisional patent application covering the folding architecture and truck release system, then partnered with a factory on prototypes, dual-motor drive, safety systems, and a retail price under $999.',
    ],
  },
  {
    id: 'perkpulse',
    title: 'PerkPulse AI',
    role: 'Creator & Product Lead',
    context: 'AI Product Prototype (Personal Project)',
    tags: ['AI Product', 'Consumer Software', 'Prototype'],
    status: 'Working prototype',
    description: [
      'Credit card benefits are scattered across dense issuer guides, so most people never use what they already pay for. PerkPulse parses those benefits into structured data and turns them into clear monthly actions.',
      'Scoped the MVP around three jobs: benefit parsing, monthly action prioritization, and purchase-category recommendations. Privacy-first design that avoids handling raw card data. Built on Supabase.',
      'Next: evaluation against real issuer benefit guides and user testing before any decision on a public release.',
    ],
    link: 'https://perk-pulse-zeta.vercel.app/',
    linkText: 'View Live Prototype',
  },
  {
    id: 'nasa-psyche',
    title: 'NASA Psyche Asteroid Rover',
    role: 'Electrical Subsystem Owner & Mechanical Design Support',
    context: 'ASU Senior Capstone · Psyche Student Collaborations (Jan to Dec 2024)',
    tags: ['Robotics', 'Space Systems', 'Capstone'],
    status: 'Prototype delivered · Earth-analog tested',
    description: [
      'Four-person ASU senior capstone guided by NASA mission mentors. Proposed the rover concept the team went on to build, targeting 16 Psyche: near-zero gravity, no atmosphere, metallic dust terrain.',
      'Owned the full electrical subsystem covering power distribution, wiring, motor control, and integration, while supporting mechanical design across the team.',
      'Enabled 360-degree turns without reversing through independent wheel speed and direction control, placed about 70% of rover mass in the wheels for traction, and replaced hydraulic actuation with vacuum-rated springs after NASA Psyche mentor feedback.',
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
