import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl glass-panel bg-[#0a0d14]/95 border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-cyan-300 font-mono mb-6">
            {project.tagline}
          </p>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Overview & Solution
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.longDescription || project.summary}
            </p>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="mb-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Key Features & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture / Pipeline Flow */}
          {project.architecture && (
            <div className="mb-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Engineering & Pipeline Workflow
              </h3>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-zinc-300 space-y-2">
                {project.architecture.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400">⚡</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Technologies Utilized
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
            <button
              onClick={onClose}
              className="ml-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-zinc-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
