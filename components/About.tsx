'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/config';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12 lg:mb-16"
        >
          About
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main content - 2/3 width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Photo and intro */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/me-photo.jpg"
                  alt="Ivan Makarenko"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-md object-cover"
                />
              </div>
              <div className="flex-1 text-gray-700 leading-relaxed text-lg">
                <p className="mb-4">
                  As a <strong>Robotics Engineer with 5+ years of entrepreneurial experience</strong>, I have a rare combination of deep technical literacy and customer-centric business acumen. I specialize in aligning technical feasibility with business viability, ensuring that engineering innovation translates directly into market value.
                </p>
                <p>
                  Currently pursuing my <strong>M.S. in Technology Management at Columbia University</strong>, I am refining my ability to lead product lifecycles, manage cross-functional teams, and drive innovation in hardware-software environments.
                </p>
              </div>
            </div>

            {/* Three pillars */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p className="font-semibold text-gray-900">My journey has three main pillars:</p>

              <div className="pl-4 border-l-4 border-blue-500">
                <p className="mb-2">
                  <strong className="text-gray-900">The Engineer:</strong> With a B.S. in Robotics, I have hands-on experience in automation and electrical design (including the NASA Psyche Mission Capstone). I can speak the language of engineering teams, vetting technical feasibility in Python, C++, and SQL.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-green-500">
                <p className="mb-2">
                  <strong className="text-gray-900">The Entrepreneur:</strong> For over 5 years, I ran my own IT services venture. This taught me the fundamentals of Product Management: understanding user pain points, managing ambiguity, and delivering value under tight constraints.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-purple-500">
                <p className="mb-2">
                  <strong className="text-gray-900">The Strategist:</strong> At Columbia, I am bridging these worlds, focusing on Product Strategy, Digital Transformation, and Agile Leadership.
                </p>
              </div>

              <p className="mt-6 font-medium text-gray-900">
                I am actively seeking <strong>Summer 2026 Internships</strong> in Technical Product Management, Innovation, or R&D Operations where I can translate technical complexity into business impact.
              </p>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <p className="text-sm font-semibold text-gray-900 mb-2">Toolkit:</p>
                <p className="text-sm text-gray-700">
                  Robotics | Product Lifecycle Management (PLM) | Market Research | Python & SQL | Agile & Scrum
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick facts - 1/3 width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Based in
              </h3>
              <p className="text-gray-900 font-medium">{siteConfig.location}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Current Focus
              </h3>
              <p className="text-gray-900 font-medium">
                Technical Product Management
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Seeking
              </h3>
              <p className="text-gray-900 font-medium">
                Summer 2026 Internships
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Technical PM, Innovation, R&D Operations
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Education
              </h3>
              <p className="text-gray-900 font-medium mb-2">
                M.S. Technology Management
              </p>
              <p className="text-sm text-gray-600">Columbia University</p>
              <p className="text-gray-900 font-medium mt-3 mb-2">
                B.S. Engineering – Robotics
              </p>
              <p className="text-sm text-gray-600">Arizona State University</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Languages
              </h3>
              <p className="text-gray-900 font-medium">
                English, Russian, Ukrainian
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
