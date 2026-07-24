'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { siteConfig } from '@/data/config';

function CopyableValue({ value, href }: { value: string; href: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = href;
    }
  };

  return (
    <span className="inline-flex items-center gap-2">
      <a
        href={href}
        className="font-medium transition-colors"
        style={{ color: 'var(--accent-primary)' }}
      >
        {value}
      </a>
      <button
        onClick={copy}
        aria-label={`Copy ${value}`}
        title="Copy to clipboard"
        className="p-1 rounded-md transition-all hover:scale-110"
        style={{ color: copied ? '#16a34a' : 'var(--text-muted)' }}
      >
        {copied ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3" />
          </svg>
        )}
      </button>
      <span
        aria-live="polite"
        className={`text-xs font-medium transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}
        style={{ color: '#16a34a' }}
      >
        Copied!
      </span>
    </span>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-14 lg:py-20" style={{ backgroundColor: 'var(--bg-page)' }} ref={ref}>
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

          <p className="text-lg mb-4" style={{ color: 'var(--text-muted)' }}>
            Full-time Technical Product Management roles, hardware questions,
            or manufacturing talk. My inbox is open.
          </p>
          <p className="text-sm mb-12 font-medium" style={{ color: 'var(--text-main)' }}>
            Available from December 2026 · New York, NY · Open to relocation
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
                <CopyableValue value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
              </div>

              <div className="text-left">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                  Location
                </h3>
                <p className="font-medium" style={{ color: 'var(--text-main)' }}>
                  {siteConfig.location}
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                  Resume
                </h3>
                <a
                  href="/resume/Ivan_Makarenko_Resume.pdf"
                  download
                  className="font-medium transition-colors inline-flex items-center"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Download PDF
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </a>
              </div>

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
