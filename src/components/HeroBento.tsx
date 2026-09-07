import React, { useEffect, useState } from 'react';
import { ArrowDownRight, Terminal, Clock, Sparkles, Layers, Cpu } from 'lucide-react';

interface HeroBentoProps {
  onScrollToProjects: () => void;
}

export const HeroBento: React.FC<HeroBentoProps> = ({ onScrollToProjects }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Europe/London',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-2 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large Statement Bento Card (2 columns) */}
        <div className="md:col-span-2 bento-card rounded-3xl p-6 sm:p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between group">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-indigo-300 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Selected Works &bull; 5 Interactive Case Studies</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Crafting spatial interfaces, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">creative tools</span>, &amp; audio systems.
            </h2>

            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Synthesizing tactile graphic design, WebGL motion choreography, and high-performance frontend architecture. Explore the 5 highlighted systems below.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onScrollToProjects}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all cursor-pointer shadow-lg shadow-white/10"
            >
              <span>Explore Projects (05)</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-4 text-xs font-mono text-gray-500">
              <span>BENTO SPEC V2.4</span>
              <span>&bull;</span>
              <span>LONDON / UTC+1</span>
            </div>
          </div>
        </div>

        {/* Right Column Bento Stack */}
        <div className="flex flex-col gap-4">
          {/* Time & Location Card */}
          <div className="bento-card rounded-3xl p-5 sm:p-6 border border-white/5 flex flex-col justify-between flex-1">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
              <span className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>London, UK</span>
              </span>
              <span className="text-emerald-400 font-semibold">{time || '12:00:00'}</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Available for contract engineering, product advisory, and creative technology collaborations.
            </p>
          </div>

          {/* Tech Stack Matrix Card */}
          <div className="bento-card rounded-3xl p-5 sm:p-6 border border-white/5 flex-1">
            <div className="flex items-center space-x-2 text-xs font-mono text-gray-400 mb-3">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Core Tooling &amp; Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
              {['React 19', 'TypeScript', 'GSAP / Motion', 'WebGL', 'Tailwind', 'Web Audio', 'Figma'].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-300"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
