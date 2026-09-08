import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Linkedin,
  MapPin,
  Briefcase,
  Layers,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const KaiSpaceSubpage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const linkedinUrl = 'https://www.linkedin.com/in/kai-butcher-368500103';

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('KaiButcherDesign@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const experience = [
    {
      period: 'CURRENT',
      role: 'Designer',
      company: 'Phantom',
      location: 'London, UK',
      description: 'Designing interactive digital experiences, creative campaigns, and brand systems for global tech and culture clients.',
      skills: ['Digital Design', 'Art Direction', 'UI/UX', 'Motion']
    },
    {
      period: 'INDEPENDENT',
      role: 'Graphic & Brand Designer',
      company: 'Kai Butcher Design',
      location: 'London, UK',
      description: 'Bespoke identity systems, typography, editorial design, and visual direction across print and digital media.',
      skills: ['Brand Identity', 'Typography', 'Editorial', 'Print Production']
    }
  ];

  const focusAreas = [
    {
      title: 'Brand & Identity',
      eyebrow: 'FOUNDATION',
      desc: 'Distinctive visual identities, bespoke logo systems, and comprehensive design guidelines.'
    },
    {
      title: 'Digital & UI Design',
      eyebrow: 'INTERACTION',
      desc: 'Modern web experiences crafted with refined layout grids, typography, and responsive rhythm.'
    },
    {
      title: 'Motion & Direction',
      eyebrow: 'DYNAMIC',
      desc: 'Kinetic choreography, UI transitions, and micro-interactions that elevate visual storytelling.'
    },
    {
      title: 'Print & Editorial',
      eyebrow: 'TACTILE',
      desc: 'Physical monographs, exhibition catalogs, and structural print with deliberate typographic scale.'
    }
  ];

  const skillsList = [
    'Art Direction',
    'Graphic Design',
    'Brand Identity',
    'UI / Digital Design',
    'Typography',
    'Motion Design',
    'Figma & Creative Suite',
    'Design Systems'
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white selection:bg-white selection:text-black">
      {/* Top Header / Status Row */}
      <div className="border-b border-white/15 pb-6 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase">
            [01,01] STUDIO &bull; KAI BUTCHER
          </span>
        </div>
        
        <div className="flex items-center space-x-3 text-xs font-mono text-white/60">
          <span className="flex items-center gap-1.5 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-white/60" />
            LONDON, UNITED KINGDOM
          </span>
          <span className="px-2.5 py-1 rounded bg-white/10 text-white/90 border border-white/20 text-[11px] font-mono tracking-wider">
            UTC+1
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 sm:mb-16">
        <div className="lg:col-span-8">
          <span className="text-xs font-mono tracking-[0.28em] text-white/50 uppercase block mb-3">
            DESIGNER &bull; LONDON
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[1.0] mb-5">
            Kai Butcher
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl mb-8">
            London-based Graphic and Digital Designer specializing in brand identity, editorial systems, digital interaction, and motion.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-black font-mono text-xs sm:text-sm font-bold tracking-wide uppercase hover:bg-neutral-200 transition-all flex items-center space-x-2 cursor-pointer shadow-lg active:scale-95"
            >
              <Linkedin className="w-4 h-4 fill-current" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-60" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs sm:text-sm border border-white/20 transition-all flex items-center space-x-2 cursor-pointer active:scale-95"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
            </button>

            <a
              href="mailto:KaiButcherDesign@gmail.com"
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 font-mono text-xs sm:text-sm border border-white/10 transition-all flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>KaiButcherDesign@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Profile Card / Quick Facts */}
        <div className="lg:col-span-4 bg-[#14161b] border border-white/15 rounded-2xl p-6 space-y-4 text-xs font-mono">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <span className="text-[10px] text-white/40 uppercase tracking-widest">
              PROFESSIONAL PROFILE
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-white/40 block text-[10px] uppercase">Location</span>
              <span className="text-white font-medium">London, United Kingdom</span>
            </div>

            <div>
              <span className="text-white/40 block text-[10px] uppercase">Primary Role</span>
              <span className="text-white font-medium">Designer at Phantom</span>
            </div>

            <div>
              <span className="text-white/40 block text-[10px] uppercase">Specialisation</span>
              <span className="text-white font-medium">Brand Identity &bull; Digital &bull; Motion</span>
            </div>

            <div>
              <span className="text-white/40 block text-[10px] uppercase">Network</span>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline flex items-center gap-1 mt-0.5 text-[11px]"
              >
                <span>linkedin.com/in/kai-butcher-368500103</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-12">
        <div className="border-b border-white/15 pb-3 mb-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-1">
              CAREER &bull; ROLES
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              Experience
            </h2>
          </div>
          <span className="text-xs font-mono text-white/40">LONDON</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#14161b] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-white/50 tracking-wider uppercase">{item.period}</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/15">
                    {item.company}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                  {item.role}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {item.skills.map((s, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Focus Areas */}
      <div className="mb-12">
        <div className="border-b border-white/15 pb-3 mb-6">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/50 uppercase block mb-1">
            DISCIPLINES &bull; CRAFT
          </span>
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
            Focus Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#14161b] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors"
            >
              <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase block mb-1.5">
                {area.eyebrow}
              </span>
              <h3 className="text-sm font-bold text-white uppercase tracking-tight mb-2">
                {area.title}
              </h3>
              <p className="text-xs text-white/65 font-light leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Matrix Pill Row */}
      <div className="bg-[#121316] border border-white/10 rounded-2xl p-6 mb-12">
        <span className="text-[10px] font-mono text-white/50 tracking-[0.2em] uppercase block mb-3">
          SKILLS &amp; PROFICIENCIES
        </span>
        <div className="flex flex-wrap gap-2">
          {skillsList.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 text-white/85 border border-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Row */}
      <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/50">
        <span>KAI BUTCHER &bull; LONDON</span>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white hover:underline flex items-center space-x-1"
        >
          <span>CONNECT ON LINKEDIN</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
