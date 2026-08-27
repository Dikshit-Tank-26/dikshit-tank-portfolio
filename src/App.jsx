import React, { useState } from 'react';
import Preloader from './components/Preloader';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070c] text-zinc-100 relative selection:bg-cyan-500/20 selection:text-cyan-300 font-sans">
      {/* Preloader with letter-by-letter reveal */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Interactive Neural Constellation Background */}
      <BackgroundCanvas />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Navigation */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Experience & Education Section */}
        <ExperienceEducation />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

      {/* Resume / CV Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

