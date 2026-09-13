import React from 'react';
import { motion } from 'motion/react';
import { Maximize2, Disc } from 'lucide-react';

interface ArchiveBentoProps {
  onExpand?: () => void;
}

export const ArchiveBento: React.FC<ArchiveBentoProps> = ({ onExpand }) => {
  return (
    <motion.div
      layoutId="bento-card-archive"
      id="bento-archive"
      onClick={onExpand}
      className="bento-grey bento-area-archive relative p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full min-h-[220px] sm:min-h-0 hover:bg-white/[0.02] transition-colors"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand?.();
        }
      }}
      aria-label="Grime Archive Bento - Click to expand subpage"
    >
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-20" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase">
            [04] &bull; ARCHIVE
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-amber-400/90 font-medium">
            GRIME VAULT
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/15 border border-amber-400/30 text-amber-300 font-bold tracking-wider">
            12,603 PRESERVED FILES
          </span>
          <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/15 group-hover:scale-110 transition-all">
            <Maximize2 className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto py-4">
        <div className="max-w-xl">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-amber-400/80 uppercase mb-1.5 flex items-center gap-2">
            <Disc className="w-3.5 h-3.5 text-amber-400" />
            <span>SOUND &bull; SETS &bull; DVDS &bull; ACAPELLAS</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-3">
            Grime Archive
          </h2>
          <p className="text-xs sm:text-sm font-normal text-white/75 max-w-md leading-relaxed mb-3">
            Exhaustive digital preservation repository of 12,603 UK grime tracks, pirate radio sets, DVD rips, instrumentals, and cultural ephemera.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-white/80 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 font-semibold">12,110</span>
              <span className="text-white/60">Audio Tracks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-purple-300 font-semibold">298</span>
              <span className="text-white/60">Art &amp; Photos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-300 font-semibold">478</span>
              <span className="text-white/60">Collections</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Specs Line */}
      <div className="relative z-10 pt-3 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs">
        <div className="flex items-center space-x-2">
          <span className="text-white/40 font-mono tracking-widest text-[10px]">VAULT:</span>
          {['AUDIO', 'PIRATE RADIO', 'DVDS', 'ACAPELLAS'].map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/80 tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="text-[10px] sm:text-[11px] font-mono text-amber-300 group-hover:text-amber-200 group-hover:underline flex items-center space-x-1 font-semibold">
          <span>EXPAND VAULT</span>
          <span>&rarr;</span>
        </span>
      </div>
    </motion.div>
  );
};
