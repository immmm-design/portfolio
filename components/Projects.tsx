'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects, additionalProjects } from '@/data/projects';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-14 lg:py-20" style={{ backgroundColor: 'var(--bg-page)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold mb-6"
          style={{ color: 'var(--text-main)' }}
        >
          Featured Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg mb-12 lg:mb-16 max-w-3xl"
          style={{ color: 'var(--text-muted)' }}
        >
          A patent-pending hardware product, an AI prototype, and an asteroid
          rover capstone.
        </motion.p>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative overflow-hidden rounded-2xl p-6 lg:p-8 cursor-pointer border flex flex-col h-full"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
              }}
            >
              {/* Spotlight glow following cursor */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    'radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in srgb, var(--accent-primary) 9%, transparent), transparent 70%)',
                }}
              />
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--text-muted)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold mb-2 transition-colors" style={{ color: 'var(--text-main)' }}>
                {project.title}
              </h3>

              {/* Role & Context */}
              <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-main)' }}>
                {project.role}
              </p>
              <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>{project.context}</p>

              {/* Status label */}
              {project.status && (
                <p
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded-md border mb-4"
                  style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
                >
                  {project.status}
                </p>
              )}

              {/* Description */}
              <ul className="space-y-2 mb-6 flex-1">
                {project.description.map((desc, descIndex) => (
                  <li
                    key={descIndex}
                    className="flex items-start text-sm leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: 'var(--accent-primary-soft)' }} />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium mt-auto self-start"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {project.linkText || 'Learn more'}
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional technical work */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl font-bold mt-14 mb-5"
          style={{ color: 'var(--text-main)' }}
        >
          Additional Technical Work
        </motion.h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {additionalProjects.map((mini, index) => (
            <motion.div
              key={mini.id}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 + index * 0.08 }}
              className="rounded-xl border p-5"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
            >
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h4 className="text-base font-bold" style={{ color: 'var(--text-main)' }}>
                  {mini.title}
                </h4>
                <span className="text-xs whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
                  {mini.tags.join(' · ')}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {mini.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
