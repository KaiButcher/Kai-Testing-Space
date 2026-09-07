import React from 'react';
import { GitBranch, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenGitHubModal: () => void;
  interactionCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGitHubModal, interactionCount }) => {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse shadow-sm shadow-indigo-500/50"></div>
        <span className="font-semibold tracking-tight text-lg text-white">Kai&apos;s Mind</span>
      </div>

      <div className="flex items-center space-x-3 text-sm">
        <span className="hidden sm:inline text-gray-400">Digital Garden &amp; Lab</span>
        
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-mono font-medium">
          v1.0.4
        </span>

        <button
          id="github-sync-header-btn"
          onClick={onOpenGitHubModal}
          className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700/70 transition-all text-xs font-medium cursor-pointer"
          title="Push to GitHub or view iteration status"
        >
          <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden md:inline">GitHub Push</span>
          <span className="md:hidden">Sync</span>
        </button>

        {interactionCount > 0 && (
          <span className="hidden lg:flex items-center space-x-1 text-xs text-indigo-300/80 font-mono px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-800/40">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>{interactionCount}</span>
          </span>
        )}
      </div>
    </header>
  );
};
