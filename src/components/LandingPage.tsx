// ============================================================
// Landing Page - MDCAT Pro Mock Tests (Mobile Responsive)
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Clock, Target, Trophy, ChevronRight, X,
  Users, BarChart2, Shield, Zap, Brain, FlaskConical
} from "lucide-react";
import { useTestStore } from "../store/testStore";
import { SUBJECT_DISTRIBUTION } from "../data/mcqs";
import ThreeDWorkflow from "./ThreeDWorkflow";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const { startTest } = useTestStore();

  const handleStart = () => {
    if (!name.trim() || name.trim().length < 2) {
      setNameError("Please enter your full name (at least 2 characters).");
      return;
    }
    startTest(name.trim());
  };

  // ✅ Bug Fix: "View Sample Questions" scrolls to subject section
  const scrollToSubjects = () => {
    document.getElementById("subject-distribution")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-white overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-[#050B18]/80 backdrop-blur border-b border-white/5">
        <div className="flex items-center gap-2 select-none">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight">
            MDCAT <span className="text-emerald-400">Pro</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollToSubjects}
            className="hidden sm:block px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-sm transition"
          >
            Subjects
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="px-3 sm:px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-emerald-900/50"
          >
            Start Test
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden">
        {/* BG Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
          <div className="absolute top-40 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/8 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute top-40 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-violet-500/8 rounded-full blur-[80px] animate-pulse [animation-delay:1s]" />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl w-full"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-5">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Pakistan's Most Challenging MDCAT Mock Platform — 2025
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-5">
            Master MDCAT with
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ultra-Hard Mock Tests
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed px-2">
            180 hand-picked, high-difficulty MCQs from{" "}
            <span className="text-white font-semibold">UHS, NUMS, KMU, SZABMU &amp; PMDC</span>{" "}
            papers (2015–2025). 3-hour timed test. Real exam simulation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowModal(true)}
              className="group px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 font-bold text-base sm:text-lg shadow-xl shadow-emerald-900/40 flex items-center justify-center gap-2 transition-all"
            >
              Start Free Mock Test
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <button
              onClick={scrollToSubjects}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl border border-white/10 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/5 font-semibold text-base sm:text-lg transition-all"
            >
              View Sample Questions
            </button>
          </div>

          {/* Prize Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-yellow-500/15 to-amber-500/15 border-2 border-yellow-500/30 max-w-full shadow-xl shadow-yellow-500/5"
          >
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0" />
            <span className="text-sm sm:text-lg font-medium text-left">
              <span className="text-yellow-400 font-bold block sm:inline">🎉 Score 50% or above</span>
              <span className="text-slate-200 hidden sm:inline"> to win </span>
              <span className="text-slate-200 sm:hidden"> win </span>
              <span className="text-yellow-400 font-black text-lg sm:text-2xl">500 Rs</span>
              <span className="text-slate-400 text-xs sm:text-sm block mt-0.5">(special prize awaits!)</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl w-full px-2 sm:px-0"
        >
          {[
            { icon: BookOpen, label: "MCQs in Bank", value: "800+", color: "text-emerald-400" },
            { icon: Clock, label: "Test Duration", value: "3 Hours", color: "text-cyan-400" },
            { icon: Target, label: "Questions/Test", value: "180", color: "text-violet-400" },
            { icon: Users, label: "Students Tested", value: "12K+", color: "text-amber-400" },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="bg-white/5 border border-white/8 rounded-2xl p-3 sm:p-4 text-center">
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color} mx-auto mb-1.5`} />
              <div className={`text-xl sm:text-2xl font-bold ${color}`}>{value}</div>
              <div className="text-slate-500 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── SUBJECT DISTRIBUTION ── */}
      <section id="subject-distribution" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Exam Paper Distribution</h2>
            <p className="text-slate-400 text-sm sm:text-base">Strictly following official MDCAT weightage</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {Object.entries(SUBJECT_DISTRIBUTION).map(([subject, data], i) => {
              const icons: Record<string, React.ReactNode> = {
                Biology: <Brain className="w-5 h-5" />,
                Chemistry: <FlaskConical className="w-5 h-5" />,
                Physics: <Zap className="w-5 h-5" />,
                English: <BookOpen className="w-5 h-5" />,
                "Logical Reasoning": <Target className="w-5 h-5" />,
              };
              const colors: Record<string, string> = {
                Biology: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-400",
                Chemistry: "from-blue-500/20 to-blue-600/5 border-blue-500/20 text-blue-400",
                Physics: "from-violet-500/20 to-violet-600/5 border-violet-500/20 text-violet-400",
                English: "from-amber-500/20 to-amber-600/5 border-amber-500/20 text-amber-400",
                "Logical Reasoning": "from-rose-500/20 to-rose-600/5 border-rose-500/20 text-rose-400",
              };
              return (
                <motion.div
                  key={subject}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`bg-gradient-to-br ${colors[subject]} border rounded-2xl p-4 sm:p-5`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-white/10">{icons[subject]}</div>
                    <h3 className="font-bold text-white text-sm sm:text-base">{subject}</h3>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold">{data.count}</div>
                      <div className="text-xs text-slate-400 mt-0.5">MCQs</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold">{data.percentage}%</div>
                      <div className="text-xs text-slate-400 mt-0.5">Weightage</div>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${data.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full rounded-full bg-current opacity-60"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3D WORKFLOW ── */}
      <ThreeDWorkflow />

      {/* ── FEATURES ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Why Choose MDCAT Pro?</h2>
            <p className="text-slate-400 text-sm sm:text-base">Designed by top medical educators for maximum exam readiness</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { icon: Shield, title: "Official Pattern", desc: "MCQs from actual UHS, NUMS, KMU, SZABMU & PMDC papers (2015–2025).", color: "text-emerald-400" },
              { icon: Clock, title: "Real Exam Timer", desc: "3-hour countdown with automatic submission. Exact exam simulation.", color: "text-cyan-400" },
              { icon: BarChart2, title: "Detailed Analytics", desc: "Subject-wise breakdown with scores, percentages and visual charts.", color: "text-blue-400" },
              { icon: Target, title: "Ultra-Hard Difficulty", desc: "Only the hardest MCQs selected — designed to expose your weak areas.", color: "text-violet-400" },
              { icon: Brain, title: "Answer Review", desc: "After the test, review every question with correct answers highlighted.", color: "text-fuchsia-400" },
              { icon: Trophy, title: "Prize Motivation", desc: "Score above 50% and unlock a special surprise reward!", color: "text-amber-400" },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white/5 border border-white/8 rounded-2xl p-5 sm:p-6 hover:bg-white/8 hover:border-white/15 transition-all group"
              >
                <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="font-bold text-white text-sm sm:text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-7 sm:p-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Ready to Test Yourself?</h2>
            <p className="text-slate-400 text-sm sm:text-base mb-6 sm:mb-8">
              180 questions. 3 hours. One chance to prove your knowledge.<br />
              Are you ready for the hardest MDCAT mock?
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowModal(true)}
              className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 font-bold text-lg sm:text-xl shadow-xl shadow-emerald-900/40 transition-all"
            >
              Start Mock Test Now 🚀
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-6 sm:py-8 text-center text-slate-600 text-xs sm:text-sm px-4 sm:px-6">
        <p>© {new Date().getFullYear()} MDCAT Pro Mock Tests. All question rights remain with respective exam boards.</p>
        <p className="mt-1 text-xs">UHS | NUMS | KMU | SZABMU | PMDC · Mock Test Platform</p>
      </footer>

      {/* ── START TEST MODAL ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-[#0d1426] border border-white/10 rounded-t-3xl sm:rounded-3xl p-5 sm:p-8 w-full sm:max-w-md shadow-2xl max-h-[92vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                    <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold">Register &amp; Start</h2>
                    <p className="text-slate-500 text-xs">MDCAT Pro Mock Test</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Prize Alert */}
              <div className="bg-gradient-to-r from-yellow-500/15 to-amber-500/15 border border-yellow-500/30 rounded-2xl p-4 sm:p-5 mb-5 flex items-start gap-3 sm:gap-4 shadow-lg shadow-yellow-500/10">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-yellow-400 font-black text-base sm:text-lg">🎁 Special Surprise Awaits!</p>
                  <p className="text-slate-200 text-sm sm:text-base mt-1.5 leading-relaxed">
                    <strong className="text-white">Score 50% or above</strong> in this mock test to win{" "}
                    <strong className="text-yellow-400 text-base sm:text-xl">500 Rs</strong> — a surprise prize for top performers!
                  </p>
                </div>
              </div>

              {/* Test Info */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                {[
                  { label: "Questions", value: "180" },
                  { label: "Duration", value: "3 hrs" },
                  { label: "Passing", value: "50%" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/5 rounded-xl p-2.5 sm:p-3 text-center">
                    <div className="text-base sm:text-lg font-bold text-emerald-400">{value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Name Input */}
              <div className="space-y-2 mb-5">
                <label className="text-sm font-medium text-slate-300">Your Full Name *</label>
                <input
                  value={name}
                  onChange={(e) => { setName(e.target.value); setNameError(""); }}
                  onKeyDown={(e) => e.key === "Enter" && handleStart()}
                  placeholder="e.g. Muhammad Ali Raza"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/8 transition text-sm"
                  autoFocus
                />
                {nameError && (
                  <p className="text-red-400 text-xs">{nameError}</p>
                )}
              </div>

              <button
                onClick={handleStart}
                className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 font-bold text-base sm:text-lg transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2"
              >
                Register &amp; Start Test
                <ChevronRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-slate-600 text-center mt-3">
                By starting, you agree to complete the test honestly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
