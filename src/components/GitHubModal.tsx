import React, { useState } from 'react';
import { X, GitBranch, Check, ExternalLink, Terminal, Globe, ArrowRight } from 'lucide-react';

interface GitHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubModal: React.FC<GitHubModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#161922] border border-gray-700/80 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Iterate &amp; Push to GitHub
              </h2>
              <p className="text-xs text-gray-400 font-mono">Kai&apos;s Mind &bull; Hosting &amp; Sync Guide</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 overflow-y-auto flex-1 pr-1 space-y-5">
          {/* Direct Answer Banner */}
          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 animate-pulse shrink-0" />
            <div className="space-y-1 text-sm">
              <p className="font-semibold text-indigo-200">
                Yes! You can iterate and push directly from here.
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                We can refine features, build out new prototypes, and tune the styling right here in the live preview. When you are ready, push your project to your GitHub repository in seconds.
              </p>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              1. Direct Push from AI Studio UI
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#10121a] border border-gray-800 space-y-1.5">
                <div className="flex items-center space-x-2 text-indigo-400 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-indigo-600/30 flex items-center justify-center text-[10px]">A</span>
                  <span>Top Right Menu</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Click the <strong>Settings / Export</strong> menu button in the top right corner of the Google AI Studio screen.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#10121a] border border-gray-800 space-y-1.5">
                <div className="flex items-center space-x-2 text-indigo-400 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-indigo-600/30 flex items-center justify-center text-[10px]">B</span>
                  <span>Export to GitHub</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Select <strong>Export to GitHub</strong>. You can connect your GitHub account (<code className="text-indigo-300">KaiButcherDesign</code>), create a new repo or update an existing one.
                </p>
              </div>
            </div>
          </div>

          {/* Hosting on GitHub Pages */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase flex items-center space-x-1.5">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>2. Free Hosting with GitHub Pages</span>
            </h3>

            <div className="p-4 rounded-2xl bg-[#10121a] border border-gray-800 text-xs space-y-3">
              <p className="text-gray-300 leading-relaxed">
                This project is built with Vite and React. Once pushed to GitHub, you can host it completely free on GitHub Pages:
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-gray-400">
                <li>Go to your GitHub repo <strong>Settings &rarr; Pages</strong></li>
                <li>Under <strong>Build and deployment &rarr; Source</strong>, choose <strong>GitHub Actions</strong></li>
                <li>Select the official <strong>Static HTML / Vite</strong> template or run <code className="text-indigo-300">npm run build</code></li>
                <li>Your site goes live at <code className="text-indigo-300">username.github.io/repo-name</code>!</li>
              </ol>
            </div>
          </div>

          {/* Quick CLI snippet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>Manual Git Commands (Alternative)</span>
              </span>
              <button
                onClick={() =>
                  copyText(
                    `git init\ngit add .\ngit commit -m "feat: Kai's Mind digital garden v1.0.4"\ngit branch -M main\ngit remote add origin https://github.com/KaiButcherDesign/kais-mind.git\ngit push -u origin main`,
                    'git-cmd'
                  )
                }
                className="text-indigo-400 hover:text-indigo-300 flex items-center space-x-1 cursor-pointer"
              >
                {copied === 'git-cmd' ? <Check className="w-3.5 h-3.5" /> : null}
                <span>{copied === 'git-cmd' ? 'Copied' : 'Copy Commands'}</span>
              </button>
            </div>

            <pre className="p-3.5 rounded-xl bg-black/60 border border-gray-800 text-[11px] font-mono text-gray-300 overflow-x-auto">
{`git init
git add .
git commit -m "feat: Kai's Mind digital garden v1.0.4"
git branch -M main
git remote add origin https://github.com/KaiButcherDesign/kais-mind.git
git push -u origin main`}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
          <span>Ready to iterate on any component anytime</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
