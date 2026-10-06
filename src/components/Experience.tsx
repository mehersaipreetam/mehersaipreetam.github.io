import React, { useState } from 'react';
import { portfolioData, type Experience } from '../data/portfolioData.ts';
import { Calendar, MapPin, CheckCircle, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'industry' | 'research'>('all');

  const filteredExperiences = portfolioData.experiences.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'research') return exp.company.includes('MITACS') || exp.company.includes('Ugam');
    if (filter === 'industry') return !exp.company.includes('MITACS') && !exp.company.includes('Ugam');
    return true;
  });

  return (
    <section id="experience" className="py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              Work History & Quantifiable Deliverables
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Applied machine learning, multi-agent frameworks, and high-throughput data engineering.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#0c0e14] border border-white/[0.08] text-xs font-mono self-start sm:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-slate-800 text-white font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({portfolioData.experiences.length})
            </button>
            <button
              onClick={() => setFilter('industry')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'industry'
                  ? 'bg-slate-800 text-white font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Industry (3)
            </button>
            <button
              onClick={() => setFilter('research')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'research'
                  ? 'bg-slate-800 text-white font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Research / Internships (2)
            </button>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-6 max-w-4xl">
          {filteredExperiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-xl bg-[#0c0e14] border border-white/[0.08] hover:border-white/[0.16] transition-all"
            >
              {/* Header Row: Company, Role & Tenure */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-slate-300 flex items-center gap-1.5 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {exp.tenure}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {exp.summary && (
                <p className="text-xs sm:text-sm text-slate-400 mb-4 border-l-2 border-slate-700 pl-3 italic">
                  {exp.summary}
                </p>
              )}

              {/* Impact Bullets */}
              <ul className="space-y-2 mb-4">
                {exp.impacts.map((impact, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
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
          ))}
        </div>

      </div>
    </section>
  );
};
