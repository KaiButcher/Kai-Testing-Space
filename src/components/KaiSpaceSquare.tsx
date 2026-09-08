import React from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

interface KaiSpaceSquareProps {
  onExpand?: () => void;
}

export const KaiSpaceSquare: React.FC<KaiSpaceSquareProps> = ({ onExpand }) => {
  return (
    <motion.div
      layoutId="bento-card-space"
      id="bento-kais-space"
      onClick={onExpand}
      className="bento-grey bento-area-space relative p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden select-none h-full min-h-[220px] sm:min-h-0 group cursor-pointer hover:bg-[#181a20] transition-colors"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand?.();
        }
      }}
      aria-label="Kai's Space - Click to expand subpage"
    >
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-30" />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-white/70 uppercase">
            [01,01] &bull; STUDIO
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/20 tracking-wider">
            INDEX
          </span>
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white/50 group-hover:scale-110 transition-all">
            <Maximize2 className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Center Typographic Statement */}
      <div className="relative z-10 my-auto py-4">
        <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-wider text-white uppercase mb-2 leading-tight">
          Kai&apos;s Space
        </h1>
        <p className="text-[10px] sm:text-xs font-mono tracking-[0.18em] text-white/75 uppercase leading-relaxed max-w-[240px]">
          Graphic &amp; Digital Designer &bull; London
        </p>
      </div>

      {/* Bottom Coordinates Meta */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/60">
        <span className="tracking-widest">LONDON &bull; UTC+1</span>
        <span className="tracking-widest text-white/80 group-hover:underline flex items-center space-x-1">
          <span>EXPAND</span>
          <span>&rarr;</span>
        </span>
      </div>
    </motion.div>
  );
};
