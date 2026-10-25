'use client';

import React, { useState } from 'react';
import { apifyActorsList } from '@/data/apify-actors';
import { ApifyCategory } from '@/types/portfolio';
import { Search, Bot } from 'lucide-react';

const categories: ApifyCategory[] = [
  'All',
  'Intelligence & News',
  'Market & Real Estate',
  'Media, RAG & LLM',
  'GovTech & Local Data'
];

export function ApifyActorsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ApifyCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActors = apifyActorsList.filter((actor) => {
    const matchesCategory = selectedCategory === 'All' || actor.category === selectedCategory;
    const matchesSearch = 
      actor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      actor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      actor.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      actor.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="apify-actors" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3">
            <Bot className="w-3.5 h-3.5" />
            Apify Cloud Scrapers & Agents (37 Actors)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Autonomous Scraping & Intelligence Suite
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-2">
            A production suite of high-throughput web crawlers, headless browser agents, and specialized data extractors deployed on Apify for market intelligence, RAG ingestion, and civic monitoring.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search 37 actors by keyword, tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-violet-500/50 transition"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
              selectedCategory === cat
                ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/20'
                : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="text-xs font-mono text-neutral-500 ml-auto">
          Showing {filteredActors.length} of {apifyActorsList.length} actors
        </span>
      </div>

      {/* Actor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredActors.map((actor) => (
          <div
            key={actor.id}
            className="glass-card rounded-2xl p-5 border border-white/10 hover:border-violet-500/30 flex flex-col justify-between group transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                  {actor.category}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 truncate max-w-[150px]">
                  {actor.slug}
                </span>
              </div>

              <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                {actor.name}
              </h4>
              <p className="text-xs text-neutral-300 mt-2 line-clamp-2 leading-relaxed">
                {actor.description}
              </p>

              <div className="mt-3 space-y-1">
                {actor.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                    <span className="text-violet-400">•</span>
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {actor.tags.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-neutral-400">
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-[10px] font-mono text-neutral-500">
                Apify Actor
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
