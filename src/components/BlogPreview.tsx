import React, { useState } from 'react';
import { portfolioData, type BlogPost } from '../data/portfolioData.ts';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, Tag, Check, Bell } from 'lucide-react';

export const BlogPreviewSection: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <section id="articles" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Deep Dives & Articles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Writing & Engineering Notes
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            In-depth breakdowns on multi-agent design patterns, graph retrieval mechanics, and statistical machine learning theory.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {portfolioData.blogs.map((post) => (
            <article
              key={post.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[11px]">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  Technical Essay
                </span>
                <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Preview <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Future Article Notification Callout */}
        <div className="max-w-2xl mx-auto glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] text-center space-y-4 shadow-xl">
          <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
            <Bell className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">
            Upcoming Technical Publications
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Essays on multi-agent orchestration, Graph RAG architectures, and statistical ensemble proofs are published here.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email for updates..."
              required
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-indigo-600/20 shrink-0"
            >
              {subscribed ? 'Subscribed!' : 'Notify Me'}
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-emerald-400 flex items-center justify-center gap-1">
              <Check className="w-3.5 h-3.5" /> You're on the list for new research releases.
            </p>
          )}
        </div>

      </div>
    </section>
  );
};
