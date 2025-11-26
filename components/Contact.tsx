'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/config';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#F5F5F7]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Connect
          </h2>

          <p className="text-lg text-gray-700 mb-12">
            If you&apos;re interested in product roles, technical work, or just
            want to talk about robotics and automation, feel free to reach out.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm mb-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Location
                </h3>
                <p className="text-gray-900 font-medium">
                  {siteConfig.location}
                </p>
              </div>

              {siteConfig.phone && (
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Phone
                  </h3>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                    className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              )}

              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  LinkedIn
                </h3>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium hover:text-gray-700 transition-colors inline-flex items-center"
                >
                  View Profile
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Email Me
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              View LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
