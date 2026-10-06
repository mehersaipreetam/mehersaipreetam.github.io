import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { Mail, Copy, Check, Send, GraduationCap } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(
      formData.subject || `Note from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The best way to reach me is email. Open to research discussions, technical exchanges, and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-4xl">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-xl bg-[#0c0e14] border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded text-xs font-mono text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center gap-1.5"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="block text-base font-mono font-medium text-slate-100 hover:text-indigo-300 transition-colors break-all"
              >
                {portfolioData.profile.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl bg-[#0c0e14] border border-white/[0.08] space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Profiles
              </span>
              
              <div className="space-y-2 text-sm font-mono">
                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>github.com/mehersaipreetam</span>
                </a>

                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-400" />
                  <span>linkedin.com/in/mehersaipreetam</span>
                </a>

                <a
                  href={portfolioData.profile.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-slate-400" />
                  <span>Google Scholar Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-[#0c0e14] border border-white/[0.08] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-100 text-sm focus:outline-none focus:border-slate-500 transition-colors"
                    placeholder="Ada Lovelace"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-100 text-sm focus:outline-none focus:border-slate-500 transition-colors"
                    placeholder="ada@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-mono text-slate-400">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-100 text-sm focus:outline-none focus:border-slate-500 transition-colors"
                  placeholder="Discussion regarding RigorBench or ML calibration"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-mono text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-100 text-sm focus:outline-none focus:border-slate-500 transition-colors resize-none"
                  placeholder="Write your note here..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send Note</span>
              </button>

              {isSent && (
                <p className="text-xs text-emerald-400 font-mono">
                  Mailto client opened.
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
