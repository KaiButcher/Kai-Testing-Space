import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Sparkles, Layers, Sliders, Play, Pause, Volume2, ShieldCheck, Check, RotateCcw } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation' | 'stack'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!project) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#11141c] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-gray-400">{project.year}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-mono border border-white/10 transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <ExternalLink className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Title & Hero */}
        <div className="pt-4 pb-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-indigo-400">{project.subtitle}</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 py-3 border-b border-white/5">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            Case Study Overview
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeTab === 'simulation'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
            <span>Interactive Sandbox</span>
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'stack'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            Tech Stack &amp; Metrics
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="py-5 overflow-y-auto flex-1 pr-1 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/10 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11141c] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs">
                    <span className="text-gray-400">Role: </span>
                    <span className="text-white font-medium">{project.role}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Executive Summary</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{project.fullDescription}</p>
              </div>

              {project.stats && (
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {project.stats.map((st, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-center">
                      <p className="text-lg sm:text-xl font-bold font-mono text-indigo-300">{st.value}</p>
                      <p className="text-[11px] text-gray-400 mt-1">{st.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'simulation' && (
            <InteractiveSandboxView projectId={project.id} title={project.title} />
          )}

          {activeTab === 'stack' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">Technologies Employed</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tg, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-indigo-200"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 text-xs">
                <p className="font-semibold text-white">Architecture &amp; Design Decisions:</p>
                <ul className="list-disc list-inside space-y-1.5 text-gray-300">
                  <li>Zero-jank 60+ FPS hardware accelerated rendering with transform3d pipelines.</li>
                  <li>Responsive layout matrix adapting across mobile viewports and ultrawide displays.</li>
                  <li>Accessible color contrast exceeding WCAG AA specifications.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
          <span className="font-mono">Project 0{project.id.replace('project-', '')} &bull; Kai Butcher Portfolio</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors cursor-pointer shadow-lg shadow-indigo-600/25"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- MINI INTERACTIVE SANDBOX DEMO PER PROJECT --- */
const InteractiveSandboxView: React.FC<{ projectId: string; title: string }> = ({ projectId, title }) => {
  // Aether Spatial State
  const [spatialZ, setSpatialZ] = useState(25);
  const [panAngle, setPanAngle] = useState(15);

  // Luminary Kinetic Typography State
  const [fontStretch, setFontStretch] = useState(100);
  const [kineticWeight, setKineticWeight] = useState(600);
  const [sampleText, setSampleText] = useState('KINETIC SHADER');

  // Monolith Keymapper State
  const [macroKey, setMacroKey] = useState('Layer 0 (Default)');
  const [macroStatus, setMacroStatus] = useState('Ready for input');

  // CineVault State
  const [masked, setMasked] = useState(true);

  // Echoes Audio State
  const [fader, setFader] = useState(50);
  const [isPlaying, setIsPlaying] = useState(true);

  if (projectId === 'project-aether') {
    return (
      <div className="p-5 rounded-2xl bg-[#090b10] border border-white/10 space-y-4">
        <div className="flex justify-between items-center text-xs font-mono text-indigo-400">
          <span>Spatial Depth Matrix</span>
          <span>Z-Depth: {spatialZ}px</span>
        </div>

        <div className="h-44 rounded-xl bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 flex items-center justify-center relative overflow-hidden perspective-1000">
          <div
            className="w-48 h-28 rounded-xl bg-indigo-600/30 border border-indigo-400/50 backdrop-blur-md p-3 text-xs flex flex-col justify-between shadow-2xl transition-transform duration-200"
            style={{
              transform: `translateZ(${spatialZ}px) rotateY(${panAngle}deg)`,
            }}
          >
            <div className="flex justify-between items-center text-[10px] text-indigo-200">
              <span>Aether Surface</span>
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            </div>
            <p className="text-white text-xs font-medium">Gaze-Locked Window #01</p>
            <span className="text-[9px] text-indigo-300 font-mono">XYZ: (0, 0, {spatialZ})</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div>
            <label className="text-[11px] font-mono text-gray-400">Adjust Z-Depth Plane</label>
            <input
              type="range"
              min="0"
              max="60"
              value={spatialZ}
              onChange={(e) => setSpatialZ(Number(e.target.value))}
              className="w-full accent-indigo-500 mt-1 cursor-pointer"
            />
          </div>
          <div>
            <label className="text-[11px] font-mono text-gray-400">Yaw Angle</label>
            <input
              type="range"
              min="-40"
              max="40"
              value={panAngle}
              onChange={(e) => setPanAngle(Number(e.target.value))}
              className="w-full accent-indigo-500 mt-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'project-luminary') {
    return (
      <div className="p-5 rounded-2xl bg-[#090b10] border border-white/10 space-y-4">
        <div className="flex justify-between items-center text-xs font-mono text-pink-400">
          <span>Variable Typography Canvas</span>
          <span>Weight: {kineticWeight}</span>
        </div>

        <div className="h-36 rounded-xl bg-black/60 border border-pink-500/20 flex items-center justify-center p-4 overflow-hidden">
          <p
            className="text-white tracking-widest text-center transition-all duration-150"
            style={{
              fontWeight: kineticWeight,
              letterSpacing: `${(fontStretch - 50) / 10}px`,
              fontSize: '28px',
              textShadow: '0 0 20px rgba(236, 72, 153, 0.4)',
            }}
          >
            {sampleText}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="text-[11px] font-mono text-gray-400">Font Weight ({kineticWeight})</label>
            <input
              type="range"
              min="200"
              max="900"
              value={kineticWeight}
              onChange={(e) => setKineticWeight(Number(e.target.value))}
              className="w-full accent-pink-500 mt-1 cursor-pointer"
            />
          </div>
          <div>
            <label className="text-[11px] font-mono text-gray-400">Track Spread</label>
            <input
              type="range"
              min="50"
              max="150"
              value={fontStretch}
              onChange={(e) => setFontStretch(Number(e.target.value))}
              className="w-full accent-pink-500 mt-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'project-monolith') {
    return (
      <div className="p-5 rounded-2xl bg-[#090b10] border border-white/10 space-y-3 text-xs">
        <div className="flex justify-between items-center font-mono text-emerald-400">
          <span>Macro Layer Simulator</span>
          <span>8000Hz USB Poll</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {['Layer 0 (Default)', 'Layer 1 (Coding)', 'Layer 2 (Esports)'].map((layer) => (
            <button
              key={layer}
              onClick={() => {
                setMacroKey(layer);
                setMacroStatus(`Switched to ${layer} mappings`);
              }}
              className={`p-2.5 rounded-xl border font-mono text-center transition-all cursor-pointer ${
                macroKey === layer ? 'border-emerald-500 bg-emerald-950/40 text-white' : 'border-white/10 bg-white/5 text-gray-400'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-emerald-300">
          &gt; Telemetry: {macroStatus}
        </div>
      </div>
    );
  }

  if (projectId === 'project-cinevault') {
    return (
      <div className="p-5 rounded-2xl bg-[#090b10] border border-white/10 space-y-3 text-xs">
        <div className="flex justify-between items-center font-mono text-amber-400">
          <span>Blind Mask Algorithm</span>
          <button
            onClick={() => setMasked(!masked)}
            className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 cursor-pointer"
          >
            {masked ? 'Reveal Title' : 'Mask Title'}
          </button>
        </div>

        <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
          <div>
            <p className="text-white text-sm font-semibold">
              {masked ? '██████████████' : 'Interstellar (2014)'}
            </p>
            <p className="text-gray-400 text-xs mt-1">Runtime: 169 min &bull; 8.7/10 IMDb &bull; Sci-Fi/Drama</p>
          </div>
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">
            Blind Mode Active
          </span>
        </div>
      </div>
    );
  }

  // Echoes Studio
  return (
    <div className="p-5 rounded-2xl bg-[#090b10] border border-white/10 space-y-3 text-xs">
      <div className="flex justify-between items-center font-mono text-indigo-400">
        <span>Dual Track Stem Deck</span>
        <span>Crossfader: {fader}%</span>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-xl bg-indigo-600 text-white cursor-pointer"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
            style={{ width: `${fader}%` }}
          />
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={fader}
        onChange={(e) => setFader(Number(e.target.value))}
        className="w-full accent-indigo-500 cursor-pointer mt-2"
      />
    </div>
  );
};
