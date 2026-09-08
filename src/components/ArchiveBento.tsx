import React from 'react';
import { motion } from 'motion/react';
import { Maximize2, BookOpen } from 'lucide-react';

interface ArchiveBentoProps {
  onExpand?: () => void;
}

export const ArchiveBento: React.FC<ArchiveBentoProps> = ({ onExpand }) => {
  return (
    <motion.div
      layoutId="bento-card-archive"
      id="bento-archive"
      onClick={onExpand}
      className="bento-grey bento-area-archive relative p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full min-h-[220px] sm:min-h-0 hover:bg-[#181a20] transition-colors"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand?.();
        }
      }}
      aria-label="Archive Bento - Click to expand subpage"
    >
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-30" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase">
            [04] &bull; ARCHIVE
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-white/40">
            COLLECTION
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/10 tracking-wider">
            BOOKS &amp; IMAGES
          </span>
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white/50 group-hover:scale-110 transition-all">
            <Maximize2 className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto py-4">
        <div className="max-w-xl">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase block mb-1.5 flex items-center gap-2">
            <BookOpen className="w-3 h-3 text-white/60" />
            <span>HISTORICAL REPOSITORY &bull; PRESERVED VOLUMES</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-3">
            Archive
          </h2>
          <p className="text-xs sm:text-sm font-normal text-white/70 max-w-md leading-relaxed mb-3">
            Curated repository of historical monographs, technical ephemera, preserved books, and visual documentation.
          </p>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-white/50 uppercase">INDEXED:</span>
            <span className="truncate max-w-[260px] sm:max-w-xs">Aircraft Identification (1940)</span>
          </div>
        </div>
      </div>

      {/* Bottom Specs Line */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs">
        <div className="flex items-center space-x-2">
          <span className="text-white/40 font-mono tracking-widest text-[10px]">MEDIA:</span>
          {['BOOKS', 'IMAGES', 'EPHEMERA'].map((tag, i) => (
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
