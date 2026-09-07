import React, { useState } from 'react';
import { Layers, Sparkles, Compass } from 'lucide-react';

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
      className="bento-grey relative p-6 lg:p-8 flex flex-col justify-between overflow-hidden select-none group h-full"
    >
      {/* Background Graphic Image & Interactive Grid Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop"
          alt="Generative System Graphic"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            hovered ? 'scale-110' : 'scale-100'
          } opacity-60`}
        />
        <div className="absolute inset-0 bg-[#16181d]/75" />

        {/* Dynamic generative SVG wireframe grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none transition-transform duration-300"
          style={{
            transform: `perspective(400px) rotateX(${(mousePos.y - 50) * 0.2}deg) rotateY(${(mousePos.x - 50) * -0.2}deg)`,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="graphic-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#graphic-grid)" />
          {/* Accent focal rings */}
          <circle
            cx={`${mousePos.x}%`}
            cy={`${mousePos.y}%`}
            r="40"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 2"
          />
        </svg>
      </div>

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Compass className="w-3.5 h-3.5 text-white" />
          <span className="text-[11px] font-mono tracking-widest text-white/80 uppercase">
            [03,01] &bull; GRAPHIC LAB
          </span>
        </div>

        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
          FIG. 03
        </span>
      </div>

      {/* Center Label / Icon */}
      <div className="relative z-10 my-auto py-2">
        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-3">
          <Layers className="w-6 h-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
          Generative Vectors
        </h3>
        <p className="text-xs text-gray-300 font-light max-w-xs leading-relaxed">
          Interactive shaders, tactile typography, and algorithmic spatial physics.
        </p>
      </div>

      {/* Bottom Coordinates */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
        <span>X: {Math.round(mousePos.x)} &bull; Y: {Math.round(mousePos.y)}</span>
        <span className="text-white">DYNAMIC FEED</span>
      </div>
    </div>
  );
};
