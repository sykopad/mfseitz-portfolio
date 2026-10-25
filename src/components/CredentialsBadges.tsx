'use client';

import React from 'react';
import { Award, ShieldCheck, Database, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from '@/components/LinkedinIcon';

interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  metric: string;
  category: 'Cloud & AI' | 'Civic & Geospatial' | 'Fintech' | 'Data Infrastructure';
  badgeColor: string;
  textColor: string;
  borderColor: string;
  icon: React.ElementType;
}

const credentials: CredentialItem[] = [
  {
    id: 'apify-cloud-actors',
    title: 'Apify Autonomous Cloud Specialist',
    issuer: 'Apify Web Scrapers & Crawlers Suite',
    description: 'Architected and deployed 37 specialized production actors covering real-time news intelligence, property deeds, eTender portals, and RAG browser pipelines.',
    metric: '37 Actors Deployed',
    category: 'Cloud & AI',
    badgeColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    icon: Cpu,
  },
  {
    id: 'civic-geospatial',
    title: 'Civic Geospatial Systems Architect',
    issuer: 'South Africa Municipal & Crime Systems',
    description: 'Production Mapbox GL & PostGIS geospatial engines mapping municipal ward boundaries, SAPS crime clusters, and grassroots cleanup spots.',
    metric: 'National Ward Boundary Demarcation',
    category: 'Civic & Geospatial',
    badgeColor: 'bg-sky-500/10',
    textColor: 'text-sky-400',
    borderColor: 'border-sky-500/20',
    icon: Globe,
  },
  {
    id: 'dbe-educational-pipeline',
    title: 'Curriculum Knowledge Graph Lead',
    issuer: 'Department of Basic Education CAPS Engine',
    description: 'Engineered automated ingestion pipeline parsing 25,000+ learning assets, 11,900+ exam papers and memos, synchronized across 11 official SA languages.',
    metric: '25,000+ Learning Assets Ingested',
    category: 'Data Infrastructure',
    badgeColor: 'bg-violet-500/10',
    textColor: 'text-violet-400',
    borderColor: 'border-violet-500/20',
    icon: Database,
  },
  {
    id: 'fintech-nfc',
    title: 'NFC Micro-Fintech & Tipping Architect',
    issuer: 'Shaya Pay Cashless Platform',
    description: 'Engineered passive NFC wristband 3-second tap-to-tip interaction model for informal workers with zero app installation and Paystack gateway settlement.',
    metric: '3s Tap-to-Tip NFC Model',
    category: 'Fintech',
    badgeColor: 'bg-amber-500/10',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    icon: ShieldCheck,
  },
];

export function CredentialsBadges() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12" id="credentials">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 bg-neutral-950/60 backdrop-blur-md relative overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium mb-2">
              <Award className="w-3.5 h-3.5" />
              Verified Competencies & Systems Provenance
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Architectural Credentials & Systems Track Record
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Verifiable proof of production deployments across autonomous agent automation, state-scale educational pipelines, and civic GIS platforms.
            </p>
          </div>

          {/* LinkedIn Verified Card Link */}
          <a
            href="https://www.linkedin.com/in/muhammed-faiz-seitz/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0077b5]/15 hover:bg-[#0077b5]/25 border border-[#0077b5]/30 text-white transition shadow-lg shrink-0"
          >
            <div className="p-2 rounded-xl bg-[#0077b5] text-white">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-200">
                <span>Muhammed Faiz Seitz</span>
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <div className="text-[11px] text-neutral-400 font-mono">
                Connect on LinkedIn • Verified
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition ml-1" />
          </a>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {credentials.map((cred) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.id}
                className="rounded-2xl p-4 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${cred.badgeColor} ${cred.borderColor} border ${cred.textColor} text-[10px] font-mono font-medium`}
                    >
                      <Icon className="w-3 h-3" />
                      {cred.category}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 font-semibold">
                      {cred.metric}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-white group-hover:text-sky-300 transition">
                    {cred.title}
                  </h3>
                  <div className="text-xs text-neutral-400 mt-0.5 font-mono">
                    {cred.issuer}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-2.5">
                    {cred.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified in Production
                  </span>
                  <span>SAST 🇿🇦</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
