import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  FileText,
  Phone,
  Mail,
  ExternalLink,
  Printer,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import {
  personalInfo,
  skillsCategories,
  projectsData,
  educationData,
  coursesCertifications,
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 overflow-y-auto print:p-0 print:m-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl glass-panel bg-[#0b0e17] border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl z-10 max-h-[95vh] overflow-y-auto print:max-h-none print:overflow-visible print:border-none print:shadow-none print:p-0"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 print:hidden">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Dikshit Tank — Resume</h2>
                <p className="text-xs font-mono text-cyan-400">PDF Synchronized View</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 transition-all shadow-md shadow-cyan-500/20"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Download PDF</span>
              </button>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Authentic Document Container */}
          <div className="bg-white text-zinc-900 p-6 sm:p-10 rounded-xl shadow-inner font-sans text-xs sm:text-sm leading-normal">
            {/* Header / Name */}
            <div className="text-center pb-4 border-b-2 border-zinc-900">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 mb-2">
                Dikshit Tank
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-700 font-medium">
                <span className="flex items-center gap-1">
                  📞 {personalInfo.phone}
                </span>
                <span className="flex items-center gap-1">
                  ✉️ {personalInfo.email}
                </span>
                <span className="flex items-center gap-1">
                  🌐 Portfolio
                </span>
                <span className="flex items-center gap-1">
                  🔗 LinkedIn
                </span>
                <span className="flex items-center gap-1">
                  🐙 GitHub
                </span>
              </div>
            </div>

            {/* PROFILE */}
            <div className="mt-5">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
                PROFILE
              </h2>
              <p className="text-xs text-zinc-800 leading-relaxed text-justify">
                {personalInfo.description}
              </p>
            </div>

            {/* SKILLS SUMMARY */}
            <div className="mt-5">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center text-zinc-900 border-b border-zinc-300 pb-1 mb-2.5 font-mono">
                SKILLS SUMMARY
              </h2>
              <ul className="space-y-1 text-xs text-zinc-800 list-disc list-inside">
                <li>
                  <strong className="font-semibold text-zinc-950">Languages:</strong> Python, JavaScript, HTML, CSS, SQL
                </li>
                <li>
                  <strong className="font-semibold text-zinc-950">Frameworks & Libraries:</strong> Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn, TensorFlow, FastAPI
                </li>
                <li>
                  <strong className="font-semibold text-zinc-950">Databases:</strong> MySQL, SQL Server
                </li>
                <li>
                  <strong className="font-semibold text-zinc-950">Tools:</strong> Git, GitHub, Excel, PowerPoint
                </li>
                <li>
                  <strong className="font-semibold text-zinc-950">Platforms:</strong> VS Code, PyCharm
                </li>
                <li>
                  <strong className="font-semibold text-zinc-950">Soft Skills:</strong> Problem Solving, Analytical Thinking, Team Collaboration, Communication
                </li>
              </ul>
            </div>

            {/* PROJECTS */}
            <div className="mt-5">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center text-zinc-900 border-b border-zinc-300 pb-1 mb-3 font-mono">
                PROJECTS
              </h2>
              <div className="space-y-3.5 text-xs text-zinc-800">
                <div>
                  <h3 className="font-bold text-zinc-950 text-xs sm:text-sm">
                    1) Disease-RAG-Assistant
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-zinc-700 pl-2 mt-1">
                    <li>
                      A production-grade Retrieval-Augmented Generation (RAG) system for medical disease information, powered by Ollama (local LLMs) + ChromaDB (vector store) + FastAPI.
                    </li>
                    <li>
                      Designed a modular document ingestion pipeline and a REST API with query, streaming, and ingestion endpoints, documented via auto-generated Swagger UI.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-zinc-950 text-xs sm:text-sm">
                    2) Sleep Quality Prediction System
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-zinc-700 pl-2 mt-1">
                    <li>
                      Developed a Sleep Quality Prediction System using Python, Streamlit, and Random Forest Classifier to predict sleep quality based on lifestyle factors such as sleep duration, exercise, stress, caffeine intake, and screen time.
                    </li>
                    <li>
                      Designed an interactive web dashboard with real-time predictions and feature importance visualization using Pandas, NumPy, Scikit-learn, and Matplotlib.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="mt-5">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center text-zinc-900 border-b border-zinc-300 pb-1 mb-3 font-mono">
                EDUCATION
              </h2>
              <div className="space-y-3 text-xs text-zinc-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-zinc-950">
                      B.Tech in Artificial intelligence and Machine leaning (in progress)
                    </h3>
                    <p className="text-zinc-700">
                      • Uka Tarsadia University | Bardoli | <strong className="text-zinc-950">CGPA : 8.59 / 10</strong>
                    </p>
                  </div>
                  <span className="font-bold text-zinc-900 shrink-0 font-mono text-xs">2023 – 2027</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-zinc-950">Higher Secondary (12th)</h3>
                    <p className="text-zinc-700">
                      • SHRI K. C. KOTHARI SEC. & HIGHER SECONDARY SCHOOL | Surat
                    </p>
                  </div>
                  <span className="font-bold text-zinc-900 shrink-0 font-mono text-xs">2021 – 2023</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-zinc-950">Secondary (10th)</h3>
                    <p className="text-zinc-700">• Vashishtha Vidhyalay | Surat</p>
                  </div>
                  <span className="font-bold text-zinc-900 shrink-0 font-mono text-xs">2020 – 2021</span>
                </div>
              </div>
            </div>

            {/* COURSES & CERTIFICATIONS */}
            <div className="mt-5">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center text-zinc-900 border-b border-zinc-300 pb-1 mb-2.5 font-mono">
                COURSES & CERTIFICATIONS
              </h2>
              <ul className="list-disc list-inside text-xs text-zinc-800">
                <li>
                  <strong className="font-semibold text-zinc-950">
                    Fundamentals of Artificial Intelligence and Machine Learning
                  </strong>{' '}
                  — Amazon Web Services (AWS Training & Certification, Director: Michelle Vaz)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
