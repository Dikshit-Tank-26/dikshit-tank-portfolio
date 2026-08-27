import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, error: false });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setStatus({ submitted: true, error: false });
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus({ submitted: false, error: false }), 6000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Glow */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Let's Connect & Collaborate
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
          Feel free to reach out via email, phone, or LinkedIn for full-stack and AI/ML opportunities.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Left Contact Card */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Available for full-time roles, internships, and engineering projects.
            </p>

            {/* Email Box with Copy */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono uppercase text-zinc-400">Email Address</div>
                  <div className="text-xs sm:text-sm font-mono text-white truncate">
                    {personalInfo.email}
                  </div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors shrink-0"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Box */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-6 flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-colors group"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-zinc-400">Phone Number</div>
                  <div className="text-xs sm:text-sm font-mono text-white group-hover:text-cyan-300 transition-colors">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-500 group-hover:text-cyan-400">Call ↗</span>
            </a>

            {/* Social Links */}
            <div className="space-y-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all text-xs sm:text-sm text-zinc-300 hover:text-white group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                  <span>GitHub Profile</span>
                </div>
                <span className="font-mono text-xs text-zinc-500 group-hover:text-cyan-400">↗</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all text-xs sm:text-sm text-zinc-300 hover:text-white group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-sky-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="font-mono text-xs text-zinc-500 group-hover:text-cyan-400">↗</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-zinc-500">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Surat / Bardoli, Gujarat, India</span>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
          <p className="text-xs sm:text-sm text-zinc-400 mb-6">
            Leave a note below and I will get back to you promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                Your Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                Message / Inquiry
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Let's connect regarding an AI/ML or full-stack opportunity..."
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            {status.submitted && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
