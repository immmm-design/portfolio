import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import StatsBand from '@/components/StatsBand';
import About from '@/components/About';
import ProductPhilosophy from '@/components/ProductPhilosophy';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import SkillsAndEducation from '@/components/SkillsAndEducation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <StatsBand />
      <Projects />
      <Experience />
      <ProductPhilosophy />
      <About />
      <SkillsAndEducation />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
