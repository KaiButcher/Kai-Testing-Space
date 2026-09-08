import React, { useState } from 'react';
import { 
  Camera, 
  ExternalLink, 
  MapPin, 
  Sliders, 
  Maximize2, 
  X, 
  Info, 
  Calendar, 
  Eye, 
  Compass, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  series: 'Brutalism' | 'Monoliths' | 'Shadow & Light' | 'Terrains';
  location: string;
  year: string;
  camera: string;
  lens: string;
  shutter: string;
  aperture: string;
  iso: string;
  filmSensor: string;
  notes: string;
  imageUrl: string;
}

const photoCatalog: PhotoItem[] = [
  {
    id: 'photo-01',
    title: 'Barbican South Elevation',
    series: 'Brutalism',
    location: 'Barbican Estate, London',
    year: '2025',
    camera: 'Leica M10-R',
    lens: 'Summicron-M 35mm f/2 ASPH',
    shutter: '1/500s',
    aperture: 'f/8.0',
    iso: '100',
    filmSensor: '40.89MP DNG Raw',
    notes: 'Textured bush-hammered concrete columns catching raking 9am winter sunlight across the lake terrace.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-02',
    title: 'Monolith Void',
    series: 'Shadow & Light',
    location: 'Canary Wharf, London',
    year: '2025',
    camera: 'Leica M10-R',
    lens: 'Elmarit-M 28mm f/2.8',
    shutter: '1/1000s',
    aperture: 'f/5.6',
    iso: '200',
    filmSensor: 'Monochrome High-Contrast DNG',
    notes: 'Deep geometric shadow cast between adjacent reflective facades. Captured with 090 deep red glass filter.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-03',
    title: 'Hayward Gallery Stairs',
    series: 'Brutalism',
    location: 'Southbank Centre, London',
    year: '2024',
    camera: 'Hasselblad 500C/M',
    lens: 'Carl Zeiss Planar 80mm f/2.8',
    shutter: '1/250s',
    aperture: 'f/11.0',
    iso: '400',
    filmSensor: 'Kodak Tri-X 400 (Pushed to 1600)',
    notes: 'Board-marked shuttered concrete staircase. Grain structure reveals microscopic aggregate composition.',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-04',
    title: 'Tokyo Transit Monolith',
    series: 'Monoliths',
    location: 'Shinjuku, Tokyo',
    year: '2024',
    camera: 'Leica M10-R',
    lens: 'Summilux-M 50mm f/1.4',
    shutter: '1/125s',
    aperture: 'f/2.8',
    iso: '800',
    filmSensor: 'Low-light Monochrome Raw',
    notes: 'Overhanging concrete viaduct intersecting elevated highway ramp amidst atmospheric evening drizzle.',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-05',
    title: 'Basalt Hexagons',
    series: 'Terrains',
    location: 'Reynisfjara, Iceland',
    year: '2024',
    camera: 'Hasselblad 500C/M',
    lens: 'Distagon 50mm f/4',
    shutter: '1/60s',
    aperture: 'f/16.0',
    iso: '100',
    filmSensor: 'Ilford Pan F Plus 50',
    notes: 'Naturally formed volcanic basalt columns rising like organ pipes from crushed black lava sand.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-06',
    title: 'National Theatre Cantilever',
    series: 'Brutalism',
    location: 'Waterloo, London',
    year: '2023',
    camera: 'Leica M6 Classic',
    lens: 'Summicron-M 35mm f/2',
    shutter: '1/500s',
    aperture: 'f/8.0',
    iso: '400',
    filmSensor: 'Ilford HP5 Plus (Developed in Rodinal)',
    notes: 'Denys Lasdun designed interlocking horizontal concrete trays extending towards the River Thames.',
    imageUrl: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-07',
    title: 'Ginza Steel Struts',
    series: 'Monoliths',
    location: 'Ginza, Tokyo',
    year: '2024',
    camera: 'Leica M10-R',
    lens: 'Elmarit-M 28mm f/2.8',
    shutter: '1/750s',
    aperture: 'f/6.3',
    iso: '160',
    filmSensor: 'Monochrome High-Key Raw',
    notes: 'Precision welded structural steel exoskeleton supporting modern seismic dampers.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-08',
    title: 'Equinox Shadows',
    series: 'Shadow & Light',
    location: 'Battersea Power Station, London',
    year: '2025',
    camera: 'Leica M10-R',
    lens: 'Summicron-M 35mm f/2 ASPH',
    shutter: '1/1000s',
    aperture: 'f/9.0',
    iso: '100',
    filmSensor: '40.89MP DNG Raw',
    notes: 'High noon angular shadows cast by brick pilasters forming a rhythm of pure black and bleached cream.',
    imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-09',
    title: 'Nordic Horizon Rift',
    series: 'Terrains',
    location: 'Vik, Iceland',
    year: '2024',
    camera: 'Hasselblad 500C/M',
    lens: 'Carl Zeiss Planar 80mm f/2.8',
    shutter: '1/125s',
    aperture: 'f/11.0',
    iso: '100',
    filmSensor: 'Kodak T-Max 100',
    notes: 'Minimalist horizon where cold North Atlantic swell collides with pitch-black basalt cliffs in heavy fog.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-10',
    title: 'Robin Hood Gardens Fragment',
    series: 'Brutalism',
    location: 'Poplar, London',
    year: '2023',
    camera: 'Leica M6 Classic',
    lens: 'Summicron-M 35mm f/2',
    shutter: '1/250s',
    aperture: 'f/5.6',
    iso: '400',
    filmSensor: 'Kodak Tri-X 400',
    notes: 'Archival study of Alison and Peter Smithson pre-cast acoustic concrete mullions before demolition.',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-11',
    title: 'Kyoto Concrete Pavilions',
    series: 'Monoliths',
    location: 'Kyoto, Japan',
    year: '2024',
    camera: 'Leica M10-R',
    lens: 'Summicron-M 35mm f/2 ASPH',
    shutter: '1/320s',
    aperture: 'f/4.0',
    iso: '250',
    filmSensor: '40.89MP DNG Raw',
    notes: 'Tadao Ando inspired smooth formwork concrete with cone tie-holes creating tactile geometric grids.',
    imageUrl: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'photo-12',
    title: 'Oblique Aperture 04',
    series: 'Shadow & Light',
    location: 'City of London, UK',
    year: '2025',
    camera: 'Leica M10-R',
    lens: 'Elmarit-M 28mm f/2.8',
    shutter: '1/800s',
    aperture: 'f/8.0',
    iso: '100',
    filmSensor: 'Monochrome High-Contrast DNG',
    notes: 'Razor-sharp diagonal shadow boundary slicing across fluted stone masonry.',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop',
  },
];

