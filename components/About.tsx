'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-14 lg:py-20" style={{ backgroundColor: 'var(--bg-card)' }} ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl lg:text-5xl font-bold mb-10 lg:mb-12"
          style={{ color: 'var(--text-main)' }}
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
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
                This past summer I worked at <strong style={{ color: 'var(--text-main)' }}>SourceOne in Guangdong, China</strong>, evaluating automated factories and supporting product validation for U.S. hardware customers. Now I&apos;m back in New York, finishing my M.S. in Technology Management at Columbia University.
              </p>
            </div>
          </div>

          <div className="space-y-4 leading-relaxed text-lg" style={{ color: 'var(--text-muted)' }}>
            <p>
              My focus is <strong style={{ color: 'var(--text-main)' }}>technical product management for robotics, hardware, and AI-enabled physical products</strong>. The through-line in my work is the full chain from customer requirements to engineering decisions to manufacturing reality: FoldRide Pro from user needs to engineering documentation, a NASA Psyche capstone from constraints to tested prototype, and factory evaluations from customer specs to supplier decisions.
            </p>

            <p className="text-base" style={{ color: 'var(--text-muted)' }}>
              Off the clock: Ukrainian, former national-level swimmer, educated and employed across three countries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
