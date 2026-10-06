import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/Experience';
import { ResearchSection } from './components/Research';
import { SkillsSection } from './components/Skills';
import { EducationSection } from './components/Education';
import { BlogPreviewSection } from './components/BlogPreview';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 relative selection:bg-brand-indigo/30 selection:text-white font-sans">
      {/* Background radial glow accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-brand-indigo/10 blur-[130px] rounded-full" />
        <div className="absolute top-[40%] -left-48 w-[600px] h-[600px] bg-brand-cyan/8 blur-[140px] rounded-full" />
        <div className="absolute top-[75%] -right-48 w-[600px] h-[600px] bg-brand-violet/8 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Main navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <ExperienceSection />
        <ResearchSection />
        <SkillsSection />
        <EducationSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
};

export default App;
