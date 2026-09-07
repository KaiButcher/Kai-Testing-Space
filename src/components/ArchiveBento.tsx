import React, { useState } from 'react';

export const ArchiveBento: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id="bento-archive"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-grey col-span-1 lg:col-span-2 row-span-1 relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-default select-none group h-full"
    >
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-35" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase">
            [04] &bull; ARCHIVE
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-white/40">
            2022 &mdash; 2026
          </span>
        </div>

        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60 border border-white/10 tracking-wider">
          CATALOG
        </span>
      </div>

      {/* Main Content Area: Large Plain Text on Left + Holographic Concentric Emblem on Right */}
      <div className="relative z-10 my-auto py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Left: Architectural Plain Typography */}
        <div className="max-w-md">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase block mb-1.5">
            CHRONOLOGICAL RECORD
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-3">
            Archive
          </h2>
          <p className="text-xs sm:text-sm font-normal text-white/70 max-w-sm leading-relaxed">
            Historical index of experimental prototypes, sound interfaces, spatial experiments &amp; case studies.
          </p>
        </div>

        {/* Right: Holographic Concentric Emblem matching USDC Coin from Reference Image */}
        <div className="shrink-0 flex items-center justify-end">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
            {/* Diffuse Edge Glow */}
            <div className={`absolute inset-2 rounded-full bg-gradient-to-tr from-emerald-500/25 via-purple-500/25 to-amber-500/25 blur-md pointer-events-none transition-opacity duration-500 ${
              hovered ? 'opacity-100 scale-110' : 'opacity-60'
            }`} />

            <svg viewBox="0 0 100 100" className="w-full h-full text-white/60 group-hover:text-white transition-colors duration-500" fill="none">
              {/* Outer disc fill */}
              <circle cx="50" cy="50" r="46" fill="#141519" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
              {/* Concentric Wireframe Circles */}
              <circle cx="50" cy="50" r="41" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" strokeDasharray="3 2" />
              <circle cx="50" cy="50" r="34" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
              <circle cx="50" cy="50" r="27" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" strokeDasharray="4 3" />
              <circle cx="50" cy="50" r="18" stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" />

              {/* Central Stylized Monogram Glyph */}
              <path d="M 50 18 L 50 82" stroke="rgba(255,255,255,0.5)" strokeWidth="0.75" />
              <path d="M 44 32 C 44 26, 56 26, 56 34 C 56 42, 44 44, 44 52 C 44 60, 56 60, 56 54" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              <line x1="40" y1="50" x2="60" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Specs Line */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs">
        <div className="flex items-center space-x-2">
          <span className="text-white/40 font-mono tracking-widest text-[10px]">RECORDS:</span>
          {['2022', '2023', '2024', '2025', '2026'].map((yr, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/70 border border-white/10 tracking-wide"
            >
              {yr}
            </span>
          ))}
        </div>

        <span className="text-[10px] sm:text-[11px] font-mono text-white/40 tracking-widest">
          FIG. 04 &bull; 24 ENTRIES
        </span>
      </div>
    </div>
  );
};
