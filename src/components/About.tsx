import React from 'react';
import { Brain, Layers, Bot } from 'lucide-react';

export const About: React.FC = () => {
  const interestAreas = [
    {
      icon: Brain,
      title: "Statistical ML & Optimization",
      description: "Constrained optimization, simplex-constrained sparse bagging, expected calibration error (ECE) minimization, Gaussian Process Regression, and non-parametric modeling."
    },
    {
      icon: Layers,
      title: "Deep Learning & Neural Architectures",
      description: "Transformer architectures, representation learning, multi-modal embeddings, parameter-efficient fine-tuning (LoRA), and deep time-series forecasting."
    },
    {
      icon: Bot,
      title: "Generative AI & Agentic Systems",
      description: "Knowledge Graph RAG for multi-hop entity reasoning, Agent2Agent (A2A) communication protocols, hierarchical task decomposition, and rigorous evaluation benchmarks."
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            About
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            Technical Interests & Methodology
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Grounded in statistical theory, deep neural representations, and empirical evaluation rigor.
          </p>
        </div>

        {/* Narrative on Interests & Skills */}
        <div className="space-y-4 text-slate-300 text-base leading-relaxed max-w-4xl mb-14 font-normal">
          <p>
            My technical work is centered on <strong className="text-slate-100 font-semibold">Machine Learning, Deep Learning, and Generative AI</strong>. I am particularly interested in the mathematical principles behind statistical optimization and ensemble calibration—specifically formulating post-training calibration as constrained simplex optimization problems to replace uniform prior weights with sparse posteriors, cutting redundant inference costs while improving calibration guarantees.
          </p>
          <p>
            In deep learning and neural representations, my focus encompasses transformer architectures, fine-tuning methodologies, and time-series forecasting using non-parametric models such as Gaussian Process Regression (GPR) and gradient boosted trees.
          </p>
          <p>
            Within generative AI and agentic systems, I work on <strong className="text-slate-100 font-semibold">Knowledge Graph augmented retrieval (Graph RAG)</strong> to bridge multi-hop reasoning gaps that pure vector embeddings miss, as well as multi-agent communication protocols (Agent2Agent) to coordinate specialized agents under strict latency budgets. Across all domains, my emphasis is on empirical rigor—building systematic benchmarks (such as <em>RigorBench</em> and <em>AgentSLABench</em>) to evaluate software engineering discipline, regression safeguards, and runtime cost trade-offs.
          </p>
        </div>

        {/* 3 Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interestAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#0c0e14] border border-white/[0.08] hover:border-white/[0.15] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-100 mb-2">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
