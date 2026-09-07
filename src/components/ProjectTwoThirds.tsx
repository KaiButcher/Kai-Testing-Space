import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';

interface ProjectTwoThirdsProps {
  project: ProjectItem;
  indexNumber: string;
  onSelect: (project: ProjectItem) => void;
  // Optional switcher to cycle through other projects
  allProjects?: ProjectItem[];
  onSwitchProject?: (project: ProjectItem) => void;
}

export const ProjectTwoThirds: React.FC<ProjectTwoThirdsProps> = ({
  project,
  indexNumber,
  onSelect,
  allProjects,
  onSwitchProject,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={`project-bento-${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(project)}
      className="bento-grey lg:col-span-2 relative p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full"
    >
      {/* Top Meta Line */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
            [{indexNumber}] &bull; {project.category}
          </span>
          <span className="text-xs font-mono text-gray-500">{project.year}</span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Quick project switcher pills if provided */}
          {allProjects && onSwitchProject && (
            <div
              className="hidden sm:flex items-center space-x-1"
              onClick={(e) => e.stopPropagation()}
            >
              {allProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => onSwitchProject(p)}
                  className={`w-6 h-6 rounded text-[10px] font-mono transition-all cursor-pointer ${
                    p.id === project.id
                      ? 'bg-white text-black font-bold'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                  title={p.title}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          )}

          <div
            className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 transition-all duration-300 ${
              hovered ? 'bg-white text-black border-white rotate-45' : 'bg-white/5'
            }`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Large Plain Text Area */}
      <div className="my-auto py-6 z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-2 leading-[1.08] transition-colors group-hover:text-white">
          <span className="font-semibold">{project.title.split(' ')[0]}</span>{' '}
          <span className="font-light text-gray-300">
            {project.title.split(' ').slice(1).join(' ')}
          </span>
        </h2>

        <p className="text-sm sm:text-base font-normal text-gray-300 max-w-2xl mt-3 leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Bottom Specs & Tags */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs z-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-gray-500 font-mono text-[11px]">TECH:</span>
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-2 text-[11px] font-mono text-gray-400">
          <span className="group-hover:text-white transition-colors">INSPECT CASE STUDY</span>
          <span className="text-white">&rarr;</span>
        </div>
      </div>
    </div>
  );
};
