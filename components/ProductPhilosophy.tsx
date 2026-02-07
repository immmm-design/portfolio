'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProductPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const principles = [
    {
      title: 'Start with Constraints, Not Features',
      description:
        'NASA Psyche required designing for near-zero gravity and vacuum before thinking about features. Constraints drove the decision to use weight distribution and spring systems instead of hydraulics. The best solutions emerge when you understand what you cannot do.',
    },
    {
      title: 'Talk to Users Before Writing Specs',
      description:
        'IT consulting taught me that clients often describe solutions when they really need you to understand their problems. A request for "better software" usually means "I\'m wasting 3 hours per day on manual tasks." Always dig deeper to find the real pain.',
    },
    {
      title: 'Prototype Fast, Iterate Faster',
      description:
        'At ADD, building an Excel database for vehicle trims in days proved the concept before investing in complex systems. It reduced cycle time by 30% and got buy-in from manufacturing teams. Ship something real, learn from it, then improve.',
    },
    {
      title: 'Measure What Matters',
      description:
        'For the Solar Hat, positive survey feedback validated demand, but the real metric would be "heat stroke incidents prevented." Always focus on outcomes, not outputs. If you can\'t measure impact, you can\'t prove value.',
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--bg-main)' }}
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold mb-6"
          style={{ color: 'var(--text-main)' }}
        >
          How I Approach Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl mb-12 lg:mb-16 leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          Great products start with understanding the problem, not falling in love with the solution. My
          approach combines engineering rigor with entrepreneurial pragmatism.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-xl border shadow-sm"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--text-main)' }}
              >
                {principle.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg mt-12 leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          This approach has helped me ship products from NASA asteroid rovers to consumer hardware while
          running a profitable business. I bring this same thinking to every product challenge.
        </motion.p>
      </div>
    </section>
  );
}
