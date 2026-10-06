import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { ArrowRight, BookOpen, GraduationCap, Copy, Check, Terminal, Cpu, Database, Network } from 'lucide-react';
import { Linkedin } from './Icons';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agent' | 'bagging' | 'meta'>('agent');
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = {
    agent: `# Enterprise Multi-Agent Orchestration (A2A Protocol)
from google.adk.agents import AgentRegistry, Router
from openmuse.agents import HierarchicalManager

registry = AgentRegistry()
router = Router(protocol="A2A", cache="redis://cluster")

manager = HierarchicalManager(
    sub_agents=["CreditEvaluationAgent", "DelinquencyForecaster"],
    graph_rag=True,
    sla_tolerance_ms=450
)

# Autonomous downstream task delegation & execution
result = manager.orchestrate(
    query="Synthesize high-risk portfolio delinquency drivers",
    verification="RigorBench-v2"
)`,
    bagging: `# Simplex-Constrained Sparse Bagging Calibration
import numpy as np
from scipy.optimize import minimize

def sparse_simplex_bagging(estimator_posteriors, y_true):
    """
    Transition from uniform prior (1/M) to sparse posterior weights
    subject to w >= 0 and sum(w) = 1.
    """
    M = estimator_posteriors.shape[1]
    loss_fn = lambda w: np.mean((estimator_posteriors @ w - y_true)**2)
    
    constraints = ({'type': 'eq', 'fun': lambda w: np.sum(w) - 1.0})
    bounds = [(0, 1) for _ in range(M)]
    
    # 60% compute reduction with enhanced posterior calibration
    res = minimize(loss_fn, x0=np.ones(M)/M, bounds=bounds, constraints=constraints)
    return res.x`,
    meta: `{
  "researcher": "Meher Sai Preetam Madiraju",
  "title": "Data Scientist | Agentic AI & Generative AI Specialist",
  "current_organization": "ADM (Archer-Daniels-Midland)",
  "education": "Georgia Institute of Technology (MS CS)",
  "core_focus": [
    "Agent-to-Agent (A2A) Protocols",
    "Knowledge Graph RAG (Graph RAG)",
    "Autonomous Agent Benchmarks",
    "Statistical Ensemble Optimization"
  ],
  "scholar_citations": 7,
  "h_index": 1,
  "status": "Available for high-impact AI collaboration"
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-radial-gradient">
      {/* Decorative blurred backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call-to-Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono text-slate-300 shadow-sm border border-indigo-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white font-medium">Data Scientist @ ADM</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-300 font-medium">MS CS @ Georgia Tech</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Architecting Scalable{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Multi-Agent Systems
              </span>{' '}
              & Generative AI.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Data Scientist and AI Researcher building enterprise-grade multi-agent frameworks,{' '}
              <strong className="text-white font-semibold">Knowledge Graph RAG</strong> pipelines, and benchmarking autonomous agent discipline.
            </p>

            {/* Domain Badges */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              {['Agent2Agent (A2A)', 'Graph RAG', 'LLMOps', 'Google ADK', 'Ensemble Optimization', 'Deep Learning'].map((domain) => (
                <span
                  key={domain}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-indigo-400/40 transition-colors"
                >
                  {domain}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4" />
                Explore Publications
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 transition-all hover:text-white"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                LinkedIn
              </a>

              <a
                href={portfolioData.profile.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-indigo-500/40 transition-all hover:text-white"
              >
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                Google Scholar
              </a>
            </div>

            {/* Quick Metrics Counter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
              {portfolioData.summary.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-2xl font-bold font-mono text-white tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/[0.1] shadow-2xl shadow-indigo-950/40">
              
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">architecture-spec</span>
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                    title="Copy code"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[10px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code File Tabs */}
              <div className="flex bg-slate-950/50 border-b border-white/[0.06] text-xs font-mono">
                <button
                  onClick={() => setActiveTab('agent')}
                  className={`px-3.5 py-2 flex items-center gap-1.5 border-b-2 transition-all ${
                    activeTab === 'agent'
                      ? 'border-indigo-500 text-indigo-300 bg-white/[0.03]'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Network className="w-3.5 h-3.5" />
                  agent_mesh.py
                </button>

                <button
                  onClick={() => setActiveTab('bagging')}
                  className={`px-3.5 py-2 flex items-center gap-1.5 border-b-2 transition-all ${
                    activeTab === 'bagging'
                      ? 'border-cyan-500 text-cyan-300 bg-white/[0.03]'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  sparse_bagging.py
                </button>

                <button
                  onClick={() => setActiveTab('meta')}
                  className={`px-3.5 py-2 flex items-center gap-1.5 border-b-2 transition-all ${
                    activeTab === 'meta'
                      ? 'border-indigo-400 text-indigo-300 bg-white/[0.03]'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  profile.json
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 bg-slate-950/90 overflow-x-auto text-[12.5px] font-mono leading-relaxed text-slate-300 max-h-[380px] select-text">
                <pre>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-slate-950 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                  <span>Agent Network: Active</span>
                </div>
                <span>Python 3.12 / Linux</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
