import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';

interface HeroBentoProps {
  onTriggerPulse: () => void;
  interactionCount: number;
  onExploreScroll: () => void;
}

export const HeroBento: React.FC<HeroBentoProps> = ({
  onTriggerPulse,
  interactionCount,
  onExploreScroll,
}) => {
  return (
    <div className="bento-card md:col-span-2 rounded-3xl p-8 flex flex-col justify-between border border-gray-800 relative overflow-hidden group shadow-xl">
      {/* Ambient background glow */}
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500 pointer-events-none" />

      <div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">Welcome</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60" />
          <span className="text-[11px] text-gray-500 font-mono">Kai Butcher Design</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2 mb-4 leading-tight">
          Exploring concepts, tools, &amp; interactive ideas.
        </h1>
        
        <p className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
          A minimal digital workspace sandbox. A collection of experimental app ideas, prototypes, and creative coding fragments built on the fly.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-8 pt-2">
        <button
          id="explore-ideas-btn"
          onClick={() => {
            onTriggerPulse();
            onExploreScroll();
          }}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-medium transition-all shadow-lg shadow-indigo-600/25 flex items-center space-x-2 cursor-pointer"
        >
          <span>Explore Ideas</span>
          <ArrowDown className="w-4 h-4 opacity-80 group-hover:translate-y-0.5 transition-transform" />
        </button>

        <button
          id="pulse-ping-btn"
          onClick={onTriggerPulse}
          className="px-4 py-2 rounded-xl bg-gray-800/80 hover:bg-gray-700/80 active:scale-95 text-gray-300 hover:text-white text-xs font-medium border border-gray-700/60 transition-all flex items-center space-x-1.5 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Ping Sandbox</span>
        </button>

        <span
          id="interaction-counter"
          className="text-xs text-gray-400 font-mono py-1 px-2.5 rounded-md bg-gray-900/60 border border-gray-800"
        >
          Interactions: {interactionCount}
        </span>
      </div>
    </div>
  );
};
