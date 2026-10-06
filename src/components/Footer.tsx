import React from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#090b10] border-t border-white/[0.06] text-slate-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Brand & Copyright */}
          <div>
            <span>&copy; {new Date().getFullYear()} {portfolioData.profile.fullName}</span>
          </div>

          {/* Clean Links */}
          <div className="flex items-center space-x-4 text-slate-400">
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>&bull;</span>
            <a
              href={portfolioData.profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Google Scholar
            </a>
            <span>&bull;</span>
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded hover:bg-white/[0.06] text-slate-500 hover:text-white transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
