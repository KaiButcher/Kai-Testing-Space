import React, { useRef, useState } from 'react';
import { ProjectItem } from '../types';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';

interface BentoProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export const BentoProjectCard: React.FC<BentoProjectCardProps> = ({
  project,
  index,
  onSelect,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Subtle 3D tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      id={`bento-card-${project.id}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      }}
      className={`bento-card relative rounded-3xl p-6 sm:p-7 border overflow-hidden cursor-pointer group select-none flex flex-col justify-between ${project.bentoSpan}`}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.16), transparent 75%)`,
        }}
      />

      {/* Top Meta Bar */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            {project.tag}
          </span>
          <span className="text-xs text-gray-500 font-mono">{project.year}</span>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
          <span className="text-gray-500">0{index + 1}</span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* Image Preview Container */}
      <div className="relative z-10 w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-5 bg-[#0e1017] border border-white/5">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131620] via-[#131620]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

        {/* Floating Mini Stats overlay on featured cards */}
        {project.stats && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 overflow-x-auto">
            {project.stats.slice(0, 2).map((stat, i) => (
              <div
                key={i}
                className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono flex items-center space-x-1.5 shrink-0"
              >
                <span className="text-gray-400">{stat.label}:</span>
                <span className="text-indigo-300 font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content Info */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 group-hover:text-indigo-300 transition-colors flex items-center space-x-2">
            <span>{project.title}</span>
          </h3>
          <p className="text-xs font-mono text-indigo-400/80 mb-2.5">
            {project.subtitle}
          </p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Tags & Action Link */}
        <div className="pt-4 mt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="text-indigo-400 group-hover:text-indigo-300 font-medium text-xs flex items-center space-x-1">
            <span>Inspect Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
