import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { Menu, X, GraduationCap, Mail, Sparkles, FileText } from 'lucide-react';
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
    { name: 'Articles', href: '#articles' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-mono font-bold text-white text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white tracking-tight text-base sm:text-lg group-hover:text-indigo-400 transition-colors">
                MSP<span className="text-cyan-400 font-mono">.ai</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono -mt-1 hidden sm:inline">
                Data Scientist & AI Researcher
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Links & Socials */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/[0.05] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-white/[0.05] transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-md shadow-indigo-600/20 transition-all hover:shadow-indigo-600/40"
            >
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.05]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/[0.05]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-around">
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={portfolioData.profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-indigo-400"
            >
              <GraduationCap className="w-4 h-4" /> Scholar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
