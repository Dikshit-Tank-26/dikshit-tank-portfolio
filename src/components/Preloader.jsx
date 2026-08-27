import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [isFinished, setIsFinished] = useState(false);
  const name = "DIKSHIT TANK";
  const letters = name.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(12px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070c] select-none"
        >
          {/* Subtle glowing backdrop pulse */}
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse pointer-events-none" />
          
          <div className="flex items-center justify-center flex-wrap px-4">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(16px)", y: 15 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                className={`text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wider text-white ${
                  char === " " ? "w-4 sm:w-6" : ""
                }`}
                style={{
                  fontFamily: '"Space Grotesk", "Inter", sans-serif',
                  textShadow: "0 0 25px rgba(6, 182, 212, 0.4)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Subtitle tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 flex items-center gap-2 text-xs md:text-sm font-mono tracking-widest text-cyan-400 uppercase"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            AI & MACHINE LEARNING DEVELOPER
          </motion.div>

          {/* Minimalist progress line */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full mt-8 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-cyan-400 to-violet-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
