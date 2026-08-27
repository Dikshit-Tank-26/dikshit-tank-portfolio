import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Layers,
  Database,
  Terminal,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Skills', icon: <Layers className="w-4 h-4" /> },
    { id: 'languages', label: 'Languages', icon: <Code className="w-4 h-4" /> },
    { id: 'frameworksLibraries', label: 'Frameworks & Libraries', icon: <Cpu className="w-4 h-4" /> },
    { id: 'databases', label: 'Databases', icon: <Database className="w-4 h-4" /> },
    { id: 'toolsPlatforms', label: 'Tools & Platforms', icon: <Terminal className="w-4 h-4" /> },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...skillsCategories.languages.map((s) => ({ ...s, group: 'Languages' })),
        ...skillsCategories.frameworksLibraries.map((s) => ({ ...s, group: 'Frameworks & Libraries' })),
        ...skillsCategories.databases.map((s) => ({ ...s, group: 'Databases' })),
        ...skillsCategories.toolsPlatforms.map((s) => ({ ...s, group: 'Tools & Platforms' })),
      ];
    }
    const groupMap = {
      languages: 'Languages',
      frameworksLibraries: 'Frameworks & Libraries',
      databases: 'Databases',
      toolsPlatforms: 'Tools & Platforms',
    };
    return (skillsCategories[activeCategory] || []).map((s) => ({
      ...s,
      group: groupMap[activeCategory],
    }));
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-widest mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Skills Summary</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Technical Skills & Stack
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
          Core programming languages, machine learning frameworks, databases, and engineering tools referenced directly in my resume.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-4" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeCategory === tab.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.08]'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {getFilteredSkills().map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.02 }}
              className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {skill.group}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                />
              </div>

              <p className="text-[11px] sm:text-xs text-zinc-400 font-sans line-clamp-1">
                {skill.highlight}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
