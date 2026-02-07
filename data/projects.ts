import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'nasa-psyche',
    title: 'Robotic Driving System for NASA Psyche Asteroid Exploration',
    role: 'Mechanical Systems Lead & Robotics Engineer',
    context: 'Senior Capstone Project – Arizona State University (Spring 2024)',
    tags: ['Robotics', 'Space Engineering', 'Product Design'],
    description: [
      'Designed a driving system for a rover to navigate asteroid 16 Psyche\'s surface (near-zero gravity, no atmosphere, metallic dust terrain). Solved critical constraints by concentrating 70% of mass in the wheels for traction and using independent left-right leg suspension enabling full 360° turns without reversing.',
      'Led iterative design process evaluating hydraulic vs. spring-based systems (pivoted to springs after NASA mentor feedback on vacuum requirements) and magnetic vs. weight-based traction (avoided magnets due to conductive dust interference).',
      'Delivered functional prototype meeting all NASA-specified requirements (weight, size, speed, budget). Selected tank-track configuration for lowest maintenance and highest durability in long-duration missions. Validated design through calculations and Earth-analog testing accounting for gravity differences.',
    ],
    link: 'https://psyche.ssl.berkeley.edu/get-involved/capstone-projects/capstone-projects-tungsten-class/robotic-explorer-for-hypothesized-surfaces-asu-f/',
    linkText: 'View Project Details',
  },
  {
    id: 'solar-hat',
    title: 'Wearable Heat Stroke Prevention System',
    role: 'Product Designer & Embedded Systems Engineer',
    context: 'Embedded Systems Project – Arizona State University (Fall 2023)',
    tags: ['Embedded Systems', 'Consumer Hardware', 'PCB Design'],
    description: [
      'Identified critical safety problem: outdoor workers in Arizona and hot climates face dangerous heat exposure leading to heat stroke hospitalizations. Current solutions rely on workers self-monitoring symptoms, which often happens too late.',
      'Built Arduino-based wearable hat prototype with temperature and humidity sensors monitoring ambient heat exposure and perspiration levels (early dehydration indicators). Designed custom PCB in Cadence to miniaturize electronics into hat brim. Created alert system with visual/audible warnings when risk thresholds exceeded.',
      'Validated technical feasibility and received positive survey feedback indicating strong market demand. Developed product roadmap for full commercialization: data collection from 1,000+ workers to establish heat stress baselines, predictive ML algorithm, mobile app for real-time worker/supervisor notifications, and OSHA compliance integration.',
    ],
  },
  {
    id: 'it-consulting',
    title: 'IT Solutions Consulting Practice',
    role: 'Founder & Lead Consultant',
    context: '5+ Years of Entrepreneurial Experience (2019 - Present)',
    tags: ['Product Management', 'Entrepreneurship', 'SaaS'],
    description: [
      'Built and operated profitable IT consulting practice serving 20+ clients (individuals and small businesses) with software, web development, and data analytics solutions. Generated $20K-$70K annually while studying full-time in the U.S. Achieved 100% referral-based growth with zero client churn.',
      'Owned end-to-end product lifecycle for every engagement: client discovery interviews to identify root problems (not surface requests), ROI-based feature prioritization under budget constraints, custom solution development (software builds, websites, analytics dashboards), and post-launch iteration based on measurable impact.',
      'Developed systems thinking by identifying patterns across industries (construction, legal, retail) and building reusable frameworks. Learned core PM skills in real-world setting: managing ambiguity, defining scope boundaries, saying no to feature creep, and focusing on outcomes (time saved, revenue enabled, downtime prevented) over outputs.',
    ],
  },
];
