import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { BentoPageId } from '../../types';
import { KaiSpaceSubpage } from './KaiSpaceSubpage';
import { PhotographySubpage } from './PhotographySubpage';
import { GraphicDesignSubpage } from './GraphicDesignSubpage';
import { AnimationSubpage as PlaygroundSubpage } from './AnimationSubpage';
import { ArchiveSubpage } from './ArchiveSubpage';

interface BentoModalWrapperProps {
  activeBento: BentoPageId | null;
  onClose: () => void;
}

export const BentoModalWrapper: React.FC<BentoModalWrapperProps> = ({
  activeBento,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!activeBento) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Scroll container to top
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeBento, onClose]);

  return (
    <AnimatePresence mode="wait">
      {activeBento && (
        <motion.div
          key={activeBento}
          layoutId={`bento-card-${activeBento}`}
          ref={containerRef}
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 280,
            damping: 32,
            mass: 0.8,
          }}
          className="fixed inset-0 z-50 bg-[#121316] text-white overflow-y-auto overscroll-contain select-text"
          id={`expanded-subpage-${activeBento}`}
        >
          {/* Subtle noise and background grid */}
          <div className="fixed inset-0 bg-matte-noise opacity-20 pointer-events-none z-0" />

          {/* Big X close button in the top right */}
          <motion.button
            onClick={onClose}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-black hover:bg-neutral-200 active:scale-90 shadow-2xl flex items-center justify-center cursor-pointer border-2 border-white transition-all group focus:outline-none focus:ring-4 focus:ring-white/30"
            aria-label="Close and collapse back to grid"
            title="Collapse back to grid (Esc)"
            id="close-expanded-bento-btn"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
            <span className="sr-only">Close</span>
          </motion.button>

          {/* Subpage Content with fade-in */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.15, duration: 0.25 }}
            className="relative z-10 min-h-screen"
          >
            {activeBento === 'space' && <KaiSpaceSubpage />}
            {activeBento === 'photo' && <PhotographySubpage />}
            {activeBento === 'design' && <GraphicDesignSubpage />}
            {(activeBento === 'playground' || activeBento === 'anim') && <PlaygroundSubpage />}
            {activeBento === 'archive' && <ArchiveSubpage />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
