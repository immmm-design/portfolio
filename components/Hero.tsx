'use client';

import { motion } from 'framer-motion';
import { heroHighlights } from '@/data/hero';
import { siteConfig } from '@/data/config';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm font-medium text-gray-600 mb-4 tracking-wide"
            >
              Product Management · Robotics · Automation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Building products at the intersection of hardware, software, and
              people.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed"
            >
              I&apos;m Ivan, an aspiring Product Manager and robotics engineer
              based in New York. I combine automation, embedded systems, and
              process optimization to turn ideas into practical, scalable
              solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base text-gray-600 mb-8"
            >
              {siteConfig.location} · Columbia University – M.S. Technology
              Management (&apos;26)
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <a
                href="/resume/Ivan_Makarenko_Resume.pdf"
                download
                className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Micro-highlights strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {heroHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-sm text-gray-600 leading-relaxed"
              >
                {highlight.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
