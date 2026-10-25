'use client';

import React, { useState } from 'react';
import { Mail, MapPin, ShieldCheck, Copy, Check, Award } from 'lucide-react';
import { GithubIcon } from '@/components/GithubIcon';
import { LinkedinIcon } from '@/components/LinkedinIcon';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'byseitz.agency@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-20 border-t border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">
                Muhammed Faiz Seitz
              </h3>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                <ShieldCheck className="w-3 h-3" />
                Verified
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              AI Engineer & Systems Architect building autonomous intelligence pipelines, civic infrastructure, and high-performance digital products in Durban, South Africa.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-500 pt-2 font-mono">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Durban, KwaZulu-Natal, South Africa 🇿🇦</span>
            </div>

            {/* GitHub Organizations / Profiles */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/seitzmf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-mono transition"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github/seitzmf</span>
              </a>
              <a
                href="https://github.com/MisterSeitz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-mono transition"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github/MisterSeitz</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li>
                <a href="#credentials" className="hover:text-amber-400 transition inline-flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Verified Credentials</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition">
                  15 Core Production Systems
                </a>
              </li>
              <li>
                <a href="#apify-actors" className="hover:text-violet-400 transition">
                  37 Apify Cloud Actors
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammed-faiz-seitz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition inline-flex items-center gap-1"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="/Muhammed-Faiz-Seitz-Full-Stack-AI-Resume.pdf"
                  download="Muhammed-Faiz-Seitz-Resume.pdf"
                  className="hover:text-emerald-400 transition"
                >
                  Download CV / Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400">
              Direct Contact & Verification
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Open to senior architectural engagements, contract AI systems design, and autonomous workflow engineering.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-400 text-xs font-semibold transition"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{email}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-xs font-mono transition"
                aria-label="Copy Email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © 2026 Muhammed Faiz Seitz. Built with Next.js 16 & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1">
            Engineered with precision in Durban, South Africa 🇿🇦
          </div>
        </div>
      </div>
    </footer>
  );
}

