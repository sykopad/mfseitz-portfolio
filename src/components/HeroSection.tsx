'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, MapPin, Sparkles, Copy, Check, Terminal, ExternalLink, Code2, FileText } from 'lucide-react';
import { LinkedinIcon } from '@/components/LinkedinIcon';

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = 'byseitz.agency@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-sky-500/10 via-emerald-500/10 to-violet-500/10 blur-3xl -z-10 pointer-events-none" />

      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Senior AI Architecture & High-Impact Contracts
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900/60 px-3 py-1.5 rounded-full border border-white/5">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Durban, South Africa 🇿🇦</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-300 font-mono">SAST (UTC+2)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Avatar Column */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group">
              {/* Animated radiant border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500 via-emerald-500 to-violet-600 opacity-75 blur group-hover:opacity-100 transition duration-500" />
              
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-neutral-950 border border-white/20 shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Muhammed Faiz Seitz"
                  fill
                  priority
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 192px, 224px"
                />
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-neutral-900/90 border border-white/10 backdrop-blur-md text-[11px] font-mono text-neutral-300 shadow-lg whitespace-nowrap">
                AI Engineer & Architect
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-neutral-300 font-mono">Next.js 16</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-neutral-300 font-mono">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-neutral-300 font-mono">Supabase</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-neutral-300 font-mono">PostGIS</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-neutral-300 font-mono">Apify</span>
            </div>
          </div>

          {/* Bio & Pitch Column */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Muhammed Faiz <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Seitz</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-neutral-300">
                Architecting autonomous agent pipelines, civic intelligence platforms, and high-concurrency digital experiences.
              </p>
            </div>

            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Based in Durban, South Africa, I build end-to-end production systems that bridge sophisticated AI models with tangible societal impact. From state-level geospatial crime tracking and CAPS curriculum educational engines with 25,000+ learning assets, to NFC wristband micro-fintech and real-time multiplayer network simulations, my systems are designed for high performance, accessibility, and visual elegance.
            </p>

            {/* Metric / Stat highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/5">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xl sm:text-2xl font-bold text-sky-400 font-mono">15+</div>
                <div className="text-xs text-neutral-400 mt-0.5">Production Systems</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">37</div>
                <div className="text-xs text-neutral-400 mt-0.5">Apify Cloud Actors</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xl sm:text-2xl font-bold text-violet-400 font-mono">11,900+</div>
                <div className="text-xs text-neutral-400 mt-0.5">DBE Papers Ingested</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">11</div>
                <div className="text-xs text-neutral-400 mt-0.5">SA Official Languages</div>
              </div>
            </div>

            {/* CTA action bar */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-neutral-950 font-semibold text-sm transition shadow-lg shadow-sky-500/20"
              >
                <Mail className="w-4 h-4" />
                Contact Direct
              </a>

              <a
                href="/Muhammed-Faiz-Seitz-Full-Stack-AI-Resume.pdf"
                download="Muhammed-Faiz-Seitz-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-semibold text-sm transition shadow-lg shadow-emerald-500/10"
              >
                <FileText className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="https://www.linkedin.com/in/muhammed-faiz-seitz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/40 text-[#70b5f9] font-medium text-sm transition"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-sm font-medium transition"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-neutral-400 hover:text-neutral-200 text-sm font-medium transition ml-auto"
              >
                <Code2 className="w-4 h-4 text-sky-400" />
                Explore Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
