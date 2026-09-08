import React from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

interface GraphicDesignBentoProps {
  onExpand?: () => void;
}

export const GraphicDesignBento: React.FC<GraphicDesignBentoProps> = ({ onExpand }) => {
  return (
    <motion.div
      layoutId="bento-card-design"
      id="bento-graphic-design"
      onClick={onExpand}
      className="bento-grey bento-area-design relative p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full min-h-[220px] sm:min-h-0 hover:bg-[#181a20] transition-colors"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand?.();
        }
      }}
      aria-label="Graphic Design Bento - Click to expand subpage"
    >
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-30" />

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

        <div className="flex items-center space-x-2">
          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60 border border-white/10 tracking-wider">
            SYSTEMS
          </span>
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white/50 group-hover:scale-110 transition-all">
            <Maximize2 className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Main Content Area: Large Plain Text */}
      <div className="relative z-10 my-auto py-4">
        <div className="max-w-xl">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase block mb-1.5">
            IDENTITY &bull; EDITORIAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-3">
            Graphic <span className="font-light text-white/80 block sm:inline">Design</span>
          </h2>
          <p className="text-xs sm:text-sm font-normal text-white/70 max-w-md leading-relaxed">
            Editorial systems, spatial typography, bespoke brand architecture &amp; vector foundations.
          </p>
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

        <span className="text-[10px] sm:text-[11px] font-mono text-white/60 group-hover:text-white group-hover:underline flex items-center space-x-1">
          <span>EXPAND SUBPAGE</span>
          <span>&rarr;</span>
        </span>
      </div>
    </motion.div>
  );
};
