import React, { useState } from 'react';

export const GraphicDesignBento: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id="bento-graphic-design"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-grey col-span-1 lg:col-span-2 row-span-1 relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-default select-none group h-full"
    >
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-35" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase">
            [02] &bull; GRAPHIC DESIGN
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-white/40">
            2026
          </span>
        </div>

        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60 border border-white/10 tracking-wider">
          SYSTEMS
        </span>
      </div>

      {/* Main Content Area: Large Plain Text on Left + 3D Faceted Crystal Pyramid on Right */}
      <div className="relative z-10 my-auto py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Left: Architectural Plain Typography */}
        <div className="max-w-md">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase block mb-1.5">
            IDENTITY &bull; EDITORIAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-3">
            Graphic <span className="font-light text-white/80 block sm:inline">Design</span>
          </h2>
          <p className="text-xs sm:text-sm font-normal text-white/70 max-w-sm leading-relaxed">
            Editorial systems, spatial typography, bespoke brand architecture &amp; vector foundations.
          </p>
        </div>

        {/* Right: 3D Faceted Crystal Pyramid with Telemetry Extensions from Reference Image */}
        <div className="shrink-0 flex items-center justify-end">
          <div className="relative w-44 h-36 sm:w-52 sm:h-40 flex items-center justify-center">
            <svg
              viewBox="0 0 240 180"
              className={`w-full h-full transition-transform duration-700 ease-out ${
                hovered ? 'scale-105' : 'scale-100'
              }`}
              fill="none"
            >
              <defs>
                <linearGradient id="gd-pyr-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#4338ca" />
                </linearGradient>
                <linearGradient id="gd-pyr-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#92400e" />
                </linearGradient>
                <linearGradient id="gd-pyr-dark-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#312e81" />
                  <stop offset="100%" stopColor="#1e1b4b" />
                </linearGradient>
                <linearGradient id="gd-pyr-dark-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#78350f" />
                  <stop offset="100%" stopColor="#451a03" />
                </linearGradient>
              </defs>

              {/* 3D Polyhedron Faces */}
              <path d="M 85 20 L 30 70 L 85 95 Z" fill="url(#gd-pyr-violet)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
              <path d="M 85 20 L 140 70 L 85 95 Z" fill="url(#gd-pyr-amber)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
              <path d="M 30 70 L 85 95 L 85 130 Z" fill="url(#gd-pyr-dark-violet)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
              <path d="M 85 95 L 140 70 L 85 130 Z" fill="url(#gd-pyr-dark-amber)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />

              {/* Vertex Nodes (Dots) */}
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

              {/* Horizontal Telemetry Extension Lines with Terminating Nodes */}
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
        </div>
      </div>

      {/* Bottom Specs Line */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs">
        <div className="flex items-center space-x-2">
          <span className="text-white/40 font-mono tracking-widest text-[10px]">STACK:</span>
          {['TYPOGRAPHY', 'GRID', 'BRAND'].map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10 tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="text-[10px] sm:text-[11px] font-mono text-white/40 tracking-widest">
          FIG. 02 &bull; STATIC SYSTEM
        </span>
      </div>
    </div>
  );
};
