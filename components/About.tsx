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
    <section id="about" className="py-14 lg:py-20" style={{ backgroundColor: 'var(--bg-card)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
                  I&apos;m a <strong style={{ color: 'var(--text-main)' }}>robotics engineer who moved into product</strong> because the hardest problems I kept running into were not technical. They were about deciding what to build, for whom, and under which constraints.
                </p>
                <p>
                  Right now I&apos;m at <strong style={{ color: 'var(--text-main)' }}>SourceOne in Guangdong, China</strong>, evaluating automated factories and supporting product validation for U.S. hardware customers, while finishing my M.S. in Technology Management at Columbia University.
                </p>
              </div>
            </div>

            <div className="space-y-4 leading-relaxed text-lg" style={{ color: 'var(--text-muted)' }}>
              <p>
                My focus is <strong style={{ color: 'var(--text-main)' }}>technical product management for robotics, hardware, and AI-enabled physical products</strong>. The through-line in my work is the full chain from customer requirements to engineering decisions to manufacturing reality: FoldRide Pro from user needs to factory-ready files, a NASA Psyche capstone from constraints to tested prototype, and factory evaluations from customer specs to supplier decisions.
              </p>

              <p className="text-base" style={{ color: 'var(--text-muted)' }}>
                Off the clock: Ukrainian, former national-level swimmer, educated and employed across three countries.
              </p>
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
                Now
              </h3>
              <p className="font-medium" style={{ color: 'var(--text-main)' }}>
                Technical PM Intern, SourceOne
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                Guangdong, China
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                Open to
              </h3>
              <p className="font-medium" style={{ color: 'var(--text-main)' }}>
                Full-Time Technical PM Roles
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                From December 2026 · Robotics, Hardware, AI Products
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
