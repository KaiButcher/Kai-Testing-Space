import React from 'react';
import { PrototypeItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface PrototypesGridProps {
  prototypes: PrototypeItem[];
  onLaunch: (prototype: PrototypeItem) => void;
}

export const PrototypesGrid: React.FC<PrototypesGridProps> = ({
  prototypes,
  onLaunch,
}) => {
  return (
    <section id="prototypes-section" className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {prototypes.map((item) => (
        <div
          key={item.id}
          id={`card-${item.id}`}
          className="bento-card rounded-3xl p-6 flex flex-col justify-between border border-gray-800 group shadow-lg"
        >
          <div>
            <div className="h-44 rounded-2xl overflow-hidden mb-5 bg-gray-900 relative">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181b24] via-transparent to-transparent opacity-60 pointer-events-none" />
              <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] font-medium text-indigo-300 border border-white/10">
                {item.tag}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {item.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-800/60 text-xs">
            <span className="text-gray-500 font-mono">{item.prototypeNumber}</span>
            <button
              id={`launch-btn-${item.id}`}
              onClick={() => onLaunch(item)}
              className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center space-x-1 cursor-pointer group/btn"
            >
              <span>Launch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
