'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/config';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 lg:py-32" style={{ backgroundColor: 'var(--bg-muted)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-main)' }}>
            Let&apos;s Connect
          </h2>

          <p className="text-lg mb-12" style={{ color: 'var(--text-muted)' }}>
            If you&apos;re interested in product roles, technical work, or just
            want to talk about robotics and automation, feel free to reach out.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 lg:p-12 shadow-sm mb-8 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium transition-colors"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="text-left">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                  Location
                </h3>
                <p className="font-medium" style={{ color: 'var(--text-main)' }}>
                  {siteConfig.location}
                </p>
              </div>

              {siteConfig.phone && (
                <div className="text-left">
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                    Phone
                  </h3>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                    className="font-medium transition-colors"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              )}

              <div className="text-left">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                  LinkedIn
                </h3>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors inline-flex items-center"
                  style={{ color: 'var(--accent-primary)' }}
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
        </motion.div>
      </div>
    </section>
  );
}
