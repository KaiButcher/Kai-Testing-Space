import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectTwoThirdsProps {
  project: ProjectItem;
  indexNumber: string;
  variant?: 'pyramid' | 'checkerboard' | 'emblem';
  onSelect: (project: ProjectItem) => void;
  allProjects?: ProjectItem[];
  onSwitchProject?: (project: ProjectItem) => void;
}

export const ProjectTwoThirds: React.FC<ProjectTwoThirdsProps> = ({
  project,
  indexNumber,
  variant = 'pyramid',
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
      className={`bento-grey lg:col-span-2 relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full ${
        variant === 'checkerboard' ? 'bg-checkerboard-dark' : ''
      }`}
    >
      {/* Background Matte Noise Overlay */}
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-35" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase">
            [{indexNumber}] &bull; {project.category}
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-white/40">
            {project.year}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Quick cycle pills if provided */}
          {allProjects && onSwitchProject && (
            <div
              className="hidden sm:flex items-center space-x-1"
              onClick={(e) => e.stopPropagation()}
            >
              {allProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => onSwitchProject(p)}
                  className={`w-5 h-5 rounded text-[9px] font-mono transition-all cursor-pointer ${
                    p.id === project.id
                      ? 'bg-white text-black font-bold'
                      : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10'
                  }`}
                  title={p.title}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          )}

          <div
            className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-all duration-300 ${
              hovered ? 'bg-white text-black border-white rotate-45' : 'bg-white/5'
            }`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* 
        Main Middle Area: Large Plain Text on Left + Distinct Vector Graphic on Right
        Directly translated from visual reference
      */}
      <div className="relative z-10 my-auto py-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left: Pure, bold, uppercase architectural typography */}
        <div className="max-w-xl">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase block mb-1.5">
            {project.subtitle || 'CORE INITIATIVE'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-3">
            {project.title.split(' ')[0]}
            {project.title.split(' ').length > 1 && (
              <span className="font-light text-white/80 block sm:inline sm:ml-3">
                {project.title.split(' ').slice(1).join(' ')}
              </span>
            )}
          </h2>
          <p className="text-xs sm:text-sm font-normal text-white/70 max-w-md leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Right Graphic Artifacts Matching Reference Image */}
        <div className="shrink-0 flex items-center justify-end">
          {/* Variant 1: 3D Faceted Isometric Crystal Pyramid with Telemetry Projections */}
          {variant === 'pyramid' && (
            <div className="relative w-44 h-36 sm:w-56 sm:h-44 flex items-center justify-center">
              <svg
                viewBox="0 0 240 180"
                className={`w-full h-full transition-transform duration-700 ease-out ${
                  hovered ? 'scale-105' : 'scale-100'
                }`}
                fill="none"
              >
                <defs>
                  {/* Top-Left Violet Facet Gradient */}
                  <linearGradient id="pyr-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#4338ca" />
                  </linearGradient>
                  {/* Top-Right Amber Facet Gradient */}
                  <linearGradient id="pyr-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#92400e" />
                  </linearGradient>
                  {/* Bottom-Left Dark Obsidian Facet */}
                  <linearGradient id="pyr-dark-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#312e81" />
                    <stop offset="100%" stopColor="#1e1b4b" />
                  </linearGradient>
                  {/* Bottom-Right Dark Bronze Facet */}
                  <linearGradient id="pyr-dark-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#78350f" />
                    <stop offset="100%" stopColor="#451a03" />
                  </linearGradient>
                </defs>

                {/* 3D Polyhedron Faces */}
                <path d="M 85 20 L 30 70 L 85 95 Z" fill="url(#pyr-violet)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
                <path d="M 85 20 L 140 70 L 85 95 Z" fill="url(#pyr-amber)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
                <path d="M 30 70 L 85 95 L 85 130 Z" fill="url(#pyr-dark-violet)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                <path d="M 85 95 L 140 70 L 85 130 Z" fill="url(#pyr-dark-amber)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />

                {/* Vertex Nodes (Dots) on Pyramid */}
                <circle cx="85" cy="20" r="2" fill="#ffffff" />
                <circle cx="30" cy="70" r="2" fill="#ffffff" />
                <circle cx="140" cy="70" r="2" fill="#ffffff" />
                <circle cx="85" cy="95" r="2" fill="#ffffff" />
                <circle cx="85" cy="130" r="2" fill="#ffffff" />

                {/* Layered Isometric Baseline Frames */}
                <path d="M 30 85 L 85 110 L 140 85" stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" />
                <circle cx="30" cy="85" r="1.5" fill="#ffffff" />
                <circle cx="85" cy="110" r="1.5" fill="#ffffff" />
                <circle cx="140" cy="85" r="1.5" fill="#ffffff" />

                <path d="M 30 100 L 85 125 L 140 100" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
                <circle cx="30" cy="100" r="1.5" fill="#ffffff" />
                <circle cx="85" cy="125" r="1.5" fill="#ffffff" />
                <circle cx="140" cy="100" r="1.5" fill="#ffffff" />

                <path d="M 30 115 L 85 140 L 140 115" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" />
                <circle cx="30" cy="115" r="1.5" fill="#ffffff" />
                <circle cx="85" cy="140" r="1.5" fill="#ffffff" />
                <circle cx="140" cy="115" r="1.5" fill="#ffffff" />

                {/* Horizontal Extension Telemetry Lines with Terminating Nodes (exact match to image) */}
                <line x1="140" y1="70" x2="225" y2="70" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
                <circle cx="225" cy="70" r="2" fill="#ffffff" />

                <line x1="140" y1="85" x2="225" y2="85" stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" />
                <circle cx="225" cy="85" r="2" fill="#ffffff" />

                <line x1="140" y1="100" x2="225" y2="100" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
                <circle cx="225" cy="100" r="2" fill="#ffffff" />

                <line x1="140" y1="115" x2="225" y2="115" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" />
                <circle cx="225" cy="115" r="2" fill="#ffffff" />
              </svg>
            </div>
          )}

          {/* Variant 2: Metric Typography Highlight (e.g. 20X / 120FPS / 8000HZ) from reference */}
          {variant === 'checkerboard' && (
            <div className="flex flex-col items-end pr-2">
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-0.5">
                EFFICIENCY
              </span>
              <div className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white flex items-baseline">
                <span>20</span>
                <span className="text-3xl sm:text-5xl text-white/70 ml-0.5">X</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 tracking-widest mt-1">
                VARIABLE WEIGHT MATRIX
              </span>
            </div>
          )}

          {/* Variant 3: Concentric Holographic Coin Emblem matching reference USDC coin */}
          {variant === 'emblem' && (
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
              {/* Diffuse Edge Glow */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-emerald-500/20 via-purple-500/20 to-amber-500/20 blur-md pointer-events-none" />

              <svg viewBox="0 0 100 100" className="w-full h-full text-white/60 group-hover:text-white transition-colors duration-500" fill="none">
                {/* Outer disc fill */}
                <circle cx="50" cy="50" r="46" fill="#141519" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
                {/* Concentric Wireframe Circles */}
                <circle cx="50" cy="50" r="41" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" strokeDasharray="3 2" />
                <circle cx="50" cy="50" r="34" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                <circle cx="50" cy="50" r="27" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" strokeDasharray="4 3" />
                <circle cx="50" cy="50" r="18" stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" />

                {/* Central Emblem Glyph (Stylized Monogram / Currency) */}
                <path d="M 50 18 L 50 82" stroke="rgba(255,255,255,0.5)" strokeWidth="0.75" />
                <path d="M 44 32 C 44 26, 56 26, 56 34 C 56 42, 44 44, 44 52 C 44 60, 56 60, 56 54" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                <line x1="40" y1="50" x2="60" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Specs & Inspector Trigger */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-white/40 font-mono tracking-widest text-[10px]">STACK:</span>
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10 tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-1.5 text-[10px] sm:text-[11px] font-mono text-white/60 group-hover:text-white transition-colors">
          <span className="tracking-widest">INSPECT CASE STUDY</span>
          <span>&rarr;</span>
        </div>
      </div>
    </div>
  );
};
