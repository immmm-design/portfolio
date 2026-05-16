import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductPhilosophy from '@/components/ProductPhilosophy';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import SkillsAndEducation from '@/components/SkillsAndEducation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <ProductPhilosophy />
      <Experience />
      <Projects />
      <SkillsAndEducation />
      <Contact />
      <Footer />
    </main>
  );
}
