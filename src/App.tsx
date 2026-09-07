import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBento } from './components/HeroBento';
import { StatusBento } from './components/StatusBento';
import { PrototypesGrid } from './components/PrototypesGrid';
import { Footer } from './components/Footer';
import { PrototypeModal } from './components/PrototypeModals';
import { GitHubModal } from './components/GitHubModal';
import { TerminalModal } from './components/TerminalModal';
import { PrivacyModal } from './components/PrivacyModal';
import { PROTOTYPES } from './data/prototypes';
import { PrototypeItem, ActiveModal } from './types';

export default function App() {
  const [interactionCount, setInteractionCount] = useState<number>(0);
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [selectedPrototype, setSelectedPrototype] = useState<PrototypeItem | null>(null);
  const [pulseToast, setPulseToast] = useState<string | null>(null);

  const triggerPulse = () => {
    setInteractionCount((prev) => prev + 1);
    setPulseToast('⚡ Sandbox ping registered');
    setTimeout(() => setPulseToast(null), 1500);
  };

  const handleLaunchPrototype = (prototype: PrototypeItem) => {
    setInteractionCount((prev) => prev + 1);
    setSelectedPrototype(prototype);
    setActiveModal({ type: 'prototype', prototypeId: prototype.id });
  };

  const scrollToPrototypes = () => {
    document.getElementById('prototypes-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-indigo-500 selection:text-white bg-[#0f1117] text-[#f3f4f6] relative">
      {/* Toast Notification */}
      {pulseToast && (
        <div className="fixed top-6 right-6 z-50 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-mono font-medium shadow-lg shadow-indigo-600/30 animate-bounce">
          {pulseToast}
        </div>
      )}

      {/* Top Navigation */}
      <Header
        onOpenGitHubModal={() => setActiveModal({ type: 'github' })}
        interactionCount={interactionCount}
      />

      {/* Main Bento Grid Container */}
      <main className="w-full max-w-6xl mx-auto px-6 pb-12 flex-grow">
        {/* Hero & System Status Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <HeroBento
            onTriggerPulse={triggerPulse}
            interactionCount={interactionCount}
            onExploreScroll={scrollToPrototypes}
          />
          <StatusBento
            onOpenTerminal={() => setActiveModal({ type: 'terminal' })}
          />
        </section>

        {/* Project / App Ideas Bento Grid */}
        <PrototypesGrid
          prototypes={PROTOTYPES}
          onLaunch={handleLaunchPrototype}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setActiveModal({ type: 'privacy' })}
        onOpenSource={() => setActiveModal({ type: 'github' })}
        onOpenTerminal={() => setActiveModal({ type: 'terminal' })}
      />

      {/* Modals & Sandboxes */}
      {activeModal?.type === 'prototype' && (
        <PrototypeModal
          prototype={selectedPrototype}
          onClose={() => setActiveModal(null)}
          onInteract={() => setInteractionCount((prev) => prev + 1)}
        />
      )}

      <GitHubModal
        isOpen={activeModal?.type === 'github'}
        onClose={() => setActiveModal(null)}
      />

      <TerminalModal
        isOpen={activeModal?.type === 'terminal'}
        onClose={() => setActiveModal(null)}
        prototypes={PROTOTYPES}
        onLaunchPrototype={handleLaunchPrototype}
        onOpenGitHubModal={() => setActiveModal({ type: 'github' })}
      />

      <PrivacyModal
        isOpen={activeModal?.type === 'privacy'}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
