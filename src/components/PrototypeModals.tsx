import React, { useState, useEffect } from 'react';
import { PrototypeItem } from '../types';
import { X, Play, Pause, Disc3, Sliders, Gamepad2, Shuffle, Check, Film, Eye, EyeOff } from 'lucide-react';

interface PrototypeModalProps {
  prototype: PrototypeItem | null;
  onClose: () => void;
  onInteract: () => void;
}

export const PrototypeModal: React.FC<PrototypeModalProps> = ({
  prototype,
  onClose,
  onInteract,
}) => {
  if (!prototype) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#161922] border border-gray-700/80 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {prototype.prototypeNumber}
            </span>
            <h2 className="text-xl font-bold tracking-tight text-white">{prototype.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 overflow-y-auto flex-1 pr-1 space-y-6">
          <p className="text-sm text-gray-300">{prototype.description}</p>

          {prototype.id === 'streamsync' && (
            <StreamSyncSandbox onInteract={onInteract} />
          )}

          {prototype.id === 'keymapper' && (
            <KeymapperSandbox onInteract={onInteract} />
          )}

          {prototype.id === 'screenings' && (
            <ScreeningsSandbox onInteract={onInteract} />
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
          <span>Sandbox Environment &bull; Interactive Simulation</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors cursor-pointer"
          >
            Close Prototype
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- SUB-SANDBOX 1: STREAMSYNC DECK --- */
const StreamSyncSandbox: React.FC<{ onInteract: () => void }> = ({ onInteract }) => {
  const [isPlayingA, setIsPlayingA] = useState(false);
  const [isPlayingB, setIsPlayingB] = useState(false);
  const [crossfader, setCrossfader] = useState(50);
  const [bpm, setBpm] = useState(126);

  return (
    <div className="bg-[#10121a] border border-gray-800 rounded-2xl p-5 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Disc3 className="w-4 h-4 text-indigo-400 animate-spin" style={{ animationDuration: isPlayingA || isPlayingB ? '2s' : '10s' }} />
          <span className="text-xs font-mono text-gray-400 uppercase">Dual Deck Audio Engine</span>
        </div>
        <div className="flex items-center space-x-2 text-xs font-mono">
          <span className="text-gray-500">Master BPM:</span>
          <span className="text-indigo-400 font-semibold">{bpm}</span>
          <button
            onClick={() => {
              setBpm((b) => b + 1);
              onInteract();
            }}
            className="px-2 py-0.5 rounded bg-gray-800 hover:bg-gray-700 text-white text-[10px]"
          >
            +1
          </button>
          <button
            onClick={() => {
              setBpm((b) => Math.max(80, b - 1));
              onInteract();
            }}
            className="px-2 py-0.5 rounded bg-gray-800 hover:bg-gray-700 text-white text-[10px]"
          >
            -1
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Deck A */}
        <div className={`p-4 rounded-xl border transition-all ${isPlayingA ? 'border-indigo-500/50 bg-indigo-950/20' : 'border-gray-800 bg-[#161922]'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-indigo-400">DECK A</span>
            <span className="text-[10px] font-mono text-gray-400">Neon Horizon (Stems)</span>
          </div>
          {/* Simulated Waveform */}
          <div className="h-10 flex items-center justify-between gap-1 bg-black/40 rounded-lg p-1.5 my-3">
            {[40, 70, 90, 60, 80, 45, 100, 75, 50, 85, 65, 95, 30, 80, 60].map((h, i) => (
              <div
                key={i}
                className={`w-full rounded-sm transition-all duration-300 ${isPlayingA ? 'bg-indigo-500' : 'bg-gray-700'}`}
                style={{ height: isPlayingA ? `${Math.min(100, h * (0.6 + Math.random() * 0.5))}%` : `${h * 0.4}%` }}
              />
            ))}
          </div>
          <button
            onClick={() => {
              setIsPlayingA(!isPlayingA);
              onInteract();
            }}
            className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
          >
            {isPlayingA ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlayingA ? 'Pause Deck A' : 'Play Deck A'}</span>
          </button>
        </div>

        {/* Deck B */}
        <div className={`p-4 rounded-xl border transition-all ${isPlayingB ? 'border-purple-500/50 bg-purple-950/20' : 'border-gray-800 bg-[#161922]'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-purple-400">DECK B</span>
            <span className="text-[10px] font-mono text-gray-400">Sub-Bass Protocol</span>
          </div>
          {/* Simulated Waveform */}
          <div className="h-10 flex items-center justify-between gap-1 bg-black/40 rounded-lg p-1.5 my-3">
            {[50, 40, 80, 60, 100, 30, 85, 70, 90, 45, 75, 80, 60, 90, 50].map((h, i) => (
              <div
                key={i}
                className={`w-full rounded-sm transition-all duration-300 ${isPlayingB ? 'bg-purple-500' : 'bg-gray-700'}`}
                style={{ height: isPlayingB ? `${Math.min(100, h * (0.6 + Math.random() * 0.5))}%` : `${h * 0.4}%` }}
              />
            ))}
          </div>
          <button
            onClick={() => {
              setIsPlayingB(!isPlayingB);
              onInteract();
            }}
            className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
          >
            {isPlayingB ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlayingB ? 'Pause Deck B' : 'Play Deck B'}</span>
          </button>
        </div>
      </div>

      {/* Crossfader */}
      <div className="pt-2">
        <div className="flex justify-between text-xs font-mono text-gray-400 mb-1.5">
          <span>Deck A ({100 - crossfader}%)</span>
          <span className="text-gray-500 flex items-center gap-1">
            <Sliders className="w-3 h-3" /> Crossfader
          </span>
          <span>Deck B ({crossfader}%)</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={crossfader}
          onChange={(e) => {
            setCrossfader(Number(e.target.value));
            onInteract();
          }}
          className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-gray-800 rounded-lg"
        />
      </div>
    </div>
  );
};

/* --- SUB-SANDBOX 2: CONSOLE KEYMAPPER --- */
const KeymapperSandbox: React.FC<{ onInteract: () => void }> = ({ onInteract }) => {
  const [bindings, setBindings] = useState<Record<string, string>>({
    'Action A': 'Spacebar (Jump)',
    'Action B': 'Shift (Sprint)',
    'Action X': 'E (Interact)',
    'Action Y': 'Q (Special)',
    'Trigger R2': 'Left Click (Fire)',
    'Trigger L2': 'Right Click (Aim)',
  });
  const [turbo, setTurbo] = useState(true);
  const [copied, setCopied] = useState(false);

  const remapRandom = () => {
    setBindings({
      'Action A': 'Button 0 / Cross',
      'Action B': 'Button 1 / Circle',
      'Action X': 'Button 2 / Square',
      'Action Y': 'Button 3 / Triangle',
      'Trigger R2': 'Axis 5 (Full Travel)',
      'Trigger L2': 'Axis 4 (Full Travel)',
    });
    onInteract();
  };

  const copyConfig = () => {
    navigator.clipboard?.writeText(JSON.stringify({ turbo, bindings }, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onInteract();
  };

  return (
    <div className="bg-[#10121a] border border-gray-800 rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Gamepad2 className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-mono text-gray-400 uppercase">Virtual Input Matrix</span>
        </div>
        <label className="flex items-center space-x-2 text-xs text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={turbo}
            onChange={(e) => {
              setTurbo(e.target.checked);
              onInteract();
            }}
            className="rounded accent-indigo-500"
          />
          <span className="font-mono text-[11px]">Turbo Polling (1000Hz)</span>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {Object.entries(bindings).map(([key, val]) => (
          <div
            key={key}
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#161922] border border-gray-800/80 text-xs"
          >
            <span className="font-mono text-indigo-400 font-semibold">{key}</span>
            <span className="font-mono text-gray-300 bg-gray-900/90 px-2 py-0.5 rounded border border-gray-800">
              {val}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-2">
        <button
          onClick={remapRandom}
          className="flex-1 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-medium transition-colors cursor-pointer"
        >
          Preset: DualShock / Xbox
        </button>
        <button
          onClick={copyConfig}
          className="py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors flex items-center space-x-1.5 cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : null}
          <span>{copied ? 'Copied JSON' : 'Export Profile'}</span>
        </button>
      </div>
    </div>
  );
};

/* --- SUB-SANDBOX 3: MYSTERY SCREENING TOOL --- */
const ScreeningsSandbox: React.FC<{ onInteract: () => void }> = ({ onInteract }) => {
  const [movies, setMovies] = useState([
    { title: 'Blade Runner 2049', year: 2017, runtime: '164 min', genre: 'Sci-Fi / Noir' },
    { title: 'Spirited Away', year: 2001, runtime: '125 min', genre: 'Animation / Fantasy' },
    { title: 'The Grand Budapest Hotel', year: 2014, runtime: '99 min', genre: 'Comedy / Drama' },
    { title: 'Arrival', year: 2016, runtime: '116 min', genre: 'Sci-Fi / Mystery' },
  ]);
  const [blindMode, setBlindMode] = useState(true);
  const [pickedIndex, setPickedIndex] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState('');

  const handleShufflePick = () => {
    const randomIdx = Math.floor(Math.random() * movies.length);
    setPickedIndex(randomIdx);
    onInteract();
  };

  const handleAddMovie = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setMovies([
      ...movies,
      {
        title: newTitle.trim(),
        year: new Date().getFullYear(),
        runtime: '110 min',
        genre: 'Selected Feature',
      },
    ]);
    setNewTitle('');
    onInteract();
  };

  return (
    <div className="bg-[#10121a] border border-gray-800 rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Film className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-mono text-gray-400 uppercase">Spoiler-Free Screening Queue</span>
        </div>
        <button
          onClick={() => {
            setBlindMode(!blindMode);
            onInteract();
          }}
          className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs font-mono text-indigo-300 transition-colors cursor-pointer"
        >
          {blindMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{blindMode ? 'Mask Active' : 'Titles Revealed'}</span>
        </button>
      </div>

      <div className="space-y-2">
        {movies.map((m, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-all ${
              pickedIndex === idx
                ? 'border-indigo-500 bg-indigo-950/40 shadow-md shadow-indigo-500/20'
                : 'border-gray-800 bg-[#161922]'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="font-mono text-gray-500">#{idx + 1}</span>
              <div>
                <p className="font-semibold text-white">
                  {blindMode && pickedIndex !== idx ? (
                    <span className="blur-xs select-none text-gray-400">██████████████</span>
                  ) : (
                    m.title
                  )}
                </p>
                <p className="text-[11px] text-gray-400">
                  {m.genre} &bull; {m.runtime} &bull; {m.year}
                </p>
              </div>
            </div>
            {pickedIndex === idx && (
              <span className="px-2 py-0.5 rounded bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider">
                Selected
              </span>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleAddMovie} className="flex gap-2 pt-1">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add candidate film..."
          className="flex-1 px-3 py-1.5 rounded-xl bg-gray-900 border border-gray-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-3 py-1.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-medium cursor-pointer"
        >
          Add
        </button>
      </form>

      <button
        onClick={handleShufflePick}
        className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-lg shadow-indigo-600/20"
      >
        <Shuffle className="w-3.5 h-3.5" />
        <span>Roll Blind Mystery Pick</span>
      </button>
    </div>
  );
};
