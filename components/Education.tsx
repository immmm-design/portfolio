'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { education } from '@/data/education';

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // School logos and colors
  const schoolInfo: Record<string, { logo: string; width: number; height: number }> = {
    columbia: {
      logo: '/logos/columbia.webp',
      width: 120,
      height: 60,
    },
    asu: {
      logo: '/logos/asu.png',
      width: 100,
      height: 100,
    },
  };

  return (
    <section id="education" className="py-20 lg:py-32" style={{ backgroundColor: 'var(--bg-page)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold mb-12 lg:mb-16"
          style={{ color: 'var(--text-main)' }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const info = schoolInfo[edu.id] || schoolInfo.asu;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border-l-4"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--accent-primary)',
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-4">
                  <div className="flex items-start gap-6 flex-1">
                    {/* School Logo */}
                    <div className="flex-shrink-0">
                      <Image
                        src={info.logo}
                        alt={edu.institution}
                        width={info.width}
                        height={info.height}
                        className="object-contain"
                      />
                    </div>

                    {/* Education Details */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-medium mb-1" style={{ color: 'var(--text-main)' }}>
                        {edu.institution}
                      </p>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{edu.location}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                    {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                    <span className="block text-xs mt-1">
                      ({edu.endDate.includes('2026') ? 'Expected' : 'Completed'})
                    </span>
                  </div>
                </div>

                <p className="leading-relaxed ml-0 lg:ml-32" style={{ color: 'var(--text-muted)' }}>{edu.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
