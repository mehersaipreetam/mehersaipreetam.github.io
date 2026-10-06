import React from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { GraduationCap, Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-white/[0.08] text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand & Copyright */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white text-base">MSP<span className="text-cyan-400 font-mono">.ai</span></span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-300 font-medium">Meher Sai Preetam Madiraju</span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              &copy; {new Date().getFullYear()} Meher Sai Preetam Madiraju. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar Profile"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.profile.email}`}
              aria-label="Email Meher Sai Preetam"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-rose-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 hover:text-indigo-300 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
