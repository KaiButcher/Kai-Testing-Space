import React, { useState } from 'react';
import { 
  Layers, 
  Type, 
  Sliders, 
  Grid, 
  Palette, 
  Eye, 
  Check, 
  Copy, 
  ExternalLink,
  BookOpen,
  Maximize2
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  deliverables: string[];
  description: string;
  gridSystem: string;
  typeStack: string[];
  accent: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'case-01',
    title: 'Monolith Records',
    subtitle: 'Vinyl Identity & Packaging System',
    category: 'Identity',
    year: '2025',
    client: 'Monolith Sound Lab',
    deliverables: ['Vinyl Sleeves', 'Digital Art Direction', 'Poster Series'],
    description: 'Minimalist packaging and identity system for an experimental sound label, featuring metallic pantone inks on uncoated cardstock.',
    gridSystem: '12-Field Modular Grid with 4mm baseline rhythm',
    typeStack: ['IBM Plex Sans', 'Monolith Mono'],
    accent: '#ffffff',
  },
  {
    id: 'case-02',
    title: 'Neo Architectural Quarterly',
    subtitle: 'Editorial Publication Design',
    category: 'Editorial',
    year: '2025',
    client: 'Architectural Press',
    deliverables: ['Editorial Grid', 'Linen Binding', 'Cartography'],
    description: 'Asymmetric 5-column layout system pairing raw concrete photography with architectural essays.',
    gridSystem: '5-Column Asymmetric Grid with 18pt vertical scale',
    typeStack: ['Helvetica Neue LT', 'Univers 55'],
    accent: '#d4d4d8',
  },
  {
    id: 'case-03',
    title: 'Vektor Sans Specimen',
    subtitle: 'Variable Type Specimen',
    category: 'Type Design',
    year: '2024',
    client: 'Type Foundry',
    deliverables: ['Variable Font', 'Specimen Site', 'Broadside Poster'],
    description: 'Variable grotesk typeface engineered for digital interfaces and architectural display signage.',
    gridSystem: 'Mathematical Scale (Step 1.25 Major Third)',
    typeStack: ['Vektor Sans VF', 'Vektor Mono'],
    accent: '#ffffff',
  },
  {
    id: 'case-04',
    title: 'Chrono Expo Berlin',
    subtitle: 'Exhibition Identity & Spatial Signage',
    category: 'Spatial',
    year: '2024',
    client: 'Museum für Gestaltung',
    deliverables: ['Wayfinding', 'Catalog', 'Signage Plates'],
    description: 'Wayfinding system with typography silk-screened onto sandblasted aluminum panels with directional cues.',
    gridSystem: '8-Unit Spatial Matrix with 120mm module',
    typeStack: ['Akzidenz-Grotesk', 'DIN 1451'],
    accent: '#a1a1aa',
  },
];

const posters = [
  {
    id: 'poster-01',
    title: 'SWISS RIGOR NO. 01',
    theme: 'Modular Grid Geometry',
    year: '2025',
    format: 'A1 // 594 × 841 mm',
    stock: '300gsm G.F Smith Munken',
    text: 'FORM FOLLOWS MATHEMATICAL FUNCTION',
  },
  {
    id: 'poster-02',
    title: 'KINETIC AUDIO SPECTRA',
    theme: 'Sound Wave Dispersion',
    year: '2025',
    format: 'A1 // 594 × 841 mm',
    stock: '270gsm Colorplan Dark Grey',
    text: 'ACOUSTIC PRESSURE // 120 HZ SUB',
  },
  {
    id: 'poster-03',
    title: 'BRUTALIST MONOLITH',
    theme: 'Architectural Density',
    year: '2024',
    format: 'A0 // 841 × 1189 mm',
    stock: '350gsm Fedrigoni Sirio Black',
    text: 'CONCRETE SHADOW // LONDON 1971',
  },
  {
    id: 'poster-04',
    title: 'TYPOGRAPHIC MATRIX',
    theme: 'Optical Kerning Studies',
    year: '2024',
    format: 'A1 // 594 × 841 mm',
    stock: '300gsm Hahnemühle Photo Rag',
    text: 'VARIABLE WEIGHT // 100 TO 900',
  },
  {
    id: 'poster-05',
    title: 'VECTOR TOPOLOGY',
    theme: 'Parametric Contours',
    year: '2024',
    format: 'A1 // 594 × 841 mm',
    stock: '250gsm Matt Art Paper',
    text: 'ISOLINE GRADIENTS // ZERO FILL',
  },
  {
    id: 'poster-06',
    title: 'CHRONO HORIZON',
    theme: 'Temporal Measurement',
    year: '2023',
    format: 'A1 // 594 × 841 mm',
    stock: '300gsm Munken Kristall',
    text: 'MILLISECOND FREQUENCY // UTC',
  },
];

