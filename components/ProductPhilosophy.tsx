'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Tilt Card Component with 3D effect
function TiltCard({ principle, index, isInView }: { principle: { title: string; description: string }; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize to -0.5 to 0.5 range
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-subtle)',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
      className="p-6 rounded-xl border"
    >
      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-main)' }}>
        {principle.title}
      </h3>
      <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {principle.description}
      </p>
    </motion.div>
  );
}

export default function ProductPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const principles = [
    {
      title: 'Start with Constraints, Not Features',
      description:
        'On NASA Psyche, near-zero gravity and vacuum picked the design for us: springs beat hydraulics. The best solutions come from knowing what you can\'t do.',
    },
    {
      title: 'Talk to Users Before Writing Specs',
      description:
        'Clients ask for "better software" when they mean "I lose 3 hours a day to manual work." Dig past the request to the real pain.',
    },
    {
      title: 'Prototype Fast, Iterate Faster',
      description:
        'An Excel database built in days cut design cycle time 30%, before anyone invested in complex systems. Ship something real, then improve it.',
    },
    {
      title: 'Measure What Matters',
      description:
        'Survey praise validated the Solar Hat; "heat strokes prevented" is the metric that matters. Outcomes over outputs, always.',
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-14 lg:py-20"
      style={{ backgroundColor: 'var(--bg-main)' }}
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl lg:text-5xl font-bold mb-6"
          style={{ color: 'var(--text-main)' }}
        >
          How I Approach Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-xl mb-12 lg:mb-16 leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          Great products start with understanding the problem, not falling in love with the solution. My
          approach combines engineering rigor with entrepreneurial pragmatism.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <TiltCard key={principle.title} principle={principle} index={index} isInView={isInView} />
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
