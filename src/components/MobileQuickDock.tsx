'use client';

import React, { useState, useEffect } from 'react';
import { Mail, FileText, Code2, Bot, ArrowUp } from 'lucide-react';
import { LinkedinIcon } from '@/components/LinkedinIcon';

export function MobileQuickDock() {
  const [scrolled, setScrolled] = useState(false);
  const email = 'byseitz.agency@gmail.com';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <div className="bg-neutral-950/90 backdrop-blur-lg border border-white/10 rounded-2xl p-2 shadow-2xl flex items-center justify-around gap-1">
        {/* Email action */}
        <a
          href={`mailto:${email}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-white transition"
          aria-label="Direct Email"
        >
          <Mail className="w-4 h-4 text-sky-400 mb-0.5" />
          <span className="text-[10px] font-mono">Email</span>
        </a>

        {/* Download CV */}
        <a
          href="/Muhammed-Faiz-Seitz-Full-Stack-AI-Resume.pdf"
          download="Muhammed-Faiz-Seitz-Resume.pdf"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-white transition"
          aria-label="Download CV"
        >
          <FileText className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-mono">CV</span>
        </a>

        {/* Projects Jump */}
        <a
          href="#projects"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-white transition"
          aria-label="View Projects"
        >
          <Code2 className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-mono">Projects</span>
        </a>

        {/* Apify Actors */}
        <a
          href="#apify-actors"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-white transition"
          aria-label="View Apify Actors"
        >
          <Bot className="w-4 h-4 text-violet-400 mb-0.5" />
          <span className="text-[10px] font-mono">Apify</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammed-faiz-seitz/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-white transition"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-4 h-4 text-[#70b5f9] mb-0.5" />
          <span className="text-[10px] font-mono">LinkedIn</span>
        </a>

        {/* Back to top if scrolled */}
        {scrolled && (
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 transition"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-mono">Top</span>
          </button>
        )}
      </div>
    </div>
  );
}
