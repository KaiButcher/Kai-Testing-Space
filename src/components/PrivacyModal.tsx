import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#161922] border border-gray-700/80 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">Privacy &amp; Data Policy</h2>
              <p className="text-xs text-gray-400 font-mono">Kai&apos;s Mind Digital Garden</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-5 overflow-y-auto flex-1 pr-1 space-y-4 text-xs text-gray-300 leading-relaxed">
          <p>
            <strong>Local-First Sandbox:</strong> Kai&apos;s Mind runs client-side simulations. All prototype parameters, interactive states, audio engine cues, and mapping configs exist in-memory or in your local browser session.
          </p>
          <p>
            <strong>No Third-Party Trackers:</strong> No advertising pixels, tracking cookies, or external analytics SDKs are embedded in this digital garden.
          </p>
          <p>
            <strong>Open Source &amp; Self-Hostable:</strong> The codebase is fully modular and exportable to your personal GitHub repository for static hosting on GitHub Pages or custom infrastructure.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
