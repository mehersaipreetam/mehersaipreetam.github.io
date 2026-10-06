import React from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Education
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            Academic Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Graduate and undergraduate foundations in computer science and machine learning.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-xl bg-[#0c0e14] border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Tenure and GPA */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {edu.tenure}
                  </span>
                  {edu.gpa && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                      <Award className="w-3.5 h-3.5" />
                      {edu.gpa}
                    </span>
                  )}
                </div>

                {/* Institution & Degree */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 leading-snug">
                      {edu.institution}
                    </h3>
                    <div className="text-sm font-medium text-slate-300 mt-1">
                      {edu.degree}
                    </div>
                    {edu.specialization && (
                      <div className="text-xs font-mono text-indigo-400 mt-1">
                        {edu.specialization}
                      </div>
                    )}
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
