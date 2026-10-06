import React, { useState } from 'react';
import { portfolioData, type Experience } from '../data/portfolioData.ts';
import { Briefcase, Calendar, MapPin, CheckCircle, TrendingUp, Sparkles, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'industry' | 'research'>('all');

  const filteredExperiences = portfolioData.experiences.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'research') return exp.company.includes('MITACS') || exp.company.includes('Ugam');
    if (filter === 'industry') return !exp.company.includes('MITACS') && !exp.company.includes('Ugam');
    return true;
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey & Industry Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Quantifiable Impact
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering scalable data systems, multi-agent frameworks, and high-performance machine learning solutions.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              All Experience ({portfolioData.experiences.length})
            </button>
            <button
              onClick={() => setFilter('industry')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'industry'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              Enterprise / Industry (3)
            </button>
            <button
              onClick={() => setFilter('research')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'research'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              Internships & Fellowships (2)
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-8 before:absolute before:inset-0 before:left-4 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-cyan-500/40 before:to-transparent">
          {filteredExperiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } group`}
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-md shadow-indigo-500/20">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] w-full">
                <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl group-hover:-translate-y-1">
                  
                  {/* Top Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.tenure}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-slate-300 flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-indigo-400" />
                    <span>{exp.company}</span>
                  </div>

                  {exp.summary && (
                    <p className="text-xs text-slate-400 italic mb-4 border-l-2 border-indigo-500/40 pl-3">
                      {exp.summary}
                    </p>
                  )}

                  {/* Impact Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.impacts.map((impact, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
