import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Maximize2 } from 'lucide-react';

interface PhotographyBentoProps {
  onExpand?: () => void;
}

export const PhotographyBento: React.FC<PhotographyBentoProps> = ({ onExpand }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layoutId="bento-card-photo"
      id="bento-photography"
      onClick={onExpand}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-grey bento-area-photo relative p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full min-h-[260px] sm:min-h-0"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand?.();
        }
      }}
      aria-label="Photography Bento - Click to expand subpage"
    >
      {/* Background Architectural Photo from Unsplash */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/photography/warplanes-display.jpg"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1751877338999-02175bc6c88c?auto=format&fit=crop&q=80&w=1600";
          }}
          alt="Kai Butcher Photography"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center grayscale contrast-125 transition-all duration-700 ease-out ${
            hovered ? 'scale-105 opacity-60' : 'scale-100 opacity-45'
          }`}
        />

        {/* Contrast Gradient Overlay for Typography Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/70 to-[#070707]/30 pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-20" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <Camera className="w-3.5 h-3.5 text-white/80" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-white/70 uppercase">
            [01] &bull; PHOTOGRAPHY
          </span>
        </div>

        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center text-white/80 transition-all duration-300 ${
            hovered ? 'bg-white text-black scale-110' : 'bg-white/10'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Center Large Typography */}
      <div className="relative z-10 my-auto py-4">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase block mb-1.5">
          VISUAL CATALOG
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-2">
          Photography
        </h2>
        <p className="text-xs sm:text-sm font-normal text-white/75 max-w-lg leading-relaxed">
          Curated monochrome architectural, spatial &amp; light captures.
        </p>
      </div>

      {/* Bottom Profile Link */}
      <div className="relative z-10 pt-3 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/60">
        <span className="tracking-widest">@KAIBUTCHER</span>
        <span className="tracking-widest text-white/90 group-hover:underline flex items-center space-x-1">
          <span>EXPAND SUBPAGE</span>
          <span>&rarr;</span>
        </span>
      </div>
    </motion.div>
  );
};
