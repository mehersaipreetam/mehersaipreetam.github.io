import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { Menu, X, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Writing', href: '#articles' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090b10]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Authoritative Brand Name (No MSP.ai) */}
          <a href="#" className="flex items-baseline gap-2.5 group">
            <span className="font-semibold text-slate-100 tracking-tight text-base sm:text-lg group-hover:text-white transition-colors">
              Meher Sai Preetam
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              / Data Scientist
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick External Actions */}
          <div className="hidden sm:flex items-center space-x-2">
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090b10] border-b border-white/[0.08] px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center gap-4 px-3">
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
