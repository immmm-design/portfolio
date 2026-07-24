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
      'Leading the development of a compact personal-mobility product focused on portability, safety, reliability, and practical everyday use. Defined the target user, product requirements, success criteria, and development roadmap.',
      'Evaluated product architectures and engineering trade-offs across usability, structural performance, weight, cost, serviceability, and manufacturability, translating key decisions into technical documentation for engineering review.',
      'Coordinating with factory engineers on manufacturing feasibility, product validation, risk reduction, and commercialization planning. Selected technical and visual details are withheld while intellectual-property and development work continues.',
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
    role: 'Mechanical & Electrical Subsystem Design',
    context: 'ASU Capstone · Psyche Student Collaborations (2024)',
    tags: ['Robotics', 'Space Systems', 'Capstone'],
    status: 'Prototype delivered · Earth-analog tested',
    description: [
      'Four-person ASU senior capstone guided by NASA mission mentors. Led mechanical and electrical subsystem design for an asteroid rover concept targeting 16 Psyche: near-zero gravity, no atmosphere, metallic dust terrain.',
      'Placed roughly 70% of rover mass in the wheels for traction and developed independent suspension that enables 360-degree turns without reversing.',
      'Replaced hydraulic actuation with a vacuum-compatible spring system after mentor review, then delivered a prototype meeting the project\'s weight, size, speed, and budget requirements.',
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
