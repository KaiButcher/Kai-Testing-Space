import React, { useState, useEffect } from 'react';
import { Activity, Terminal as TerminalIcon } from 'lucide-react';

interface StatusBentoProps {
  onOpenTerminal: () => void;
}

export const StatusBento: React.FC<StatusBentoProps> = ({ onOpenTerminal }) => {
  const [time, setTime] = useState<string>('--:--:--');
  const [envMode, setEnvMode] = useState<'Production' | 'Dev Sandbox'>('Production');
  const [uptime, setUptime] = useState<number>(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    const uptimeTimer = setInterval(() => setUptime((prev) => prev + 1), 1000);

    return () => {
      clearInterval(timer);
      clearInterval(uptimeTimer);
    };
  }, []);

  const formatUptime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="bento-card rounded-3xl p-8 flex flex-col justify-between border border-gray-800 shadow-xl relative overflow-hidden group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase flex items-center space-x-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>System Status</span>
          </span>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
        </div>

        <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          Active Sandbox
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          All local containers and client-side modules running smoothly.
        </p>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setEnvMode((prev) => (prev === 'Production' ? 'Dev Sandbox' : 'Production'))}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-900/80 border border-gray-800 text-indigo-300 hover:border-indigo-500/40 transition-colors cursor-pointer"
            title="Toggle environment simulation"
          >
            ENV: {envMode}
          </button>
          <span className="text-[11px] font-mono text-gray-500">
            Up: {formatUptime(uptime)}
          </span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-800/60 flex justify-between items-center text-xs text-gray-500 font-mono">
        <button
          onClick={onOpenTerminal}
          className="flex items-center space-x-1 hover:text-indigo-400 transition-colors cursor-pointer text-gray-400"
          title="Open internal sandbox terminal"
        >
          <TerminalIcon className="w-3 h-3" />
          <span>Console: OK</span>
        </button>
        <span id="live-clock" className="text-gray-400 font-medium">
          {time}
        </span>
      </div>
    </div>
  );
};
