import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'nasa-psyche',
    title: 'Robotic Explorer for NASA Psyche Mission',
    role: 'Robotics Engineer & Electrical Lead',
    context: 'Senior Capstone Project – Arizona State University',
    tags: ['Robotics', 'Systems Integration'],
    description: [
      'Led electrical subsystem development for a robotic rover designed to simulate exploration of asteroid Psyche.',
      'Designed and integrated wiring, sensors, and control electronics, iterating through prototypes to ensure reliability.',
      'Collaborated with NASA mission mentors and interdisciplinary teams to deliver a terrain-navigating prototype under real-world constraints.',
    ],
    link: 'https://psyche.ssl.berkeley.edu/get-involved/capstone-projects/capstone-projects-tungsten-class/robotic-explorer-for-hypothesized-surfaces-asu-f/',
    linkText: 'View Project Details',
  },
  {
    id: 'solar-hat',
    title: 'Solar-Tracking Hat',
    role: 'Embedded Systems Engineer',
    context: 'Embedded Systems Project – Arizona State University',
    tags: ['Embedded Systems', 'PCB Design'],
    description: [
      'Built a wearable solar-tracking device using a 32-bit microcontroller to control dual SPI motors.',
      'Designed the PCB in Cadence and integrated environmental sensors to align with the optimal light source automatically.',
      'Demonstrated practical embedded control and sensor fusion in a compact form factor.',
    ],
  },
  {
    id: 'it-consulting',
    title: 'IT Systems Consulting Business',
    role: 'Founder & Lead Consultant',
    context: '5+ Years of Entrepreneurial Experience',
    tags: ['Product Management', 'Business'],
    description: [
      'Founded and operated an IT services venture serving individuals and small businesses for over 5 years.',
      'Managed end-to-end product lifecycle from requirements gathering to delivery, building customer-centric solutions.',
      'Developed deep understanding of user pain points, ambiguity management, and value delivery under tight constraints.',
    ],
  },
];
