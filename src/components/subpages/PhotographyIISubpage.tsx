import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Download,
  ArrowUpRight,
  Camera,
  Play,
  Pause,
} from 'lucide-react';

import frame1 from '../../assets/images/frame_1.jpg';
import frame2 from '../../assets/images/frame_2.jpg';

interface CarouselPhoto {
  id: string;
  indexStr: string;
  title: string;
  category: string;
  location: string;
  views: string;
  downloads: string;
  unsplashUrl: string;
  imageSrc: string;
  fallbackSrc: string;
}

const carouselPhotos: CarouselPhoto[] = [
  {
    id: 'frame-1-mechanics',
    indexStr: '01',
    title: 'Mechanics Prepare Classic Planes for Flight',
    category: 'Flight Engineering',
    location: 'Airfield Flight Line, UK',
    views: '5,266',
    downloads: '20',
    unsplashUrl: 'https://unsplash.com/photos/mechanics-prepare-classic-planes-for-flight-I_wI4rgaE9Q',
    imageSrc: '/assets/Frame 1.jpg',
    fallbackSrc: frame1,
  },
  {
    id: 'frame-2-warplanes',
    indexStr: '02',
    title: 'Bristol Blenheim at Duxford',
    category: 'Historic Aviation',
    location: 'Imperial War Museum Duxford, UK',
    views: '1,144',
    downloads: '20',
    unsplashUrl: 'https://unsplash.com/photos/warplanes-stand-on-display-in-front-of-a-crowd--fVAm8QQzzg',
    imageSrc: '/assets/Frame 2.jpg',
    fallbackSrc: frame2,
  },
];

export const PhotographyIISubpage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselPhotos.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselPhotos.length) % carouselPhotos.length);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay slideshow
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  // Keyboard navigation (Left, Right, Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartXRef.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  const currentPhoto = carouselPhotos[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? '100%' : '-100%',
      scale: 1,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? '-100%' : '100%',
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <div
      className="fixed inset-0 w-full h-full min-h-screen bg-[#070707] text-white flex flex-col justify-between overflow-hidden select-none z-40"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 
        Full Bleed Carousel Stage
        - Full width on any 16x9 display
        - Full height on any 9x16 mobile display
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPhoto.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <img
              src={currentPhoto.imageSrc}
              alt={currentPhoto.title}
              onError={(e) => {
                if (e.currentTarget.src !== currentPhoto.fallbackSrc) {
                  e.currentTarget.src = currentPhoto.fallbackSrc;
                }
              }}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Vignette Overlay for Header Readability */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10" />

      {/* Bottom Vignette Overlay for Footer Readability */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none z-10" />

      {/* Minimal Top Header Bar */}
      <header className="relative z-20 px-5 sm:px-8 pt-5 pb-3 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-2.5">
          <Camera className="w-4 h-4 text-white/90" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/90 uppercase font-medium">
            [03] PHOTOGRAPHY II &bull; FULL BLEED
          </span>
        </div>

        {/* Slideshow Controls & Counter */}
        <div className="flex items-center space-x-3 sm:space-x-4 pr-14 sm:pr-16">
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            className="text-white/70 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/10 backdrop-blur-sm"
            title={isPlaying ? 'Pause slideshow (Space)' : 'Play slideshow (Space)'}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <span className="text-xs font-mono text-white/80 tracking-wider backdrop-blur-sm px-2 py-0.5 rounded bg-black/30 border border-white/10">
            <strong className="text-white font-semibold">
              {String(currentIndex + 1).padStart(2, '0')}
            </strong>
            {' / '}
            {String(carouselPhotos.length).padStart(2, '0')}
          </span>
        </div>
      </header>

      {/* Edge Navigation Chevron Buttons */}
      <div className="relative z-20 flex-1 flex items-center justify-between px-3 sm:px-6 pointer-events-none">
        <button
          type="button"
          onClick={prevSlide}
          className="pointer-events-auto p-3 sm:p-4 rounded-full bg-black/50 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 shadow-2xl cursor-pointer"
          title="Previous image (←)"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="pointer-events-auto p-3 sm:p-4 rounded-full bg-black/50 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 shadow-2xl cursor-pointer"
          title="Next image (→)"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Minimal Dock: View & Download Counter + External Unsplash Link */}
      <footer className="relative z-20 px-5 sm:px-8 py-3.5 sm:py-4 border-t border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-between gap-4 shrink-0">
        {/* Minimal Photo Title */}
        <div className="flex items-center space-x-2.5 truncate max-w-sm sm:max-w-md">
          <span className="text-[11px] font-mono tracking-widest text-white/50 uppercase shrink-0">
            {currentPhoto.indexStr}
          </span>
          <span className="text-white/30">&bull;</span>
          <span className="text-xs sm:text-sm font-semibold font-mono tracking-wide text-white uppercase truncate">
            {currentPhoto.title}
          </span>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="flex items-center space-x-2 shrink-0">
          {carouselPhotos.map((photo, idx) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* View & Download Counter + Unsplash External Icon */}
        <div className="flex items-center space-x-4 sm:space-x-6 shrink-0 font-mono text-xs">
          {/* Views Counter */}
          <div 
            className="flex items-center space-x-1.5 text-white/90" 
            title={`${currentPhoto.views} Views on Unsplash`}
          >
            <Eye className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="font-semibold text-white">{currentPhoto.views}</span>
            <span className="hidden sm:inline text-[10px] text-white/60 uppercase">views</span>
          </div>

          <span className="text-white/30">&bull;</span>

          {/* Downloads Counter */}
          <div 
            className="flex items-center space-x-1.5 text-white/90" 
            title={`${currentPhoto.downloads} Downloads on Unsplash`}
          >
            <Download className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="font-semibold text-white">{currentPhoto.downloads}</span>
            <span className="hidden sm:inline text-[10px] text-white/60 uppercase">downloads</span>
          </div>

          {/* External Link Icon to Unsplash */}
          <a
            href={currentPhoto.unsplashUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/15 hover:bg-white text-white hover:text-black transition-all duration-200 flex items-center space-x-1.5 cursor-pointer shadow-md group border border-white/10 hover:border-white"
            title="Open on Unsplash"
            aria-label="Open on Unsplash"
          >
            <span className="hidden sm:inline text-[11px] font-semibold tracking-wider">UNSPLASH</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </footer>
    </div>
  );
};
