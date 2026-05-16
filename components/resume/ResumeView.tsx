'use client';

import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/data/config';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import { education } from '@/data/education';
import { resumeMeta, experienceTagMap } from '@/data/resume';
import AnimatedCounter from './AnimatedCounter';

function formatDate(dateStr: string): string {
  if (dateStr === 'Present') return 'Present';
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function CopyPill({
  label,
  value,
  icon,
  href,
  onCopy,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
  onCopy: (label: string) => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    if (href && (e.metaKey || e.ctrlKey)) return;
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopy(label);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      if (href) window.open(href, '_blank');
    }
  };

  const content = (
    <motion.span
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-full border transition-colors cursor-pointer select-none"
      style={{
        backgroundColor: copied ? 'var(--accent-primary)' : 'var(--bg-card)',
        borderColor: copied ? 'var(--accent-primary)' : 'var(--border-subtle)',
        color: copied ? '#ffffff' : 'var(--text-main)',
      }}
    >
      <span className="w-4 h-4 flex items-center justify-center" style={{ color: copied ? '#ffffff' : 'var(--accent-primary)' }}>
        {copied ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          icon
        )}
      </span>
      <span>{copied ? 'Copied' : value}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={handleClick} className="no-underline">
        {content}
      </a>
    );
  }
  return <button onClick={handleClick} className="appearance-none bg-transparent border-0 p-0">{content}</button>;
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0);
  const tags = experienceTagMap[exp.id] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="resume-print-break relative pl-8 pb-6 last:pb-0"
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ backgroundColor: 'var(--border-subtle)' }}
      />
      <motion.div
        whileHover={{ scale: 1.4 }}
        className="absolute left-0 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: 'var(--accent-primary)' }}
      />

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left rounded-xl p-5 border transition-all"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-subtle)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent-primary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-subtle)';
        }}
      >
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--text-main)' }}>
              {exp.role}
            </h3>
            <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent-primary)' }}>
              {exp.company} · {exp.location}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span className="text-xs font-medium whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
              {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
            </span>
            <motion.svg
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-4 no-print"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'var(--text-muted)' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </div>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] font-medium rounded-full"
                style={{
                  backgroundColor: 'var(--bg-muted)',
                  color: 'var(--text-muted)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden mt-4 space-y-2.5"
            >
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <span
                    className="inline-block w-1 h-1 rounded-full mt-2 mr-2.5 flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

function ProjectMiniCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -2 }}
      onClick={() => setExpanded(!expanded)}
      className="resume-print-break w-full text-left rounded-xl p-5 border transition-colors"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-subtle)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }}
    >
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[11px] font-medium rounded-full"
            style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--text-muted)' }}
          >
            {tag}
          </span>
        ))}
      </div>
      <h4 className="text-base font-bold mb-1 leading-snug" style={{ color: 'var(--text-main)' }}>
        {project.title}
      </h4>
      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
        {project.context}
      </p>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3 space-y-2"
          >
            {project.description.map((d, i) => (
              <li
                key={i}
                className="flex items-start text-xs leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                <span
                  className="inline-block w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
                <span>{d}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function SkillsPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = skillGroups[activeIndex];

  return (
    <div className="rounded-xl border p-5" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
      <div className="flex flex-wrap gap-1.5 mb-4 no-print">
        {skillGroups.map((group, i) => (
          <button
            key={group.title}
            onClick={() => setActiveIndex(i)}
            className="relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors"
            style={{
              color: activeIndex === i ? '#ffffff' : 'var(--text-muted)',
            }}
          >
            {activeIndex === i && (
              <motion.span
                layoutId="skills-tab-bg"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: 'var(--accent-primary)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{group.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="flex flex-wrap gap-1.5"
        >
          {active.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs rounded-md border"
              style={{
                backgroundColor: 'var(--bg-muted)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-main)',
              }}
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Print-only: show all skill groups */}
      <div className="hidden print:block space-y-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-bold mb-1">{group.title}</p>
            <p className="text-xs">{group.skills.join(' · ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const MailIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2L7.5 10.5a11 11 0 006 6l1.12-1.73a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2A16 16 0 013 5z" />
  </svg>
);
const LinkIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 015.656 5.656l-3 3a4 4 0 01-5.656-5.656m-2 2a4 4 0 01-5.656-5.656l3-3a4 4 0 015.656 5.656" />
  </svg>
);
const DocIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M7 8h10M5 6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V6z" />
  </svg>
);

export default function ResumeView() {
  const [toast, setToast] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  const showToast = (label: string) => {
    setToast(`${label} copied to clipboard`);
    setTimeout(() => setToast(null), 1800);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeMeta.pdfPath;
    link.download = 'Ivan_Makarenko_Resume.pdf';
    link.click();
  };

  const handlePrint = () => window.print();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (k === 'd') {
        e.preventDefault();
        handleDownload();
      } else if (k === 'p') {
        e.preventDefault();
        handlePrint();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div ref={containerRef} className="resume-print-area pt-24 pb-20" style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Scroll progress rail */}
      <motion.div
        className="fixed left-0 top-0 h-1 origin-left z-50 no-print"
        style={{ scaleX: progress, backgroundColor: 'var(--accent-primary)', width: '100%' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Hero Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative resume-print-break"
        >
          <div className="absolute inset-0 -z-10 resume-grid-bg opacity-40 rounded-3xl" style={{ maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }} />

          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: 'var(--accent-primary)' }}>
            Resume
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="resume-name-gradient">{siteConfig.name}</span>
          </h1>
          <p className="text-lg sm:text-xl mt-3 font-medium" style={{ color: 'var(--text-main)' }}>
            {resumeMeta.positioning}
          </p>
          <p className="text-base sm:text-lg mt-5 max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {resumeMeta.summary}
          </p>

          {/* Contact pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            <CopyPill
              label="Email"
              value={siteConfig.email}
              icon={MailIcon}
              href={`mailto:${siteConfig.email}`}
              onCopy={showToast}
            />
            {siteConfig.phone && (
              <CopyPill
                label="Phone"
                value={siteConfig.phone}
                icon={PhoneIcon}
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`}
                onCopy={showToast}
              />
            )}
            <CopyPill
              label="LinkedIn"
              value="linkedin.com/in/ivanmakarenko"
              icon={LinkIcon}
              href={siteConfig.linkedin}
              onCopy={showToast}
            />
          </div>

          {/* Actions */}
          <div data-resume-actions className="flex flex-wrap items-center gap-3 mt-6 no-print">
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full shadow-sm transition-shadow hover:shadow-md"
              style={{ backgroundColor: 'var(--accent-primary)', color: '#ffffff' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download PDF
              <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono rounded border border-white/30 text-white/80">D</kbd>
            </motion.button>
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-main)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2-4h6m-6 4h6m-6 0v-4m6 4v-4m-6-9h6v5H9V4z" />
              </svg>
              Print
              <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>P</kbd>
            </motion.button>
            <Link
              href="/"
              className="inline-flex items-center gap-1 px-3 py-2.5 text-sm font-medium transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to portfolio
            </Link>
          </div>
        </motion.header>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="resume-print-break mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
        >
          {resumeMeta.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border p-5"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
            >
              <div className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--accent-primary)' }}>
                {typeof stat.numericTarget === 'number' ? (
                  <AnimatedCounter
                    target={stat.numericTarget}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                ) : (
                  stat.value
                )}
              </div>
              <p className="text-xs lg:text-sm mt-1.5 leading-snug" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Two-column body */}
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-10 lg:gap-12 mt-16">
          {/* LEFT: Experience + Projects */}
          <div className="space-y-12">
            <section>
              <SectionHeading label="Experience" />
              <div className="mt-6">
                {experiences.map((exp, i) => (
                  <ExperienceCard key={exp.id} exp={exp} index={i} />
                ))}
              </div>
            </section>

            <section>
              <SectionHeading label="Selected Projects" hint="Click a card to expand" />
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {projects.map((p, i) => (
                  <ProjectMiniCard key={p.id} project={p} index={i} />
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT: Skills + Education */}
          <aside className="space-y-10">
            <section className="resume-print-break">
              <SectionHeading label="Skills" small />
              <div className="mt-5">
                <SkillsPanel />
              </div>
            </section>

            <section className="resume-print-break">
              <SectionHeading label="Education" small />
              <div className="mt-5 space-y-3">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="rounded-xl border p-4"
                    style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                  >
                    <p className="text-xs font-medium" style={{ color: 'var(--accent-primary)' }}>
                      {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                    </p>
                    <h4 className="text-sm font-bold mt-1 leading-snug" style={{ color: 'var(--text-main)' }}>
                      {edu.degree}
                    </h4>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-main)' }}>
                      {edu.institution}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {edu.location}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="resume-print-break">
              <SectionHeading label="Links" small />
              <div className="mt-5 rounded-xl border p-4 space-y-2.5" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                <LinkRow icon={MailIcon} label={siteConfig.email} href={`mailto:${siteConfig.email}`} />
                {siteConfig.phone && <LinkRow icon={PhoneIcon} label={siteConfig.phone} href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`} />}
                <LinkRow icon={LinkIcon} label="linkedin.com/in/ivanmakarenko" href={siteConfig.linkedin} />
                <LinkRow icon={DocIcon} label="Portfolio site" href="/" />
              </div>
            </section>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
          <span>Last updated · {resumeMeta.lastUpdated}</span>
          <span className="no-print">Press <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded border" style={{ borderColor: 'var(--border-subtle)' }}>D</kbd> to download · <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded border" style={{ borderColor: 'var(--border-subtle)' }}>P</kbd> to print</span>
        </footer>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            data-resume-toast
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full shadow-lg text-sm font-medium no-print flex items-center gap-2"
            style={{ backgroundColor: 'var(--text-main)', color: 'var(--bg-page)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeading({ label, hint, small }: { label: string; hint?: string; small?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h2
        className={`font-bold tracking-tight ${small ? 'text-xl' : 'text-2xl lg:text-3xl'}`}
        style={{ color: 'var(--text-main)' }}
      >
        {label}
      </h2>
      {hint && (
        <span className="text-xs no-print" style={{ color: 'var(--text-muted)' }}>
          {hint}
        </span>
      )}
    </div>
  );
}

function LinkRow({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2.5 text-xs transition-colors group"
      style={{ color: 'var(--text-muted)' }}
    >
      <span className="w-4 h-4 flex items-center justify-center" style={{ color: 'var(--accent-primary)' }}>
        {icon}
      </span>
      <span className="group-hover:underline" style={{ color: 'var(--text-main)' }}>{label}</span>
    </a>
  );
}
