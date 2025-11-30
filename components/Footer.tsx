'use client';

import { siteConfig } from '@/data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex items-center justify-center">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
