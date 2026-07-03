// ============================================================
// Dramatic 10-second Loading Screen after Test Submission
// ============================================================

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTestStore } from "../store/testStore";

const LOADING_MESSAGES = [
  "Analyzing your performance...",
  "Comparing with top rankers...",
  "Calculating subject-wise scores...",
  "Evaluating accuracy...",
  "Preparing your detailed result...",
  "Computing percentile rank...",
  "Generating performance report...",
  "Almost done... preparing surprise! 🎁",
];

export default function LoadingScreen() {
  const { setCurrentPage } = useTestStore();
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Progress from 0 to 100 in 10 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    // Change messages every ~1.2 seconds
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 1200);

    // Navigate to surprise after 10 seconds
    const navTimer = setTimeout(() => {
      setCurrentPage("surprise");
    }, 10000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(navTimer);
    };
  }, [setCurrentPage]);

  return (
    <div className="min-h-screen bg-[#050B18] flex items-center justify-center text-white">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-violet-500/8 rounded-full blur-[80px] animate-pulse [animation-delay:0.5s]" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-[80px] animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative z-10 text-center max-w-lg px-6">
        {/* Animated Brain Icon */}
        <div className="relative mx-auto mb-10 w-32 h-32">
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              background: "conic-gradient(from 0deg, transparent 0deg, #10B981 360deg)",
              WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px))",
            }}
          />
          {/* Inner pulsing circle */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center"
          >
            <span className="text-4xl">🧠</span>
          </motion.div>

          {/* Orbiting dots */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
              className="absolute inset-0"
            >
              <div
                className="absolute w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/50"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-56px)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Calculating Result</h2>

        {/* Animated message */}
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-slate-400 text-sm h-6 mb-8"
          >
            {LOADING_MESSAGES[messageIndex]}
          </motion.p>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="relative mb-4">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          {/* Glow effect */}
          <div
            className="absolute top-0 h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 blur-sm opacity-50"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Processing...</span>
          <span className="font-mono text-emerald-400 font-bold">{progress}%</span>
        </div>

        {/* Step indicators */}
        <div className="mt-8 flex justify-center gap-3">
          {["Answers", "Score", "Analysis", "Report"].map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-1">
              <motion.div
                animate={{
                  backgroundColor: progress > i * 25 ? "#10B981" : "rgba(255,255,255,0.1)",
                  scale: progress > i * 25 ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 rounded-full"
              />
              <span className={`text-xs ${progress > i * 25 ? "text-emerald-400" : "text-slate-700"}`}>
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Preparing surprise text */}
        {progress > 80 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold"
          >
            🎁 Preparing your special surprise...
          </motion.div>
        )}
      </div>
    </div>
  );
}
