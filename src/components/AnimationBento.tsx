import React, { useState } from 'react';

export const AnimationBento: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id="bento-animation"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-grey bg-checkerboard-dark col-span-1 lg:col-span-1 lg:row-span-2 relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-default select-none group h-full"
    >
      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-40" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase">
            [03] &bull; ANIMATION
          </span>
        </div>

        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 tracking-wider">
          60-120 FPS
        </span>
      </div>

      {/* Middle Content Area: Large Metric & Kinetic Typography from Reference Image */}
      <div className="relative z-10 my-auto py-6 flex flex-col justify-center">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block mb-1">
          MOTION MATRIX
        </span>

        {/* Large Typography matching 'LEVERAGE 20X' styling in reference image */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-none mb-3">
          Animation
        </h2>

        {/* Large 120 FPS / 20X Kinetic Numeric Display */}
        <div className="my-4 py-2 border-y border-white/10 flex items-baseline justify-between">
          <div className="flex items-baseline">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white">
              120
            </span>
            <span className="text-xl sm:text-2xl font-light text-white/60 ml-1">
              FPS
            </span>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-mono text-white/50 block tracking-widest">TIMELINE</span>
            <span className="text-xs font-mono text-white/80 font-bold">CUBIC-BEZIER</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm font-normal text-white/70 leading-relaxed mb-4">
          Kinetic choreography, WebGL shaders, spatial micro-physics &amp; fluid UI interactions.
        </p>

        {/* Kinetic Timeline / Wave Graphic */}
        <div className="w-full h-16 relative flex items-center justify-center overflow-hidden border border-white/10 rounded bg-black/30 p-2">
          <svg className="w-full h-full" viewBox="0 0 200 50" fill="none">
            {/* Ambient grid lines */}
            <line x1="0" y1="25" x2="200" y2="25" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
            <line x1="50" y1="0" x2="50" y2="50" stroke="rgba(255,255,255,0.1)" />
            <line x1="100" y1="0" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" />
            <line x1="150" y1="0" x2="150" y2="50" stroke="rgba(255,255,255,0.1)" />

            {/* Kinetic Bezier Curve with traveling dot */}
            <path
              d="M 10 40 C 40 40, 60 10, 100 10 C 140 10, 160 40, 190 40"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
              fill="none"
              className={hovered ? 'animate-pulse' : ''}
            />
            {/* Interpolation nodes */}
            <circle cx="10" cy="40" r="2" fill="#ffffff" />
            <circle cx="100" cy="10" r="3" fill="#ffffff" />
            <circle cx="190" cy="40" r="2" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Bottom Telemetry */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/60">
        <span className="tracking-widest">GSAP &bull; MOTION</span>
        <span className="tracking-widest text-white/80">KINETIC LOOP</span>
      </div>
    </div>
  );
};
