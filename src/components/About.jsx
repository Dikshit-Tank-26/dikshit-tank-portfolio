import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Sparkles,
  Database,
  Terminal,
  Code2,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Users,
} from 'lucide-react';
import { personalInfo, skillsCategories } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Machine Learning & Predictive Systems',
      desc: 'Hands-on development with Scikit-Learn, Random Forest, Pandas, and NumPy for real-time predictions, feature importance, and diagnostic dashboards.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-violet-400" />,
      title: 'Production RAG & Generative AI',
      desc: 'Architecting local LLM workflows via Ollama and ChromaDB vector stores integrated with FastAPI and automated Swagger UI documentation.',
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      title: 'Enterprise Software & Databases',
      desc: 'Building robust applications with C#, ASP.NET Web Forms, XML structured storage, MySQL, and SQL Server for full-lifecycle CRUD operations.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-sky-400" />,
      title: 'Modern Web & Interactive UIs',
      desc: 'Creating interactive user interfaces using JavaScript, Streamlit, HTML5, CSS3, with modern engineering tools including Git, GitHub, VS Code, and PyCharm.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Profile Summary</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Full-Stack & AI/ML Developer
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Bio & Terminal Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-white/10 shadow-2xl">
            {/* Top terminal dots */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-zinc-400 font-mono">dikshit_tank_resume.json</span>
            </div>

            {/* Code Bio */}
            <div className="font-mono text-xs sm:text-sm text-zinc-300 space-y-2 leading-relaxed">
              <p className="text-zinc-400">// Professional Profile Summary</p>
              <p>
                <span className="text-cyan-400">const</span> developer = &#123;
              </p>
              <p className="pl-4">
                name: <span className="text-emerald-300">"{personalInfo.name}"</span>,
              </p>
              <p className="pl-4">
                education: <span className="text-emerald-300">"B.Tech in AI & ML (CGPA: 8.59/10)"</span>,
              </p>
              <p className="pl-4">
                email: <span className="text-sky-300">"{personalInfo.email}"</span>,
              </p>
              <p className="pl-4">
                phone: <span className="text-sky-300">"{personalInfo.phone}"</span>,
              </p>
              <p className="pl-4">
                primaryStack: [<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"ML"</span>, <span className="text-amber-300">"FastAPI"</span>, <span className="text-amber-300">"C#"</span>, <span className="text-amber-300">"JS"</span>],
              </p>
              <p className="pl-4">
                certifications: [<span className="text-violet-400">"AWS Fundamentals of AI & ML"</span>],
              </p>
              <p>&#125;;</p>
            </div>

            {/* Soft Skills Badges */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase text-zinc-400 mb-2.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>Soft Skills & Competencies</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skillsCategories.softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 Pillar Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-white/[0.04] border border-white/10 mb-4 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
