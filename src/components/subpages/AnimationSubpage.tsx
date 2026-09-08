import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Sparkles, 
  Image as ImageIcon, 
  Film, 
  Play, 
  Pause, 
  Copy, 
  Check, 
  Maximize2, 
  X, 
  Eye,
  Layers
} from 'lucide-react';

interface ToolItem {
  id: string;
  title: string;
  eyebrow: string;
  category: 'tool';
  desc: string;
  tags: string[];
}

interface ImageItem {
  id: string;
  title: string;
  eyebrow: string;
  category: 'image';
  desc: string;
  technique: string;
  resolution: string;
  date: string;
  tags: string[];
  gradient: string;
}

interface VideoItem {
  id: string;
  title: string;
  eyebrow: string;
  category: 'video';
  desc: string;
  duration: string;
  fps: string;
  format: string;
  tags: string[];
}

export const PlaygroundSubpage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'tool' | 'image' | 'video'>('all');
  
  // Tool 1 State: ASCII Shifter
  const [asciiInput, setAsciiInput] = useState('VIBE CODE');
  const [asciiCharset, setAsciiCharset] = useState<'blocks' | 'minimal' | 'matrix' | 'slash'>('blocks');
  const [asciiInverted, setAsciiInverted] = useState(false);
  const [copiedAscii, setCopiedAscii] = useState(false);

  // Tool 2 State: Palette Generator
  const [palettePreset, setPalettePreset] = useState<'tokyo' | 'brutalist' | 'acid' | 'velvet' | 'solar'>('tokyo');
  const [copiedCSS, setCopiedCSS] = useState(false);

  // Tool 3 State: Particle Flowfield Canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particleCount, setParticleCount] = useState(80);
  const [isParticlePlaying, setIsParticlePlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 150, y: 120 });

  // Lightbox / Modal Inspector
  const [activeMedia, setActiveMedia] = useState<ImageItem | VideoItem | null>(null);

  // Video loop states
  const [playingVideoId, setPlayingVideoId] = useState<string | null>('vid-01');

  // ASCII Generator Engine
  const generateAsciiArt = (text: string, charset: string, invert: boolean) => {
    const chars = {
      blocks: invert ? ' ░▒▓█' : '█▓▒░ ',
      minimal: invert ? ' .:-=+*#%@' : '@%#*+=-:. ',
      matrix: invert ? ' 01ｦｱｳｴｵｶ' : 'ｶｵｴｳｱｦ10 ',
      slash: invert ? ' .-=\\/|#' : '#|/\\=-. ',
    }[charset] || ' ░▒▓█';

    const safeText = text.trim() || 'VIBE';
    const lines: string[] = [];
    const width = 36;
    const height = 12;

    for (let y = 0; y < height; y++) {
      let line = '';
      for (let x = 0; x < width; x++) {
        const nx = x / width;
        const ny = y / height;
        const wave = Math.sin(nx * 6 + ny * 4) * Math.cos(ny * 5);
        const textSeed = safeText.charCodeAt(x % safeText.length) / 100;
        const val = Math.abs((wave + textSeed) % 1);
        const charIdx = Math.floor(val * (chars.length - 1));
        line += chars[charIdx];
      }
      lines.push(line);
    }
    return lines.join('\n');
  };

  const currentAscii = generateAsciiArt(asciiInput, asciiCharset, asciiInverted);

  const handleCopyAscii = () => {
    navigator.clipboard?.writeText(currentAscii);
    setCopiedAscii(true);
    setTimeout(() => setCopiedAscii(false), 2000);
  };

  // Palette Presets
  const palettes = {
    tokyo: {
      name: 'Tokyo Cyberpunk',
      colors: ['#090A0F', '#1C2438', '#00F0FF', '#7928CA', '#FF0080'],
      roles: ['Base Canvas', 'Shadow Surface', 'Cyan Laser', 'Ultraviolet', 'Hot Neon'],
      gradient: 'linear-gradient(135deg, #090A0F 0%, #1C2438 35%, #7928CA 70%, #00F0FF 100%)',
    },
    brutalist: {
      name: 'Brutalist Monochrome',
      colors: ['#0A0A0A', '#1F1F1F', '#404040', '#A3A3A3', '#FFFFFF'],
      roles: ['Pitch Black', 'Cast Iron', 'Raw Concrete', 'Sub-white', 'Titanium'],
      gradient: 'linear-gradient(135deg, #0A0A0A 0%, #1F1F1F 40%, #404040 70%, #FFFFFF 100%)',
    },
    acid: {
      name: 'Acid Quartz',
      colors: ['#0C120C', '#1B3022', '#22C55E', '#A3E635', '#FACC15'],
      roles: ['Deep Foliage', 'Dark Jade', 'Emerald Glaze', 'Acid Lime', 'Solar Amber'],
      gradient: 'linear-gradient(135deg, #0C120C 0%, #1B3022 40%, #22C55E 75%, #A3E635 100%)',
    },
    velvet: {
      name: 'Deep Obsidian & Copper',
      colors: ['#0E0B0F', '#24141E', '#7F1D1D', '#D97706', '#FBBF24'],
      roles: ['Void Plum', 'Deep Velvet', 'Oxide Crimson', 'Burnt Copper', 'Warm Ochre'],
      gradient: 'linear-gradient(135deg, #0E0B0F 0%, #24141E 35%, #7F1D1D 70%, #FBBF24 100%)',
    },
    solar: {
      name: 'Solar Flare',
      colors: ['#120804', '#2B1105', '#EA580C', '#F97316', '#FFEDD5'],
      roles: ['Abyssal Rust', 'Dark Magma', 'Plasma Core', 'Solar Flare', 'White Corona'],
      gradient: 'linear-gradient(135deg, #120804 0%, #2B1105 35%, #EA580C 70%, #FFEDD5 100%)',
    },
  };

  const activePalette = palettes[palettePreset];

  const handleCopyPaletteCSS = () => {
    const cssCode = `/* ${activePalette.name} */\nbackground: ${activePalette.gradient};\n/* Colors: ${activePalette.colors.join(', ')} */`;
    navigator.clipboard?.writeText(cssCode);
    setCopiedCSS(true);
    setTimeout(() => setCopiedCSS(false), 2000);
  };

  // Flowfield Particle Animation Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const w = (canvas.width = canvas.offsetWidth);
    const h = (canvas.height = canvas.offsetHeight);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }

    const pArray: Particle[] = [];
    const colors = ['#ffffff', '#a1a1aa', '#52525b', '#e4e4e7'];

    for (let i = 0; i < particleCount; i++) {
      pArray.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.fillStyle = 'rgba(13, 14, 17, 0.2)';
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < pArray.length; i++) {
        const p = pArray[i];

        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          p.vx += (dx / dist) * 0.08;
          p.vy += (dy / dist) * 0.08;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < pArray.length; j++) {
          const p2 = pArray[j];
          const d2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d2 < 45) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.25 - d2 / 180})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      if (isParticlePlaying) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [particleCount, isParticlePlaying, mousePos]);

  // Curated Images
  const images: ImageItem[] = [
    {
      id: 'img-01',
      title: 'Synthetic Brutalism 01',
      eyebrow: 'GENERATIVE ARCHITECTURE',
      category: 'image',
      desc: 'Monolithic raw concrete mass intersecting low-angle winter sunlight in volumetric fog.',
      technique: 'Procedural Shader & Latent Diffusion',
      resolution: '3840 x 2160',
      date: '2026',
      tags: ['Brutalism', '3D Spatial', 'Volumetric'],
      gradient: 'from-neutral-800 via-neutral-900 to-black',
    },
    {
      id: 'img-02',
      title: 'Neural Topography 04',
      eyebrow: 'VECTOR HEIGHTMAP',
      category: 'image',
      desc: 'Topographic contour elevation system calculated from mathematical perlin noise.',
      technique: 'Perlin Heightfield & Vector Plotting',
      resolution: '4096 x 4096',
      date: '2026',
      tags: ['Cartography', 'Perlin', 'Mono'],
      gradient: 'from-[#1a1c23] via-[#0d0e12] to-black',
    },
    {
      id: 'img-03',
      title: 'Void Chamber 08',
      eyebrow: 'LIGHT STUDY',
      category: 'image',
      desc: 'Optical study examining absolute shadow, linear illumination, and spatial silence.',
      technique: 'Raytraced Spatial Sim',
      resolution: '2560 x 1440',
      date: '2025',
      tags: ['Minimalism', 'Chiaroscuro', 'Optics'],
      gradient: 'from-zinc-800 via-zinc-950 to-black',
    },
    {
      id: 'img-04',
      title: 'Refractive Dispersion',
      eyebrow: 'CHROMATIC CAUSTICS',
      category: 'image',
      desc: 'Optical glass prism separating directional beam into pure spectral frequency bands.',
      technique: 'Spectral Caustics Engine',
      resolution: '3200 x 3200',
      date: '2026',
      tags: ['Dispersion', 'Optics', 'Glass'],
      gradient: 'from-slate-800 via-[#10141e] to-black',
    },
    {
      id: 'img-05',
      title: 'Monochrome Lattice 12',
      eyebrow: 'GEOMETRIC MATRIX',
      category: 'image',
      desc: 'Isometric structural lattice engineered with mathematical Swiss grid proportions.',
      technique: 'Algorithmic SVG Assembly',
      resolution: '3000 x 3000',
      date: '2025',
      tags: ['Swiss Grid', 'Lattice', 'Isometric'],
      gradient: 'from-neutral-700 via-neutral-900 to-black',
    },
    {
      id: 'img-06',
      title: 'Dither Matrix 07',
      eyebrow: 'RETRO DITHERING',
      category: 'image',
      desc: '1-bit Floyd-Steinberg and Bayer dither patterns mimicking vintage CRT screen phosphor.',
      technique: 'Bayer Dither Shader Pipeline',
      resolution: '2048 x 2048',
      date: '2026',
      tags: ['1-Bit', 'Dither', 'CRT'],
      gradient: 'from-stone-800 via-stone-950 to-black',
    },
  ];

  // Curated Video Motion Studies
  const videos: VideoItem[] = [
    {
      id: 'vid-01',
      title: 'Kinetic Wireframe Torus',
      eyebrow: 'PROCEDURAL LOOP',
      category: 'video',
      desc: 'Continuous 3D wireframe torus rotating with dynamic perspective depth and sub-pixel lines.',
      duration: '0:12 LOOP',
      fps: '60 FPS',
      format: 'PRORES 4444',
      tags: ['3D Vector', 'Torus', 'WebGL'],
    },
    {
      id: 'vid-02',
      title: 'Harmonic Spectral Wave',
      eyebrow: 'AUDIO REACTIVE',
      category: 'video',
      desc: 'Multi-band audio frequency simulation with oscillating mathematical phase distortion.',
      duration: '0:18 LOOP',
      fps: '60 FPS',
      format: 'H.265 / CANVAS',
      tags: ['Audio FFT', 'Harmonic', 'Waveform'],
    },
    {
      id: 'vid-03',
      title: 'Kinetic Typographic Helix',
      eyebrow: 'VARIABLE MOTION',
      category: 'video',
      desc: 'Dynamic Swiss typography revolving in cylindrical 3D coordinate space with variable weight.',
      duration: '0:15 LOOP',
      fps: '120 FPS',
      format: 'MP4 / VECTOR',
      tags: ['Kinetic Type', 'Helix', 'Variable'],
    },
    {
      id: 'vid-04',
      title: 'Tactile Spring Physics',
      eyebrow: 'UI INTERACTION',
      category: 'video',
      desc: 'Sub-pixel spring mass simulations demonstrating inertia, damping, and elastic collision.',
      duration: '0:10 LOOP',
      fps: '120 FPS',
      format: 'CANVAS / GSAP',
      tags: ['Physics', 'Micro-Interactions', 'Spring'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white selection:bg-white selection:text-black">
      {/* Top Coordinate Header */}
      <div className="border-b border-white/15 pb-6 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase">
            [03] PLAYGROUND &bull; VIBE-CODED TOOLS, IMAGES &amp; VIDEOS
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono text-white/60">
          <span className="flex items-center gap-1.5 text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LAB STATUS: ACTIVE
          </span>
          <span className="px-2.5 py-1 rounded bg-white/10 text-white/90 border border-white/20 text-[11px] font-mono tracking-wider">
            REEL 2026
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono tracking-[0.28em] text-emerald-400 uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            CREATIVE LAB &bull; EXPERIMENTAL CODE
          </span>
          <span className="text-white/30">&bull;</span>
          <span className="text-xs font-mono text-white/50 uppercase">RAPID PROTOTYPING</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-5">
          Playground <span className="font-light text-white/70 block sm:inline text-3xl sm:text-4xl md:text-5xl">Vibe Coded Reel</span>
        </h1>
        <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl mb-8">
          A dedicated sandbox for vibe-coded software tools, generative visual artifacts, and video motion experiments built at the intersection of design and rapid AI development.
        </p>

        {/* Filter Switcher Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: 'all', label: 'All Works (13)', icon: Layers },
            { id: 'tool', label: 'Vibe Coded Tools (3)', icon: Terminal },
            { id: 'image', label: 'Images (6)', icon: ImageIcon },
            { id: 'video', label: 'Videos (4)', icon: Film },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center space-x-1.5 border ${
                  activeCategory === tab.id
                    ? 'bg-white text-black font-semibold border-white shadow-lg'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 1: VIBE CODED TOOLS */}
      {(activeCategory === 'all' || activeCategory === 'tool') && (
        <div className="mb-14 sm:mb-16">
          <div className="border-b border-white/15 pb-3 mb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase block mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                INTERACTIVE SOFTWARE UTILITIES
              </span>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Vibe Coded Tools
              </h2>
            </div>
            <span className="text-xs font-mono text-white/40 hidden sm:inline-block">
              LIVE BROWSER APPS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Tool 1: ASCII & Dither Shifter */}
            <div className="lg:col-span-7 bg-[#14161b] border border-white/15 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase block mb-0.5">
                      TOOL 01 &bull; TEXT TO ASCII SHIFTER
                    </span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                      ASCII &amp; Dither Generator
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    VIBE CODED
                  </span>
                </div>

                <p className="text-xs text-white/70 leading-relaxed font-light mb-4">
                  Type custom input to synthesize instant ASCII patterns and matrix coordinates.
                </p>

                {/* Input & Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs font-mono">
                  <div>
                    <label className="text-[10px] text-white/50 uppercase block mb-1">Source Text</label>
                    <input
                      type="text"
                      value={asciiInput}
                      onChange={(e) => setAsciiInput(e.target.value)}
                      maxLength={20}
                      className="w-full bg-black/60 border border-white/20 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-white"
                      placeholder="Type text..."
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-white/50 uppercase block mb-1">Charset Map</label>
                    <div className="grid grid-cols-4 gap-1">
                      {(['blocks', 'minimal', 'matrix', 'slash'] as const).map((c) => (
                        <button
                          key={c}
                          onClick={() => setAsciiCharset(c)}
                          className={`py-2 rounded border uppercase text-[10px] transition-colors cursor-pointer ${
                            asciiCharset === c
                              ? 'bg-white text-black font-bold border-white'
                              : 'bg-black/40 text-white/60 border-white/10 hover:text-white'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live ASCII Screen */}
                <div className="bg-black border border-white/15 rounded-xl p-4 font-mono text-[10px] sm:text-xs leading-[1.15] text-emerald-400 overflow-x-auto whitespace-pre tracking-widest select-all mb-4 max-h-[220px]">
                  {currentAscii}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
                <button
                  onClick={() => setAsciiInverted(!asciiInverted)}
                  className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/15 text-white/80 border border-white/10 transition-colors cursor-pointer"
                >
                  {asciiInverted ? 'NORMAL CONTRAST' : 'INVERT CONTRAST'}
                </button>

                <button
                  onClick={handleCopyAscii}
                  className="px-4 py-1.5 rounded-lg bg-white text-black font-bold hover:bg-neutral-200 transition-all flex items-center space-x-1.5 cursor-pointer shadow-md"
                >
                  {copiedAscii ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAscii ? 'COPIED ASCII' : 'COPY ASCII'}</span>
                </button>
              </div>
            </div>

            {/* Tool 2: Vibe Harmonic Palette Lab */}
            <div className="lg:col-span-5 bg-[#14161b] border border-white/15 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase block mb-0.5">
                      TOOL 02 &bull; COLOR HARMONY SYNTH
                    </span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                      Vibe Harmonic Palettes
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/15">
                    CSS READY
                  </span>
                </div>

                <p className="text-xs text-white/70 leading-relaxed font-light mb-4">
                  Select a mood to generate CSS linear gradients and hexadecimal ramps.
                </p>

                {/* Preset Mood Selector */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(Object.keys(palettes) as Array<keyof typeof palettes>).map((k) => (
                    <button
                      key={k}
                      onClick={() => setPalettePreset(k)}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-lg border uppercase transition-all cursor-pointer ${
                        palettePreset === k
                          ? 'bg-white text-black font-bold border-white'
                          : 'bg-black/40 text-white/60 border-white/10 hover:text-white'
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>

                {/* Live Gradient Preview Box */}
                <div
                  className="w-full h-20 rounded-xl border border-white/20 mb-4 shadow-inner relative overflow-hidden"
                  style={{ background: activePalette.gradient }}
                >
                  <div className="absolute inset-0 bg-matte-noise opacity-20 pointer-events-none" />
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-white/90">
                    {activePalette.name}
                  </div>
                </div>

                {/* Swatches List */}
                <div className="grid grid-cols-5 gap-1.5 mb-4">
                  {activePalette.colors.map((c, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className="w-full h-8 rounded-md border border-white/20 mb-1"
                        style={{ backgroundColor: c }}
                      />
                      <span className="text-[9px] font-mono text-white/70 uppercase">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white/50 text-[11px]">5 HARMONIC STEPS</span>
                <button
                  onClick={handleCopyPaletteCSS}
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black font-bold border border-white/20 transition-all flex items-center space-x-1.5 cursor-pointer"
                >
                  {copiedCSS ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCSS ? 'COPIED CSS' : 'COPY GRADIENT CSS'}</span>
                </button>
              </div>
            </div>

            {/* Tool 3: Kinetic Particle Flowfield Canvas */}
            <div className="lg:col-span-12 bg-[#14161b] border border-white/15 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase block mb-0.5">
                    TOOL 03 &bull; HTML5 CANVAS PHYSICS
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                    Kinetic Particle Flowfield
                  </h3>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-white/50">PARTICLES:</span>
                  {[50, 80, 120].map((n) => (
                    <button
                      key={n}
                      onClick={() => setParticleCount(n)}
                      className={`px-2 py-0.5 rounded border text-[11px] cursor-pointer ${
                        particleCount === n
                          ? 'bg-white text-black font-bold border-white'
                          : 'bg-black/40 text-white/60 border-white/10'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    onClick={() => setIsParticlePlaying(!isParticlePlaying)}
                    className="ml-2 px-3 py-1 rounded bg-white/10 hover:bg-white text-white hover:text-black transition-colors cursor-pointer border border-white/20"
                  >
                    {isParticlePlaying ? 'PAUSE' : 'RESUME'}
                  </button>
                </div>
              </div>

              <div
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                className="w-full h-56 sm:h-72 bg-[#0d0e11] rounded-xl border border-white/20 relative overflow-hidden cursor-crosshair shadow-inner"
              >
                <canvas ref={canvasRef} className="w-full h-full block" />
                <div className="absolute top-3 left-4 text-[10px] font-mono text-white/40 tracking-widest uppercase pointer-events-none">
                  GRAVITY VECTOR FIELD // MOVE CURSOR ACROSS STAGE
                </div>
                <div className="absolute bottom-3 right-4 text-[10px] font-mono text-white/60 pointer-events-none bg-black/60 px-2 py-1 rounded">
                  X: {mousePos.x.toFixed(0)} Y: {mousePos.y.toFixed(0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: IMAGES SHOWCASE */}
      {(activeCategory === 'all' || activeCategory === 'image') && (
        <div className="mb-14 sm:mb-16">
          <div className="border-b border-white/15 pb-3 mb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-1">
                VISUAL ARTIFACTS &bull; HIGH-RESOLUTION WORKS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Generative Images
              </h2>
            </div>
            <span className="text-xs font-mono text-white/40">
              6 ARCHIVED SPECIMENS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div
                key={img.id}
                onClick={() => setActiveMedia(img)}
                className="bg-[#14161b] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all cursor-pointer group flex flex-col justify-between"
              >
                {/* Visual Artboard Container */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${img.gradient} p-6 flex flex-col justify-between relative overflow-hidden group-hover:opacity-90 transition-opacity`}>
                  <div className="absolute inset-0 bg-matte-noise opacity-30 pointer-events-none" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
                    <div className="w-32 h-32 rounded-full border border-white/40" />
                    <div className="w-20 h-20 border border-white/30 absolute" />
                    <div className="w-48 h-0.5 bg-white/20 rotate-45 absolute" />
                  </div>

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase bg-black/40 px-2 py-0.5 rounded border border-white/10">
                      {img.id.toUpperCase()}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/20 transition-all">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[9px] font-mono tracking-[0.2em] text-white/50 uppercase block mb-1">
                      {img.eyebrow}
                    </span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-tight">
                      {img.title}
                    </h3>
                  </div>

                  <div className="relative z-10 pt-2 border-t border-white/15 flex justify-between items-center text-[9px] font-mono text-white/50">
                    <span>{img.technique}</span>
                    <span>{img.resolution}</span>
                  </div>
                </div>

                {/* Card Meta Info */}
                <div className="p-5">
                  <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                    {img.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {img.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: VIDEOS SHOWCASE */}
      {(activeCategory === 'all' || activeCategory === 'video') && (
        <div className="mb-14 sm:mb-16">
          <div className="border-b border-white/15 pb-3 mb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-1">
                KINETIC LOOPS &bull; 60-120 FPS MOTION
              </span>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Motion &amp; Video Studies
              </h2>
            </div>
            <span className="text-xs font-mono text-white/40">
              4 MOTION EXPERIMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((vid) => {
              const isPlaying = playingVideoId === vid.id;
              return (
                <div
                  key={vid.id}
                  className="bg-[#14161b] border border-white/10 rounded-2xl overflow-hidden p-6 flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  {/* Motion Simulator Stage */}
                  <div className="relative aspect-video bg-black rounded-xl border border-white/20 overflow-hidden mb-5 flex flex-col justify-between p-4 group">
                    <div className="absolute inset-0 bg-matte-noise opacity-20 pointer-events-none" />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {vid.id === 'vid-01' && (
                        <div className={`w-32 h-32 rounded-full border-2 border-dashed border-white/50 ${isPlaying ? 'animate-spin' : ''} duration-1000`}>
                          <div className="w-20 h-20 rounded-full border border-emerald-400/60 m-auto mt-5" />
                        </div>
                      )}
                      {vid.id === 'vid-02' && (
                        <div className="flex items-end gap-1.5 h-20">
                          {[30, 60, 90, 45, 80, 100, 75, 40, 85, 55, 95, 35].map((h, idx) => (
                            <div
                              key={idx}
                              style={{
                                height: isPlaying ? `${h}%` : '20%',
                                animation: isPlaying ? `pulse ${(idx % 3) * 0.2 + 0.5}s ease-in-out infinite alternate` : 'none',
                              }}
                              className="w-2 bg-white rounded-t transition-all"
                            />
                          ))}
                        </div>
                      )}
                      {vid.id === 'vid-03' && (
                        <div className="text-center">
                          <div className={`font-mono text-xs text-white/60 tracking-[0.4em] ${isPlaying ? 'animate-pulse' : ''}`}>
                            SWISS &bull; HELIX &bull; 120FPS
                          </div>
                          <div className="text-2xl font-bold uppercase text-white mt-1">
                            KINETIC TYPE
                          </div>
                        </div>
                      )}
                      {vid.id === 'vid-04' && (
                        <div className="relative w-48 h-12 bg-white/5 rounded-full border border-white/10 flex items-center px-2">
                          <div className={`w-8 h-8 rounded-full bg-white transition-transform duration-700 ${isPlaying ? 'translate-x-36' : 'translate-x-0'}`} />
                        </div>
                      )}
                    </div>

                    {/* Top Video Header Overlay */}
                    <div className="relative z-10 flex justify-between items-start text-[10px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-black/60 text-white/80 border border-white/10">
                        {vid.fps} &bull; {vid.duration}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {isPlaying ? 'PLAYING' : 'PAUSED'}
                      </span>
                    </div>

                    {/* Bottom Controls Bar */}
                    <div className="relative z-10 flex justify-between items-center bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
                      <button
                        onClick={() => setPlayingVideoId(isPlaying ? null : vid.id)}
                        className="px-3 py-1 rounded bg-white text-black font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-neutral-200 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                        <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                      </button>

                      <button
                        onClick={() => setActiveMedia(vid)}
                        className="text-white/60 hover:text-white text-xs font-mono flex items-center gap-1 px-2 py-1 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>EXPAND</span>
                      </button>
                    </div>
                  </div>

                  {/* Video Metadata */}
                  <div>
                    <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase block mb-1">
                      {vid.eyebrow}
                    </span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                      {vid.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 text-[10px] font-mono text-white/60">
                      {vid.tags.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* LIGHTBOX / FULLSCREEN INSPECTOR MODAL */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="bg-[#14161b] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center cursor-pointer transition-colors border border-white/20"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase block mb-1">
                {activeMedia.eyebrow} &bull; {activeMedia.category.toUpperCase()}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                {activeMedia.title}
              </h2>
            </div>

            {/* Media Presentation Window */}
            <div className="aspect-video bg-black rounded-xl border border-white/15 overflow-hidden mb-6 flex items-center justify-center relative p-8">
              <div className="absolute inset-0 bg-matte-noise opacity-30 pointer-events-none" />
              <div className="text-center z-10">
                <div className="w-24 h-24 rounded-full border border-white/30 mx-auto mb-4 flex items-center justify-center animate-pulse">
                  {activeMedia.category === 'video' ? (
                    <Film className="w-8 h-8 text-white/80" />
                  ) : (
                    <ImageIcon className="w-8 h-8 text-white/80" />
                  )}
                </div>
                <span className="text-sm font-mono text-white/80 uppercase tracking-widest block">
                  {activeMedia.title}
                </span>
                <span className="text-xs font-mono text-white/50 block mt-1">
                  HIGH RESOLUTION ARCHIVAL MASTER
                </span>
              </div>
            </div>

            {/* Metadata Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
              <div>
                <span className="text-white/40 uppercase block mb-1">Description</span>
                <p className="text-white/80 leading-relaxed font-light">{activeMedia.desc}</p>
              </div>
              <div>
                <span className="text-white/40 uppercase block mb-1">Taxonomy &amp; Tags</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {activeMedia.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/15">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveMedia(null)}
                className="px-5 py-2 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <span>03 PLAYGROUND &bull; VIBE-CODED LABORATORY</span>
        <span className="text-white/80">BUILT WITH RAPID VIBE PROTOTYPING // 2026</span>
      </div>
    </div>
  );
};

export const AnimationSubpage = PlaygroundSubpage;
