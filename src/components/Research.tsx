import React, { useState } from 'react';
import { portfolioData, type Publication } from '../data/portfolioData.ts';
import { GraduationCap, ExternalLink, Copy, Check, BookOpen, Quote, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Github } from './Icons';

export const ResearchSection: React.FC = () => {
  const [selectedBibtex, setSelectedBibtex] = useState<Publication | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedAbstract, setExpandedAbstract] = useState<Record<string, boolean>>({});

  const toggleAbstract = (id: string) => {
    setExpandedAbstract(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyBibtex = (pub: Publication) => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Research & Scientific Publications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Peer-Reviewed Preprints & Benchmarks
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Investigating multi-agent coordination, autonomous coding benchmarks, SLA constraints, and statistical ensemble learning.
          </p>

          {/* Google Scholar Quick Banner */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={portfolioData.profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-mono text-slate-300 hover:text-white border border-indigo-500/30 hover:border-indigo-400 transition-all hover:scale-105"
            >
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>Google Scholar Profile: <strong>7+ Citations</strong> (h-index: 1)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {portfolioData.publications.map((pub, index) => {
            const isExpanded = !!expandedAbstract[pub.id];
            const isCopied = copiedId === pub.id;

            return (
              <div
                key={pub.id}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  {/* Left Content */}
                  <div className="space-y-3 flex-1">
                    
                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold">
                        arXiv:{pub.arxivId}
                      </span>
                      <span className="text-slate-400 font-sans">
                        {pub.venue} &bull; {pub.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                      <a href={pub.arxivUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {pub.title}
                      </a>
                    </h3>

                    {/* Authors */}
                    <p className="text-sm text-slate-300 font-mono">
                      {pub.authors.map((author, i) => (
                        <span key={i} className={author.includes("M. S. P. Madiraju") ? "text-cyan-300 font-bold underline decoration-cyan-500/40" : ""}>
                          {author}{i < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>

                    {/* Key Focus Highlight Box */}
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Core Innovation: </strong>
                        {pub.keyFocus}
                      </div>
                    </div>

                    {/* Expandable Abstract */}
                    <div className="pt-1">
                      <p className={`text-xs sm:text-sm text-slate-400 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                        {pub.abstract}
                      </p>
                      <button
                        onClick={() => toggleAbstract(pub.id)}
                        className="mt-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                      >
                        {isExpanded ? (
                          <><span>Collapse Abstract</span> <ChevronUp className="w-3.5 h-3.5" /></>
                        ) : (
                          <><span>Read Full Abstract</span> <ChevronDown className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {pub.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Right Actions */}
                  <div className="flex md:flex-col items-center md:items-end gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
                    <a
                      href={pub.arxivUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      arXiv PDF
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    {pub.githubUrl && (
                      <a
                        href={pub.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code Repo
                      </a>
                    )}

                    <button
                      onClick={() => handleCopyBibtex(pub)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-all"
                      title="Copy BibTeX Citation"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">BibTeX Copied</span>
                        </>
                      ) : (
                        <>
                          <Quote className="w-3.5 h-3.5 text-slate-400" />
                          <span>BibTeX</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
