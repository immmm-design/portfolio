export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  context: string;
  tags: string[];
  status?: string;
  description: string[];
  link?: string;
  linkText?: string;
}

export interface MiniProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  note: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github?: string;
  accentColor: string;
  animationsEnabled: boolean;
}

export interface HeroHighlight {
  text: string;
}
