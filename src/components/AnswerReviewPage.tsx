// ============================================================
// Answer Review Page - Question-by-question review after test
// ============================================================

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, XCircle, MinusCircle, ChevronLeft, ChevronRight,
  Brain, FlaskConical, Zap, BookOpen, Target, ArrowLeft,
  Filter, BarChart2, Eye
} from "lucide-react";
import { useTestStore } from "../store/testStore";
import { Subject } from "../data/mcqs";

type FilterStatus = "all" | "correct" | "incorrect" | "skipped";

const SUBJECT_ICONS: Record<Subject, React.ReactNode> = {
  Biology: <Brain className="w-3.5 h-3.5" />,
  Chemistry: <FlaskConical className="w-3.5 h-3.5" />,
  Physics: <Zap className="w-3.5 h-3.5" />,
  English: <BookOpen className="w-3.5 h-3.5" />,
  "Logical Reasoning": <Target className="w-3.5 h-3.5" />,
};

const SUBJECT_COLORS: Record<Subject, string> = {
  Biology: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
  Chemistry: "text-blue-400 bg-blue-500/10 border-blue-500/25",
  Physics: "text-violet-400 bg-violet-500/10 border-violet-500/25",
  English: "text-amber-400 bg-amber-500/10 border-amber-500/25",
  "Logical Reasoning": "text-rose-400 bg-rose-500/10 border-rose-500/25",
};

const OPTION_LABELS = ["A", "B", "C", "D"];

