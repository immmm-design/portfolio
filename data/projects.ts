import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'nasa-psyche',
    title: 'Robotic Explorer for NASA Psyche Mission',
    role: 'Robotics Engineer & Electrical Lead',
    context: 'Senior Capstone Project – Arizona State University',
    tags: ['Robotics', 'Embedded Systems', 'Systems Integration'],
    description: [
      'Led electrical subsystem development for a robotic rover designed to simulate exploration of asteroid Psyche.',
      'Designed and integrated wiring, sensors, and control electronics, iterating through prototypes to ensure reliability.',
      'Collaborated with NASA mission mentors and interdisciplinary teams to deliver a terrain-navigating prototype under real-world constraints.',
    ],
    link: '#',
    linkText: 'View project',
  },
  {
    id: 'solar-hat',
    title: 'Solar-Tracking Hat',
    role: 'Embedded Systems Engineer – Motors & Sensor Communication',
    context: 'Embedded Systems Project – Arizona State University',
    tags: ['Embedded Systems', 'PCB Design', 'Sensors'],
    description: [
      'Built a wearable solar-tracking device using a 32-bit microcontroller to control dual SPI motors.',
      'Designed the PCB in Cadence and integrated environmental sensors to align with the optimal light source automatically.',
      'Demonstrated practical embedded control and sensor fusion in a compact form factor.',
    ],
  },
  {
    id: 'future-project',
    title: 'Coming Soon – Product Case Study',
    role: 'Product Manager',
    context: 'Future Work',
    tags: ['Product'],
    description: [
      'Placeholder for a future case study on a real-world product experiment (e.g., trading automation platform or AI-powered app).',
    ],
  },
];