export const PhotographySubpage: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const seriesList = ['All', 'Brutalism', 'Monoliths', 'Shadow & Light', 'Terrains'];

  const filteredPhotos = selectedSeries === 'All' 
    ? photoCatalog 
    : photoCatalog.filter(p => p.series === selectedSeries);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white selection:bg-white selection:text-black">
      {/* Top Coordinate Header */}
      <div className="border-b border-white/15 pb-6 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Camera className="w-4 h-4 text-white" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase">
            [01] CATALOG &bull; PHOTOGRAPHY ARCHIVE
          </span>
        </div>

        <a
          href="https://unsplash.com/@kaibutcher"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-white text-black font-mono text-xs font-semibold hover:bg-white/90 transition-all flex items-center space-x-2 shadow-lg"
        >
          <span>VIEW UNSPLASH (@KAIBUTCHER)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Hero Banner */}
      <div className="mb-12">
        <span className="text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-3">
          ARCHITECTURAL &bull; BRUTALIST &bull; LIGHT STUDIES
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-6">
          Photography
        </h1>
        <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-3xl mb-8">
          A curated catalog of monochrome spatial captures examining structural concrete, optical voids, and architectural light. Shot on manual rangefinders and medium format analog film.
        </p>

        {/* Series Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {seriesList.map((series) => {
            const count = series === 'All' 
              ? photoCatalog.length 
              : photoCatalog.filter(p => p.series === series).length;

            return (
              <button
                key={series}
                onClick={() => setSelectedSeries(series)}
                className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                  selectedSeries === series
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>{series}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  selectedSeries === series ? 'bg-black/20 text-black' : 'bg-white/10 text-white/60'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Photo Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group bg-[#16181d] border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-white/40 transition-all flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16181d] via-transparent to-transparent pointer-events-none opacity-60" />
              
              <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>INSPECT EXIF</span>
              </div>
            </div>

            {/* Meta Footer */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-white/50 mb-1">
                  <span className="uppercase tracking-widest">{photo.series}</span>
                  <span>{photo.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-white transition-colors mb-2">
                  {photo.title}
                </h3>
                <p className="text-xs text-white/60 flex items-center space-x-1 font-mono mb-4">
                  <MapPin className="w-3 h-3 text-white/40 shrink-0" />
                  <span className="truncate">{photo.location}</span>
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-white/60">
                <span className="truncate max-w-[180px]">{photo.camera}</span>
                <span className="text-white/80 group-hover:underline flex items-center space-x-1">
                  <span>EXIF &rarr;</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Photographic Gear Specs */}
      <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8 mb-12">
        <div className="mb-6">
          <span className="text-xs font-mono text-white/50 tracking-widest uppercase block mb-1">
            OPTICS &amp; DARKROOM EQUIPMENT
          </span>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
            The Rangefinder Kit
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">BODY // DIGITAL</span>
            <h4 className="text-sm font-bold text-white font-mono mb-1">Leica M10-R</h4>
            <p className="text-xs text-white/70">40.89MP full-frame rangefinder, base ISO 100, manual mechanical focus patch.</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">OPTICS // STANDARD</span>
            <h4 className="text-sm font-bold text-white font-mono mb-1">Summicron 35mm f/2</h4>
            <p className="text-xs text-white/70">ASPH formulation, zero barrel distortion, razor-sharp edge contrast at f/5.6.</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">BODY // ANALOG</span>
            <h4 className="text-sm font-bold text-white font-mono mb-1">Hasselblad 500C/M</h4>
            <p className="text-xs text-white/70">6x6 medium format SLR with Carl Zeiss Planar 80mm f/2.8 T* coating.</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">EMULSIONS</span>
            <h4 className="text-sm font-bold text-white font-mono mb-1">Tri-X 400 &amp; HP5+</h4>
            <p className="text-xs text-white/70">Traditional silver halide grain, developed by hand in Kodak D-76 and Rodinal.</p>
          </div>
        </div>
      </div>

      {/* Photo Inspector Modal (Lightbox) */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#121316] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Lightbox */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-white text-white hover:text-black transition-all cursor-pointer border border-white/20"
              title="Close Inspector"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image View */}
            <div className="lg:w-7/12 bg-black flex items-center justify-center p-4 sm:p-6 overflow-hidden">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[50vh] lg:max-h-[75vh] w-auto max-w-full object-contain grayscale contrast-125"
              />
            </div>

            {/* Right Telemetry Sidebar */}
            <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/15">
              <div>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-white/50 mb-2">
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white/90 uppercase">
                    {selectedPhoto.series}
                  </span>
                  <span>&bull; {selectedPhoto.year}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                  {selectedPhoto.title}
                </h2>

                <p className="text-xs text-white/60 flex items-center space-x-1.5 font-mono mb-6">
                  <MapPin className="w-3.5 h-3.5 text-white/50" />
                  <span>{selectedPhoto.location}</span>
                </p>

                <div className="space-y-4 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                    OPTICAL EXIF METADATA
                  </span>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-white/40 block text-[10px]">CAMERA</span>
                      <span className="text-white font-medium">{selectedPhoto.camera}</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-white/40 block text-[10px]">LENS</span>
                      <span className="text-white font-medium">{selectedPhoto.lens}</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-white/40 block text-[10px]">SHUTTER</span>
                      <span className="text-white font-medium">{selectedPhoto.shutter}</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-white/40 block text-[10px]">APERTURE</span>
                      <span className="text-white font-medium">{selectedPhoto.aperture}</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-white/40 block text-[10px]">ISO</span>
                      <span className="text-white font-medium">{selectedPhoto.iso}</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-white/40 block text-[10px]">FORMAT</span>
                      <span className="text-white font-medium">{selectedPhoto.filmSensor}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10 mb-6">
                  <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">CURATOR FIELD NOTES</span>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    {selectedPhoto.notes}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/40">ARCHIVE ID // {selectedPhoto.id.toUpperCase()}</span>
                <a
                  href="https://unsplash.com/@kaibutcher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-white hover:underline flex items-center space-x-1"
                >
                  <span>FULL RESOLUTION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
