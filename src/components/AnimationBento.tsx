import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Maximize2, Sparkles, Terminal, Film, Image as ImageIcon } from 'lucide-react';

interface PlaygroundBentoProps {
  onExpand?: () => void;
}

export const PlaygroundBento: React.FC<PlaygroundBentoProps> = ({ onExpand }) => {
  const [pulseIdx, setPulseIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIdx((prev) => (prev + 1) % 3);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      layoutId="bento-card-playground"
      id="bento-playground"
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
      aria-label="Playground Bento - Click to expand subpage"
    >
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-30" />

      {/* Top Meta Header */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/70 uppercase">
            [03] &bull; PLAYGROUND
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-emerald-300 border border-emerald-500/30 tracking-wider flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
            VIBE CODED
          </span>
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white/50 group-hover:scale-110 transition-all">
            <Maximize2 className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Center Typographic & Visual Callout */}
      <div className="relative z-10 my-auto py-5 flex flex-col justify-center">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block mb-1">
          CREATIVE LAB &bull; EXPERIMENTS
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-none mb-3">
          Playground
        </h2>

        {/* Dynamic Vibe-Coded Categories Strip */}
        <div className="my-3 py-3 border-y border-white/10 grid grid-cols-3 gap-2">
          <div className={`p-2 rounded-lg border transition-all ${pulseIdx === 0 ? 'bg-white/10 border-white/40' : 'bg-black/30 border-white/10'}`}>
            <div className="flex items-center gap-1 text-[10px] font-mono text-white/60 mb-0.5">
              <Terminal className="w-3 h-3 text-white/80" />
              <span>TOOLS</span>
            </div>
            <span className="text-xs sm:text-sm font-mono font-bold text-white">03 APPS</span>
          </div>

          <div className={`p-2 rounded-lg border transition-all ${pulseIdx === 1 ? 'bg-white/10 border-white/40' : 'bg-black/30 border-white/10'}`}>
            <div className="flex items-center gap-1 text-[10px] font-mono text-white/60 mb-0.5">
              <ImageIcon className="w-3 h-3 text-white/80" />
              <span>IMAGES</span>
            </div>
            <span className="text-xs sm:text-sm font-mono font-bold text-white">06 WORKS</span>
          </div>

          <div className={`p-2 rounded-lg border transition-all ${pulseIdx === 2 ? 'bg-white/10 border-white/40' : 'bg-black/30 border-white/10'}`}>
            <div className="flex items-center gap-1 text-[10px] font-mono text-white/60 mb-0.5">
              <Film className="w-3 h-3 text-white/80" />
              <span>VIDEOS</span>
            </div>
            <span className="text-xs sm:text-sm font-mono font-bold text-white">04 CLIPS</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm font-normal text-white/70 leading-relaxed">
          Interactive vibe-coded tools, generative visual artifacts, and video motion studies.
        </p>
      </div>

      {/* Bottom Coordinates Meta */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/60">
        <span className="tracking-widest">REACT &bull; WEBGL &bull; SHADERS</span>
        <span className="tracking-widest text-white/80 group-hover:underline flex items-center space-x-1">
          <span>OPEN LAB</span>
          <span>&rarr;</span>
        </span>
      </div>
    </motion.div>
  );
};

export const AnimationBento = PlaygroundBento;
