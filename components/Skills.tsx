'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillGroups } from '@/data/skills';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 lg:py-32" style={{ backgroundColor: 'var(--bg-muted)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl lg:text-5xl font-bold mb-6"
          style={{ color: 'var(--text-main)' }}
        >
          Skills & Tools
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-lg mb-12 lg:mb-16 max-w-3xl"
          style={{ color: 'var(--text-muted)' }}
        >
          I bridge technical depth with product thinking. Here&apos;s how I work
          across software, hardware, and systems.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-main)' }}>
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-start text-sm leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: 'var(--accent-primary-soft)' }} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
