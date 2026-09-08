import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sliders, 
  Zap, 
  Copy, 
  Check, 
  Sparkles, 
  Layers, 
  Gauge, 
  Activity,
  ArrowRight
} from 'lucide-react';

interface CurvePreset {
  name: string;
  bezier: string;
  duration: number;
  description: string;
  usage: string;
}

const presets: CurvePreset[] = [
  {
    name: 'Bento Snap (Current System)',
    bezier: 'cubic-bezier(0.16, 1.0, 0.3, 1.0)',
    duration: 450,
    description: 'Ultra-fast initial acceleration with an elongated deceleration tail. Prevents visual sluggishness while settling with mathematical precision.',
    usage: 'Bento box expansion modals, full-screen overlays, sheet drawers',
  },
  {
    name: 'Elastic Spring Dampened',
    bezier: 'cubic-bezier(0.34, 1.56, 0.64, 1.0)',
    duration: 600,
    description: 'Slight overshoot that oscillates gently once before coming to rest. Imparts organic tactile elasticity.',
    usage: 'Button clicks, toggle switches, badge pop-ins',
  },
  {
    name: 'Brutalist Linear Machine',
    bezier: 'cubic-bezier(0.0, 0.0, 1.0, 1.0)',
    duration: 300,
    description: 'Uniform constant velocity with zero easing. Emulates industrial hardware readouts and terminal printers.',
    usage: 'Telemetry data streams, ticker tape marquee, raw counters',
  },
  {
    name: 'Heavy Inertia Mass',
    bezier: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
    duration: 750,
    description: 'Feels like shifting heavy machined titanium. Smooth entry and extended resting phase.',
    usage: 'Large viewport pannings, gallery carousels, camera transitions',
  },
];

