import React from 'react';
import { 
  Archive, 
  ExternalLink, 
  Disc 
} from 'lucide-react';
import { GrimeArchiveView } from './GrimeArchiveView';

export const ArchiveSubpage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white selection:bg-white selection:text-black">
      {/* Top Coordinate Header */}
      <div className="pb-6 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <Archive className="w-4 h-4 text-amber-400" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/90 uppercase">
            [04] ARCHIVE &bull; DIGITAL GRIME PRESERVATION REPOSITORY
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/60">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            12,603 PRESERVED FILES
          </span>
          <span className="px-2.5 py-1 rounded bg-white/10 text-white/90 text-[11px] font-mono tracking-wider">
            478 FOLDERS &bull; AUDIO &amp; VIDEO
          </span>
        </div>
      </div>

      {/* Main Title & Context Header */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono tracking-[0.28em] text-amber-400/90 uppercase font-semibold flex items-center gap-1.5">
            <Disc className="w-3.5 h-3.5 text-amber-400" />
            <span>SOUND, SETS &amp; VIDEO VAULT</span>
          </span>
          <span className="text-white/30">&bull;</span>
          <span className="text-xs font-mono text-white/60">1994&ndash;2020 ERA PRESERVATION</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.05] mb-5">
          My Grime Archive <span className="text-white/70 block text-2xl sm:text-3xl md:text-4xl font-light mt-1">12,603 Preserved Tracks, Radio Sets, DVD Rips &amp; Dubplates</span>
        </h1>
        <p className="text-base sm:text-lg text-white/75 font-normal leading-relaxed max-w-4xl mb-0">
          An exhaustive cultural archive dedicated to the preservation of UK grime history. Explore, search, filter, and stream 12,603 catalogued tracks, pirate radio recordings, studio dubplates, instrumental soundfonts, and DVD video rips complete with folder taxonomy and media classifications.
        </p>
      </div>

      {/* Primary Grime Archive Explorer */}
      <div className="mb-16">
        <GrimeArchiveView />
      </div>

      {/* Archival Collection Summary Cards */}
      <div className="mb-16 pt-8 border-t border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6">
          <div>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.22em] text-white/50 uppercase block mb-1">
              DATASET PROVENANCE &bull; DIGITAL REPOSITORY
            </span>
            <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
              Archive Vault Breakdown
            </h4>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 font-semibold">
            12,603 ITEMS ACROSS 478 COLLECTIONS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono">
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-amber-400 font-bold uppercase">AUDIO RECORDINGS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
            <h5 className="text-base font-bold text-white mb-1">12,110 Audio Files</h5>
            <p className="text-[11px] text-white/60 font-light leading-relaxed mb-3">
              Rare pirate radio rips (Rinse FM, Déjà Vu FM, Freeze FM), white label vinyl recordings, mixtape dubplates, and studio instrumentals.
            </p>
            <span className="text-[10px] text-amber-300/80 bg-amber-500/10 px-2 py-0.5 rounded">
              MP3, WAV, FLAC, M4A
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-purple-400 font-bold uppercase">VISUAL EPHEMERA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            </div>
            <h5 className="text-base font-bold text-white mb-1">298 Artwork &amp; Photo Items</h5>
            <p className="text-[11px] text-white/60 font-light leading-relaxed mb-3">
              Original rave flyers, CD sleeves, cassette artwork, photographer scans, and press kits documenting the London scene.
            </p>
            <span className="text-[10px] text-purple-300/80 bg-purple-500/10 px-2 py-0.5 rounded">
              JPG, PNG, TIFF
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-emerald-400 font-bold uppercase">VIDEO &amp; DOCUMENTATION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <h5 className="text-base font-bold text-white mb-1">DVD Rips, Archives &amp; Lists</h5>
            <p className="text-[11px] text-white/60 font-light leading-relaxed mb-3">
              Classic DVD clash videos (Lord of the Mics, Risky Roadz), tracklists, sound fonts, and 7z zip master backups.
            </p>
            <span className="text-[10px] text-emerald-300/80 bg-emerald-500/10 px-2 py-0.5 rounded">
              MP4, AVI, 7Z, CSV
            </span>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <span>MY GRIME ARCHIVE &bull; 12,603 PRESERVED FILES</span>
        <div className="flex items-center gap-4">
          <a
            href="/grime-archive/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white hover:underline flex items-center space-x-1.5"
          >
            <span>STANDALONE VIEWER</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
