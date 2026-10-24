'use client';

import React from 'react';
import { ProjectItem } from '@/types/portfolio';
import { X, ExternalLink, CheckCircle2, Server, Database, Layout, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/GithubIcon';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-panel w-full max-w-3xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 mb-3">
            {project.category}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.name}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 my-6 pb-6 border-b border-white/10">
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-neutral-950 font-semibold text-xs transition"
            >
              <span>Visit Live Web Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
          <span className="text-xs font-mono text-neutral-500 ml-auto">
            Path: {project.localPath}
          </span>
        </div>

        {/* Narrative Description */}
        <div className="space-y-4 mb-8">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
            System Overview & Architecture
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Engineering Highlights */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3">
            Key Architectural Achievements
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-neutral-300 leading-normal">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Breakdown */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3">
            Engineered Stack
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-neutral-400 mb-1">
                <Layout className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-medium">Frontend & Framework</span>
              </div>
              <div className="text-white font-mono">{project.techStack.frontend}</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-neutral-400 mb-1">
                <Server className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-medium">Backend & Routing</span>
              </div>
              <div className="text-white font-mono">{project.techStack.backend}</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-neutral-400 mb-1">
                <Database className="w-3.5 h-3.5 text-violet-400" />
                <span className="font-medium">Database & ORM</span>
              </div>
              <div className="text-white font-mono">{project.techStack.database}</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-neutral-400 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-medium">Styling & Custom Engines</span>
              </div>
              <div className="text-white font-mono">{project.techStack.styling}</div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 border border-white/5">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
