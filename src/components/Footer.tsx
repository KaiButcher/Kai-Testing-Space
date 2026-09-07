import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenSource: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenSource,
  onOpenTerminal,
}) => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-8 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 mt-12">
      <p>&copy; 2026 Kai&apos;s Mind. Digital Garden &amp; Lab.</p>
      
      <div className="flex space-x-6 mt-4 sm:mt-0">
        <button
          id="footer-privacy-btn"
          onClick={onOpenPrivacy}
          className="hover:text-gray-300 transition-colors cursor-pointer"
        >
          Privacy
        </button>
        <button
          id="footer-source-btn"
          onClick={onOpenSource}
          className="hover:text-gray-300 transition-colors cursor-pointer"
        >
          Source &amp; GitHub
        </button>
        <button
          id="footer-terminal-btn"
          onClick={onOpenTerminal}
          className="hover:text-gray-300 transition-colors cursor-pointer font-mono"
        >
          Terminal
        </button>
      </div>
    </footer>
  );
};
