import React from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Credentials
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Rigorous foundation in computer science, mathematical optimization, and machine learning research.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="glass-panel p-7 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.tenure}
                  </span>
                  {edu.gpa && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                      <Award className="w-3.5 h-3.5" />
                      {edu.gpa}
                    </span>
                  )}
                  {edu.verificationNote && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Institution & Degree */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
                  {edu.institution}
                </h3>
                <div className="text-sm font-semibold text-slate-300 mb-1">
                  {edu.degree}
                </div>
                {edu.specialization && (
                  <div className="text-xs font-mono text-indigo-400 mb-4">
                    {edu.specialization}
                  </div>
                )}

                {/* Details Bullets */}
                {edu.details && (
                  <ul className="space-y-2 mt-4 pt-4 border-t border-white/[0.06]">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {edu.location && (
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {edu.location}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
