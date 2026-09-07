import React, { useState } from 'react';
import { X, Mail, Check, Copy, Send, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const email = 'KaiButcherDesign@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#11141c] border border-white/10 rounded-3xl p-6 sm:p-7 text-white shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
            <h3 className="text-base font-bold">Start a Conversation</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Direct Email Pill */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-gray-400 block mb-0.5">DIRECT INBOX</span>
            <span className="text-sm font-medium text-white">{email}</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="px-3 py-1.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/30 text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Quick Message Form */}
        <form onSubmit={handleSend} className="space-y-3 text-xs">
          <div>
            <label className="text-gray-400 font-mono block mb-1">Project or Inquiry Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Design Systems Collaboration / Freelance Contract"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 text-xs"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">Brief Details</label>
            <textarea
              rows={3}
              required
              placeholder="Tell me about your timeline, scope, or idea..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 text-xs"
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-indigo-600/25"
          >
            {sent ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Message Received &bull; Kai will follow up</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Send Direct Inquiry</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
