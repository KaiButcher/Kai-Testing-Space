import React, { useState } from 'react';
import { ExternalLink, Camera } from 'lucide-react';

export const PhotographyBento: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      id="bento-photography"
      href="https://unsplash.com/@kaibutcher"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-grey col-span-1 lg:col-span-2 row-span-1 relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full block"
      title="View Kai Butcher's Photography on Unsplash"
    >
      {/* Background Architectural Photo with Radial Starburst Texture from Reference */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop"
          alt="Kai Butcher Photography Archive"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center grayscale contrast-125 transition-all duration-700 ease-out ${
            hovered ? 'scale-105 opacity-55' : 'scale-100 opacity-40'
          }`}
        />

        {/* Radial starburst raycast texture overlay from reference image */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_15%,_#121316_80%)]" />

        {/* Radial line grid raycast lines */}
        <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" viewBox="0 0 200 200">
          {Array.from({ length: 36 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 95 * Math.cos((i * 10 * Math.PI) / 180)}
              y2={100 + 95 * Math.sin((i * 10 * Math.PI) / 180)}
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="0.5"
              strokeDasharray="2 4"
            />
          ))}
          <circle cx="100" cy="100" r="14" fill="#ffffff" opacity="0.15" />
          <circle cx="100" cy="100" r="3" fill="#ffffff" />
        </svg>

        <div className="absolute inset-0 bg-[#121316]/50" />
      </div>

      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-30" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <Camera className="w-3.5 h-3.5 text-white/80" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-white/70 uppercase">
            [01] &bull; PHOTOGRAPHY
          </span>
        </div>

        <div
          className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/80 transition-all duration-300 ${
            hovered ? 'bg-white text-black border-white rotate-45' : 'bg-white/5'
          }`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Center Large Plain Text Area */}
      <div className="relative z-10 my-auto py-4">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase block mb-1.5">
          VISUAL CATALOG
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-2">
          Photography
        </h2>
        <p className="text-xs sm:text-sm font-normal text-white/70 max-w-lg leading-relaxed">
          Curated monochrome architectural, spatial &amp; light captures.
        </p>
      </div>

      {/* Bottom Profile Link */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/60">
        <span className="tracking-widest">@KAIBUTCHER</span>
        <span className="tracking-widest text-white/90 group-hover:underline flex items-center space-x-1">
          <span>VIEW ON UNSPLASH</span>
          <span>&rarr;</span>
        </span>
      </div>
    </a>
  );
};
