'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { target: 10, suffix: '', label: 'Automated factories evaluated in China' },
  { target: 30, suffix: '%', label: 'Faster design cycles at ADD' },
  { target: 50, suffix: '+', label: 'Truck models in compatibility database' },
  { target: 90, suffix: '', label: 'Legacy schematics reviewed at Stantec' },
];

export default function StatsBand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      ref={ref}
      className="py-10 lg:py-12 border-b"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="text-3xl lg:text-4xl font-bold tracking-tight"
                style={{ color: 'var(--accent-primary)' }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <p className="text-xs lg:text-sm mt-1.5" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
