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
    <section id="hero" className="min-h-screen flex items-center bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
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
              className="flex flex-col sm:flex-row gap-4"
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

          {/* Right side - Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl blur-3xl opacity-60" />
              <div className="absolute inset-10 bg-gradient-to-tr from-blue-200 via-purple-100 to-pink-200 rounded-3xl blur-2xl opacity-50" />
              <div className="absolute inset-20 bg-white/50 rounded-3xl backdrop-blur-sm" />
            </div>
          </motion.div>
        </div>

        {/* Micro-highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 lg:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
    </section>
  );
}
