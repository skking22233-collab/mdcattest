// ============================================================
// Final Result Page with Subject-wise Charts
// ============================================================

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell
} from "recharts";
import {
  RotateCcw, CheckCircle, XCircle,
  TrendingUp, BookOpen, Brain, FlaskConical, Zap, Target, Award, Eye
} from "lucide-react";
import { useTestStore } from "../store/testStore";

const SUBJECT_COLORS: Record<string, string> = {
  Biology: "#10B981",
  Chemistry: "#3B82F6",
  Physics: "#8B5CF6",
  English: "#F59E0B",
  "Logical Reasoning": "#EF4444",
};

const SUBJECT_ICONS: Record<string, React.ReactNode> = {
  Biology: <Brain className="w-4 h-4" />,
  Chemistry: <FlaskConical className="w-4 h-4" />,
  Physics: <Zap className="w-4 h-4" />,
  English: <BookOpen className="w-4 h-4" />,
  "Logical Reasoning": <Target className="w-4 h-4" />,
};

function getMotivationalMessage(percentage: number): { title: string; message: string; emoji: string } {
  if (percentage >= 90) return {
    emoji: "🏆",
    title: "Outstanding Performance!",
    message: "Exceptional! You're in the top tier. Medical school is definitely within your reach. Keep this momentum!",
  };
  if (percentage >= 80) return {
    emoji: "🌟",
    title: "Excellent Work!",
    message: "Brilliant performance! You have a strong grasp of the material. Fine-tune a few weak spots and you'll ace the real MDCAT!",
  };
  if (percentage >= 70) return {
    emoji: "👍",
    title: "Very Good Job!",
    message: "Good score! You're on the right track. Focus more on your weaker subjects and practice more MCQs daily.",
  };
  if (percentage >= 60) return {
    emoji: "💪",
    title: "Good Effort!",
    message: "You're making progress! Identify your weak subjects from the analysis below and double your practice time.",
  };
  if (percentage >= 50) return {
    emoji: "📚",
    title: "Keep Going!",
    message: "You crossed 50%! Good start. Now work systematically on each subject. Consistency will take you to the top.",
  };
  if (percentage >= 40) return {
    emoji: "🎯",
    title: "You Need to Push Harder!",
    message: "Don't give up! MDCAT requires consistent effort. Revisit your textbooks, join a coaching, and practice daily MCQs.",
  };
  return {
    emoji: "📖",
    title: "Time to Study Harder!",
    message: "This is the beginning of your journey. Take this result as a wake-up call. Study smarter, practice more, and attempt again!",
  };
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0d1426] border border-white/10 rounded-xl p-3 text-white text-xs shadow-xl">
        <p className="font-bold mb-1">{label}</p>
        <p>Correct: <span style={{ color: payload[0]?.fill }}>{payload[0]?.value}</span></p>
        <p>Total: {payload[1]?.value}</p>
        <p>Score: {Math.round((payload[0]?.value / payload[1]?.value) * 100)}%</p>
      </div>
    );
  }
  return null;
};

