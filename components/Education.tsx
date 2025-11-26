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
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-[#F5F5F7] rounded-2xl p-6 lg:p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-600">{edu.location}</p>
                </div>
                <div className="mt-2 lg:mt-0 text-sm font-medium text-gray-600">
                  {formatDate(edu.startDate)} – {formatDate(edu.endDate)} (
                  {edu.endDate.includes('2026') ? 'Expected' : 'Completed'})
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed italic">{edu.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
