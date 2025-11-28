'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/config';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md shadow-sm border-b'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: isScrolled ? 'var(--bg-card)' : 'transparent',
          borderColor: isScrolled ? 'var(--border-subtle)' : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo / Name */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="text-lg lg:text-xl font-semibold transition-colors"
              style={{ color: 'var(--text-main)' }}
            >
              {siteConfig.name}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-all relative ${
                    activeSection === link.href.slice(1)
                      ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full'
                      : ''
                  }`}
                  style={{
                    color:
                      activeSection === link.href.slice(1)
                        ? 'var(--accent-primary)'
                        : 'var(--text-muted)',
                    backgroundColor:
                      activeSection === link.href.slice(1)
                        ? 'var(--accent-primary)'
                        : 'transparent',
                  }}
                >
                  {link.name}
                </a>
              ))}
              <ThemeToggle />
              <a
                href="/resume/Ivan_Makarenko_Resume.pdf"
                download
                className="px-4 py-2 text-sm font-medium rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                }}
              >
                Download Resume
              </a>
            </div>

            {/* Mobile Menu Button + Theme Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 transition-colors"
                style={{ color: 'var(--text-main)' }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className="fixed top-16 left-0 right-0 shadow-lg"
            style={{ backgroundColor: 'var(--bg-card)' }}
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-base font-medium transition-colors"
                  style={{
                    color:
                      activeSection === link.href.slice(1)
                        ? 'var(--accent-primary)'
                        : 'var(--text-muted)',
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume/Ivan_Makarenko_Resume.pdf"
                download
                className="block w-full px-4 py-2 text-center text-sm font-medium rounded-full transition-colors"
                style={{
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
