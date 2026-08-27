import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  CheckCheck,
  ExternalLink,
  Maximize2,
  X,
  Printer,
  Sparkles,
  Download,
} from 'lucide-react';
import { coursesCertifications } from '../data/portfolioData';

export default function Certifications() {
  const [modalOpen, setModalOpen] = useState(false);
  const cert = coursesCertifications[0];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Courses & Certifications</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          AWS Certified Credentials
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
          Verified certificate from Amazon Web Services (AWS Training & Certification).
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-cyan-500 rounded-full mt-4" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Certificate Display Card */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 hover:border-amber-400/40 shadow-2xl transition-all relative overflow-hidden group"
        >
          {/* Top Status & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20">
                AWS Training & Certification
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <CheckCheck className="w-3.5 h-3.5" /> Verified Completion
              </span>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all hover:scale-105"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>View Full Certificate</span>
            </button>
          </div>

          {/* Visual AWS Certificate Preview Frame */}
          <div
            onClick={() => setModalOpen(true)}
            className="cursor-pointer relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-zinc-200/20 transition-all duration-300 group-hover:shadow-amber-500/10 group-hover:border-amber-400/40"
            style={{
              background: 'linear-gradient(135deg, #e8f9f5 0%, #f4fbf9 40%, #ffffff 100%)',
              color: '#0f172a',
            }}
          >
            {/* Soft decorative gradient orbs */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-emerald-300/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-200/30 rounded-full blur-2xl pointer-events-none" />

            <div className="relative h-full p-6 sm:p-10 flex flex-col justify-between select-none">
              {/* Header */}
              <div>
                <div className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight">
                  AWS Training & Certification
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-600 font-medium">
                  Completion Certificate
                </div>
              </div>

              {/* Title & Awardee */}
              <div className="my-auto py-2">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                  Fundamentals of Machine<br />Learning and Artificial Intelligence
                </h3>
                <div className="text-xs sm:text-sm text-zinc-600 font-medium mt-1 sm:mt-2">
                  Completed: June 25, 2026
                </div>

                <div className="mt-4 sm:mt-6">
                  <div className="text-[11px] sm:text-xs text-zinc-500 uppercase tracking-wider font-mono">
                    Awarded to
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-zinc-950 font-serif">
                    Dikshit Tank
                  </div>
                </div>
              </div>

              {/* Footer: Signature & AWS Logo */}
              <div className="flex items-end justify-between pt-2 border-t border-zinc-200">
                <div>
                  <div className="text-sm sm:text-base font-serif italic text-zinc-800 tracking-wider">
                    Michelle Vaz
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-zinc-900">
                    Michelle Vaz
                  </div>
                  <div className="text-[9px] sm:text-[11px] text-zinc-600">
                    Director, AWS Training & Certification
                  </div>
                </div>

                {/* AWS Logo */}
                <div className="flex flex-col items-end">
                  <div className="text-2xl sm:text-3xl font-black tracking-tighter text-zinc-900 flex items-center font-sans">
                    aws
                    <span className="w-2 h-2 rounded-full bg-[#ff9900] ml-0.5 inline-block" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Competencies */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="text-zinc-300">
              <span className="font-mono text-amber-400 font-semibold mr-1">Skills validated:</span>
              <span>Machine Learning Fundamentals, Artificial Intelligence Architectures & AWS Cloud Services</span>
            </div>
            <div className="text-zinc-400 font-mono text-[11px] shrink-0">
              Awarded to Dikshit Tank
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enlarged Certificate Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Certificate Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl glass-panel bg-[#090c14] border border-white/20 rounded-3xl p-4 sm:p-8 shadow-2xl z-10"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                    Official AWS Certificate View
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / Save PDF</span>
                  </button>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-white/5 border border-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Full Certificate View */}
              <div
                className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-12 flex flex-col justify-between select-none border border-zinc-300"
                style={{
                  background: 'linear-gradient(135deg, #e8f9f5 0%, #f4fbf9 45%, #ffffff 100%)',
                  color: '#0f172a',
                }}
              >
                <div>
                  <div className="text-sm sm:text-base font-bold text-zinc-900">
                    AWS Training & Certification
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-600 font-medium">
                    Completion Certificate
                  </div>
                </div>

                <div className="my-auto py-4">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                    Fundamentals of Machine<br />Learning and Artificial Intelligence
                  </h3>
                  <div className="text-xs sm:text-sm text-zinc-600 font-medium mt-2">
                    Completed: June 25, 2026
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
                      Awarded to
                    </div>
                    <div className="text-xl sm:text-3xl font-bold text-zinc-950 font-serif">
                      Dikshit Tank
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-zinc-300">
                  <div>
                    <div className="text-base sm:text-lg font-serif italic text-zinc-800 tracking-wider">
                      Michelle Vaz
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-zinc-900">
                      Michelle Vaz
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-600">
                      Director, AWS Training & Certification
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="text-3xl sm:text-4xl font-black tracking-tighter text-zinc-900 flex items-center font-sans">
                      aws
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff9900] ml-0.5 inline-block" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Amazon Web Services
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
