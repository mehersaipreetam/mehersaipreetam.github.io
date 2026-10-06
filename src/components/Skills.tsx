import React from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { Bot, Sparkles, Brain, Code, Cpu, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-4 h-4 text-slate-300" />;
      case 'Layers': return <Layers className="w-4 h-4 text-slate-300" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-slate-300" />;
      case 'Bot': return <Bot className="w-4 h-4 text-slate-300" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-slate-300" />;
      case 'Code': return <Code className="w-4 h-4 text-slate-300" />;
      default: return <Layers className="w-4 h-4 text-slate-300" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Skills & Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            Technical Stack & Areas of Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Balanced repertoire across statistical modeling, deep representation learning, generative knowledge graphs, and distributed systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#0c0e14] border border-white/[0.08] hover:border-white/[0.16] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-sm font-semibold text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
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
