import React, { useState } from 'react';
import { Compass } from 'lucide-react';

export const GraphicSquare: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      id="bento-graphic-square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="bento-grey relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden select-none group h-full"
    >
      {/* 
        Signature 4-Corner Chromatic Ambient Glows matching reference image bottom-right:
        - Top-left: Emerald green
        - Bottom-left: Warm burnt amber
        - Bottom-right: Deep indigo/violet
        - Top-right: Slate teal
      */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-Left: Emerald */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.3)_0%,_transparent_70%)]" />
        {/* Bottom-Left: Amber */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(217,119,6,0.3)_0%,_transparent_70%)]" />
        {/* Bottom-Right: Violet */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.35)_0%,_transparent_70%)]" />
        {/* Top-Right: Teal */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.18)_0%,_transparent_70%)]" />
      </div>

      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-30" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <Compass className="w-3.5 h-3.5 text-white/80" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-white/70 uppercase">
            [03,01] &bull; GRAPHIC LAB
          </span>
        </div>

        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 tracking-wider">
          FIG. 04
        </span>
      </div>

      {/* 
        Center: 3D Perspective Wireframe Portal / Tesseract Box with Vertex Dots
        Directly replicating the bottom-right graphic from reference image
      */}
      <div className="relative z-10 my-auto py-2 flex items-center justify-center">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44">
          <svg
            viewBox="0 0 160 160"
            className={`w-full h-full text-white/60 transition-transform duration-500 ease-out ${
              hovered ? 'scale-105 text-white' : ''
            }`}
            style={{
              transform: `perspective(300px) rotateX(${(mousePos.y - 50) * 0.15}deg) rotateY(${(mousePos.x - 50) * -0.15}deg)`,
            }}
            fill="none"
          >
            {/* Outer Square */}
            <rect x="20" y="20" width="120" height="120" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />

            {/* Inner Perspective Square */}
            <rect x="52" y="52" width="56" height="56" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />

            {/* 4 Diagonal Perspective Lines */}
            <line x1="20" y1="20" x2="52" y2="52" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            <line x1="140" y1="20" x2="108" y2="52" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            <line x1="20" y1="140" x2="52" y2="108" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            <line x1="140" y1="140" x2="108" y2="108" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />

            {/* Sub-grid Midpoint Orthogonal Lines */}
            <line x1="80" y1="20" x2="80" y2="52" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
            <line x1="80" y1="108" x2="80" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
            <line x1="20" y1="80" x2="52" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
            <line x1="108" y1="80" x2="140" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />

            {/* Vertex Nodes (Dots) matching reference */}
            <circle cx="20" cy="20" r="1.5" fill="#ffffff" />
            <circle cx="140" cy="20" r="1.5" fill="#ffffff" />
            <circle cx="20" cy="140" r="1.5" fill="#ffffff" />
            <circle cx="140" cy="140" r="1.5" fill="#ffffff" />

            <circle cx="52" cy="52" r="2" fill="#ffffff" />
            <circle cx="108" cy="52" r="2" fill="#ffffff" />
            <circle cx="52" cy="108" r="2" fill="#ffffff" />
            <circle cx="108" cy="108" r="2" fill="#ffffff" />

            <circle cx="80" cy="52" r="1.5" fill="#ffffff" />
            <circle cx="80" cy="108" r="1.5" fill="#ffffff" />
            <circle cx="52" cy="80" r="1.5" fill="#ffffff" />
            <circle cx="108" cy="80" r="1.5" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Bottom Coordinates & Title */}
      <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/60">
        <span className="tracking-widest">TESSERACT MATRIX</span>
        <span className="tracking-widest text-white/80">RENDER // 60FPS</span>
      </div>
    </div>
  );
};
