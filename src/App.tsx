import React from 'react';
import { KaiSpaceSquare } from './components/KaiSpaceSquare';
import { PhotographyBento } from './components/PhotographyBento';
import { GraphicDesignBento } from './components/GraphicDesignBento';
import { AnimationBento } from './components/AnimationBento';
import { ArchiveBento } from './components/ArchiveBento';

export default function App() {
  return (
    <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden bg-[#0d0e11] text-white selection:bg-white selection:text-black p-2 sm:p-3 md:p-4 flex flex-col justify-center">
      {/* 
        3x3 Frame-filling Bento Grid directly matching the visual reference:
        - Rounded-2xl container
        - 1px crisp white hairline division stroke with zero padding between cells
        - Deep charcoal matte background
        - All text in IBM Plex Sans
        - Exact stacking order:
          [01,01] Kai's Space
          [01] Photography (ONLY this opens anything -> https://unsplash.com/@kaibutcher)
          [02] Graphic Design
          [03] Animation
          [04] Archive
      */}
      <main className="w-full h-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-[1px] bg-white border border-white rounded-2xl overflow-hidden shadow-2xl p-0 m-0">
        {/* ROW 1: [Kai's Space 1x1] + [01 Photography 2x1 (Hero rectangle, opens Unsplash)] */}
        <KaiSpaceSquare />
        <PhotographyBento />

        {/* ROW 2: [02 Graphic Design 2x1] + [03 Animation 1x2 (spans rows 2 & 3 in col 3)] */}
        <GraphicDesignBento />
        <AnimationBento />

        {/* ROW 3: [04 Archive 2x1] (fills cols 1 & 2 of bottom row) */}
        <ArchiveBento />
      </main>
    </div>
  );
}
