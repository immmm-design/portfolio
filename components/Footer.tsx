'use client';

import { siteConfig } from '@/data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} {siteConfig.name}
          </p>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: 'var(--text-muted)' }}
            >
              LinkedIn
            </a>
            {siteConfig.github && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: 'var(--text-muted)' }}
              >
                GitHub
              </a>
            )}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: 'var(--text-muted)' }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
