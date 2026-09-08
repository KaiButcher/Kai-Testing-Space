import React, { useState } from 'react';
import { KaiSpaceSquare } from './components/KaiSpaceSquare';
import { PhotographyBento } from './components/PhotographyBento';
import { GraphicDesignBento } from './components/GraphicDesignBento';
import { PlaygroundBento } from './components/AnimationBento';
import { ArchiveBento } from './components/ArchiveBento';
import { BentoModalWrapper } from './components/subpages/BentoModalWrapper';
import { BentoPageId } from './types';

export default function App() {
  const [activeBento, setActiveBento] = useState<BentoPageId | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#0d0e11] text-white selection:bg-white selection:text-black p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col justify-center items-center relative">
      {/* 
        3x3 Frame-filling Bento Grid for Desktop and iPad:
        - 1px crisp white hairline division stroke with zero padding between cells
        - Exact stacking and cell distribution across 3 rows and 3 columns:
          Row 1: [Kai's Space 1x1] [01 Photography 2x1]
          Row 2: [02 Graphic Design 2x1] [03 Playground 1x2 (spans rows 2 & 3 in col 3)]
          Row 3: [04 Archive 2x1] (completes cols 1 & 2 of row 3)
      */}
      <main className="w-full max-w-[1700px] bento-3x3-container bg-white border border-white rounded-2xl overflow-hidden shadow-2xl p-0 m-0 sm:h-[calc(100vh-2rem)] sm:min-h-[640px] sm:max-h-[1100px]">
        <KaiSpaceSquare onExpand={() => setActiveBento('space')} />
        <PhotographyBento onExpand={() => setActiveBento('photo')} />
        <GraphicDesignBento onExpand={() => setActiveBento('design')} />
        <PlaygroundBento onExpand={() => setActiveBento('playground')} />
        <ArchiveBento onExpand={() => setActiveBento('archive')} />
      </main>

      {/* Expanded Bento Modal Overlay with shared layoutId and big X close button */}
      <BentoModalWrapper
        activeBento={activeBento}
        onClose={() => setActiveBento(null)}
      />
    </div>
  );
}
