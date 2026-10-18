import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'sourceone',
    company: 'SourceOne Ltd',
    role: 'Product Manager (Part-time Remote to Full-time On-site)',
    location: 'Hong Kong',
    startDate: '2026-02',
    endDate: '2026-08',
    bullets: [
      'Evaluated 10 automated factories in China on site for production capability, process controls, manufacturability, and supplier risk, inspecting casting, forging, machining, and laser cutting against engineering drawings.',
      'Translated requirements from 3 U.S. customers (Mainspring Energy, Toyota USA, Rough Country) into prioritized technical issues, risks, and next steps for cross-functional engineering, quality, and sourcing teams.',
      'Presented each factory recommendation to customers and senior product leadership, backed by supplier evaluations, quality reports, and product-testing observations.',
    ],
  },
  {
    id: 'freelance',
    company: 'Independent Consulting',
    role: 'Founder & Technology Consultant',
    location: 'Remote',
    startDate: '2019-06',
    endDate: '2025-12',
    bullets: [
      'Led 10+ software, web, and analytics products for construction, legal, and retail businesses from client discovery and requirements through delivery and iteration.',
      'Grew a referral-based practice to 20+ clients on recurring retainers as their primary contact for requirements and delivery.',
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
      'Caught discrepancies in 25% of 90 legacy electrical schematics across 12 mining infrastructure projects and corrected the matching Revit models ahead of multidisciplinary design reviews.',
      'Standardized Revit templates and built an Excel tracker that centralized documentation across electrical, mechanical, and civil teams, improving consistency and project visibility.',
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
      'Supported layout, fixturing, and controller setup for 2 OTC DAIHEN robotic welding cells now in production, after developing truck components from laser scanning and SolidWorks CAD through assembly and testing.',
      'Cut design cycles by approximately 30% with a fitment database covering 50+ truck models that reduced repeat research.',
    ],
  },
];
