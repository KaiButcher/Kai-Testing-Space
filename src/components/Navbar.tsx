import React from 'react';
import { CategoryFilter } from '../types';
import { Sparkles, ArrowDown, GitBranch, Mail } from 'lucide-react';

interface NavbarProps {
  currentFilter: CategoryFilter;
  onSelectFilter: (category: CategoryFilter) => void;
  onOpenContact: () => void;
  onOpenGitHub: () => void;
  totalProjects: number;
}

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Spatial & UI',
  'Creative Dev',
  'Systems',
  'Web Apps',
  'Audio Tech',
];

export const Navbar: React.FC<NavbarProps> = ({
  currentFilter,
  onSelectFilter,
  onOpenContact,
  onOpenGitHub,
  totalProjects,
}) => {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-4">
      {/* Top Brand Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5">
        {/* Monogram / Title */}
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/30">
            KB
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center space-x-2">
              <span>Kai Butcher</span>
              <span className="hidden sm:inline text-xs font-normal text-gray-500 font-mono">/ Portfolio</span>
            </h1>
            <p className="text-xs text-gray-400 font-mono">
              Creative Technologist &bull; UI/UX Systems
            </p>
          </div>
        </div>

        {/* Status Pill & Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Availability Status */}
          <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Q3/Q4</span>
          </div>

          <button
            id="nav-github-btn"
            onClick={onOpenGitHub}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-mono transition-all cursor-pointer"
            title="GitHub Push & Guide"
          >
            <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">GitHub</span>
          </button>

          <button
            id="nav-contact-btn"
            onClick={onOpenContact}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-xs font-medium transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills Bar */}
      <div className="pt-5 flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center space-x-2">
          {CATEGORIES.map((cat) => {
            const isSelected = currentFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-indigo-600 text-white font-medium shadow-md shadow-indigo-600/25 border border-indigo-400/40'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat} {cat === 'All' && `(${totalProjects})`}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
