import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'sourceone',
    company: 'SourceOne Ltd',
    role: 'Product Manager Intern (Remote to On-Site)',
    location: 'Hong Kong',
    startDate: '2026-02',
    endDate: '2026-08',
    bullets: [
      'Evaluated about 10 automated factories across China, assessing production capability, process controls, manufacturability, and supplier risk alongside engineering, quality, and sourcing leaders.',
      'Coordinated product validation and supplier reviews for Mainspring Energy, Toyota USA, and Rough Country, translating customer requirements and factory findings into documented technical issues, risks, and next steps.',
      'Inspected casting, forging, machining, and laser cutting operations against engineering drawings and quality documentation, converting findings into recommendations for product, engineering, and sourcing teams.',
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
      'Built a referral practice serving 20+ clients, generating $20K to $70K in annual revenue with recurring retainers.',
      'Led discovery, requirements definition, prioritization, delivery, and iteration for 10+ software, web, and analytics products across construction, legal services, and retail.',
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
      'Reviewed about 90 legacy electrical schematics across 12 projects, identified discrepancies in roughly 25%, and updated the corresponding Revit models ahead of multidisciplinary design reviews.',
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
      'Compiled a vehicle trim and compatibility database covering 50+ truck models, reducing the research needed to select scan vehicles and confirm part compatibility and shortening design cycles by an estimated 30%.',
      'Developed truck components from laser scanning and SolidWorks CAD through assembly and testing, then supported layout, fixturing, and controller setup for two OTC DAIHEN robotic welding cells, both now in production.',
    ],
  },
];
