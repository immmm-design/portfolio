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
    <section id="about" className="py-20 lg:py-32" style={{ backgroundColor: 'var(--bg-card)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold mb-12 lg:mb-16"
          style={{ color: 'var(--text-main)' }}
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
              <div className="flex-1 leading-relaxed text-lg" style={{ color: 'var(--text-muted)' }}>
                <p className="mb-4">
                  As a <strong style={{ color: 'var(--text-main)' }}>Robotics Engineer with 5+ years of entrepreneurial experience</strong>, I have a rare combination of deep technical literacy and customer-centric business acumen. I specialize in aligning technical feasibility with business viability, ensuring that engineering innovation translates directly into market value.
                </p>
                <p>
                  Currently pursuing my <strong style={{ color: 'var(--text-main)' }}>M.S. in Technology Management at Columbia University</strong>, I am refining my ability to lead product lifecycles, manage cross-functional teams, and drive innovation in hardware-software environments.
                </p>
              </div>
            </div>

            {/* Three pillars */}
            <div className="space-y-4 leading-relaxed text-lg" style={{ color: 'var(--text-muted)' }}>
              <p className="font-semibold" style={{ color: 'var(--text-main)' }}>My journey has three main pillars:</p>

              <div className="pl-4 border-l-4" style={{ borderColor: 'var(--accent-primary)', opacity: 1 }}>
                <p className="mb-2">
                  <strong style={{ color: 'var(--text-main)' }}>The Engineer:</strong> With a B.S. in Robotics, I have hands-on experience in automation and electrical design (including the NASA Psyche Mission Capstone). I can speak the language of engineering teams, vetting technical feasibility in Python, C++, and SQL.
                </p>
              </div>

              <div className="pl-4 border-l-4" style={{ borderColor: 'var(--accent-primary)', opacity: 0.8 }}>
                <p className="mb-2">
                  <strong style={{ color: 'var(--text-main)' }}>The Entrepreneur:</strong> For over 5 years, I ran my own IT services venture. This taught me the fundamentals of Product Management: understanding user pain points, managing ambiguity, and delivering value under tight constraints.
                </p>
              </div>

              <div className="pl-4 border-l-4" style={{ borderColor: 'var(--accent-primary)', opacity: 0.6 }}>
                <p className="mb-2">
                  <strong style={{ color: 'var(--text-main)' }}>The Strategist:</strong> At Columbia, I am bridging these worlds, focusing on Product Strategy, Digital Transformation, and Agile Leadership.
                </p>
              </div>

              <p className="mt-6 font-medium" style={{ color: 'var(--text-main)' }}>
                I am actively seeking <strong>Summer 2026 Internships</strong> in Technical Product Management, Innovation, or R&D Operations where I can translate technical complexity into business impact.
              </p>

              <div className="mt-6 p-4 rounded-xl border shadow-sm" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                <p className="text-sm font-bold mb-2" style={{ color: 'var(--text-main)' }}>Toolkit:</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
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
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                Based in
              </h3>
              <p className="font-medium" style={{ color: 'var(--text-main)' }}>{siteConfig.location}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                Current Focus
              </h3>
              <p className="font-medium" style={{ color: 'var(--text-main)' }}>
                Technical Product Management
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                Seeking
              </h3>
              <p className="font-medium" style={{ color: 'var(--text-main)' }}>
                Summer 2026 Internships
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                Technical PM, Innovation, R&D Operations
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                Education
              </h3>
              <p className="font-medium mb-2" style={{ color: 'var(--text-main)' }}>
                M.S. Technology Management
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Columbia University</p>
              <p className="font-medium mt-3 mb-2" style={{ color: 'var(--text-main)' }}>
                B.S. Engineering – Robotics
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Arizona State University</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                Languages
              </h3>
              <p className="font-medium" style={{ color: 'var(--text-main)' }}>
                English, Russian, Ukrainian
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
