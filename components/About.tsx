'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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
            className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed text-lg"
          >
            <p>
              I started in robotics and embedded systems and discovered that my
              favorite work sits where user needs, engineering constraints, and
              business goals collide. I enjoy turning ambiguous problems into
              clear plans, and helping teams ship solutions that actually get
              used.
            </p>
            <p>
              Through internships at Stantec and Addictive Desert Designs, I
              learned that the best impact often comes from making teams more
              efficient and aligned. At Stantec, I created electrical drawings
              and project trackers that improved coordination across teams. At
              Addictive Desert Designs, I designed robotic assembly improvements
              and built data tracking systems that cut design cycle time by 30%.
              In my freelance IT consulting work, I solve real problems directly
              with clients, building systems that actually work for their needs.
            </p>
            <p>
              At Columbia, I&apos;m sharpening my technology management and
              strategy skills so I can operate as a product leader who speaks
              both engineering and business fluently.
            </p>
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
                Product Management & Technology Management
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
