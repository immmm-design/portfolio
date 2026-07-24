import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'sourceone',
    company: 'SourceOne',
    role: 'Technical Product Management Intern',
    location: 'Guangdong, China',
    startDate: '2026-06',
    endDate: '2026-08',
    bullets: [
      'Represented SourceOne in evaluations of roughly 10 large automated factories across China, working with engineering, quality, and sourcing leaders to assess production capability, process controls, manufacturability, and supplier risk.',
      'Supported product validation and supplier reviews for Mainspring Energy, SKAN, Rough Country, and other customers. Worked directly with customer and factory engineers to review project issues, define next steps, test products, and examine quality documentation.',
      'Prepared supplier and product evaluation reports summarizing customer requirements, factory findings, quality and process risks, and follow-up actions for product, engineering, and sourcing teams.',
    ],
  },
  {
    id: 'stantec',
    company: 'Stantec',
    role: 'Automation Engineering Intern',
    location: 'Chandler, AZ',
    startDate: '2024-06',
    endDate: '2024-08',
    bullets: [
      'Identified errors in roughly 25% of legacy electrical schematics and updated Revit models across 12 mining infrastructure projects, improving drawing accuracy and helping prevent coordination issues during design reviews.',
      'Standardized Revit drawing templates for complex electrical systems and built an Excel project tracker that centralized documentation across electrical, mechanical, and civil teams, improving consistency and project visibility.',
    ],
  },
  {
    id: 'addictive-desert',
    company: 'Addictive Desert Designs',
    role: 'New Product Development Intern',
    location: 'Mesa, AZ',
    startDate: '2023-06',
    endDate: '2023-08',
    bullets: [
      'Built a vehicle trim and fitment database covering 50+ truck models, helping shorten design cycles by roughly 30% and accelerate development of new off-road components.',
      'Developed off-road components from vehicle laser scanning and SolidWorks CAD through robotic assembly and testing, then partnered with OTC engineers to commission two robotic welding systems for expanded production capacity.',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance Consulting Practice',
    role: 'Founder & IT Systems Consultant',
    location: 'Remote',
    startDate: '2019-06',
    endDate: 'Present',
    bullets: [
      'Built a referral-based IT consulting practice serving 20+ clients and generating $20K-$70K in annual revenue, with no client churn over five years while studying full-time.',
      'Led client discovery, requirements definition, prioritization, delivery, and iteration for custom software, websites, and analytics tools across construction, legal services, and retail.',
    ],
  },
];
