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
    <div className="min-h-screen bg-[#090b10] text-slate-100 relative selection:bg-slate-700 selection:text-white font-sans antialiased">
      {/* Subtle background grid */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-20" />

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
