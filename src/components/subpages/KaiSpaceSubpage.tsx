import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink, 
  ArrowUpRight, 
  Cpu, 
  Layers, 
  Monitor, 
  Code2, 
  Compass, 
  Mail, 
  Sparkles,
  ShieldAlert,
  HardDrive
} from 'lucide-react';

export const KaiSpaceSubpage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'toolkit' | 'hardware'>('overview');

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('KaiButcherDesign@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const skills = [
    { name: 'TypeScript / React', category: 'Engineering', level: 'Senior / 7 yrs' },
    { name: 'WebGL & GLSL Shaders', category: 'Creative Dev', level: 'Advanced' },
    { name: 'Three.js & Canvas API', category: 'Creative Dev', level: 'Advanced' },
    { name: 'GSAP & Kinetic Motion', category: 'Animation', level: 'Mastery / 120 FPS' },
    { name: 'Design Systems Architecture', category: 'UI / UX', level: 'Lead' },
    { name: 'Computational Typography', category: 'Design', level: 'Specialist' },
    { name: 'Tailwind CSS / PostCSS', category: 'Engineering', level: 'Expert' },
    { name: 'Spatial & Tactile Computing', category: 'R&D', level: 'Active Research' },
    { name: 'Cinema 4D & Blender', category: '3D & Motion', level: 'Intermediate' },
    { name: 'Figma & Design Tokens', category: 'Design', level: 'Expert' },
  ];

  const timeline = [
    {
      year: '2024 — PRESENT',
      role: 'Lead Design Technologist',
      company: 'Studio Monolith',
      location: 'London / Remote',
      desc: 'Architecting high-performance spatial UI components, WebGL exploratory interfaces, and mathematical typography systems for fintech and luxury architecture clients.',
      tags: ['React', 'WebGL', 'Design Systems', 'Micro-interactions'],
    },
    {
      year: '2022 — 2024',
      role: 'Senior Interaction Designer',
      company: 'Vektor Systems',
      location: 'London',
      desc: 'Pioneered zero-latency tactile control panels and multi-screen workspace prototypes. Standardized design tokens across a suite of 6 enterprise applications.',
      tags: ['TypeScript', 'Canvas', 'State Machines', 'Figma Tokens'],
    },
    {
      year: '2020 — 2022',
      role: 'Creative Technologist',
      company: 'Hyperframe Agency',
      location: 'London',
      desc: 'Produced award-winning brand experiences, generative 3D brand installations, and bespoke typography specimen sites.',
      tags: ['GSAP', 'Three.js', 'Generative Art', 'Editorial'],
    },
  ];

  const workstation = [
    { category: 'Primary Compute', item: 'Apple M3 Max 16-Core', spec: '64GB Unified Memory / 2TB SSD' },
    { category: 'Visual Display', item: 'Apple Studio Display 5K', spec: '27-inch Nano-texture Glass / 218 PPI' },
    { category: 'Tactile Input', item: 'Ergodox EZ Split Mechanical', spec: 'Kailh Box Silent Pinks / Custom QMK Layout' },
    { category: 'Acoustic Monitoring', item: 'Genelec 8010A Active Monitors', spec: 'Balanced XLR / Audioengine D1 24-bit DAC' },
    { category: 'Optics & Analog', item: 'Leica M10-R + Summicron 35mm', spec: '40.89MP Full Frame / Manual Rangefinder' },
    { category: 'Medium Format', item: 'Hasselblad 500C/M (1979)', spec: 'Carl Zeiss Planar 80mm f/2.8 / 120 Roll Film' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white selection:bg-white selection:text-black">
      {/* Top Coordinate Header */}
      <div className="border-b border-white/15 pb-6 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase">
            [01,01] STUDIO &bull; KAI BUTCHER
          </span>
        </div>
        
        <div className="flex items-center space-x-3 text-xs font-mono text-white/60">
          <span className="hidden sm:inline">LONDON &bull; UTC+1</span>
          <span className="px-2.5 py-1 rounded bg-white/10 text-white/90 border border-white/20 text-[11px] font-mono tracking-wider">
            AVAILABLE Q3/Q4 2026
          </span>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16">
        <div className="lg:col-span-8">
          <span className="text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-3">
            DIGITAL LABORATORY &bull; INTERACTION SYSTEMS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-6">
            Kai Butcher
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-2xl mb-8">
            Digital product designer and creative technologist based in London. Working at the exact seam where Swiss typographic discipline converges with high-performance real-time engineering.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="px-5 py-2.5 rounded-lg bg-white text-black font-mono text-xs sm:text-sm font-semibold hover:bg-white/90 transition-all flex items-center space-x-2 cursor-pointer shadow-lg active:scale-95"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Email Copied!' : 'KaiButcherDesign@gmail.com'}</span>
            </button>

            <a
              href="mailto:KaiButcherDesign@gmail.com"
              className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono text-xs sm:text-sm border border-white/20 transition-all flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send Message</span>
            </a>

            <a
              href="https://github.com/kaibutcher"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 font-mono text-xs sm:text-sm border border-white/10 transition-all flex items-center space-x-2"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-4 bg-[#16181d] border border-white/10 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-white/50 uppercase block mb-4">
              STUDIO SUMMARY
            </span>
            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-white/50">BASE</span>
                <span className="text-white font-medium">London, UK</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-white/50">DISCIPLINES</span>
                <span className="text-white font-medium">UI / Creative Code / 3D</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-white/50">FOUNDATIONS</span>
                <span className="text-white font-medium">Swiss Modernism</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-white/50">RATE / CADENCE</span>
                <span className="text-white font-medium">Project / Retainer</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <span className="text-[10px] font-mono text-white/40 block mb-1">SECURITY & VERIFICATION</span>
            <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>PGP SIGNED KEY // 0x4B2C89FA</span>
            </span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center space-x-2 border-b border-white/15 pb-4 mb-8 overflow-x-auto no-scrollbar">
        {[
          { id: 'overview', label: '01 Core Philosophy' },
          { id: 'experience', label: '02 Studio Experience' },
          { id: 'toolkit', label: '03 Technical Stack' },
          { id: 'hardware', label: '04 Hardware & Rig' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              activeTab === tab.id
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Overview / Philosophy */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8">
            <span className="text-xs font-mono text-white/50 tracking-widest block mb-2">PILLAR // 01</span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
              Tactile Computing & Spatial Restraint
            </h3>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Digital tools must behave with the physical integrity of machined steel or oiled brass. Every transition must have mass, velocity damping, and purpose. We reject unnecessary decorative chrome in favor of deliberate structural clarity.
            </p>
          </div>

          <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8">
            <span className="text-xs font-mono text-white/50 tracking-widest block mb-2">PILLAR // 02</span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
              Computational Typography
            </h3>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Type is not merely static letterforms placed on a screen—it is responsive spatial geometry. Using variable axes, mathematical baseline grids, and tabular metrics, we create typography that breathes with viewport dynamics.
            </p>
          </div>

          <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8">
            <span className="text-xs font-mono text-white/50 tracking-widest block mb-2">PILLAR // 03</span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
              120 FPS Kinetic Choreography
            </h3>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Motion is the silent communicator of mental models. Through customized cubic-bezier curves and spring physics, interfaces guide human attention seamlessly without causing cognitive friction or visual fatigue.
            </p>
          </div>

          <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8">
            <span className="text-xs font-mono text-white/50 tracking-widest block mb-2">PILLAR // 04</span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
              Monochrome Architectural Rigor
            </h3>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              By working in disciplined monochrome palettes with selective accentuation, information hierarchy remains pristine. Form follows structure; contrast replaces distraction.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Experience */}
      {activeTab === 'experience' && (
        <div className="space-y-6">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8 hover:border-white/25 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono text-white/50 tracking-widest">
                  {item.year} &bull; {item.location}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/10 text-white/90 border border-white/15">
                  {item.company}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-2">
                {item.role}
              </h3>
              <p className="text-sm text-white/75 leading-relaxed font-light mb-4 max-w-3xl">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 text-white/70 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Toolkit */}
      {activeTab === 'toolkit' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-[#16181d] border border-white/10 rounded-xl p-5 hover:border-white/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-1">
                  {skill.category}
                </span>
                <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                  {skill.name}
                </h4>
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between text-xs font-mono text-white/60">
                <span>PROFICIENCY</span>
                <span className="text-white/90 font-medium">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Hardware */}
      {activeTab === 'hardware' && (
        <div className="bg-[#16181d] border border-white/10 rounded-xl p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase block mb-1">
              STUDIO WORKSTATION SPECIFICATION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
              Machined Hardware & Optics Rig
            </h3>
          </div>

          <div className="divide-y divide-white/10">
            {workstation.map((w, idx) => (
              <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="text-[11px] font-mono text-white/50 tracking-widest uppercase block">
                    {w.category}
                  </span>
                  <span className="text-sm font-semibold text-white font-mono">
                    {w.item}
                  </span>
                </div>
                <span className="text-xs font-mono text-white/60 sm:text-right">
                  {w.spec}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Footer Callout */}
      <div className="mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <span>KAI BUTCHER DIGITAL LABORATORY // REVISION 2026.04</span>
        <span className="text-white/80">DESIGNED WITH MATHEMATICAL RIGOR IN LONDON</span>
      </div>
    </div>
  );
};
