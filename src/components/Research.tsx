import React, { useState } from 'react';
import { portfolioData, type Publication } from '../data/portfolioData.ts';
import { GraduationCap, ExternalLink, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Github } from './Icons';

export const ResearchSection: React.FC = () => {
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
    <section id="research" className="py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Publications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              Preprints & Benchmark Research
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Evaluating multi-agent coordination, autonomous agent discipline, latency SLAs, and statistical calibration.
            </p>
          </div>

          {/* Scholar link */}
          <a
            href={portfolioData.profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0c0e14] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-white/[0.16] transition-colors self-start sm:self-auto"
          >
            <GraduationCap className="w-4 h-4 text-slate-400" />
            <span>Google Scholar (7 citations &bull; h-index 1)</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>

        {/* Publications List */}
        <div className="space-y-6 max-w-4xl">
          {portfolioData.publications.map((pub) => {
            const isExpanded = !!expandedAbstract[pub.id];
            const isCopied = copiedId === pub.id;

            return (
              <div
                key={pub.id}
                className="p-6 sm:p-7 rounded-xl bg-[#0c0e14] border border-white/[0.08] hover:border-white/[0.16] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  {/* Left Content */}
                  <div className="space-y-3 flex-1">
                    
                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/[0.06] font-medium">
                        arXiv:{pub.arxivId}
                      </span>
                      <span className="text-slate-400">
                        {pub.venue} &bull; {pub.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 leading-snug">
                      <a href={pub.arxivUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                        {pub.title}
                      </a>
                    </h3>

                    {/* Authors */}
                    <p className="text-xs sm:text-sm text-slate-300 font-mono">
                      {pub.authors.map((author, i) => (
                        <span key={i} className={author.includes("M. S. P. Madiraju") ? "text-slate-100 font-bold" : "text-slate-400"}>
                          {author}{i < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>

                    {/* Key Focus */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="text-slate-400 font-medium">Focus: </span>
                      {pub.keyFocus}
                    </p>

                    {/* Expandable Abstract */}
                    <div className="pt-0.5">
                      <p className={`text-xs sm:text-sm text-slate-400 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                        {pub.abstract}
                      </p>
                      <button
                        onClick={() => toggleAbstract(pub.id)}
                        className="mt-1 text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                      >
                        {isExpanded ? (
                          <><span>Collapse</span> <ChevronUp className="w-3.5 h-3.5" /></>
                        ) : (
                          <><span>Read Abstract</span> <ChevronDown className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
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
                  <div className="flex md:flex-col items-center md:items-end gap-2 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
                    <a
                      href={pub.arxivUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-md text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span>Paper</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>

                    {pub.githubUrl && (
                      <a
                        href={pub.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-md text-xs font-mono text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}

                    <button
                      onClick={() => handleCopyBibtex(pub)}
                      className="px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center gap-1.5"
                      title="Copy BibTeX citation"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
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
