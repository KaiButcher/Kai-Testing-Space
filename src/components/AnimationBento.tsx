import React from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

interface AnimationBentoProps {
  onExpand?: () => void;
}

export const AnimationBento: React.FC<AnimationBentoProps> = ({ onExpand }) => {
  return (
    <motion.div
      layoutId="bento-card-anim"
      id="bento-animation"
      onClick={onExpand}
      className="bento-grey bento-area-anim relative p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full min-h-[260px] sm:min-h-0 hover:bg-[#181a20] transition-colors"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand?.();
        }
      }}
      aria-label="Animation Bento - Click to expand subpage"
    >
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-30" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase">
            [03] &bull; ANIMATION
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 tracking-wider">
            60-120 FPS
          </span>
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white/50 group-hover:scale-110 transition-all">
            <Maximize2 className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Middle Content Area */}
      <div className="relative z-10 my-auto py-6 flex flex-col justify-center">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block mb-1">
          MOTION MATRIX
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-none mb-3">
          Animation
        </h2>

        {/* 120 FPS Kinetic Numeric Callout */}
        <div className="my-4 py-3 border-y border-white/10 flex items-baseline justify-between">
          <div className="flex items-baseline">
            <span className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold tracking-tighter text-white">
              120
            </span>
            <span className="text-xl sm:text-2xl font-light text-white/60 ml-1">
              FPS
            </span>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-mono text-white/50 block tracking-widest">TIMELINE</span>
            <span className="text-xs font-mono text-white/80 font-bold">CUBIC-BEZIER</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm font-normal text-white/70 leading-relaxed">
          Kinetic choreography, WebGL shaders, spatial micro-physics &amp; fluid UI interactions.
        </p>
      </div>

      {/* Bottom Telemetry */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/60">
        <span className="tracking-widest">GSAP &bull; MOTION</span>
        <span className="tracking-widest text-white/80 group-hover:underline flex items-center space-x-1">
          <span>EXPAND SUBPAGE</span>
          <span>&rarr;</span>
        </span>
      </div>
    </motion.div>
  );
};
