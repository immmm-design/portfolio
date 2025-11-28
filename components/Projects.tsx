'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/projects';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 mb-12 lg:mb-16 max-w-3xl"
        >
          A selection of hands-on projects where I combined engineering expertise,
          product thinking, and entrepreneurial drive to deliver real-world solutions.
        </motion.p>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group bg-[#F5F5F7] rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                {project.title}
              </h3>

              {/* Role & Context */}
              <p className="text-sm font-medium text-gray-700 mb-2">
                {project.role}
              </p>
              <p className="text-sm text-gray-600 mb-4">{project.context}</p>

              {/* Description */}
              <ul className="space-y-2 mb-6">
                {project.description.map((desc, descIndex) => (
                  <li
                    key={descIndex}
                    className="flex items-start text-sm text-gray-700 leading-relaxed"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 mr-2 flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-700"
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
      </div>
    </section>
  );
}
