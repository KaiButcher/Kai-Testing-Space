import React, { useState } from 'react';
import { ExternalLink, Camera } from 'lucide-react';

export const PhotographySquare: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      id="bento-photography"
      href="https://unsplash.com/@kaibutcher"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-grey relative p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full block"
    >
      {/* Background Photography Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop"
          alt="Kai Butcher Photography on Unsplash"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            hovered ? 'scale-110 brightness-105' : 'scale-100 brightness-75'
          }`}
        />
        {/* Dark architectural gradient overlay to ensure perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-[#141518]/50 to-[#141518]/70" />
      </div>

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Camera className="w-3.5 h-3.5 text-white" />
          <span className="text-[11px] font-mono tracking-widest text-white/80 uppercase">
            [02,03] &bull; HERO PHOTO
          </span>
        </div>

        <div
          className={`w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-300 ${
            hovered ? 'bg-white text-black border-white rotate-45 scale-105' : 'bg-black/40 backdrop-blur-sm'
          }`}
        >
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>

      {/* Center / Bottom Typography */}
      <div className="relative z-10 mt-auto pt-8">
        <span className="text-[11px] font-mono uppercase tracking-widest text-gray-300 block mb-1">
          UNSPLASH ARCHIVE
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-none mb-2">
          Photography
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
          Curated visual catalog &amp; architectural captures.
        </p>

        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-gray-300">
          <span>@kaibutcher</span>
          <span className="flex items-center space-x-1 text-white group-hover:underline">
            <span>VIEW ON UNSPLASH</span>
            <span>&rarr;</span>
          </span>
        </div>
      </div>
    </a>
  );
};
