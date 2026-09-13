import React, { useState } from 'react';
import { 
  Camera, 
  ExternalLink, 
  Eye, 
  Download, 
  Maximize2, 
  X, 
  ArrowUpRight 
} from 'lucide-react';

interface BentoPhoto {
  id: string;
  indexStr: string;
  title: string;
  category: string;
  location: string;
  views: string;
  viewsNum: number;
  downloads: string;
  downloadsNum: number;
  unsplashUrl: string;
  localSrc: string;
  cdnSrc: string;
  colSpan: string;
  aspectClass: string;
}

const bentoPhotos: BentoPhoto[] = [
  {
    id: 'warplanes-display',
    indexStr: '01',
    title: 'Bristol Blenheim at Duxford',
    category: 'Historic Aviation',
    location: 'Imperial War Museum Duxford, UK',
    views: '1,144',
    viewsNum: 1144,
    downloads: '20',
    downloadsNum: 20,
    unsplashUrl: 'https://unsplash.com/photos/warplanes-stand-on-display-in-front-of-a-crowd--fVAm8QQzzg',
    localSrc: '/assets/photography/warplanes-display.jpg',
    cdnSrc: 'https://images.unsplash.com/photo-1751877338999-02175bc6c88c?auto=format&fit=crop&q=80&w=1600',
    colSpan: 'col-span-12 lg:col-span-7',
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'concrete-cross',
    indexStr: '02',
    title: 'Grayscale Photo of Concrete Cross',
    category: 'Monochrome Memorial',
    location: 'London, United Kingdom',
    views: '561,329',
    viewsNum: 561329,
    downloads: '3,591',
    downloadsNum: 3591,
    unsplashUrl: 'https://unsplash.com/photos/grayscale-photo-of-concrete-cross-0UVEan1xVn0',
    localSrc: '/assets/photography/concrete-cross.jpg',
    cdnSrc: 'https://images.unsplash.com/photo-1615200995469-ac4e82a5d05a?auto=format&fit=crop&q=80&w=1600',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-5',
    aspectClass: 'aspect-[4/3] lg:aspect-[16/10]',
  },
  {
    id: 'mechanics-spitfire',
    indexStr: '03',
    title: 'Mechanics Prepare Classic Planes for Flight',
    category: 'Flight Engineering',
    location: 'Airfield Flight Line, UK',
    views: '5,266',
    viewsNum: 5266,
    downloads: '20',
    downloadsNum: 20,
    unsplashUrl: 'https://unsplash.com/photos/mechanics-prepare-classic-planes-for-flight-I_wI4rgaE9Q',
    localSrc: '/assets/photography/mechanics-spitfire.jpg',
    cdnSrc: 'https://images.unsplash.com/photo-1751842871197-bcb79ea64069?auto=format&fit=crop&q=80&w=1600',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'vintage-biplane',
    indexStr: '04',
    title: 'Vintage Airplane on the Runway Ready to Fly',
    category: 'Vintage Aviation',
    location: 'Duxford Airfield, UK',
    views: '3,712',
    viewsNum: 3712,
    downloads: '9',
    downloadsNum: 9,
    unsplashUrl: 'https://unsplash.com/photos/vintage-airplane-on-the-runway-ready-to-fly-zJBzNMshVf0',
    localSrc: '/assets/photography/vintage-biplane.jpg',
    cdnSrc: 'https://images.unsplash.com/photo-1751842925509-313be882efae?auto=format&fit=crop&q=80&w=1600',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'crew-fueling-plane',
    indexStr: '05',
    title: 'People Preparing a Plane on the Grass',
    category: 'Flight Line Operations',
    location: 'Airfield Ground Crew, UK',
    views: '7,674',
    viewsNum: 7674,
    downloads: '84',
    downloadsNum: 84,
    unsplashUrl: 'https://unsplash.com/photos/people-preparing-a-plane-on-the-grass-qjgdstFeHiA',
    localSrc: '/assets/photography/crew-fueling-plane.jpg',
    cdnSrc: 'https://images.unsplash.com/photo-1751842877382-c7584c5ff864?auto=format&fit=crop&q=80&w=1600',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'fire-truck-cab',
    indexStr: '06',
    title: 'Red, Blue and Yellow Fire Truck',
    category: 'London Fire Brigade',
    location: 'London, United Kingdom',
    views: '61,520',
    viewsNum: 61520,
    downloads: '730',
    downloadsNum: 730,
    unsplashUrl: 'https://unsplash.com/photos/red-blue-and-yellow-fire-truck-UyAgwgLuS9Q',
    localSrc: '/assets/photography/fire-truck-cab.jpg',
    cdnSrc: 'https://images.unsplash.com/photo-1629559618080-8f830e196e72?auto=format&fit=crop&q=80&w=1600',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'ealing-fire-station',
    indexStr: '07',
    title: 'Red and Yellow Fire Truck Parked Near Building',
    category: 'Civic Architecture',
    location: 'Ealing Fire Station, London',
    views: '157,974',
    viewsNum: 157974,
    downloads: '2,586',
    downloadsNum: 2586,
    unsplashUrl: 'https://unsplash.com/photos/red-and-yellow-fire-truck-parked-near-building-during-daytime-hwHhdIpJ5P0',
    localSrc: '/assets/photography/ealing-fire-station.jpg',
    cdnSrc: 'https://images.unsplash.com/photo-1629559618578-ec27c972a9bc?auto=format&fit=crop&q=80&w=1600',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-6',
    aspectClass: 'aspect-[16/10]',
  },
];

