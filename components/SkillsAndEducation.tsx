'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { skillGroups } from '@/data/skills';
import { education } from '@/data/education';

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

const schoolLogos: Record<string, { logo: string; width: number; height: number }> = {
  columbia: { logo: '/logos/columbia.jpg', width: 72, height: 72 },
  asu: { logo: '/logos/asu.png', width: 72, height: 72 },
  lfa: { logo: '/logos/lfa.jpg', width: 72, height: 72 },
};

export default function SkillsAndEducation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-14 lg:py-20"
      style={{ backgroundColor: 'var(--bg-muted)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT — Skills */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl lg:text-4xl font-bold mb-3"
              style={{ color: 'var(--text-main)' }}
            >
              Skills &amp; Tools
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-base mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              Technical depth across software, hardware, and systems.
            </motion.p>

            <div className="space-y-5">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.06 }}
                >
                  <h3
                    className="text-sm font-semibold uppercase tracking-wide mb-2.5"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-md border transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-main)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Education */}
          <div id="education">
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl lg:text-4xl font-bold mb-3"
              style={{ color: 'var(--text-main)' }}
            >
              Education
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-base mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              A path from boarding school through engineering to product strategy.
            </motion.p>

            <div className="space-y-4">
              {education.map((edu, index) => {
                const info = schoolLogos[edu.id];
                const expected = edu.endDate.includes('2026');
                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                    className="rounded-2xl p-5 lg:p-6 border-l-4 transition-shadow hover:shadow-md"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderLeftColor: 'var(--accent-primary)',
                      borderTop: '1px solid var(--border-subtle)',
                      borderRight: '1px solid var(--border-subtle)',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {info && (
                        <div className="flex-shrink-0">
                          <Image
                            src={info.logo}
                            alt={edu.institution}
                            width={info.width}
                            height={info.height}
                            className="object-contain rounded-md"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2 mb-1">
                          <h3 className="text-base lg:text-lg font-bold leading-snug" style={{ color: 'var(--text-main)' }}>
                            {edu.degree}
                          </h3>
                        </div>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                          <span>{edu.location}</span>
                          <span aria-hidden>·</span>
                          <span>
                            {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                            {expected ? ' (Expected)' : ''}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          {edu.note}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