export default function ResultPage() {
  const { studentName, finalScore, finalPercentage, subjectScores, answers, questions, goToLanding, goToReview } = useTestStore();
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showCharts, setShowCharts] = useState(false);
  const motivation = getMotivationalMessage(finalPercentage);
  const passed = finalPercentage >= 50;

  // Derive total from actual questions array — no hardcoded constant needed
  const totalQuestions = questions.length || 90;
  const incorrectAnswers = totalQuestions - finalScore - (
    Object.values(answers).filter((a) => a.selectedOption === null || a.selectedOption === undefined).length
  );
  const unattempted = Object.values(answers).filter((a) => a.selectedOption === null || a.selectedOption === undefined).length;

  // ✅ Bug Fix: Animate score counter — handle 0 case properly
  useEffect(() => {
    if (finalScore === 0) {
      setAnimatedScore(0);
      const chartTimer = setTimeout(() => setShowCharts(true), 800);
      return () => clearTimeout(chartTimer);
    }

    let start = 0;
    const end = finalScore;
    const duration = 1500;
    const stepTime = Math.max(16, Math.floor(duration / end)); // min 16ms per step
    const timer = setInterval(() => {
      start += 1;
      setAnimatedScore(start);
      if (start >= end) {
        clearInterval(timer);
        setAnimatedScore(end);
      }
    }, stepTime);

    const chartTimer = setTimeout(() => setShowCharts(true), 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(chartTimer);
    };
  }, [finalScore]);

  const chartData = subjectScores.map((s) => ({
    name: s.subject.replace("Logical Reasoning", "Logic"),
    correct: s.correct,
    total: s.total,
    percentage: s.percentage,
  }));

  return (
    <div className="min-h-screen bg-[#050B18] text-white pb-20">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-0 inset-x-0 h-64 bg-gradient-to-b ${
          passed ? "from-emerald-500/5" : "from-rose-500/5"
        } to-transparent`} />
      </div>

      {/* Header */}
      <div className="relative px-4 sm:px-6 pt-6 pb-4 border-b border-white/5">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            <span className="font-bold text-sm sm:text-base">MDCAT Pro</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={goToReview}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 hover:bg-cyan-500/20 transition text-xs sm:text-sm font-semibold"
            >
              <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline sm:inline">Review</span> Answers
            </button>
            <button
              onClick={goToLanding}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition text-xs sm:text-sm font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Try Next Test</span>
              <span className="sm:hidden">Retry</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">

        {/* Student Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <p className="text-slate-500 text-sm">Result for</p>
          <h1 className="text-xl sm:text-2xl font-bold text-white mt-1">{studentName}</h1>
        </motion.div>

        {/* Score Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className={`relative bg-gradient-to-br ${
            passed
              ? "from-emerald-500/10 to-cyan-500/10 border-emerald-500/20"
              : "from-rose-500/10 to-orange-500/10 border-rose-500/20"
          } border rounded-3xl p-5 sm:p-8 mb-5 text-center overflow-hidden`}
        >
          {/* Decorative glow */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-24 sm:h-32 ${
            passed ? "bg-emerald-500/10" : "bg-rose-500/10"
          } blur-[60px]`} />

          <div className="relative z-10">
            {/* Result badge */}
            <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-5 ${
              passed
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
            }`}>
              {passed ? <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              {passed ? "✅ PASSED — You Won the Prize!" : "❌ Below 50% — Keep Practicing!"}
            </div>

            {/* Big Score */}
            <div className="mb-4">
              <div className={`text-6xl sm:text-8xl font-black ${passed ? "text-emerald-400" : "text-rose-400"}`}>
                {animatedScore}
              </div>
              <div className="text-slate-400 text-base sm:text-lg">out of {totalQuestions}</div>
            </div>

            {/* Percentage ring */}
            <div className="flex justify-center mb-5">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                  <motion.circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke={passed ? "#10B981" : "#EF4444"}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - finalPercentage / 100) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className={`text-xl sm:text-2xl font-black ${passed ? "text-emerald-400" : "text-rose-400"}`}>
                    {finalPercentage}%
                  </span>
                  <span className="text-slate-500 text-xs">Score</span>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-5">
              {[
                { icon: <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Correct", value: finalScore, color: "text-emerald-400" },
                { icon: <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Incorrect", value: incorrectAnswers, color: "text-rose-400" },
                { icon: <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Skipped", value: unattempted, color: "text-slate-400" },
              ].map(({ icon, label, value, color }) => (
                <div key={label} className="bg-white/5 rounded-xl sm:rounded-2xl p-2 sm:p-3">
                  <div className={`flex items-center justify-center gap-1 ${color} mb-1`}>{icon}</div>
                  <div className={`text-xl sm:text-2xl font-bold ${color}`}>{value}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Motivational message */}
            <div className="bg-white/5 border border-white/8 rounded-2xl p-4 sm:p-5 text-left">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <span className="text-2xl sm:text-3xl">{motivation.emoji}</span>
                <h3 className="font-bold text-white text-base sm:text-lg">{motivation.title}</h3>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{motivation.message}</p>
            </div>

            {/* Review Answers Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goToReview}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-bold text-sm sm:text-base transition-all shadow-lg shadow-cyan-900/30"
            >
              <Eye className="w-4 h-4" /> Review All Answers
            </motion.button>
          </div>
        </motion.div>

        {/* Subject-wise Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0d1426] border border-white/8 rounded-3xl p-4 sm:p-6 mb-5"
        >
          <h2 className="text-lg sm:text-xl font-bold mb-5 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            Subject-wise Breakdown
          </h2>

          {/* Bar Chart */}
          {showCharts && (
            <div className="h-48 sm:h-64 mb-5">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#94a3b8", fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis tick={{ fill: "#94a3b8", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                  <Bar dataKey="correct" name="Correct" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry) => (
                      <Cell key={entry.name} fill={SUBJECT_COLORS[entry.name === "Logic" ? "Logical Reasoning" : entry.name]} fillOpacity={0.8} />
                    ))}
                  </Bar>
                  <Bar dataKey="total" name="Total" radius={[4, 4, 0, 0]} fill="rgba(255,255,255,0.05)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Subject Cards */}
          <div className="space-y-2.5">
            {subjectScores.map((s, i) => {
              const color = SUBJECT_COLORS[s.subject];
              const icon = SUBJECT_ICONS[s.subject];
              return (
                <motion.div
                  key={s.subject}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="bg-white/3 border border-white/5 rounded-xl p-3 sm:p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div style={{ color }} className="p-1 sm:p-1.5 rounded-lg bg-white/5">{icon}</div>
                      <span className="font-semibold text-xs sm:text-sm text-white">{s.subject}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-slate-400 text-xs">{s.correct}/{s.total}</span>
                      <span className="font-bold text-sm" style={{ color }}>{s.percentage}%</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                  <div className="flex justify-between mt-1.5 text-xs text-slate-600">
                    <span>
                      {s.percentage >= 80 ? "🔥 Excellent" :
                       s.percentage >= 60 ? "✅ Good" :
                       s.percentage >= 40 ? "⚠️ Needs Work" : "❌ Weak Area"}
                    </span>
                    <span>{s.total - s.correct} incorrect</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Prize Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {passed ? (
            <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-3xl p-6 sm:p-8 text-center">
              <div className="text-5xl sm:text-6xl mb-3">🏆</div>
              <h3 className="text-xl sm:text-2xl font-black text-yellow-400 mb-2">Congratulations! You Won!</h3>
              <p className="text-slate-300 text-sm mb-5">
                You scored <strong className="text-yellow-400">{finalPercentage}%</strong> which is above 50%.
                You qualify for the{" "}
                <strong className="text-yellow-400">₨500 prize reward!</strong>
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-3 sm:p-4 text-sm text-yellow-300 mb-5">
                <Award className="w-5 h-5 mx-auto mb-2" />
                <p>Contact your test coordinator to claim your prize. Show them this result screenshot.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={goToReview}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-bold transition-all shadow-lg text-sm"
                >
                  <Eye className="w-4 h-4" /> Review Answers
                </button>
                <button
                  onClick={goToLanding}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 font-bold transition-all shadow-lg text-sm"
                >
                  <RotateCcw className="w-4 h-4" /> Try Next Test
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/8 rounded-3xl p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl mb-3">📚</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Don't Give Up!</h3>
              <p className="text-slate-400 text-sm mb-5">
                You scored <strong className="text-white">{finalPercentage}%</strong>.
                Score above 50% on your next attempt to win ₨500!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-5 text-xs text-slate-400">
                {[
                  { tip: "📖", text: "Revise Biology (45% weightage)" },
                  { tip: "⚗️", text: "Practice Chemistry MCQs daily" },
                  { tip: "🔬", text: "Focus on Physics concepts" },
                ].map(({ tip, text }) => (
                  <div key={text} className="bg-white/5 rounded-xl p-3">
                    <div className="text-lg mb-1">{tip}</div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={goToReview}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-bold transition-all shadow-lg text-sm"
                >
                  <Eye className="w-4 h-4" /> Review Answers
                </button>
                <button
                  onClick={goToLanding}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 font-bold transition-all shadow-lg text-sm"
                >
                  <RotateCcw className="w-4 h-4" /> Try Next Test
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
