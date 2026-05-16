'use client';

import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { siteConfig } from '@/data/config';
import Image from 'next/image';

export default function Hero() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const heroRef = useRef(null);

  // Parallax effect - background moves slower than scroll (0.3 speed ratio)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    // Check initial theme
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

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
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        minHeight: '80vh',
      }}
    >
      {/* Background Images with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Light mode background (NYC Day) */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: theme === 'light' ? 1 : 0,
          }}
        >
          <Image
            src="/nyc-day.png"
            alt="NYC Day"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Dark mode background (NYC Night) */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: theme === 'dark' ? 1 : 0,
          }}
        >
          <Image
            src="/nyc-night.png"
            alt="NYC Night"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Overlay for text readability */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.75)' : 'rgba(0, 0, 0, 0.6)',
          }}
        />
      </motion.div>

      {/* Content */}
      <div
        className="hero-fade-in w-full px-6 lg:px-8 relative z-10"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          {/* Overline */}
          <div
            className="mb-4 tracking-wider uppercase"
            style={{
              fontSize: '0.875rem',
              letterSpacing: '0.08em',
              color: 'var(--hero-text-muted)',
            }}
          >
            Product Manager · Robotics Engineer · Entrepreneur
          </div>

          {/* Main Headline */}
          <h1
            className="font-bold mb-5"
            style={{
              fontSize: 'clamp(1.9rem, 5vw, 3rem)',
              lineHeight: '1.15',
              color: 'var(--hero-text-main)',
            }}
          >
            I help teams ship products faster by bridging technical expertise with strategy
          </h1>

          {/* Subheadline / Bio */}
          <p
            className="mb-4"
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.15rem)',
              lineHeight: '1.6',
              maxWidth: '720px',
              margin: '16px auto 0',
              color: 'var(--hero-text-muted)',
            }}
          >
            From Ukrainian swimming champion to U.S. boarding school to robotics engineer, my journey taught me to solve hard problems under pressure. I've spent 5+ years building physical products like NASA asteroid rovers, off-road vehicle systems, and consumer hardware while running a profitable IT consulting business. Now at Columbia University studying Technology Management, I'm combining hands-on engineering depth with product strategy to lead teams building the next generation of tech products.
          </p>

          {/* Location & Education Line */}
          <p
            className="mb-6"
            style={{
              fontSize: '0.95rem',
              marginTop: '16px',
              color: 'var(--hero-text-muted)',
            }}
          >
            New York, NY · Columbia University – M.S. Technology Management (&apos;26) · B.S. Engineering, Robotics
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('#projects')}
              className="w-full sm:w-auto px-7 py-3 font-semibold rounded-full transition-all hover:shadow-lg hover:brightness-110"
              style={{
                backgroundColor: 'var(--hero-accent)',
                color: '#ffffff',
                border: 'none',
                minWidth: '220px',
              }}
            >
              View My Work
            </button>
            <a
              href="/resume"
              className="w-full sm:w-auto px-7 py-3 font-medium rounded-full transition-all hover:shadow-lg text-center"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--hero-accent)',
                border: '1px solid var(--hero-accent)',
                minWidth: '220px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--hero-accent)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--hero-accent)';
              }}
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