export default function AnswerReviewPage() {
  const { questions, answers, finalScore, finalPercentage, subjectScores, goToLanding, setCurrentPage } =
    useTestStore();

  const [activeSubject, setActiveSubject] = useState<Subject | "all">("all");
  const [activeStatus, setActiveStatus] = useState<FilterStatus>("all");
  const [viewIndex, setViewIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  // Compute filtered list
  const filtered = useMemo(() => {
    return questions.filter((q) => {
      const ans = answers[q.id];
      const isCorrect = ans?.selectedOption === q.correct;
      const isSkipped = ans?.selectedOption === null || ans?.selectedOption === undefined;
      const isIncorrect = !isSkipped && !isCorrect;

      const subjectMatch = activeSubject === "all" || q.subject === activeSubject;
      const statusMatch =
        activeStatus === "all" ||
        (activeStatus === "correct" && isCorrect) ||
        (activeStatus === "incorrect" && isIncorrect) ||
        (activeStatus === "skipped" && isSkipped);

      return subjectMatch && statusMatch;
    });
  }, [questions, answers, activeSubject, activeStatus]);

  // Reset viewIndex when filters change
  const handleSubjectChange = (s: Subject | "all") => {
    setActiveSubject(s);
    setViewIndex(0);
  };
  const handleStatusChange = (s: FilterStatus) => {
    setActiveStatus(s);
    setViewIndex(0);
  };

  const currentQ = filtered[viewIndex];
  const currentAns = currentQ ? answers[currentQ.id] : null;
  const isCorrect = currentAns?.selectedOption === currentQ?.correct;
  const isSkipped = currentAns?.selectedOption === null || currentAns?.selectedOption === undefined;

  // Stats
  const totalCorrect = questions.filter((q) => answers[q.id]?.selectedOption === q.correct).length;
  const totalSkipped = questions.filter((q) => answers[q.id]?.selectedOption === null || answers[q.id]?.selectedOption === undefined).length;
  const totalIncorrect = questions.length - totalCorrect - totalSkipped;

  const subjects: (Subject | "all")[] = ["all", "Biology", "Chemistry", "Physics", "English", "Logical Reasoning"];

  return (
    <div className="min-h-screen bg-[#050B18] text-white flex flex-col">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 bg-[#050B18]/95 backdrop-blur border-b border-white/5 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          {/* Back Button */}
          <button
            onClick={() => setCurrentPage("result")}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 transition text-slate-400 hover:text-white text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Results</span>
          </button>

          {/* Title */}
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-sm sm:text-base">Answer Review</span>
          </div>

          {/* Score badge */}
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-slate-400">Score:</span>
            <span className={`font-bold ${finalPercentage >= 50 ? "text-emerald-400" : "text-rose-400"}`}>
              {finalScore}/{questions.length} ({finalPercentage}%)
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto w-full px-4 py-4 flex-1 flex flex-col gap-4">

        {/* ── SUMMARY STATS ── */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { label: "Correct", value: totalCorrect, icon: <CheckCircle2 className="w-4 h-4" />, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", filter: "correct" as FilterStatus },
            { label: "Incorrect", value: totalIncorrect, icon: <XCircle className="w-4 h-4" />, color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20", filter: "incorrect" as FilterStatus },
            { label: "Skipped", value: totalSkipped, icon: <MinusCircle className="w-4 h-4" />, color: "text-slate-400", bg: "bg-white/5 border-white/10", filter: "skipped" as FilterStatus },
          ].map(({ label, value, icon, color, bg, filter }) => (
            <button
              key={label}
              onClick={() => handleStatusChange(activeStatus === filter ? "all" : filter)}
              className={`${bg} border rounded-xl p-2.5 sm:p-3 text-center transition-all hover:scale-[1.02] ${activeStatus === filter ? "ring-1 ring-white/20" : ""}`}
            >
              <div className={`flex items-center justify-center gap-1 ${color} mb-1`}>{icon}</div>
              <div className={`text-lg sm:text-2xl font-bold ${color}`}>{value}</div>
              <div className="text-xs text-slate-500">{label}</div>
            </button>
          ))}
        </div>

        {/* ── FILTERS ROW ── */}
        <div className="space-y-2">
          {/* Subject Filter — scrollable chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {subjects.map((s) => {
              const isActive = activeSubject === s;
              const colorClass = s !== "all" ? SUBJECT_COLORS[s as Subject] : "text-slate-300 bg-white/5 border-white/10";
              return (
                <button
                  key={s}
                  onClick={() => handleSubjectChange(s)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                    isActive
                      ? `${colorClass} ring-1 ring-white/20`
                      : `${colorClass} opacity-50 hover:opacity-80`
                  }`}
                >
                  {s !== "all" && SUBJECT_ICONS[s as Subject]}
                  {s === "all" ? (
                    <span className="flex items-center gap-1"><BarChart2 className="w-3 h-3" /> All</span>
                  ) : s === "Logical Reasoning" ? "Logic" : s}
                </button>
              );
            })}
          </div>

          {/* Status filter pills */}
          <div className="flex gap-1.5">
            {(["all", "correct", "incorrect", "skipped"] as FilterStatus[]).map((s) => (
              <button
                key={s}
                onClick={() => handleStatusChange(s)}
                className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all capitalize ${
                  activeStatus === s
                    ? "bg-white/15 border-white/30 text-white"
                    : "bg-white/3 border-white/8 text-slate-500 hover:text-slate-300"
                }`}
              >
                {s}
              </button>
            ))}
            <div className="ml-auto text-xs text-slate-500 self-center">
              {filtered.length} question{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* ── QUESTION VIEWER ── */}
        {filtered.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center py-16">
              <Filter className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">No questions match this filter</p>
              <button
                onClick={() => { setActiveSubject("all"); setActiveStatus("all"); }}
                className="mt-3 text-sm text-cyan-400 hover:text-cyan-300 transition"
              >
                Clear filters
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Navigation bar */}
            <div className="flex items-center justify-between bg-white/3 border border-white/8 rounded-xl px-3 py-2">
              <button
                onClick={() => setViewIndex((v) => Math.max(0, v - 1))}
                disabled={viewIndex === 0}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Scrollable question dots */}
              <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-xs md:max-w-sm scrollbar-hide px-2">
                {filtered.map((q, i) => {
                  const a = answers[q.id];
                  const ok = a?.selectedOption === q.correct;
                  const skip = a?.selectedOption === null || a?.selectedOption === undefined;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setViewIndex(i)}
                      className={`flex-shrink-0 w-6 h-6 rounded-md text-[10px] font-bold transition-all ${
                        i === viewIndex
                          ? "bg-cyan-500 text-white scale-125"
                          : ok
                          ? "bg-emerald-500/30 text-emerald-400"
                          : skip
                          ? "bg-white/10 text-slate-500"
                          : "bg-rose-500/30 text-rose-400"
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setViewIndex((v) => Math.min(filtered.length - 1, v + 1))}
                disabled={viewIndex === filtered.length - 1}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              {currentQ && (
                <motion.div
                  key={currentQ.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1"
                >
                  {/* Question header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {/* Result badge */}
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold ${
                      isSkipped
                        ? "bg-white/5 border-white/10 text-slate-400"
                        : isCorrect
                        ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                        : "bg-rose-500/15 border-rose-500/30 text-rose-400"
                    }`}>
                      {isSkipped ? <MinusCircle className="w-3.5 h-3.5" /> : isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {isSkipped ? "Skipped" : isCorrect ? "Correct" : "Incorrect"}
                    </div>

                    {/* Subject tag */}
                    <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-semibold ${SUBJECT_COLORS[currentQ.subject]}`}>
                      {SUBJECT_ICONS[currentQ.subject]}
                      {currentQ.subject}
                    </div>

                    {/* Year/Source */}
                    {currentQ.year && (
                      <span className="text-xs text-slate-600 ml-auto">{currentQ.source} · {currentQ.year}</span>
                    )}
                  </div>

                  {/* Question text */}
                  <div className="bg-[#0d1426] border border-white/8 rounded-2xl p-4 sm:p-6 mb-3">
                    <div className="flex gap-3 items-start mb-5">
                      <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-slate-400">
                        {viewIndex + 1}
                      </span>
                      <p className="text-white text-sm sm:text-base leading-relaxed font-medium">{currentQ.question}</p>
                    </div>

                    {/* Options */}
                    <div className="space-y-2.5">
                      {currentQ.options.map((opt, idx) => {
                        const isSelected = currentAns?.selectedOption === idx;
                        const isCorrectOpt = idx === currentQ.correct;

                        let optClass = "bg-white/3 border-white/8 text-slate-300";
                        let labelClass = "bg-white/8 text-slate-400";

                        if (isCorrectOpt) {
                          optClass = "bg-emerald-500/10 border-emerald-500/40 text-white";
                          labelClass = "bg-emerald-500 text-white";
                        }
                        if (isSelected && !isCorrectOpt) {
                          optClass = "bg-rose-500/10 border-rose-500/40 text-white";
                          labelClass = "bg-rose-500 text-white";
                        }

                        return (
                          <div
                            key={idx}
                            className={`flex items-start gap-3 p-3 sm:p-4 rounded-xl border transition-all ${optClass}`}
                          >
                            <span className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-xs font-bold ${labelClass}`}>
                              {OPTION_LABELS[idx]}
                            </span>
                            <span className="text-sm sm:text-base leading-relaxed flex-1">{opt}</span>
                            {/* Indicator */}
                            <span className="flex-shrink-0 self-center">
                              {isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                              {isSelected && !isCorrectOpt && <XCircle className="w-4 h-4 text-rose-400" />}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {currentQ.explanation && (
                      <div className="mt-4 p-3 sm:p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                        <p className="text-xs text-cyan-400 font-semibold mb-1">💡 Explanation</p>
                        <p className="text-slate-300 text-sm leading-relaxed">{currentQ.explanation}</p>
                      </div>
                    )}
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500 justify-center mb-2">
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-500 inline-block" /> Correct Answer</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-rose-500 inline-block" /> Your Wrong Answer</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Nav Buttons */}
            <div className="flex gap-3 pb-4">
              <button
                onClick={() => setViewIndex((v) => Math.max(0, v - 1))}
                disabled={viewIndex === 0}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition text-sm font-medium"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>

              <button
                onClick={goToLanding}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 transition text-slate-400 hover:text-white text-sm"
              >
                Home
              </button>

              <button
                onClick={() => setViewIndex((v) => Math.min(filtered.length - 1, v + 1))}
                disabled={viewIndex === filtered.length - 1}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-30 disabled:cursor-not-allowed transition text-sm font-semibold shadow-lg"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
