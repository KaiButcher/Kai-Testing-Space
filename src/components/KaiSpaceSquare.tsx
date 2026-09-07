import React, { useState } from 'react';

export const KaiSpaceSquare: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id="bento-kais-space"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-grey col-span-1 row-span-1 relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden select-none h-full group"
    >
      {/* 
        Signature Chromatic Ambient Aurora Diffuse Glow
        (Emerald green, indigo violet, warm amber) from reference image
      */}
      <div 
        className={`absolute inset-0 chromatic-aurora transition-opacity duration-700 pointer-events-none ${
          hovered ? 'opacity-100 scale-105' : 'opacity-85'
        }`} 
      />
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-40" />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-white/70 uppercase">
            [01,01] &bull; STUDIO
          </span>
        </div>

        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/20 tracking-wider">
          INDEX
        </span>
      </div>

      {/* Center Typographic Statement */}
      <div className="relative z-10 my-auto py-4 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-semibold tracking-wider text-white uppercase mb-2 leading-tight">
          Kai&apos;s Space
        </h1>
        <p className="text-[10px] sm:text-xs font-mono tracking-[0.18em] text-white/75 uppercase max-w-[240px] mx-auto leading-relaxed">
          Interaction Systems &bull; Digital Laboratory
        </p>
      </div>

      {/* Bottom Coordinates Meta */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/60">
        <span className="tracking-widest">LONDON &bull; UTC+1</span>
        <span className="tracking-widest text-white/80">3&times;3 BENTO</span>
      </div>
    </div>
  );
};
