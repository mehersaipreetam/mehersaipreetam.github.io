import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { Mail, Copy, Check, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Hero: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const profileJsonContent = `{
  "name": "Meher Sai Preetam Madiraju",
  "title": "Data Scientist | ML, DL & Generative AI",
  "organization": "ADM (Archer-Daniels-Midland)",
  "education": "Georgia Institute of Technology (MS CS, Machine Learning)",
  "core_focus": [
    "Machine Learning & Statistical Optimization",
    "Deep Representation Learning",
    "Knowledge Graph RAG",
    "Agentic AI & Multi-Agent Coordination"
  ],
  "research_publications": [
    "Optimindtune (Multi-Agent HPO - arXiv:2505.19205)",
    "RigorBench (Coding Agent Discipline - arXiv:2606.22678)",
    "AgentSLABench (Agent Latency & Cost - arXiv:2608.00805)",
    "Simplex Sparse Bagging Calibration (arXiv:2606.22680)"
  ],
  "citations": 7,
  "h_index": 1,
  "email": "mehersaipreetam@gmail.com"
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(profileJsonContent);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Headlines & Primary Links */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-mono text-slate-300 border border-white/[0.08]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-slate-200">Data Scientist @ ADM</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">MS CS @ Georgia Tech</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight leading-[1.15]">
              Machine Learning, Deep Learning & Applied Generative AI.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Data Scientist and AI Researcher focusing on statistical learning theory, deep neural representations, Knowledge Graph RAG, and multi-agent coordination.
            </p>

            {/* Domain Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Statistical ML',
                'Deep Learning',
                'Generative AI',
                'Knowledge Graph RAG',
                'Agentic Systems (A2A)',
                'Ensemble Calibration'
              ].map((domain) => (
                <span
                  key={domain}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                >
                  {domain}
                </span>
              ))}
            </div>

            {/* Primary Action Links: GitHub and Mail in the start */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={portfolioData.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>

              <a
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href={portfolioData.profile.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                Google Scholar
              </a>
            </div>

            {/* Research & Publications metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.06]">
              {portfolioData.summary.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-xl font-bold font-mono text-slate-100">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Code Box with ONLY profile.json */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden bg-[#0c0e14] border border-white/[0.08] shadow-lg">
              
              {/* Header: profile.json only */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/60 border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <span className="text-xs font-mono text-slate-300 ml-2 font-medium">profile.json</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="px-2 py-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
                  title="Copy profile.json"
                  aria-label="Copy code"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Box Body */}
              <div className="p-4 overflow-x-auto text-[12px] font-mono leading-relaxed text-slate-300 max-h-[380px] select-text">
                <pre>
                  <code>{profileJsonContent}</code>
                </pre>
              </div>

              {/* Minimalist footer bar */}
              <div className="px-4 py-2 bg-slate-900/40 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>UTF-8 &bull; JSON</span>
                <span>Active</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