export const GraphicDesignSubpage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cases' | 'typetester' | 'posters' | 'matrix'>('cases');

  // Type tester interactive state
  const [customText, setCustomText] = useState('SWISS TYPOGRAPHY & COMPUTATIONAL RIGOR');
  const [fontSize, setFontSize] = useState(48);
  const [fontWeight, setFontWeight] = useState(700);
  const [tracking, setTracking] = useState(0.05);
  const [lineHeight, setLineHeight] = useState(1.1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white selection:bg-white selection:text-black">
      {/* Top Coordinate Header */}
      <div className="border-b border-white/15 pb-6 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Layers className="w-4 h-4 text-white" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase">
            [02] CATALOG &bull; GRAPHIC DESIGN &amp; EDITORIAL SYSTEMS
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono text-white/60">
          <span>FOUNDATIONS: SWISS 1957 — 2026</span>
          <span className="px-2.5 py-1 rounded bg-white/10 text-white/90 border border-white/20 text-[11px] font-mono tracking-wider">
            STATIC &bull; DYNAMIC
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mb-10 sm:mb-12">
        <span className="text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-3">
          BRAND &bull; EDITORIAL &bull; TYPOGRAPHY
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-5">
          Graphic <span className="font-light text-white/70">Design</span>
        </h1>
        <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl mb-8">
          Editorial architectures, custom typography, and brand identity systems developed with Swiss modernist structure.
        </p>

        {/* View Switcher Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: 'cases', label: '01 Case Studies' },
            { id: 'typetester', label: '02 Type Tester' },
            { id: 'posters', label: '03 Posters' },
            { id: 'matrix', label: '04 Palette & Grid' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* View 1: Case Studies */}
      {activeTab === 'cases' && (
        <div className="space-y-8 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8 lg:p-10 hover:border-white/25 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Overview */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-white/50 tracking-widest uppercase">
                        {study.category}
                      </span>
                      <span className="text-white/30">&bull;</span>
                      <span className="text-xs font-mono text-white/70">
                        {study.year}
                      </span>
                      <span className="text-white/30">&bull;</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white/90 border border-white/10">
                        {study.client}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white mb-2">
                      {study.title}
                    </h2>
                    <p className="text-sm font-mono text-white/60 tracking-wider uppercase mb-4">
                      {study.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6">
                      {study.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/10 text-xs font-mono">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-white/50 uppercase tracking-wider">GRID SPECIFICATION</span>
                      <span className="text-white/90">{study.gridSystem}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-white/50 uppercase tracking-wider">PRIMARY TYPE STACK</span>
                      <div className="flex flex-wrap gap-1.5">
                        {study.typeStack.map((font, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10">
                            {font}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Visual Representation Box */}
                <div className="lg:col-span-5 bg-black/60 border border-white/10 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[260px]">
                  <div className="absolute inset-0 bg-matte-noise opacity-20 pointer-events-none" />
                  
                  {/* Stylized Swiss Poster Artboard Preview */}
                  <div className="relative z-10 border border-white/20 p-5 rounded bg-[#0d0e11] flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono tracking-widest text-white/60">FIG. {study.id.toUpperCase()}</span>
                      <span className="w-3 h-3 border border-white/40" />
                    </div>

                    <div className="my-6">
                      <span className="text-[9px] font-mono tracking-[0.25em] text-white/40 uppercase block mb-1">
                        SPECIMEN FIELD
                      </span>
                      <h3 className="text-2xl font-bold uppercase tracking-tight text-white leading-none">
                        {study.title}
                      </h3>
                      <div className="mt-3 flex gap-1">
                        <div className="h-1 w-8 bg-white" />
                        <div className="h-1 w-3 bg-white/40" />
                        <div className="h-1 w-1 bg-white/20" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[9px] font-mono text-white/50 border-t border-white/15 pt-3">
                      <span>SWISS OFFSET PRINT</span>
                      <span>PANTONE REF 877 C</span>
                    </div>
                  </div>

                  <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
                    {study.deliverables.map((item, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60 border border-white/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View 2: Interactive Type Tester */}
      {activeTab === 'typetester' && (
        <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8 lg:p-10 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase block mb-1">
              LABORATORY TOOL &bull; COMPUTATIONAL KERNING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Interactive Type Specimen Tester
            </h2>
            <p className="text-sm text-white/70 max-w-2xl mt-1">
              Test variable font optical dynamics, letter tracking, weight axes, and rhythmic line height in real time.
            </p>
          </div>

          {/* Controls Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 rounded-xl bg-black/50 border border-white/10 mb-8">
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-white/50">FONT SIZE</span>
                <span className="text-white font-bold">{fontSize}px</span>
              </div>
              <input
                type="range"
                min="16"
                max="96"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-white/50">WEIGHT AXIS</span>
                <span className="text-white font-bold">{fontWeight}</span>
              </div>
              <input
                type="range"
                min="100"
                max="900"
                step="100"
                value={fontWeight}
                onChange={(e) => setFontWeight(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-white/50">TRACKING</span>
                <span className="text-white font-bold">{tracking.toFixed(2)}em</span>
              </div>
              <input
                type="range"
                min="-0.05"
                max="0.3"
                step="0.01"
                value={tracking}
                onChange={(e) => setTracking(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-white/50">LINE HEIGHT</span>
                <span className="text-white font-bold">{lineHeight.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.9"
                max="2.0"
                step="0.05"
                value={lineHeight}
                onChange={(e) => setLineHeight(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            </div>
          </div>

          {/* Quick Preset Phrases */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
            <span className="text-xs font-mono text-white/40 shrink-0">PRESETS:</span>
            {[
              'SWISS TYPOGRAPHY & RIGOR',
              'MONOLITH RECORDS 2026',
              'MATHEMATICAL PROPORTIONS',
              'GRID GEOMETRY // 120 FPS',
            ].map((phrase, idx) => (
              <button
                key={idx}
                onClick={() => setCustomText(phrase)}
                className="text-xs font-mono px-3 py-1 rounded bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10 shrink-0 cursor-pointer"
              >
                {phrase}
              </button>
            ))}
          </div>

          {/* Live Editable Canvas */}
          <div className="bg-[#0d0e11] border border-white/20 rounded-xl p-8 sm:p-12 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-4 left-4 text-[10px] font-mono text-white/30 tracking-widest">
              SAMPLE ARTBOARD // VARIABLE RENDERING
            </div>

            <textarea
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              rows={3}
              style={{
                fontSize: `${fontSize}px`,
                fontWeight: fontWeight,
                letterSpacing: `${tracking}em`,
                lineHeight: lineHeight,
              }}
              className="w-full bg-transparent text-white border-none outline-none resize-none font-sans uppercase tracking-tight transition-all focus:ring-0"
              placeholder="Type anything here to test..."
            />

            <div className="mt-8 pt-4 border-t border-white/15 flex flex-wrap justify-between items-center text-xs font-mono text-white/40 gap-2">
              <span>ACTIVE METRICS: {fontSize}PX / {fontWeight} WT / {tracking}EM TRACKING</span>
              <span className="text-white/80">CLICK CANVAS TO TYPE CUSTOM PHRASE</span>
            </div>
          </div>
        </div>
      )}

      {/* View 3: Poster Specimens */}
      {activeTab === 'posters' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="bg-[#16181d] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all flex flex-col justify-between group"
            >
              {/* Poster Card Artwork */}
              <div className="aspect-[1/1.414] bg-black border border-white/20 rounded-lg p-6 flex flex-col justify-between mb-5 relative overflow-hidden group-hover:border-white/50 transition-colors">
                <div className="absolute inset-0 bg-matte-noise opacity-25 pointer-events-none" />
                
                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[10px] font-mono tracking-widest text-white/60 uppercase">{poster.id}</span>
                  <span className="text-[10px] font-mono text-white/40">{poster.year}</span>
                </div>

                <div className="relative z-10 my-auto">
                  <span className="text-[9px] font-mono text-white/40 tracking-[0.25em] uppercase block mb-1">
                    {poster.theme}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white leading-tight">
                    {poster.text}
                  </h3>
                  <div className="w-12 h-1 bg-white mt-3" />
                </div>

                <div className="relative z-10 flex justify-between items-end text-[9px] font-mono text-white/50 border-t border-white/15 pt-2">
                  <span>{poster.format}</span>
                  <span>SWISS SILKSCREEN</span>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white uppercase tracking-tight mb-1">
                  {poster.title}
                </h4>
                <p className="text-xs font-mono text-white/60 mb-3">
                  Stock: {poster.stock}
                </p>
                <div className="flex justify-between items-center text-xs font-mono text-white/40 pt-3 border-t border-white/10">
                  <span>LIMITED RUN // 50 COPIES</span>
                  <span className="text-white/80 group-hover:underline">ARCHIVED</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View 4: Swiss Grid & Color Matrix */}
      {activeTab === 'matrix' && (
        <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8 lg:p-10 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase block mb-1">
              MATHEMATICAL RULES &bull; CHROMATIC CODE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Color Palette &amp; Structural Grid
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {[
              { name: 'Carbon Pure', hex: '#0D0E11', usage: 'Deep Canvas & Page Floor', text: 'text-white' },
              { name: 'Matte Charcoal', hex: '#121316', usage: 'Bento Surface & Primary Card', text: 'text-white' },
              { name: 'Card Surface', hex: '#16181D', usage: 'Elevated Cards & Drawers', text: 'text-white' },
              { name: 'Hairline Stroke', hex: '#2E3238', usage: '1px Dividing Structural Rules', text: 'text-white' },
              { name: 'Titanium White', hex: '#FFFFFF', usage: 'Display Headings & Hairline Borders', text: 'text-black' },
            ].map((swatch, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/15 flex flex-col justify-between min-h-[140px]" style={{ backgroundColor: swatch.hex }}>
                <span className={`text-[10px] font-mono tracking-widest uppercase ${swatch.text} opacity-80`}>
                  SWATCH {idx + 1}
                </span>
                <div>
                  <h4 className={`text-base font-bold uppercase font-mono ${swatch.text}`}>
                    {swatch.hex}
                  </h4>
                  <p className={`text-xs ${swatch.text} opacity-70`}>{swatch.name}</p>
                  <p className={`text-[10px] font-mono ${swatch.text} opacity-50 mt-1`}>{swatch.usage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-black/50 border border-white/10">
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest block mb-2">
              GRID EQUATION
            </span>
            <p className="text-sm font-mono text-white/90 leading-relaxed">
              Base unit: 8px &bull; Major steps: 16px, 24px, 32px, 48px, 64px, 96px &bull; Column Ratio: 1 : 1.618 Golden Section &bull; Baseline Rhythm: 1.5 Line Height
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <span>02 GRAPHIC DESIGN &bull; SYSTEM CATALOGUE</span>
        <span className="text-white/80">EDITORIAL ARCHITECTURE // LONDON 2026</span>
      </div>
    </div>
  );
};