export const AnimationSubpage: React.FC = () => {
  const [activePreset, setActivePreset] = useState<CurvePreset>(presets[0]);
  const [isPlayingTest, setIsPlayingTest] = useState(false);
  const [testPosition, setTestPosition] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [fpsMode, setFpsMode] = useState<'60' | '120'>('120');

  // Magnetic button state
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const magneticRef = useRef<HTMLButtonElement>(null);

  // 3D Tilt Card State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleTestLaunch = () => {
    setIsPlayingTest(false);
    setTimeout(() => {
      setTestPosition(prev => (prev === 0 ? 1 : 0));
      setIsPlayingTest(true);
    }, 50);
  };

  const handleCopyCSS = () => {
    const code = `transition: transform ${activePreset.duration}ms ${activePreset.bezier};`;
    navigator.clipboard?.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magneticRef.current) return;
    const rect = magneticRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setMagneticOffset({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMagneticLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x: y, y: x });
  };

  const handleTiltLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white selection:bg-white selection:text-black">
      {/* Top Coordinate Header */}
      <div className="border-b border-white/15 pb-6 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Activity className="w-4 h-4 text-white" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase">
            [03] CATALOG &bull; MOTION MATRIX &amp; INTERACTION CHOREOGRAPHY
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono text-white/60">
          <span>FRAME CADENCE:</span>
          <button
            onClick={() => setFpsMode(prev => prev === '120' ? '60' : '120')}
            className="px-2.5 py-1 rounded bg-white text-black font-bold text-[11px] font-mono tracking-wider cursor-pointer hover:bg-neutral-200"
          >
            {fpsMode} FPS // {fpsMode === '120' ? '8.33ms' : '16.67ms'}
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mb-12">
        <span className="text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-3">
          REAL-TIME INTERACTION DYNAMICS &bull; SPRING PHYSICS &bull; ZERO-WASTE MOTION
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-6">
          Animation <span className="font-light text-white/70">120 FPS</span>
        </h1>
        <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-3xl mb-8">
          Motion is not decorative flourish—it is the spatial grammar of software. By engineering purposeful easing curves, zero layout thrashing, and sub-pixel spring models, interfaces communicate hierarchy with instant tactile clarity.
        </p>
      </div>

      {/* Interactive Cubic-Bezier & Spring Playground */}
      <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8 lg:p-10 mb-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase block mb-1">
              LABORATORY BENCHMARK &bull; KINETIC ENGINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Interactive Easing Curve Simulator
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyCSS}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs border border-white/15 transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied CSS' : 'Copy Curve'}</span>
            </button>
          </div>
        </div>

        {/* Presets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActivePreset(preset);
                setTestPosition(0);
              }}
              className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                activePreset.name === preset.name
                  ? 'bg-white text-black border-white'
                  : 'bg-black/40 text-white/80 border-white/10 hover:border-white/25 hover:bg-white/5'
              }`}
            >
              <div className="flex justify-between items-center text-[10px] font-mono mb-2">
                <span className="uppercase opacity-70">CURVE {idx + 1}</span>
                <span className="opacity-90 font-bold">{preset.duration}ms</span>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-tight mb-2">
                {preset.name}
              </h4>
              <p className="text-xs opacity-75 font-mono line-clamp-2">
                {preset.bezier}
              </p>
            </button>
          ))}
        </div>

        {/* Runway & Simulator Display */}
        <div className="bg-[#0d0e11] border border-white/20 rounded-xl p-6 sm:p-8 mb-6 relative overflow-hidden">
          <div className="flex justify-between items-center text-xs font-mono text-white/50 mb-6">
            <span>ACTIVE TIMELINE: {activePreset.bezier}</span>
            <span className="text-white/80 font-bold">{activePreset.duration}ms DURATION</span>
          </div>

          {/* Test Object Runway Track */}
          <div className="relative h-20 w-full bg-white/5 rounded-xl border border-white/10 flex items-center px-4 overflow-hidden mb-6">
            {/* Guide markers */}
            <div className="absolute left-6 top-2 text-[10px] font-mono text-white/30">0.0 ORIGIN</div>
            <div className="absolute right-6 top-2 text-[10px] font-mono text-white/30">1.0 TARGET</div>
            
            <div className="w-full h-0.5 bg-white/10 absolute left-0 right-0" />

            {/* Moving Puck with chosen curve */}
            <div
              style={{
                transform: `translateX(${testPosition === 1 ? 'calc(100% - 70px)' : '0px'})`,
                transition: `transform ${activePreset.duration}ms ${activePreset.bezier}`,
              }}
              className="relative z-10 w-14 h-14 rounded-lg bg-white text-black font-mono font-bold text-xs flex flex-col items-center justify-center shadow-2xl cursor-pointer select-none"
            >
              <span className="text-[10px]">120FPS</span>
              <span className="text-[9px] opacity-70">PUCK</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={handleTestLaunch}
              className="px-6 py-2.5 rounded-lg bg-white text-black font-mono text-xs sm:text-sm font-bold hover:bg-neutral-200 transition-all flex items-center space-x-2 cursor-pointer shadow-lg active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>TEST LAUNCH ({testPosition === 0 ? 'FORWARD' : 'RETURN'})</span>
            </button>

            <span className="text-xs font-mono text-white/60">
              {activePreset.description}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Micro-Interactions Showcase */}
      <div className="mb-12">
        <div className="mb-6">
          <span className="text-xs font-mono text-white/50 tracking-widest uppercase block mb-1">
            EXPERIMENTS // PHYSICAL INTERFACE LAB
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
            Interactive Tactile Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Magnetic Proximity Button */}
          <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 flex flex-col justify-between min-h-[260px]">
            <div>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mb-1">
                STUDY 01 &bull; CURSOR ATTRACTION
              </span>
              <h3 className="text-lg font-bold text-white uppercase mb-2">
                Magnetic Spring Button
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light mb-6">
                Hover over the button to feel cursor gravity pulling the target with dampening spring return on mouse exit.
              </p>
            </div>

            <div className="py-6 flex items-center justify-center bg-black/40 rounded-lg border border-white/5">
              <button
                ref={magneticRef}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                style={{
                  transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`,
                  transition: magneticOffset.x === 0 ? 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
                }}
                className="px-6 py-3 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider shadow-xl cursor-pointer"
              >
                Hover Target
              </button>
            </div>
          </div>

          {/* 2. 3D Perspective Gyro Tilt */}
          <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 flex flex-col justify-between min-h-[260px]">
            <div>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mb-1">
                STUDY 02 &bull; SPATIAL ORIENTATION
              </span>
              <h3 className="text-lg font-bold text-white uppercase mb-2">
                3D Gyro Perspective Tilt
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light mb-6">
                Calculates angular pitch and yaw from cursor coordinates with dynamic specular reflections.
              </p>
            </div>

            <div
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
              className="py-6 flex items-center justify-center bg-black/40 rounded-lg border border-white/5 perspective-1000"
            >
              <div
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: tilt.x === 0 ? 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
                }}
                className="w-40 h-24 rounded-lg bg-gradient-to-br from-[#242730] to-[#121316] border border-white/30 p-3 flex flex-col justify-between shadow-2xl select-none"
              >
                <div className="flex justify-between text-[9px] font-mono text-white/60">
                  <span>GYRO 3D</span>
                  <span>{tilt.y.toFixed(0)}&deg;</span>
                </div>
                <div className="text-xs font-mono font-bold text-white tracking-widest">
                  SPATIAL MATRIX
                </div>
              </div>
            </div>
          </div>

          {/* 3. Kinetic Audio Frequency Wave */}
          <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 flex flex-col justify-between min-h-[260px]">
            <div>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mb-1">
                STUDY 03 &bull; AUDIO OSCILLATION
              </span>
              <h3 className="text-lg font-bold text-white uppercase mb-2">
                Harmonic Bar Spectrum
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light mb-6">
                16-band mathematical oscillation simulating real-time audio FFT spectral pressure at 120 FPS.
              </p>
            </div>

            <div className="py-6 px-4 flex items-end justify-center gap-1.5 h-24 bg-black/40 rounded-lg border border-white/5">
              {[28, 45, 75, 92, 60, 35, 80, 100, 70, 48, 88, 65, 30, 55, 40].map((height, i) => (
                <div
                  key={i}
                  style={{
                    height: `${height}%`,
                    animation: `pulse ${(i % 4) * 0.2 + 0.6}s ease-in-out infinite alternate`,
                  }}
                  className="w-1.5 bg-white rounded-t"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <span>03 ANIMATION &bull; MOTION MATRIX SPEC</span>
        <span className="text-white/80">RENDERED AT 120 FPS // GSAP &bull; MOTION/REACT</span>
      </div>
    </div>
  );
};
