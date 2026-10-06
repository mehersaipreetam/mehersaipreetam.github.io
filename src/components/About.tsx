import React from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { Network, Database, Brain, Sparkles, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Network,
      title: "Agentic AI & Multi-Agent Topologies",
      description: "Pioneering production multi-agent architectures using the Agent2Agent (A2A) protocol and Google ADK. Breaking complex enterprise workflows into autonomous, specialized sub-agents with hierarchical routing and real-time SLA adherence.",
      badge: "Orchestration"
    },
    {
      icon: Database,
      title: "Enterprise Knowledge Graph RAG",
      description: "Engineering advanced hybrid retrieval systems that merge high-dimensional vector search with knowledge graph entity-relation traversals. Drastically improves multi-hop reasoning and grounds generative models in verifiable facts.",
      badge: "Knowledge Systems"
    },
    {
      icon: Brain,
      title: "Statistical ML & Ensemble Calibration",
      description: "Researching post-training optimization techniques such as simplex-constrained sparse bagging. Replacing uniform priors with sparse posteriors to cut inference compute by up to 60% while providing rigorous calibration guarantees.",
      badge: "Optimization"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Research & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Academic AI Breakthroughs & Enterprise Deployment
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Focused on building autonomous agent systems that operate with mathematical rigor, strict resource discipline, and real-world reliability.
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              I am a <strong className="text-white">Data Scientist and AI Researcher</strong> with deep expertise across Agentic AI, Generative AI, Large Language Models (LLMs), and Machine Learning theory. Currently, I work as a Data Scientist at <strong className="text-white">Archer-Daniels-Midland (ADM)</strong> in Bengaluru, architecting enterprise machine learning and generative decision intelligence systems.
            </p>
            <p>
              Concurrently, I am pursuing my <strong className="text-white">Master of Science in Computer Science (Machine Learning specialization)</strong> at the <strong className="text-white">Georgia Institute of Technology</strong>. My research investigates how autonomous coding and reasoning agents behave under production constraints, formalizing benchmarks like <em>RigorBench</em> and <em>AgentSLABench</em> to measure software engineering process discipline and latency trade-offs.
            </p>
            <p>
              Prior to ADM, at <strong>Tiger Analytics</strong>, I developed delinquency and credit agentic workflows for a tier-1 credit bureau utilizing the Agent2Agent (A2A) protocol and Google ADK. My engineering background spans distributed big data (PySpark), scalable API architectures (FastAPI), and production LLMOps with Redis and vector indices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Georgia Tech Verification</div>
                  <div className="text-slate-400 font-mono">Verified gatech.edu academic email</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Award className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Manipal Distinction</div>
                  <div className="text-slate-400 font-mono">B.Tech CSE with 9.11 / 10.0 CGPA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core Domains Highlights */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] shadow-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              Core Technical Focus
            </h3>
            <ul className="space-y-3.5">
              {portfolioData.summary.coreDomains.map((domain, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{domain}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Location: Bengaluru, India</span>
              <span className="text-cyan-400 font-semibold">ADM &bull; Georgia Tech</span>
            </div>
          </div>

        </div>

        {/* 3 Main Architectural Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="glass-panel p-6 sm:p-7 rounded-2xl relative group transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
