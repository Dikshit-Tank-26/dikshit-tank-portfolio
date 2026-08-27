import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Sparkles,
  Download,
  Terminal,
  BrainCircuit,
  Bot,
  Layers,
  ChevronRight,
  Phone,
  Mail,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient gradient glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/15 via-violet-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-md mb-8 shadow-sm shadow-cyan-500/10 hover:border-cyan-400/50 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-zinc-300 tracking-wide font-mono">
            {personalInfo.status}
          </span>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4"
          style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
        >
          <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Role Subtitle with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-cyan-400 hidden sm:block" />
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 uppercase font-mono">
            {personalInfo.role}
          </h2>
          <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-violet-400 hidden sm:block" />
        </motion.div>

        {/* Pitch / Description from Resume */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
        >
          {personalInfo.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            <BrainCircuit className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
            <span>View Projects</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-sm sm:text-base border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>View Resume (PDF)</span>
          </button>

          <a
            href={`tel:${personalInfo.phone}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-zinc-300 hover:text-white font-medium text-sm border border-white/10 transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>{personalInfo.phone}</span>
          </a>
        </motion.div>

        {/* Quick Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-3.5 sm:p-4 rounded-xl flex flex-col items-center justify-center hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-400 font-medium tracking-wide uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tech Ticker / Marquee Ribbon */}
      <div className="w-full max-w-5xl overflow-hidden py-4 border-y border-white/[0.06] bg-black/30 backdrop-blur-sm relative mask-gradient">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {[...personalInfo.techStackTicker, ...personalInfo.techStackTicker].map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300/80 hover:text-cyan-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1 text-[10px] font-mono uppercase tracking-wider"
      >
        <span>Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
