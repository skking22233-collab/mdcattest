// ============================================================
// Test Interface - 180 MCQs with Navigation & Timer (Mobile Responsive)
// ============================================================

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flag, ChevronLeft, ChevronRight, Clock, AlertTriangle,
  CheckCircle2, Circle, BookOpen, Brain, FlaskConical,
  Zap, Target, BarChart2, X, Menu
} from "lucide-react";
import { useTestStore } from "../store/testStore";
import { Subject } from "../data/mcqs";

const SUBJECT_ICONS: Record<Subject, React.ReactNode> = {
  Biology: <Brain className="w-3.5 h-3.5" />,
  Chemistry: <FlaskConical className="w-3.5 h-3.5" />,
  Physics: <Zap className="w-3.5 h-3.5" />,
  English: <BookOpen className="w-3.5 h-3.5" />,
  "Logical Reasoning": <Target className="w-3.5 h-3.5" />,
};

const SUBJECT_COLORS: Record<Subject, string> = {
  Biology: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Chemistry: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Physics: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  English: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "Logical Reasoning": "text-rose-400 bg-rose-500/10 border-rose-500/20",
};

export default function TestInterface() {
  const {
    studentName, questions, answers, currentQuestionIndex,
    timeLeft, answerQuestion, toggleFlag, setCurrentQuestion, submitTest, decrementTimer
  } = useTestStore();

  const [showNavPanel, setShowNavPanel] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      decrementTimer();
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [decrementTimer]);

  const currentQ = questions[currentQuestionIndex];
  const currentAnswer = currentQ ? answers[currentQ.id] : null;

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const answered = Object.values(answers).filter((a) => a.selectedOption !== null).length;
  const flagged = Object.values(answers).filter((a) => a.flagged).length;
  const unanswered = questions.length - answered;

  const timePercent = (timeLeft / 10800) * 100;
  const isLowTime = timeLeft < 1800; // 30 min
  const isCriticalTime = timeLeft < 600; // 10 min

  // Group questions by subject for panel
  const questionsBySubject: Record<string, number[]> = {};
  questions.forEach((q, idx) => {
    if (!questionsBySubject[q.subject]) questionsBySubject[q.subject] = [];
    questionsBySubject[q.subject].push(idx);
  });

  if (!currentQ) return null;

  return (
    <div className="min-h-screen bg-[#050B18] text-white flex flex-col">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 bg-[#050B18]/95 backdrop-blur border-b border-white/5 px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNavPanel(!showNavPanel)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-slate-400 hover:text-white"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span className="font-bold text-xs sm:text-sm">MDCAT Pro</span>
            </div>
          </div>

          {/* Timer — center */}
          <div className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border font-mono text-sm sm:text-lg font-bold transition-all ${
            isCriticalTime
              ? "bg-red-500/10 border-red-500/40 text-red-400 animate-pulse"
              : isLowTime
              ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
              : "bg-white/5 border-white/10 text-white"
          }`}>
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {formatTime(timeLeft)}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            {/* Stats — hidden on xs, shown sm+ */}
            <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
              <span><span className="text-emerald-400 font-bold">{answered}</span> ans</span>
              <span><span className="text-amber-400 font-bold">{flagged}</span> flagged</span>
              <span><span className="text-slate-500 font-bold">{unanswered}</span> left</span>
            </div>
            {/* Mobile: just show answered count */}
            <div className="sm:hidden text-xs text-slate-400">
              <span className="text-emerald-400 font-bold">{answered}</span>/{questions.length}
            </div>
            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 font-semibold text-xs sm:text-sm transition-all shadow-lg"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Timer Bar */}
        <div className="mt-2 h-0.5 bg-white/5 rounded-full overflow-hidden max-w-7xl mx-auto">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${
              isCriticalTime ? "bg-red-500" : isLowTime ? "bg-amber-500" : "bg-emerald-500"
            }`}
            style={{ width: `${timePercent}%` }}
          />
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full">

        {/* ── SIDEBAR NAV PANEL ── */}
        <AnimatePresence>
          {showNavPanel && (
            <motion.aside
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-72 sm:w-80 bg-[#0d1426] border-r border-white/8 overflow-y-auto flex flex-col"
            >
              {/* Panel Header */}
              <div className="sticky top-0 bg-[#0d1426] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-white">Question Navigator</p>
                  <p className="text-xs text-slate-500 truncate max-w-[180px]">{studentName}</p>
                </div>
                <button onClick={() => setShowNavPanel(false)} className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Legend */}
              <div className="px-4 py-3 border-b border-white/5 flex flex-wrap gap-2 sm:gap-3 text-xs">
                {[
                  { label: "Answered", color: "bg-emerald-500" },
                  { label: "Flagged", color: "bg-amber-500" },
                  { label: "Current", color: "bg-blue-500" },
                  { label: "Unanswered", color: "bg-white/10" },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className={`w-3 h-3 rounded ${color}`} />
                    <span className="text-slate-400">{label}</span>
                  </div>
                ))}
              </div>

              {/* Progress Summary */}
              <div className="px-4 py-3 grid grid-cols-3 gap-2 border-b border-white/5">
                {[
                  { label: "Done", val: answered, color: "text-emerald-400" },
                  { label: "Flagged", val: flagged, color: "text-amber-400" },
                  { label: "Left", val: unanswered, color: "text-slate-400" },
                ].map(({ label, val, color }) => (
                  <div key={label} className="bg-white/5 rounded-xl p-2 text-center">
                    <div className={`text-base sm:text-lg font-bold ${color}`}>{val}</div>
                    <div className="text-xs text-slate-600">{label}</div>
                  </div>
                ))}
              </div>

              {/* Questions grouped by subject */}
              <div className="flex-1 px-4 py-4 space-y-4">
                {Object.entries(questionsBySubject).map(([subject, indices]) => (
                  <div key={subject}>
                    <div className={`flex items-center gap-2 text-xs font-semibold mb-2 px-2 py-1.5 rounded-lg border ${SUBJECT_COLORS[subject as Subject]}`}>
                      {SUBJECT_ICONS[subject as Subject]}
                      {subject}
                      <span className="ml-auto opacity-60">{indices.length}Q</span>
                    </div>
                    <div className="grid grid-cols-8 sm:grid-cols-7 gap-1">
                      {indices.map((idx) => {
                        const q = questions[idx];
                        const ans = answers[q.id];
                        const isCurrent = idx === currentQuestionIndex;
                        const isAnswered = ans?.selectedOption !== null;
                        const isFlagged = ans?.flagged;
                        return (
                          <button
                            key={idx}
                            onClick={() => { setCurrentQuestion(idx); setShowNavPanel(false); }}
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-bold transition-all hover:scale-110 active:scale-95 ${
                              isCurrent
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                                : isFlagged
                                ? "bg-amber-500 text-white"
                                : isAnswered
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "bg-white/5 text-slate-500 hover:bg-white/10"
                            }`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Overlay for mobile */}
        {showNavPanel && (
          <div className="fixed inset-0 z-40 bg-black/60" onClick={() => setShowNavPanel(false)} />
        )}

        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 px-3 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto w-full">

          {/* Subject Tag */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-semibold border ${SUBJECT_COLORS[currentQ.subject]}`}>
              {SUBJECT_ICONS[currentQ.subject]}
              <span className="hidden xs:inline sm:inline">{currentQ.subject}</span>
              <span className="xs:hidden">{currentQ.subject.split(" ")[0]}</span>
              {currentQ.year && <span className="opacity-50 hidden sm:inline">· {currentQ.year}</span>}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <BarChart2 className="w-3.5 h-3.5" />
              Q {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-white/5 rounded-full mb-4 sm:mb-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.18 }}
              className="bg-[#0d1426] border border-white/8 rounded-2xl p-4 sm:p-6 sm:p-8 mb-4 sm:mb-6"
            >
              {/* Question Text */}
              <div className="flex items-start gap-2 sm:gap-3 mb-5 sm:mb-8">
                <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs sm:text-sm font-bold text-slate-400">
                  {currentQuestionIndex + 1}
                </span>
                <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                  {currentQ.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5 sm:space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = currentAnswer?.selectedOption === idx;
                  const optionLabel = ["A", "B", "C", "D"][idx];
                  return (
                    <motion.button
                      key={idx}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => answerQuestion(currentQ.id, idx)}
                      className={`w-full text-left flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border transition-all touch-manipulation ${
                        isSelected
                          ? "bg-emerald-500/10 border-emerald-500/50 shadow-lg shadow-emerald-900/20"
                          : "bg-white/3 border-white/8 hover:bg-white/7 hover:border-white/15 active:bg-white/10"
                      }`}
                    >
                      <span className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold ${
                        isSelected
                          ? "bg-emerald-500 text-white"
                          : "bg-white/8 text-slate-400"
                      }`}>
                        {optionLabel}
                      </span>
                      <span className={`text-sm sm:text-base leading-relaxed flex-1 ${
                        isSelected ? "text-white font-medium" : "text-slate-300"
                      }`}>
                        {option}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 ml-auto flex-shrink-0 mt-0.5" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <button
              onClick={() => currentQuestionIndex > 0 && setCurrentQuestion(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition text-xs sm:text-sm font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>

            <button
              onClick={() => toggleFlag(currentQ.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl border font-medium text-xs sm:text-sm transition-all ${
                currentAnswer?.flagged
                  ? "bg-amber-500/10 border-amber-500/40 text-amber-400"
                  : "bg-white/5 border-white/8 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <Flag className="w-4 h-4" />
              {currentAnswer?.flagged ? "Flagged" : "Flag"}
            </button>

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestion(currentQuestionIndex + 1)}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 font-semibold text-xs sm:text-sm transition-all shadow-lg"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 font-semibold text-xs sm:text-sm transition-all shadow-lg"
              >
                Submit
              </button>
            )}
          </div>

          {/* Question Status Row */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3 justify-center">
            {[
              { icon: <CheckCircle2 className="w-3 h-3" />, label: `${answered} Answered`, color: "text-emerald-400" },
              { icon: <Flag className="w-3 h-3" />, label: `${flagged} Flagged`, color: "text-amber-400" },
              { icon: <Circle className="w-3 h-3" />, label: `${unanswered} Unanswered`, color: "text-slate-500" },
            ].map(({ icon, label, color }) => (
              <div key={label} className={`flex items-center gap-1 sm:gap-1.5 text-xs ${color}`}>
                {icon} {label}
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* ── SUBMIT CONFIRMATION MODAL ── */}
      <AnimatePresence>
        {showSubmitConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-[#0d1426] border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 w-full sm:max-w-sm shadow-2xl text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8 text-rose-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Submit Test?</h3>
              <p className="text-slate-400 text-sm mb-2">
                You have answered <span className="text-emerald-400 font-bold">{answered}</span> out of{" "}
                <span className="text-white font-bold">{questions.length}</span> questions.
              </p>
              {unanswered > 0 && (
                <p className="text-amber-400 text-xs mb-4">
                  ⚠️ {unanswered} questions are still unanswered!
                </p>
              )}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition font-medium text-sm"
                >
                  Continue Test
                </button>
                <button
                  onClick={() => { setShowSubmitConfirm(false); submitTest(); }}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 font-bold transition-all text-sm"
                >
                  Submit Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
