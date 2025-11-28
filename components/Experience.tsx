'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { experiences } from '@/data/experience';

function formatDate(dateStr: string): string {
  if (dateStr === 'Present') return 'Present';
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-20 lg:py-32" style={{ backgroundColor: 'var(--bg-muted)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold mb-6"
          style={{ color: 'var(--text-main)' }}
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg mb-12 lg:mb-16 max-w-3xl"
          style={{ color: 'var(--text-muted)' }}
        >
          I&apos;ve worked across automation engineering, new product
          development, and IT systems consulting. In each role, I focus on
          improving workflows, reliability, and clarity.
        </motion.p>

        <div className="space-y-8 lg:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative"
            >
              {/* Timeline line (desktop only) */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: 'var(--accent-primary-soft)' }}>
                <div
                  className="absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: hoveredId === exp.id ? 'var(--accent-primary)' : 'var(--accent-primary-soft)',
                    transform: hoveredId === exp.id ? 'translateX(-50%) scale(1.5)' : 'translateX(-50%)'
                  }}
                />
              </div>

              {/* Content */}
              <div className="lg:ml-12 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium mb-1" style={{ color: 'var(--text-main)' }}>
                      {exp.company}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{exp.location}</p>
                  </div>
                  <div className="mt-2 lg:mt-0 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                    {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start leading-relaxed"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: 'var(--accent-primary-soft)' }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
