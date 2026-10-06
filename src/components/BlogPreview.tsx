import React from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const BlogPreviewSection: React.FC = () => {
  return (
    <section id="articles" className="py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Writing & Notes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            Engineering Notes & Essays
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practitioner notes on multi-agent evals, ensemble calibration, and graph retrieval architectures.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {portfolioData.articles.map((post) => (
            <article
              key={post.id}
              className="p-6 rounded-xl bg-[#0c0e14] border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-2 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
