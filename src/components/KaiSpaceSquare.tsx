import React, { useState } from 'react';
import { ArrowUpRight, Github, Mail, Globe, Command } from 'lucide-react';

interface KaiSpaceSquareProps {
  onOpenContact: () => void;
  onOpenGitHub: () => void;
}

export const KaiSpaceSquare: React.FC<KaiSpaceSquareProps> = ({
  onOpenContact,
  onOpenGitHub,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id="bento-kais-space"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-grey relative p-6 lg:p-8 flex flex-col justify-between overflow-hidden group select-none h-full"
    >
      {/* Top Bar Header */}
      <div className="flex items-start justify-between z-10">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">
            [01,01] &bull; STUDIO
          </span>
        </div>

        {/* Minimal Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenGitHub}
            title="GitHub Actions / Workflow Guide"
            className="p-1.5 rounded bg-white/5 hover:bg-white text-gray-400 hover:text-black transition-all cursor-pointer border border-white/20"
          >
            <Github className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onOpenContact}
            title="Contact Kai Butcher"
            className="p-1.5 rounded bg-white/5 hover:bg-white text-gray-400 hover:text-black transition-all cursor-pointer border border-white/20"
          >
            <Mail className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center Interactive Graphic / Monogram */}
      <div className="my-auto py-4 z-10">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto my-2">
          {/* Animated concentric geometric circles & crosshairs */}
          <svg
            className={`w-full h-full text-white/40 transition-transform duration-700 ease-out ${
              hovered ? 'rotate-90 scale-110 text-white' : ''
            }`}
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="0.75" />
            <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.75" />
            <rect x="47" y="47" width="6" height="6" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Bottom Name & Meta */}
      <div className="z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white leading-none mb-2">
          Kai&apos;s Space
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 font-light tracking-wide leading-relaxed">
          Creative technologist, interaction systems &amp; digital laboratory.
        </p>

        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-500">
          <span>LONDON &bull; UTC+1</span>
          <span className="text-gray-400">3&times;3 BENTO</span>
        </div>
      </div>
    </div>
  );
};
