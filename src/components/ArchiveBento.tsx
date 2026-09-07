import React from 'react';

export const ArchiveBento: React.FC = () => {
  return (
    <div
      id="bento-archive"
      className="bento-grey bento-area-archive relative p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-default select-none group h-full min-h-[220px] sm:min-h-0"
    >
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-30" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase">
            [04] &bull; ARCHIVE
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-white/40">
            2022 — 2026
          </span>
        </div>

        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60 border border-white/10 tracking-wider">
          CATALOG
        </span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto py-4">
        <div className="max-w-xl">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-white/50 uppercase block mb-1.5">
            CHRONOLOGICAL RECORD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-3">
            Archive
          </h2>
          <p className="text-xs sm:text-sm font-normal text-white/70 max-w-md leading-relaxed">
            Historical index of experimental prototypes, sound interfaces, spatial experiments &amp; case studies.
          </p>
        </div>
      </div>

      {/* Bottom Specs Line */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs">
        <div className="flex items-center space-x-2">
          <span className="text-white/40 font-mono tracking-widest text-[10px]">RECORDS:</span>
          {['2022', '2023', '2024', '2025', '2026'].map((year, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10 tracking-wide"
            >
              {year}
            </span>
          ))}
        </div>

        <span className="text-[10px] sm:text-[11px] font-mono text-white/40 tracking-widest">
          CATALOG // 24 ENTRIES
        </span>
      </div>
    </div>
  );
};
