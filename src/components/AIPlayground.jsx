import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Sparkles,
  Bot,
  Activity,
  Send,
  Sliders,
  CheckCircle2,
  RefreshCw,
  Search,
} from 'lucide-react';

export default function AIPlayground() {
  const [activeTab, setActiveTab] = useState('rag');

  // RAG Demo States
  const [ragQuery, setRagQuery] = useState('What are the key lifestyle interventions for managing Type 2 Diabetes?');
  const [isQuerying, setIsQuerying] = useState(false);
  const [ragResponse, setRagResponse] = useState({
    answer:
      'Based on the clinical knowledge base, primary lifestyle interventions for Type 2 Diabetes include: (1) Structured dietary adjustments emphasizing complex carbohydrates and fiber, (2) At least 150 minutes of moderate aerobic exercise per week, and (3) Routine glycemic monitoring to optimize insulin sensitivity.',
    sources: [
      'Document: clinical_endocrinology_guidelines_2024.pdf (Page 14, Similarity: 0.94)',
      'Document: metabolic_disorders_handbook.txt (Section 3.2, Similarity: 0.91)',
    ],
    tokens: 142,
    latency: '184ms',
    model: 'Ollama / Llama-3.2 (Local 4-bit Quantized)',
  });

  // ML Predictor States
  const [sleepHours, setSleepHours] = useState(7.5);
  const [stressLevel, setStressLevel] = useState(4);
  const [physicalActivity, setPhysicalActivity] = useState(45);
  const [caffeineCups, setCaffeineCups] = useState(2);

  const calculateSleepScore = () => {
    // Simulated trained regression model equation
    let base = 50;
    base += (sleepHours - 4) * 8;
    base -= stressLevel * 3.5;
    base += (physicalActivity / 60) * 12;
    base -= caffeineCups * 3;
    const score = Math.max(10, Math.min(98, Math.round(base)));
    const rating = score >= 80 ? 'Optimal Sleep Quality' : score >= 60 ? 'Moderate / Average' : 'High Sleep Debt / Risk';
    return { score, rating };
  };

  const currentSleepScore = calculateSleepScore();

  const handleSimulateRag = (e) => {
    e.preventDefault();
    if (!ragQuery.trim()) return;
    setIsQuerying(true);
    setTimeout(() => {
      setIsQuerying(false);
      setRagResponse({
        answer: `Contextually retrieved from vector embeddings: The query regarding "${ragQuery}" was matched against knowledge vector chunks in ChromaDB. The model generated this grounded clinical response minimizing hallucination.`,
        sources: [
          'ChromaDB Vector Store Collection: medical_knowledge_base',
          `Cosine Distance: 0.12 (High Confidence Match)`,
        ],
        tokens: Math.floor(Math.random() * 80) + 120,
        latency: `${Math.floor(Math.random() * 120) + 140}ms`,
        model: 'Ollama / Llama-3.2 (Local Embeddings & Inference)',
      });
    }, 600);
  };

  return (
    <section id="playground" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Showcase</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Live AI / ML Demo Widget
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
          Test interactive simulations of the Disease RAG Assistant and the Sleep Quality ML Model right here in real time.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mt-4" />
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('rag')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'rag'
              ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/10'
              : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white'
          }`}
        >
          <Bot className="w-4 h-4" />
          <span>RAG Query Simulator</span>
        </button>

        <button
          onClick={() => setActiveTab('ml')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'ml'
              ? 'bg-violet-500/20 border border-violet-400 text-violet-300 shadow-md shadow-violet-500/10'
              : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>Sleep Quality Predictor</span>
        </button>
      </div>

      {/* Interactive Container */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 max-w-4xl mx-auto shadow-2xl">
        {activeTab === 'rag' ? (
          <div>
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                  Ollama + ChromaDB Vector RAG Engine
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">FastAPI Asynchronous Endpoint</span>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSimulateRag} className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={ragQuery}
                  onChange={(e) => setRagQuery(e.target.value)}
                  placeholder="Enter medical/clinical query (e.g. Type 2 diabetes management)..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-zinc-500 text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isQuerying}
                className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all disabled:opacity-50"
              >
                {isQuerying ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Query</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* Response Box */}
            <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-4">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Synthesized Contextual Output</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                  {ragResponse.answer}
                </p>
              </div>

              {/* Citations */}
              <div className="pt-3 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Retrieved Vector Knowledge Chunks (ChromaDB)
                </div>
                <div className="space-y-1.5">
                  {ragResponse.sources.map((src, i) => (
                    <div
                      key={i}
                      className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20"
                    >
                      {src}
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-400 gap-2">
                <span>Model: <strong className="text-zinc-200">{ragResponse.model}</strong></span>
                <span>Latency: <strong className="text-emerald-400">{ragResponse.latency}</strong></span>
                <span>Tokens: <strong className="text-cyan-400">{ragResponse.tokens}</strong></span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-xs font-mono text-violet-300 font-semibold uppercase">
                  Random Forest & Gradient Boosting Classifier
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Scikit-learn Model Inference</span>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-2">
                  <span>Sleep Duration</span>
                  <span className="text-cyan-400 font-bold">{sleepHours} Hours</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="0.5"
                  value={sleepHours}
                  onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-2">
                  <span>Stress Level (1-10)</span>
                  <span className="text-violet-400 font-bold">{stressLevel}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={stressLevel}
                  onChange={(e) => setStressLevel(parseInt(e.target.value))}
                  className="w-full accent-violet-400 cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-2">
                  <span>Physical Activity</span>
                  <span className="text-emerald-400 font-bold">{physicalActivity} Mins/day</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={physicalActivity}
                  onChange={(e) => setPhysicalActivity(parseInt(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-2">
                  <span>Caffeine Intake</span>
                  <span className="text-amber-400 font-bold">{caffeineCups} Cups</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  value={caffeineCups}
                  onChange={(e) => setCaffeineCups(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Score Result Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/40 via-cyan-950/40 to-black border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wide">
                  Predicted Quality Score
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-1">
                  {currentSleepScore.score}
                  <span className="text-xs text-zinc-400">/100</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold text-white">
                  {currentSleepScore.rating}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
