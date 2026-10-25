'use client';

import React, { useState } from 'react';
import { featuredProjects } from '@/data/projects';
import { ProjectCategory, ProjectItem } from '@/types/portfolio';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { Search, Code2 } from 'lucide-react';

const categories: ProjectCategory[] = [
  'All',
  'Civic & GovTech',
  'FinTech & SaaS',
  'AI & Media',
  'Games & Simulations'
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = featuredProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Core Projects & Engineering Architectures (15 Systems)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Production Software & Research Systems
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-2">
            Showcasing full-stack applications with verified public domains, and specialized simulation engines directly linked to their GitHub repositories.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search projects by tech, title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-sky-500/50 transition"
          />
        </div>
      </div>

      {/* Category Pills & Count */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
              selectedCategory === cat
                ? 'bg-sky-500 text-neutral-950 font-bold shadow-lg shadow-sky-500/20'
                : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="text-xs font-mono text-neutral-500 ml-auto">
          Displaying {filteredProjects.length} of {featuredProjects.length} systems
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetails={setActiveProject}
          />
        ))}
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
