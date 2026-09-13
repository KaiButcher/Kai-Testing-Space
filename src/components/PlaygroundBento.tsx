import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Maximize2, Sparkles, Folder, Film, ArrowRight } from 'lucide-react';

interface PlaygroundBentoProps {
  onExpand?: () => void;
}

export const PlaygroundBento: React.FC<PlaygroundBentoProps> = ({ onExpand }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layoutId="bento-card-playground"
      id="bento-playground"
      onClick={onExpand}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-grey bento-area-anim relative p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full min-h-[280px] sm:min-h-0 hover:bg-white/[0.02] transition-colors"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand?.();
        }
      }}
      aria-label="Playground Bento - Click to open Movie Night Mystery (Light)"
    >
      {/* Cinematic Deep Purple/Blue Gradient Backdrop matching reference */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#4e3a8a]/40 blur-3xl group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute -bottom-1/4 right-1/6 w-64 h-64 rounded-full bg-[#243d78]/35 blur-3xl group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/60" />
      </div>

      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-25" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <Terminal className="w-3.5 h-3.5 text-[#F0D878]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-white/80 uppercase">
            [03] &bull; PLAYGROUND
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-[#F0D878]/15 border border-[#F0D878]/30 text-[#F0D878] tracking-wider flex items-center gap-1 font-semibold">
            <Sparkles className="w-2.5 h-2.5" />
            1 PROJECT
          </span>
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-white/80 transition-all duration-300 ${
              hovered ? 'bg-[#F0D878] text-black scale-110' : 'bg-white/10'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Center Mini Floating Window Mockup Preview (Max file size 2GB) */}
      <div className="relative z-10 my-auto py-3 w-full flex flex-col items-center">
        <span className="text-[9px] font-mono tracking-[0.25em] text-white/50 uppercase mb-2 block text-center">
          MAX FILE SIZE 2GB
        </span>

        {/* Floating Mini Window */}
        <div className="w-full max-w-[280px] bg-[#1A1D23] border border-white/10 rounded-xl p-4 shadow-xl group-hover:border-[#F0D878]/40 group-hover:shadow-[0_10px_30px_rgba(240,216,120,0.1)] transition-all duration-300">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
            <div className="flex items-center gap-1.5">
              <Film className="w-3 h-3 text-[#F0D878]" />
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider">APPLET</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/30 text-[9px] font-mono">
              <span>&mdash;</span>
              <span>&#9633;</span>
              <span>&times;</span>
            </div>
          </div>

          {/* Golden Title */}
          <h3 className="text-base sm:text-lg font-black tracking-tight text-[#F0D878] uppercase leading-tight text-center mb-1">
            MOVIE NIGHT MYSTERY (LIGHT)
          </h3>

          <p className="text-[9.5px] text-white/70 font-medium text-center uppercase tracking-wide leading-tight mb-3">
            KEEP YOUR FILM CHOICE A SECRET.
          </p>

          {/* Mini Drop Area */}
          <div className="bg-[#22262F] rounded-lg border border-dashed border-white/10 py-2.5 px-3 flex flex-col items-center justify-center">
            <Folder className="w-4 h-4 text-[#F0D878] mb-1 fill-[#F0D878]" />
            <span className="text-[9px] font-bold text-white uppercase tracking-wider">DROP MOVIE HERE</span>
            <div className="mt-1 px-3 py-1 rounded bg-[#F0D878] text-[#11141a] text-[8.5px] font-bold uppercase tracking-wider">
              SELECT MOVIE
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Counter & Action Line */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono text-white/60">
          <span className="text-[#F0D878] font-semibold">FFmpeg.wasm</span>
          <span className="text-white/20">&bull;</span>
          <span>JSZip</span>
        </div>

        <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase group-hover:text-[#F0D878] transition-colors flex items-center gap-1 font-semibold">
          <span>LAUNCH</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.div>
  );
};
