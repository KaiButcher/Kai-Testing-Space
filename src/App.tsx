import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBento } from './components/HeroBento';
import { BentoProjectCard } from './components/BentoProjectCard';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ContactModal } from './components/ContactModal';
import { GitHubModal } from './components/GitHubModal';
import { PROJECTS_DATA } from './data/projects';
import { ProjectItem, CategoryFilter } from './types';
import { Sparkles, Layers, ArrowUpRight, Github, Mail, Globe, Heart } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isGitHubOpen, setIsGitHubOpen] = useState<boolean>(false);

  // Filter 5 projects based on active pill
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleScrollToProjects = () => {
    document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0d13] text-gray-100 bg-grid-pattern relative flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentFilter={selectedCategory}
        onSelectFilter={setSelectedCategory}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenGitHub={() => setIsGitHubOpen(true)}
        totalProjects={PROJECTS_DATA.length}
      />

      {/* Main Bento Canvas */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hero Bento Section */}
        <HeroBento onScrollToProjects={handleScrollToProjects} />

        {/* 5 Projects Bento Grid Section */}
        <section id="projects-grid" className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
              <span className="text-xs font-mono text-gray-500">
                ({filteredProjects.length} of 5 shown)
              </span>
            </div>

            <span className="text-xs font-mono text-gray-400 hidden sm:inline">
              Spotlight cursor tracker &bull; Click to expand
            </span>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredProjects.map((project, idx) => (
              <BentoProjectCard
                key={project.id}
                project={project}
                index={idx}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>

          {/* Bottom Bento Banner / Metric Strip */}
          <div className="mt-6 bento-card rounded-3xl p-6 sm:p-7 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Custom interactive prototypes built for each project
                </p>
                <p className="text-xs text-gray-400">
                  Click any project card above to test live simulations, inspect technical decisions, and view metrics.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsContactOpen(true)}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-indigo-300 border border-white/10 transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Custom Case Study &rarr;
            </button>
          </div>
        </section>
      </main>

      {/* Bento Footer */}
      <footer className="w-full border-t border-white/5 bg-[#0e1017]/80 backdrop-blur-md py-8 text-xs text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center space-x-2">
            <span className="text-white font-semibold">Kai Butcher</span>
            <span>&bull;</span>
            <span>Bento Design Portfolio</span>
            <span>&bull;</span>
            <span>2026</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsGitHubOpen(true)}
              className="hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
            <span className="text-emerald-400 flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>All Systems Operational</span>
            </span>
          </div>
        </div>
      </footer>

      {/* Project Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* GitHub Sync & Pages Workflow Guide Modal */}
      <GitHubModal
        isOpen={isGitHubOpen}
        onClose={() => setIsGitHubOpen(false)}
      />
    </div>
  );
}
