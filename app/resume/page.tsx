import type { Metadata } from 'next';
import ResumeView from '@/components/resume/ResumeView';

export const metadata: Metadata = {
  title: 'Resume · Ivan Makarenko',
  description:
    'Interactive resume for Ivan Makarenko — Technical PM, robotics engineer, entrepreneur. Experience, projects, skills, and education.',
};

export default function ResumePage() {
  return <ResumeView />;
}
