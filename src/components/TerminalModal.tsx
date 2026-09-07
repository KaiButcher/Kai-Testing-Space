import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TermIcon } from 'lucide-react';
import { PrototypeItem } from '../types';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  prototypes: PrototypeItem[];
  onLaunchPrototype: (item: PrototypeItem) => void;
  onOpenGitHubModal: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  prototypes,
  onLaunchPrototype,
  onOpenGitHubModal,
}) => {
  const [history, setHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: 'init',
      output: (
        <div>
          <p className="text-emerald-400">Kai&apos;s Mind Sandbox Shell [Version 1.0.4]</p>
          <p className="text-gray-500">Type &apos;help&apos; for a list of sandbox commands, or &apos;status&apos;.</p>
        </div>
      ),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim();
    if (!cleanCmd) return;

    const lower = cleanCmd.toLowerCase();
    let output: React.ReactNode = '';

    if (lower === 'help') {
      output = (
        <div className="space-y-1 text-gray-300">
          <p className="text-indigo-400 font-semibold">Available Commands:</p>
          <p><span className="text-emerald-400">help</span> - Show this command list</p>
          <p><span className="text-emerald-400">status</span> - Check current sandbox runtime metrics</p>
          <p><span className="text-emerald-400">prototypes</span> - List experimental app prototypes</p>
          <p><span className="text-emerald-400">launch &lt;1|2|3&gt;</span> - Launch an interactive prototype sandbox</p>
          <p><span className="text-emerald-400">git</span> - Display GitHub export and push info</p>
          <p><span className="text-emerald-400">clear</span> - Clear console history</p>
          <p><span className="text-emerald-400">exit</span> - Close terminal window</p>
        </div>
      );
    } else if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'exit') {
      onClose();
      setInputVal('');
      return;
    } else if (lower === 'status') {
      output = (
        <div className="text-gray-300 space-y-0.5">
          <p className="text-emerald-400">&#x2714; Sandbox Status: ONLINE (Container Port 3000)</p>
          <p>ENV: Production / AI Studio</p>
          <p>Framework: Vite 6 + React 19 + Tailwind CSS</p>
          <p>Active Prototypes: {prototypes.length} mounted</p>
          <p>Memory: 42MB active DOM allocation</p>
        </div>
      );
    } else if (lower === 'prototypes' || lower === 'ls') {
      output = (
        <div className="text-gray-300 space-y-1">
          <p className="text-indigo-400 font-semibold">Registered Prototypes:</p>
          {prototypes.map((p, idx) => (
            <p key={p.id}>
              [{idx + 1}] <span className="text-white font-medium">{p.title}</span> ({p.tag}) - {p.prototypeNumber}
            </p>
          ))}
          <p className="text-gray-500 text-xs mt-1">Hint: Type &apos;launch 1&apos; or &apos;launch 2&apos; to run.</p>
        </div>
      );
    } else if (lower.startsWith('launch')) {
      const parts = lower.split(' ');
      const target = parts[1];
      let found = prototypes.find((p) => p.id === target || p.title.toLowerCase().includes(target));
      if (!found && target === '1') found = prototypes[0];
      if (!found && target === '2') found = prototypes[1];
      if (!found && target === '3') found = prototypes[2];

      if (found) {
        output = <p className="text-emerald-400">Launching prototype: {found.title}...</p>;
        setTimeout(() => {
          onClose();
          onLaunchPrototype(found!);
        }, 400);
      } else {
        output = <p className="text-rose-400">Prototype not found. Type &apos;prototypes&apos; to see valid options.</p>;
      }
    } else if (lower === 'git' || lower === 'push') {
      output = (
        <div className="space-y-1 text-gray-300">
          <p className="text-indigo-400 font-semibold">GitHub Integration:</p>
          <p>You can push directly from AI Studio using the top-right Settings/Export menu &gt; Export to GitHub.</p>
          <p className="text-emerald-400">Target Account: KaiButcherDesign</p>
        </div>
      );
      setTimeout(() => onOpenGitHubModal(), 600);
    } else {
      output = (
        <p className="text-rose-400">
          Command not recognized: &apos;{cleanCmd}&apos;. Type &apos;help&apos; for list of commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { cmd: cleanCmd, output }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#0d0f15] border border-gray-700/80 rounded-3xl p-6 text-white shadow-2xl overflow-hidden max-h-[85vh] flex flex-col font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-xs">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-gray-400 flex items-center space-x-1 pl-2">
              <TermIcon className="w-3 h-3 text-indigo-400" />
              <span>kai@mind:~/sandbox</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Output */}
        <div className="py-4 overflow-y-auto flex-1 text-xs space-y-3 pr-2">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center space-x-2 text-indigo-400">
                <span>kai@mind:~$</span>
                <span className="text-white">{item.cmd}</span>
              </div>
              <div className="text-gray-300 pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input */}
        <form onSubmit={handleCommand} className="pt-2 border-t border-gray-800 flex items-center space-x-2 text-xs">
          <span className="text-indigo-400 font-bold shrink-0">kai@mind:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'status', or 'launch 1'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-gray-600"
          />
        </form>
      </div>
    </div>
  );
};
