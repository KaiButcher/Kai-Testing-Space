import React, { useState, useMemo } from 'react';
import { 
  Archive, 
  Search, 
  Filter, 
  Code2, 
  Layers, 
  Terminal, 
  ExternalLink, 
  Copy, 
  Check, 
  X, 
  Cpu, 
  Calendar,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ArchiveItem {
  id: string;
  year: string;
  title: string;
  category: 'Code & Shaders' | 'Physical & Hardware' | 'Experimental UI' | 'Sound & Audio';
  status: 'DEPLOYED' | 'ARCHIVED' | 'OPEN SOURCE' | 'CONCEPT';
  stack: string[];
  summary: string;
  technicalDetails: string;
  codeSnippet?: string;
}

const archiveItems: ArchiveItem[] = [
  {
    id: 'ARC-2601',
    year: '2026',
    title: 'Kinetic Bento Layout Engine',
    category: 'Experimental UI',
    status: 'DEPLOYED',
    stack: ['React 19', 'Tailwind v4', 'Motion 12', 'CSS Grid Areas'],
    summary: 'The mathematical 3x3 viewport-filling bento system with dynamic shared layout expansion.',
    technicalDetails: 'Employs named CSS grid areas mapped across breakpoints with sub-pixel alignment. Uses shared layout transforms to expand any cell into full-screen without layout reflow.',
    codeSnippet: `const transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8
};`,
  },
  {
    id: 'ARC-2602',
    year: '2026',
    title: 'Monolith High-Frequency UI',
    category: 'Experimental UI',
    status: 'DEPLOYED',
    stack: ['WebGL', 'WebSockets', 'Canvas 2D', 'TypeScript'],
    summary: 'Low-latency order book and telemetry visualizer rendering 10,000 updates/second without frame drop.',
    technicalDetails: 'Zero DOM manipulation during hot loop. Render state buffer kept in shared ArrayBuffers and blitted directly to offscreen canvas contexts.',
  },
  {
    id: 'ARC-2603',
    year: '2026',
    title: 'Spectral Audio Spatializer',
    category: 'Sound & Audio',
    status: 'OPEN SOURCE',
    stack: ['Web Audio API', 'Spatial PannerNode', 'React', 'GLSL'],
    summary: 'Binaural 3D room impulse simulator mapping frequency reflections against virtual brutalist geometry.',
    technicalDetails: 'Convolution reverb engine using impulse responses captured in the Hayward Gallery concrete undercroft.',
  },
  {
    id: 'ARC-2504',
    year: '2025',
    title: 'Vektor Variable Type Engine',
    category: 'Code & Shaders',
    status: 'DEPLOYED',
    stack: ['OpenType.js', 'Canvas API', 'GLSL', 'SVG'],
    summary: 'Real-time optical kerning and glyph vector contour interpolator running in the browser.',
    technicalDetails: 'Parses raw OTF font tables and extracts quadratic and cubic Bézier curves into GPU vertex buffers for instantaneous manipulation.',
  },
  {
    id: 'ARC-2505',
    year: '2025',
    title: 'Ergodox Custom Firmware Matrix',
    category: 'Physical & Hardware',
    status: 'ARCHIVED',
    stack: ['C / QMK', 'Hardware Ergonomics', 'Mechanical Switches'],
    summary: 'Custom split keyboard layout optimized for rapid Vim navigation, Figma shortcuts, and shader coding.',
    technicalDetails: 'Dual-function tap-hold keys, home-row modifiers, and custom rotary encoder mappings for viewport zoom and scrub.',
  },
  {
    id: 'ARC-2506',
    year: '2025',
    title: 'Concrete Shadow Raymarcher',
    category: 'Code & Shaders',
    status: 'OPEN SOURCE',
    stack: ['GLSL', 'Three.js', 'Raymarching', 'SDF'],
    summary: 'Single-pass GLSL shader simulating harsh sunlight slicing across brutalist concrete facades.',
    technicalDetails: 'Signed Distance Functions (SDF) evaluating box intersections and soft penumbra shadows with low instruction count.',
    codeSnippet: `float sdBox(vec3 p, vec3 b) {
  vec3 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}`,
  },
  {
    id: 'ARC-2507',
    year: '2025',
    title: 'Tactile Dial Hardware Console',
    category: 'Physical & Hardware',
    status: 'CONCEPT',
    stack: ['Raspberry Pi Pico', 'CNC Milled Aluminum', 'Optical Encoders'],
    summary: 'Machined desktop peripheral with 4 magnetic detent dials for timeline scrubbing and parameter tuning.',
    technicalDetails: 'Custom PCB with optical quadrature decoders communicating via USB HID at 1000Hz polling rate.',
  },
  {
    id: 'ARC-2508',
    year: '2025',
    title: 'Algorithmic Poster Generator',
    category: 'Code & Shaders',
    status: 'DEPLOYED',
    stack: ['Node.js', 'Canvas', 'SVG Export', 'Swiss Grid Engine'],
    summary: 'CLI tool generating print-ready 300DPI vector posters from deterministic random seed strings.',
    technicalDetails: 'Enforces strict Josef Müller-Brockmann grid mathematics with automated baseline alignment.',
  },
  {
    id: 'ARC-2409',
    year: '2024',
    title: 'Hyperframe 3D Web Experience',
    category: 'Code & Shaders',
    status: 'ARCHIVED',
    stack: ['Three.js', 'Blender', 'GLTF', 'GSAP'],
    summary: 'Interactive digital showroom with real-time PBR materials, bloom shaders, and cinematic camera rigs.',
    technicalDetails: 'Custom Draco compression pipeline reducing 40MB 3D asset bundles down to 2.8MB for sub-second load.',
  },
  {
    id: 'ARC-2410',
    year: '2024',
    title: 'Granular Ambient Synthesizer',
    category: 'Sound & Audio',
    status: 'OPEN SOURCE',
    stack: ['Web Audio API', 'AudioWorklet', 'Wasm', 'Rust'],
    summary: 'Micro-sound generator slicing analog tape loops into grains ranging from 5ms to 120ms.',
    technicalDetails: 'AudioWorklet thread processing audio buffers with lock-free ring buffer communication.',
  },
  {
    id: 'ARC-2411',
    year: '2024',
    title: 'Monochrome Photography Indexer',
    category: 'Experimental UI',
    status: 'DEPLOYED',
    stack: ['Next.js', 'EXIF-Parser', 'Tailwind', 'Unsplash API'],
    summary: 'Curatorial photography CMS extracting focal lengths, apertures, and film stocks directly from RAW files.',
    technicalDetails: 'Automated extraction of proprietary Leica maker notes and Hasselblad metadata tags.',
  },
  {
    id: 'ARC-2412',
    year: '2024',
    title: 'Fluid Canvas Particle Ribbon',
    category: 'Code & Shaders',
    status: 'ARCHIVED',
    stack: ['HTML5 Canvas', 'Verlet Physics', 'Vectors'],
    summary: 'Interactive ribbon trails with sub-pixel velocity dampening and inertia calculation.',
    technicalDetails: 'Verlet integration with constraint satisfaction solving 500 connected points at 60 FPS.',
  },
  {
    id: 'ARC-2313',
    year: '2023',
    title: 'Studio Monolith Design Tokens',
    category: 'Experimental UI',
    status: 'DEPLOYED',
    stack: ['JSON Schema', 'Style Dictionary', 'Figma API'],
    summary: 'Multi-platform design token pipeline compiling semantic tokens to CSS, Swift, and Android XML.',
    technicalDetails: 'Automated CI/CD action synchronizing Figma variables directly into npm package distributions.',
  },
  {
    id: 'ARC-2314',
    year: '2023',
    title: 'Analog Darkroom Timer Box',
    category: 'Physical & Hardware',
    status: 'ARCHIVED',
    stack: ['Arduino Nano', 'Relay Module', '7-Segment LED', 'Rotary Knob'],
    summary: 'Hardware enlarger exposure timer accurate to 1/10th of a second with f-stop printing calculation.',
    technicalDetails: 'Optocoupled solid-state relay switching 240V enlarger lamp with zero electromagnetic hum.',
  },
  {
    id: 'ARC-2315',
    year: '2023',
    title: 'Sub-pixel Spring Physics Lib',
    category: 'Experimental UI',
    status: 'OPEN SOURCE',
    stack: ['TypeScript', 'Math / Physics', 'Zero Dependencies'],
    summary: '4KB micro-library solving critically damped second-order harmonic oscillator equations.',
    technicalDetails: 'Analytic solver avoiding numerical integration drift over long idle animation periods.',
  },
  {
    id: 'ARC-2316',
    year: '2023',
    title: 'Binaural Field Recorder Enclosure',
    category: 'Physical & Hardware',
    status: 'ARCHIVED',
    stack: ['3D Printing (PETG)', 'Primo EM272 Capsules', 'XLR Plugs'],
    summary: 'Bespoke baffle housing ultra-low noise omni capsules matching human ear canal acoustics.',
    technicalDetails: 'Acoustically modeled ear pinna printed in flexible TPU 95A elastomer mounted to stereo bar.',
  },
  {
    id: 'ARC-2217',
    year: '2022',
    title: 'Terminal Portfolio CLI',
    category: 'Experimental UI',
    status: 'ARCHIVED',
    stack: ['Ink (React in CLI)', 'Node.js', 'TypeScript'],
    summary: 'Interactive command-line resume and project browser executable via npx kaibutcher.',
    technicalDetails: 'Built using React reconciler targeting ANSI terminal escape codes and xterm standards.',
  },
  {
    id: 'ARC-2218',
    year: '2022',
    title: 'Generative ASCII Halftone Shader',
    category: 'Code & Shaders',
    status: 'OPEN SOURCE',
    stack: ['WebGL', 'GLSL', 'Canvas'],
    summary: 'Fragment shader converting real-time webcam video stream into dynamic ASCII character matrices.',
    technicalDetails: 'Luminance texture lookup into a 16x16 font atlas rendering 100x60 text cells in a single draw call.',
  },
  {
    id: 'ARC-2219',
    year: '2022',
    title: 'Minimalist Markdown Journal',
    category: 'Experimental UI',
    status: 'ARCHIVED',
    stack: ['React', 'LocalForage', 'Tailwind'],
    summary: 'Distraction-free typographic writing surface with automatic character tracking and darkroom contrast.',
    technicalDetails: 'Full offline local-first storage using IndexedDB with live word count velocity calculation.',
  },
  {
    id: 'ARC-2220',
    year: '2022',
    title: 'Midi Control Surface Router',
    category: 'Sound & Audio',
    status: 'ARCHIVED',
    stack: ['Web MIDI API', 'Electron', 'Node.js'],
    summary: 'Hardware MIDI router mapping motorized faders to digital audio workstation parameters.',
    technicalDetails: 'Low-jitter USB MIDI packet filtering and sysex parameter translation.',
  },
  {
    id: 'ARC-2221',
    year: '2022',
    title: 'Typography Baseline Ruler Chrome Ext',
    category: 'Experimental UI',
    status: 'OPEN SOURCE',
    stack: ['Chrome Extension API', 'TypeScript', 'CSS Overlay'],
    summary: 'Developer tool rendering customizable 4px/8px vertical rhythm baseline grids over any webpage.',
    technicalDetails: 'Shadow DOM injection ensuring zero CSS style leakage into the audited host page.',
  },
  {
    id: 'ARC-2222',
    year: '2022',
    title: 'Tape Delay Emulation DSP',
    category: 'Sound & Audio',
    status: 'CONCEPT',
    stack: ['C++', 'JUCE', 'DSP Filters'],
    summary: 'Virtual analog tape delay simulating magnetic saturation, capstan wow and flutter, and high-shelf roll-off.',
    technicalDetails: 'Nonlinear tanh waveshaper with oversampling to eliminate digital aliasing.',
  },
  {
    id: 'ARC-2223',
    year: '2022',
    title: 'SVG Path Morphing Automata',
    category: 'Code & Shaders',
    status: 'ARCHIVED',
    stack: ['Flubber.js', 'GSAP', 'SVG'],
    summary: 'Smooth geometric path interpolation between complex polygonal architectural drawings.',
    technicalDetails: 'Subdivides path segments to guarantee identical vertex counts before trigonometric interpolation.',
  },
  {
    id: 'ARC-2224',
    year: '2022',
    title: 'Spatial Audio Exhibition Guide',
    category: 'Sound & Audio',
    status: 'ARCHIVED',
    stack: ['React Native', 'BLE Beacons', 'Spatial Audio'],
    summary: 'Location-aware museum audio guide dynamically blending narration based on visitor proximity.',
    technicalDetails: 'Trilateration algorithm smoothing RSSI signals from 12 Bluetooth Low Energy beacons.',
  },
];

export const ArchiveSubpage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const years = ['All', '2026', '2025', '2024', '2023', '2022'];
  const categories = ['All', 'Experimental UI', 'Code & Shaders', 'Physical & Hardware', 'Sound & Audio'];

  const filteredItems = useMemo(() => {
    return archiveItems.filter((item) => {
      const matchYear = selectedYear === 'All' || item.year === selectedYear;
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        item.stack.some((s) => s.toLowerCase().includes(query));

      return matchYear && matchCat && matchQuery;
    });
  }, [selectedYear, selectedCategory, searchQuery]);

  const handleCopyCode = (snippet: string) => {
    navigator.clipboard?.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white selection:bg-white selection:text-black">
      {/* Top Coordinate Header */}
      <div className="border-b border-white/15 pb-6 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Archive className="w-4 h-4 text-white" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase">
            [04] REPOSITORY &bull; HISTORICAL VAULT (2022 — 2026)
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono text-white/60">
          <span>ENTRIES: {archiveItems.length} TOTAL</span>
          <span className="px-2.5 py-1 rounded bg-white/10 text-white/90 border border-white/20 text-[11px] font-mono tracking-wider">
            FILTERED: {filteredItems.length}
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mb-10">
        <span className="text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-3">
          CHRONOLOGICAL REPOSITORY &bull; CODE SKETCHES &bull; DISCARDED PROTOTYPES
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-6">
          Archive
        </h1>
        <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-3xl mb-8">
          A historical index of 24 software prototypes, GLSL shaders, physical computing experiments, and interactive case studies created between 2022 and 2026.
        </p>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, technology, or ID (e.g. 'WebGL', 'ARC-2601')..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#16181d] border border-white/10 text-white placeholder:text-white/40 text-xs sm:text-sm font-mono focus:border-white/40 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs font-mono"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Year Filter Buttons */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pb-1">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-3 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedYear === y
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-mono text-[11px] uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white/20 text-white font-semibold border border-white/40'
                  : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Archive Items Table / List */}
      <div className="bg-[#16181d] border border-white/10 rounded-xl overflow-hidden mb-12">
        <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3.5 bg-black/40 border-b border-white/10 text-[11px] font-mono text-white/40 uppercase tracking-widest">
          <span className="col-span-2">ENTRY ID</span>
          <span className="col-span-1">YEAR</span>
          <span className="col-span-4">PROJECT TITLE</span>
          <span className="col-span-3">CATEGORY</span>
          <span className="col-span-2 text-right">STATUS</span>
        </div>

        <div className="divide-y divide-white/10">
          {filteredItems.length === 0 ? (
            <div className="p-12 text-center">
              <span className="text-sm font-mono text-white/40 uppercase block mb-2">NO ENTRIES FOUND</span>
              <p className="text-xs text-white/60 font-mono">Try adjusting your search query or active filter.</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 px-6 py-4 hover:bg-white/5 cursor-pointer transition-colors items-center group"
              >
                {/* ID & Year */}
                <div className="col-span-2 flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-white group-hover:text-white">
                    {item.id}
                  </span>
                </div>

                <div className="col-span-1 text-xs font-mono text-white/60">
                  {item.year}
                </div>

                {/* Title & Summary */}
                <div className="col-span-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight group-hover:underline">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/60 truncate font-light mt-0.5">
                    {item.summary}
                  </p>
                </div>

                {/* Category & Stack */}
                <div className="col-span-3">
                  <span className="text-xs font-mono text-white/70 block mb-1">
                    {item.category}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.stack.slice(0, 2).map((s, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-white/50">
                        {s}
                      </span>
                    ))}
                    {item.stack.length > 2 && (
                      <span className="text-[10px] font-mono text-white/40">+{item.stack.length - 2}</span>
                    )}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="col-span-2 flex lg:justify-end items-center space-x-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border tracking-wider uppercase ${
                    item.status === 'DEPLOYED' 
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      : item.status === 'OPEN SOURCE'
                      ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                      : item.status === 'CONCEPT'
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      : 'bg-white/10 text-white/70 border-white/20'
                  }`}>
                    {item.status}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Archive Detail Drawer / Inspector */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#121316] border border-white/20 rounded-2xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Close */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all cursor-pointer border border-white/15"
              title="Close Detail"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <div className="flex items-center space-x-3 text-xs font-mono text-white/50 mb-3">
                <span className="px-2 py-0.5 rounded bg-white/10 text-white/90">
                  {selectedItem.id}
                </span>
                <span>&bull; {selectedItem.year}</span>
                <span className="uppercase text-white/70">&bull; {selectedItem.category}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                {selectedItem.title}
              </h2>

              <div className="mb-6">
                <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border tracking-wider uppercase ${
                  selectedItem.status === 'DEPLOYED' 
                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                    : selectedItem.status === 'OPEN SOURCE'
                    ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                    : selectedItem.status === 'CONCEPT'
                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                    : 'bg-white/10 text-white/70 border-white/20'
                }`}>
                  STATUS: {selectedItem.status}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-1">
                  OVERVIEW
                </span>
                <p className="text-sm text-white/90 leading-relaxed font-light">
                  {selectedItem.summary}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2">
                  TECHNICAL ARCHITECTURE &amp; NOTES
                </span>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light font-mono bg-black/40 p-4 rounded-xl border border-white/10">
                  {selectedItem.technicalDetails}
                </p>
              </div>

              {selectedItem.codeSnippet && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      CODE ARCHIVE SPECIMEN
                    </span>
                    <button
                      onClick={() => handleCopyCode(selectedItem.codeSnippet!)}
                      className="text-[11px] font-mono text-white/70 hover:text-white flex items-center space-x-1 cursor-pointer"
                    >
                      {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-black border border-white/15 text-xs font-mono text-white/90 overflow-x-auto">
                    <code>{selectedItem.codeSnippet}</code>
                  </pre>
                </div>
              )}

              <div className="mb-6">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2">
                  TECHNOLOGIES &amp; FRAMEWORKS
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded bg-white/5 text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
              <span className="text-white/40">ARCHIVED SYSTEM FILE</span>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 cursor-pointer transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <span>04 ARCHIVE &bull; 24 LOGGED RECORDS</span>
        <span className="text-white/80">HISTORICAL VAULT // LONDON 2022 — 2026</span>
      </div>
    </div>
  );
};
