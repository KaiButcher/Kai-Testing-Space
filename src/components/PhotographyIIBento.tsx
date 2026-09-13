import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Maximize2, Eye, Download, Layers } from 'lucide-react';
import frame1 from '../assets/images/frame_1.jpg';

interface PhotographyIIBentoProps {
  onExpand?: () => void;
}

export const PhotographyIIBento: React.FC<PhotographyIIBentoProps> = ({ onExpand }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layoutId="bento-card-photo2"
      id="bento-photography-ii"
      onClick={onExpand}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-grey bento-area-anim relative p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none group h-full min-h-[260px] sm:min-h-0 hover:bg-white/[0.02] transition-colors"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand?.();
        }
      }}
      aria-label="Photography II Bento - Click to expand carousel exhibition"
    >
      {/* Background Framed Photo Gallery Preview */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/Frame 1.jpg"
          onError={(e) => {
            e.currentTarget.src = frame1;
          }}
          alt="Photography II Exhibition Preview"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            hovered ? 'scale-105 opacity-60' : 'scale-100 opacity-40'
          }`}
        />

        {/* Studio Lighting Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-[#070707]/40 pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-matte-noise pointer-events-none opacity-20" />

      {/* Top Meta Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <Camera className="w-3.5 h-3.5 text-white/80" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-white/70 uppercase">
            [03] &bull; PHOTOGRAPHY II
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80 tracking-wider flex items-center gap-1">
            <Layers className="w-2.5 h-2.5 text-white/70" />
            FULL BLEED
          </span>
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-white/80 transition-all duration-300 ${
              hovered ? 'bg-white text-black scale-110' : 'bg-white/10'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Center Typographic Visual Presentation */}
      <div className="relative z-10 my-auto py-4 flex flex-col justify-center">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block mb-1.5">
          FULL BLEED &bull; 2 FRAMED WORKS
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase leading-none mb-3">
          Photography II
        </h2>
        <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed max-w-xs">
          Full-bleed carousel displaying prints in modern wooden frames mounted on paper walls.
        </p>
      </div>

      {/* Bottom Telemetry Counter & Action Line */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-3 text-[11px] font-mono text-white/60">
          <div className="flex items-center space-x-1" title="6,410 Total Views">
            <Eye className="w-3 h-3 text-emerald-400" />
            <span>6,410</span>
          </div>
          <span className="text-white/20">&bull;</span>
          <div className="flex items-center space-x-1" title="40 Total Downloads">
            <Download className="w-3 h-3 text-blue-400" />
            <span>40</span>
          </div>
        </div>

        <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase group-hover:text-white transition-colors flex items-center gap-1">
          <span>VIEW</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </span>
      </div>
    </motion.div>
  );
};