export const PhotographySubpage: React.FC = () => {
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<BentoPhoto | null>(null);

  const totalViews = bentoPhotos.reduce((sum, p) => sum + p.viewsNum, 0).toLocaleString();
  const totalDownloads = bentoPhotos.reduce((sum, p) => sum + p.downloadsNum, 0).toLocaleString();

  return (
    <div className="w-full min-h-screen bg-[#070707] text-white selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Top Coordinate Header */}
        <div className="pb-6 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Camera className="w-4 h-4 text-white" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase">
              COPYRIGHT FREE &bull; PHOTOGRAPHY FOR EVERYONE
            </span>
          </div>

          <a
            href="https://unsplash.com/@kaibutcher"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-all flex items-center space-x-2 shadow-lg"
          >
            <span>VIEW UNSPLASH (@KAIBUTCHER)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hero Banner with H1 and Intro Body Copy */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-3">
            ARCHITECTURAL &bull; SPATIAL &bull; DOCUMENTARY
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-5">
            Photography
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl">
            I like to share what I've captured, they're usually of things I like. Some you may have seen on the local paper.
          </p>
        </div>

        {/* Bento Overview & Telemetry Boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {/* Box 1: Total Views */}
          <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between group hover:border-white/20 transition-all">
            <div className="flex items-center justify-between text-white/50 text-[10px] font-mono tracking-widest uppercase mb-3">
              <span>01 &bull; TOTAL VIEWS</span>
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white mb-1">
                {totalViews}
              </div>
              <p className="text-xs text-white/50 font-mono">
                Verified Unsplash impressions
              </p>
            </div>
          </div>

          {/* Box 2: Total Downloads */}
          <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between group hover:border-white/20 transition-all">
            <div className="flex items-center justify-between text-white/50 text-[10px] font-mono tracking-widest uppercase mb-3">
              <span>02 &bull; DOWNLOADS</span>
              <Download className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white mb-1">
                {totalDownloads}
              </div>
              <p className="text-xs text-white/50 font-mono">
                Direct global acquisitions
              </p>
            </div>
          </div>

          {/* Box 3: License */}
          <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between group hover:border-white/20 transition-all">
            <div className="flex items-center justify-between text-white/50 text-[10px] font-mono tracking-widest uppercase mb-3">
              <span>03 &bull; LICENSE</span>
              <Camera className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold font-mono tracking-tight text-white uppercase mb-1">
                FREE / CC0
              </div>
              <p className="text-xs text-white/50 font-mono">
                Commercial &amp; personal use
              </p>
            </div>
          </div>

          {/* Box 4: Profile Link */}
          <a
            href="https://unsplash.com/@kaibutcher"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between group hover:border-white/30 hover:bg-[#141414] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between text-white/50 text-[10px] font-mono tracking-widest uppercase mb-3">
              <span>04 &bull; PROFILE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold font-mono tracking-tight text-white uppercase mb-1">
                @KAIBUTCHER
              </div>
              <p className="text-xs text-white/50 font-mono">
                Curated Unsplash catalog &rarr;
              </p>
            </div>
          </a>
        </div>

        {/* Bento-Style Image Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 mb-16">
          {bentoPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`${photo.colSpan} group relative bg-[#0e0e0e] border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-2xl`}
            >
              {/* Image Artboard */}
              <div 
                onClick={() => setActiveLightboxPhoto(photo)}
                className={`relative ${photo.aspectClass} w-full overflow-hidden bg-[#070707] cursor-pointer`}
              >
                <img
                  src={photo.localSrc}
                  alt={photo.title}
                  onError={(e) => {
                    // Fallback to Unsplash CDN if local asset path differs
                    if (e.currentTarget.src !== photo.cdnSrc) {
                      e.currentTarget.src = photo.cdnSrc;
                    }
                  }}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                />

                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Top Meta Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-start pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-[#070707]/85 backdrop-blur-md text-[10px] font-mono text-white/90 tracking-widest uppercase border border-white/10">
                    CAPTURE {photo.indexStr}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveLightboxPhoto(photo);
                    }}
                    className="pointer-events-auto p-2 rounded-md bg-[#070707]/85 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 border border-white/10"
                    title="Expand photograph"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Below-Picture Bento Panel with Views, Downloads, and Icon CTA on ONE clean line */}
              <div className="p-4 sm:p-5 bg-[#0e0e0e] border-t border-white/10 flex flex-col justify-between flex-1">
                {/* Photo Title & Location */}
                <div className="mb-3">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase">
                      {photo.category}
                    </span>
                    <span className="text-[10px] font-mono text-white/40 truncate">
                      {photo.location}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight leading-snug">
                    {photo.title}
                  </h3>
                </div>

                {/* Telemetry & Icon CTA Row - Strictly on ONE single line */}
                <div className="pt-2.5 border-t border-white/5 flex items-center justify-between gap-2 whitespace-nowrap">
                  {/* Views & Downloads Counters from Unsplash */}
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <div 
                      className="flex items-center gap-1 text-white/70 group-hover:text-white transition-colors"
                      title={`${photo.views} Views on Unsplash`}
                    >
                      <Eye className="w-3.5 h-3.5 text-white/40 group-hover:text-emerald-400 transition-colors shrink-0" />
                      <span className="font-semibold text-white/90">{photo.views}</span>
                    </div>

                    <span className="text-white/20">&bull;</span>

                    <div 
                      className="flex items-center gap-1 text-white/70 group-hover:text-white transition-colors"
                      title={`${photo.downloads} Downloads on Unsplash`}
                    >
                      <Download className="w-3.5 h-3.5 text-white/40 group-hover:text-blue-400 transition-colors shrink-0" />
                      <span className="font-semibold text-white/90">{photo.downloads}</span>
                    </div>
                  </div>

                  {/* Icon-Only Unsplash CTA Link */}
                  <a
                    href={photo.unsplashUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-white text-white/80 group-hover:text-black flex items-center justify-center transition-all duration-200 hover:scale-110 shrink-0"
                    title="View on Unsplash"
                    aria-label="View on Unsplash"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Fullscreen Modal */}
        {activeLightboxPhoto && (
          <div
            className="fixed inset-0 z-50 bg-[#070707]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8"
            onClick={() => setActiveLightboxPhoto(null)}
          >
            <div
              className="relative w-full max-w-5xl bg-[#0e0e0e] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#070707]/80 hover:bg-white text-white hover:text-black transition-all cursor-pointer border border-white/10"
                title="Close Inspector"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Frame */}
              <div className="bg-[#070707] flex items-center justify-center p-4 sm:p-6 overflow-hidden max-h-[62vh]">
                <img
                  src={activeLightboxPhoto.localSrc}
                  alt={activeLightboxPhoto.title}
                  onError={(e) => {
                    if (e.currentTarget.src !== activeLightboxPhoto.cdnSrc) {
                      e.currentTarget.src = activeLightboxPhoto.cdnSrc;
                    }
                  }}
                  referrerPolicy="no-referrer"
                  className="max-h-[56vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Modal Meta & Direct Links */}
              <div className="p-6 sm:p-8 bg-[#0e0e0e] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase block mb-1">
                    CAPTURE {activeLightboxPhoto.indexStr} &bull; {activeLightboxPhoto.category} &bull; {activeLightboxPhoto.location}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    {activeLightboxPhoto.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3 text-xs font-mono px-3.5 py-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="flex items-center gap-1.5 text-white/80">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <strong>{activeLightboxPhoto.views}</strong> views
                    </span>
                    <span className="text-white/20">&bull;</span>
                    <span className="flex items-center gap-1.5 text-white/80">
                      <Download className="w-3.5 h-3.5 text-blue-400" />
                      <strong>{activeLightboxPhoto.downloads}</strong> downloads
                    </span>
                  </div>

                  <a
                    href={activeLightboxPhoto.unsplashUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-white text-black font-mono text-xs font-bold hover:bg-neutral-200 transition-all flex items-center space-x-1.5 shadow-lg"
                  >
                    <span>OPEN ON UNSPLASH</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <span>01 PHOTOGRAPHY &bull; UNSPLASH ARCHIVE CAPTURES</span>
          <a 
            href="https://unsplash.com/@kaibutcher" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            CURATED PORTFOLIO // @KAIBUTCHER
          </a>
        </div>
      </div>
    </div>
  );
};
