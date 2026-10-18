import { Project, MiniProject } from '@/types';

export const projects: Project[] = [
  {
    id: 'perkpulse',
    title: 'PerkPulse AI',
    role: 'Creator & Product Lead',
    context: 'Columbia M.S. Project (May 2026)',
    tags: ['AI Product', 'LLM Evaluation', 'Consumer Software'],
    status: 'Live prototype',
    description: [
      'Credit card benefits are scattered across dense issuer guides, so most people never use what they already pay for. PerkPulse turns those guides into structured benefits data and clear monthly actions.',
      'Deployed an LLM prototype in Next.js, TypeScript, and Supabase PostgreSQL, built around two GPT-4o-mini workflows with confidence ratings, human review, and fallback logic.',
      'Scored 20/20 valid parser outputs and 28/30 correct category detections in controlled tests.',
    ],
    link: 'https://perk-pulse-zeta.vercel.app/',
    linkText: 'View Live Prototype',
  },
  {
    id: 'foldride',
    title: 'FoldRide Pro',
    role: 'Inventor & Product Lead',
    context: 'Foldable Electric Skateboard (2025 - Present)',
    tags: ['Consumer Hardware', 'DFM', 'Patent Pending'],
    status: 'In development · U.S. provisional patent filed',
    description: [
      'A foldable electric skateboard for riders who need a board that collapses for a commute and still holds up on the street.',
      'Tested the sub-$999 target price in concept feedback from 500 prospective riders, 70% of whom said they would buy.',
      'Filed a U.S. provisional patent application, took the design through 6 drawing revisions to production-intent STEP files, and planned the first prototype build, cost, and timeline with a factory partner.',
    ],
  },
  {
    id: 'nasa-psyche',
    title: 'NASA Psyche Asteroid Rover',
    role: 'Team Lead & Electrical Subsystem Owner',
    context: 'ASU Senior Capstone · Psyche Student Collaborations (Jan to Dec 2024)',
    tags: ['Robotics', 'Space Systems', 'Capstone'],
    status: 'Prototype delivered · Earth-analog tested',
    description: [
      'Proposed the rover concept and led the four-person team from system requirements through prototyping and testing, targeting 16 Psyche: near-zero gravity, no atmosphere, metallic dust terrain.',
      'Owned the full electrical subsystem from power distribution to motor control, and enabled 360-degree turns without reversing through independent wheel speed and direction control.',
      'Resolved a design risk raised in NASA Psyche mentor review by replacing hydraulic actuation with vacuum-compatible springs.',
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
