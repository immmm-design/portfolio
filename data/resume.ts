export interface ResumeStat {
  value: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface ResumeMeta {
  summary: string;
  positioning: string;
  stats: ResumeStat[];
  pdfPath: string;
  lastUpdated: string;
}

export const resumeMeta: ResumeMeta = {
  summary:
    'Robotics engineer turned product builder. I ship things that work — across automation, embedded systems, and software — and I lead with measurable outcomes, not opinions.',
  positioning: 'Technical PM · Robotics · Entrepreneur',
  stats: [
    { value: '20+', numericTarget: 20, suffix: '+', label: 'Clients served' },
    { value: '25%', numericTarget: 25, suffix: '%', label: 'Error rate reduced at Stantec' },
    { value: '5+', numericTarget: 5, suffix: '+', label: 'Years operating own practice' },
    { value: '0', numericTarget: 0, label: 'Client churn in 5 years' },
  ],
  pdfPath: '/resume/Ivan_Makarenko_Resume.pdf',
  lastUpdated: 'May 2026',
};

export const experienceTagMap: Record<string, string[]> = {
  stantec: ['Revit', 'Process Optimization', 'Cross-functional', 'Automation'],
  'addictive-desert': ['SolidWorks', 'New Product Dev', 'Manufacturing', 'CAD'],
  freelance: ['Product Lifecycle', 'Discovery', 'Web Dev', 'Data Analytics'],
};
