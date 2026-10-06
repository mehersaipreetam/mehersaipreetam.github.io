import React from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { Bot, Sparkles, Brain, Code, Server, Users, Wrench, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-5 h-5 text-indigo-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-emerald-400" />;
      case 'Code': return <Code className="w-5 h-5 text-amber-400" />;
      case 'Server': return <Server className="w-5 h-5 text-violet-400" />;
      case 'Users': return <Users className="w-5 h-5 text-rose-400" />;
      default: return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            An end-to-end repertoire spanning agentic orchestration, distributed compute, statistical modeling, and enterprise MLOps.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioData.skills.map((category, index) => (
            <div
              key={index}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:bg-white/[0.08] transition-colors">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:border-indigo-400/40 hover:text-white transition-all"
                  >
                    {skill}
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
