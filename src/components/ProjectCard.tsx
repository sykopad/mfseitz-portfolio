'use client';

import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/types/portfolio';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/GithubIcon';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const hasWebsite = Boolean(project.websiteUrl);

  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden border border-white/10 hover:border-sky-500/30 transition-all duration-300">
      {/* Top subtle category banner */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="text-[11px] font-mono tracking-wider uppercase text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20">
          {project.category}
        </span>

        {project.featured && (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
            <Sparkles className="w-3 h-3" />
            Featured
          </span>
        )}
      </div>

      {/* Main info header */}
      <div>
        <div className="flex items-start gap-3 mb-3">
          {project.logoUrl ? (
            <div className="relative w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex-shrink-0 overflow-hidden p-2 flex items-center justify-center">
              <Image
                src={project.logoUrl}
                alt={`${project.name} logo`}
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex-shrink-0 flex items-center justify-center text-sky-400">
              <Layers className="w-6 h-6" />
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
              {project.name}
            </h3>
            <p className="text-xs text-neutral-400 font-medium line-clamp-1">
              {project.tagline}
            </p>
          </div>
        </div>

        <p className="text-sm text-neutral-300 line-clamp-3 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Highlight Bullets */}
        <div className="space-y-1.5 mb-5 pt-3 border-t border-white/5">
          {project.highlights.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
              <span className="text-sky-400 font-bold mt-0.5">•</span>
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Tags & Actions */}
      <div className="space-y-4 pt-3 border-t border-white/5">
        {/* Technology Tag Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/5"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2">
          {hasWebsite ? (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 font-medium text-xs transition"
            >
              <span>Visit App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 font-medium text-xs transition"
            >
              <GithubIcon className="w-3.5 h-3.5 text-neutral-400" />
              <span>GitHub Repo</span>
            </a>
          )}

          {hasWebsite && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          <button
            onClick={() => onOpenDetails(project)}
            className="px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white text-xs font-medium transition"
          >
            Specs
          </button>
        </div>
      </div>
    </div>
  );
}
