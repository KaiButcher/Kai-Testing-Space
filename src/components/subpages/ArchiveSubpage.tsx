import React, { useState } from 'react';
import { 
  Archive, 
  ExternalLink, 
  Copy, 
  Check, 
  BookOpen, 
  Calendar, 
  Compass, 
  Eye, 
  FileText, 
  Layers, 
  ShieldAlert, 
  Maximize2,
  Disc,
  Plane
} from 'lucide-react';
import { GrimeArchiveView } from './GrimeArchiveView';

export const ArchiveSubpage: React.FC = () => {
  const [activeProject, setActiveProject] = useState<'aircraft' | 'grime'>('aircraft');
  const [copiedLink, setCopiedLink] = useState(false);
  const [readerView, setReaderView] = useState<'preview' | 'embed'>('preview');

  const archiveUrl = 'https://archive.org/details/aircraft-identification-friend-or-foe-part-one-british-and-german-fighters-and-bombers';
  const embedUrl = 'https://archive.org/embed/aircraft-identification-friend-or-foe-part-one-british-and-german-fighters-and-bombers';

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(archiveUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const aircraftCatalogue = [
    {
      side: 'BRITISH (ALLIED)',
      tag: 'RAF FIGHTERS & BOMBERS',
      models: [
        { name: 'Supermarine Spitfire', role: 'Single-seat Fighter', engine: 'Rolls-Royce Merlin', feature: 'Elliptical wing planform with slight dihedral' },
        { name: 'Hawker Hurricane', role: 'Single-seat Fighter', engine: 'Rolls-Royce Merlin', feature: 'Thick wing root, pronounced fuselage hump' },
        { name: 'Gloster Gladiator', role: 'Biplane Fighter', engine: 'Bristol Mercury IX', feature: 'Single-bay biplane with enclosed cockpit' },
        { name: 'Vickers Wellington', role: 'Twin-engine Heavy Bomber', engine: 'Bristol Pegasus XVIII', feature: 'Geodetic lattice structure, tall single fin' },
        { name: 'Bristol Blenheim', role: 'Twin-engine Bomber / Night Fighter', engine: 'Bristol Mercury XV', feature: 'Mid-wing monoplane, twin radial cowlings' },
        { name: 'Handley Page Hampden', role: 'Twin-engine Medium Bomber', engine: 'Bristol Pegasus XVIII', feature: 'Deep narrow nose fuselage, twin fins and rudders' },
      ],
    },
    {
      side: 'GERMAN (AXIS)',
      tag: 'LUFTWAFFE FIGHTERS & BOMBERS',
      models: [
        { name: 'Messerschmitt Bf 109', role: 'Single-seat Fighter', engine: 'Daimler-Benz DB 601', feature: 'Square-cut wingtips, angular canopy framing' },
        { name: 'Messerschmitt Bf 110', role: 'Twin-engine Heavy Fighter', engine: 'Twin DB 601A', feature: 'Long slim fuselage, twin endplate rudders' },
        { name: 'Junkers Ju 87 Stuka', role: 'Dive Bomber', engine: 'Junkers Jumo 211', feature: 'Inverted gull wings, fixed spatted landing gear' },
        { name: 'Heinkel He 111', role: 'Twin-engine Medium Bomber', engine: 'Twin Jumo 211', feature: 'Glazed asymmetrical stepless nose, elliptical wings' },
        { name: 'Dornier Do 17 / Do 215', role: 'Medium Bomber ("Flying Pencil")', engine: 'Twin BMW / Bramo', feature: 'Extremely slender fuselage, twin tailfins' },
        { name: 'Junkers Ju 88', role: 'Multi-role Combat Aircraft', engine: 'Twin Jumo 211', feature: 'Circular nose glazing, under-nose gondola' },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white selection:bg-white selection:text-black">
      {/* Top Coordinate Header */}
      <div className="pb-6 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Archive className="w-4 h-4 text-white" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase">
            [04] ARCHIVE &bull; REPOSITORY OF BOOKS, IMAGES &amp; DOCUMENTS
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono text-white/60">
          <span className="flex items-center gap-1.5 text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            CATALOGUE: RECORD 01 OF EXPANDING SERIES
          </span>
          <span className="px-2.5 py-1 rounded bg-white/10 text-white/90 text-[11px] font-mono tracking-wider">
            COLLECTION: INTERNET ARCHIVE
          </span>
        </div>
      </div>

      {/* Main Title & Context Header */}
      <div className="mb-14 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono tracking-[0.28em] text-white/50 uppercase">
            HISTORICAL INDEX &bull; PERMANENT VAULT
          </span>
          <span className="text-white/30">&bull;</span>
          <span className="text-xs font-mono text-white/60">DIGITAL PRESERVATION</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.05] mb-5">
          Archive <span className="text-white/70 block text-2xl sm:text-3xl md:text-4xl font-light mt-1">Books, Media &amp; Cultural Preservations</span>
        </h1>
        <p className="text-base sm:text-lg text-white/75 font-normal leading-relaxed max-w-3xl mb-8">
          A curated repository preserving rare technical monographs, historical books, architectural ephemera, and sound cultures. Select an archival project below to explore the collection.
        </p>

        {/* Project Selector Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 rounded-2xl bg-white/[0.03] border border-white/10">
          <button
            onClick={() => setActiveProject('aircraft')}
            className={`p-4 rounded-xl text-left transition-all flex items-start justify-between gap-3 ${
              activeProject === 'aircraft'
                ? 'bg-white/15 border border-white/20 shadow-lg text-white'
                : 'hover:bg-white/5 border border-transparent text-white/70 hover:text-white'
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Plane className={`w-4 h-4 ${activeProject === 'aircraft' ? 'text-emerald-400' : 'text-white/50'}`} />
                <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-emerald-400">
                  PROJECT 01 &bull; TECHNICAL MONOGRAPH
                </span>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                Aircraft Identification
              </h3>
              <p className="text-xs font-mono text-white/60 line-clamp-1">
                Friend or Foe? (1940) wartime manual &amp; combat aircraft profiles
              </p>
            </div>
            <span className={`px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap ${
              activeProject === 'aircraft' ? 'bg-emerald-400/20 text-emerald-300 font-bold' : 'bg-white/5 text-white/40'
            }`}>
              {activeProject === 'aircraft' ? 'VIEWING' : 'OPEN'}
            </span>
          </button>

          <button
            onClick={() => setActiveProject('grime')}
            className={`p-4 rounded-xl text-left transition-all flex items-start justify-between gap-3 ${
              activeProject === 'grime'
                ? 'bg-amber-400/15 border border-amber-400/30 shadow-lg text-white'
                : 'hover:bg-white/5 border border-transparent text-white/70 hover:text-white'
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Disc className={`w-4 h-4 ${activeProject === 'grime' ? 'text-amber-400' : 'text-white/50'}`} />
                <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-amber-400">
                  PROJECT 02 &bull; SOUND &amp; VIDEO ARCHIVE
                </span>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                My Grime Archive
              </h3>
              <p className="text-xs font-mono text-white/60 line-clamp-1">
                Searchable vault of 12,603 tracks, sets, videos &amp; instrumentals
              </p>
            </div>
            <span className={`px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap ${
              activeProject === 'grime' ? 'bg-amber-400 text-black font-bold' : 'bg-white/5 text-white/40'
            }`}>
              {activeProject === 'grime' ? 'VIEWING' : 'OPEN'}
            </span>
          </button>
        </div>
      </div>

      {/* Conditionally Render Active Project */}
      {activeProject === 'grime' ? (
        <div className="mb-20">
          <GrimeArchiveView />
        </div>
      ) : (
        <>
          {/* Primary Featured Archive Entry */}
          <div className="mb-20">
        {/* Entry Label Bar */}
        <div className="py-2 mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs font-mono tracking-widest text-white/90 uppercase font-bold">
              CATALOGUE ENTRY #01 &bull; BOOK RECORD
            </span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="px-2 py-0.5 rounded bg-white/10 text-white/80">
              ORIGINAL: 1940
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
              ACTIVE ARCHIVE.ORG LINK
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-white/50">
                <BookOpen className="w-3.5 h-3.5 text-white/70" />
                <span>OFFICIAL PUBLICATION &bull; ARCHIVE.ORG DIGITAL VAULT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-3 leading-snug">
                Aircraft Identification &mdash; Friend or Foe?: Part One: British and German Fighters and Bombers
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light mb-6">
                Published by Temple Press Ltd. in 1940 for <em>The Aeroplane</em>, this definitive publication provided essential visual identification guides, photographic plates, dimensional specifications, and silhouette silhouettes of British RAF and German Luftwaffe combat planes to prevent friendly-fire incidents during the second World War.
              </p>

              {/* Exact Archive Link Callout */}
              <div className="py-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-mono text-white/50 tracking-widest uppercase flex items-center gap-1.5">
                    <Compass className="w-3 h-3 text-white/70" />
                    DIRECT ARCHIVE REPOSITORY LINK
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">STATUS: ACTIVE</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 p-3 rounded-lg">
                  <a
                    href={archiveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-mono text-white/90 hover:text-white break-all underline decoration-white/30 hover:decoration-white transition-colors"
                  >
                    {archiveUrl}
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="shrink-0 inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white text-white hover:text-black transition-all text-xs font-mono cursor-pointer"
                    title="Copy URL to clipboard"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Copied URL' : 'Copy Link'}</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons: Open Link & Toggle Reader */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={archiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white text-black font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-neutral-200 transition-all cursor-pointer shadow-lg"
                >
                  <span>Open On Archive.org</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setReaderView(readerView === 'embed' ? 'preview' : 'embed')}
                  className={`inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer ${
                    readerView === 'embed'
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>{readerView === 'embed' ? 'Hide Reader' : 'Open Embedded Reader'}</span>
                </button>
              </div>
            </div>

            {/* Right Specifications Column */}
            <div className="lg:col-span-4 space-y-4 text-xs font-mono">
              <div className="pb-3">
                <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                  CATALOGUE PROVENANCE
                </span>
                <span className="text-white font-bold text-sm block">Internet Archive Details</span>
                <span className="text-white/60 text-[11px]">Digital Preservation Project</span>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Publication Date</span>
                  <span className="text-white/90">1940 (Second World War)</span>
                </div>

                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Original Publisher</span>
                  <span className="text-white/90">Temple Press Ltd. for "The Aeroplane"</span>
                </div>

                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Subject Taxonomy</span>
                  <span className="text-white/90">Military Aviation &bull; Aircraft Recognition</span>
                </div>

                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Original Edition</span>
                  <span className="text-white/90">Part One: British &amp; German Fighters/Bombers</span>
                </div>

                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Digital Format</span>
                  <span className="text-white/90">High-Resolution Book Reader / Full Text / PDF</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={archiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white flex items-center justify-between text-[11px] group/link"
                >
                  <span className="group-hover/link:underline">Direct Internet Archive Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Internet Archive Book Reader View */}
          {readerView === 'embed' && (
            <div className="mt-10 pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/90 font-bold uppercase">INTERNET ARCHIVE EMBEDDED READER</span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-mono text-white/50">
                  <a
                    href={archiveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center space-x-1"
                  >
                    <span>Full Window</span>
                    <Maximize2 className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="w-full h-[650px] sm:h-[750px] bg-[#070707] rounded-xl overflow-hidden relative shadow-2xl">
                <iframe
                  src={embedUrl}
                  title="Aircraft Identification - Friend or Foe? Part One"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Historical Recognition Aircraft Matrix */}
      <div className="mb-20">
        <div className="pb-4 mb-8 flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-1">
              HISTORICAL TAXONOMY &bull; 1940 MANUAL SPECIFICATION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              Aircraft Types Catalogued in this Document
            </h3>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-white/40">
            WAR RECOGNITION GUIDE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {aircraftCatalogue.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                    {section.side}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60">
                    {section.tag}
                  </span>
                </div>

                <div className="space-y-4">
                  {section.models.map((plane, pIdx) => (
                    <div
                      key={pIdx}
                      className="py-3"
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="text-sm font-bold text-white uppercase">
                          {plane.name}
                        </h4>
                        <span className="text-[11px] font-mono text-white/50">
                          {plane.role}
                        </span>
                      </div>
                      <div className="text-xs text-white/70 font-light flex items-center gap-2 mb-1">
                        <span className="text-white/40 font-mono text-[10px]">POWERPLANT:</span>
                        <span>{plane.engine}</span>
                      </div>
                      <p className="text-xs text-white/60 font-mono text-[11px] leading-relaxed">
                        <span className="text-white/40 uppercase">IDENTIFIER:</span> {plane.feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </>
      )}

      {/* Archival Collection Pipeline */}
      <div className="mb-20">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6">
          <div>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.22em] text-white/50 uppercase block mb-1">
              EXPANDING COLLECTION &bull; DIGITAL REPOSITORY
            </span>
            <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
              Archived Volumes &amp; Preserved Collections
            </h4>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-white/70">
            2 PROJECTS ACTIVE &bull; EXPANDING VAULT
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono">
          <div 
            onClick={() => setActiveProject('aircraft')}
            className={`p-4 rounded-xl cursor-pointer transition-all ${
              activeProject === 'aircraft' ? 'bg-white/10 border border-white/20' : 'bg-white/[0.03] hover:bg-white/[0.06] border border-white/5'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-emerald-400 font-bold uppercase">ENTRY #01 &bull; CATALOGUED</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <h5 className="text-sm font-bold text-white mb-1">Aircraft Identification: Friend or Foe?</h5>
            <p className="text-[11px] text-white/60 font-light leading-relaxed mb-3">
              1940 wartime identification manual with original digital scan and combat aircraft specs.
            </p>
            <span className="text-[10px] text-emerald-300/80 bg-emerald-500/10 px-2 py-0.5 rounded">
              {activeProject === 'aircraft' ? 'NOW VIEWING' : 'CLICK TO VIEW'}
            </span>
          </div>

          <div 
            onClick={() => setActiveProject('grime')}
            className={`p-4 rounded-xl cursor-pointer transition-all ${
              activeProject === 'grime' ? 'bg-amber-400/10 border border-amber-400/30' : 'bg-white/[0.03] hover:bg-white/[0.06] border border-white/5'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-amber-400 font-bold uppercase">ENTRY #02 &bull; CATALOGUED</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
            <h5 className="text-sm font-bold text-white mb-1">My Grime Archive</h5>
            <p className="text-[11px] text-white/60 font-light leading-relaxed mb-3">
              Searchable audio, DVD rips, instrumentals &amp; radio sets backed up to Google Drive (540+ items).
            </p>
            <span className="text-[10px] text-amber-300/80 bg-amber-500/10 px-2 py-0.5 rounded">
              {activeProject === 'grime' ? 'NOW VIEWING' : 'CLICK TO VIEW'}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 opacity-75">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-white/40 uppercase">ENTRY #03 &bull; QUEUED</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>
            <h5 className="text-sm font-bold text-white/80 mb-1">Technical Manuals &amp; Ephemera</h5>
            <p className="text-[11px] text-white/50 font-light leading-relaxed mb-3">
              Mid-century industrial guides, typographic specimen sheets, and early computing interface treatises.
            </p>
            <span className="text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded">
              IN DIGITISATION
            </span>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <span>ARCHIVE &bull; HISTORICAL RECORD ARCHIVE.ORG</span>
        <a
          href={archiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white hover:underline flex items-center space-x-1.5"
        >
          <span>VIEW FULL ORIGINAL ON ARCHIVE.ORG</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
