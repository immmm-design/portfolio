'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '@/data/education';

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // School colors
  const schoolStyles: Record<string, { bg: string; border: string; badge: string }> = {
    columbia: {
      bg: 'bg-gradient-to-br from-blue-50 to-white',
      border: 'border-l-4 border-blue-500',
      badge: 'bg-blue-500',
    },
    asu: {
      bg: 'bg-gradient-to-br from-red-50 to-amber-50',
      border: 'border-l-4 border-red-700',
      badge: 'bg-red-700',
    },
  };

  return (
    <section id="education" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12 lg:mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const style = schoolStyles[edu.id] || schoolStyles.asu;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`${style.bg} ${style.border} rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`${style.badge} w-2 h-2 rounded-full mt-2 flex-shrink-0`} />
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg font-medium text-gray-700 mb-1 ml-5">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 ml-5">{edu.location}</p>
                  </div>
                  <div className="mt-2 lg:mt-0 text-sm font-medium text-gray-600">
                    {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                    <span className="block text-xs mt-1">
                      ({edu.endDate.includes('2026') ? 'Expected' : 'Completed'})
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed ml-5">{edu.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
