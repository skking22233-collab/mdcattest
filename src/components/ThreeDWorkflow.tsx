import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  BookOpen,
  Clock,
  Cpu,
  Gift,
  Trophy,
  CheckCircle,
  XCircle,
  HelpCircle,
  Play,
  RotateCcw
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  glowColor: string;
  mockType: "register" | "test" | "submit" | "loading" | "surprise" | "result";
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "1. Quick Registration",
    subtitle: "Name & Guidelines",
    description: "Enter your full name to start. No complicated signup. A 90-minute timer is initialized instantly.",
    icon: UserPlus,
    color: "from-emerald-400 to-cyan-500",
    glowColor: "rgba(16, 185, 129, 0.2)",
    mockType: "register",
  },
  {
    id: 2,
    title: "2. The Test Battleground",
    subtitle: "90 Ultra-Hard MCQs",
    description: "Navigate through challenging questions. Flag doubtful questions for review and jump to any MCQ instantly.",
    icon: BookOpen,
    color: "from-blue-400 to-indigo-500",
    glowColor: "rgba(59, 130, 246, 0.2)",
    mockType: "test",
  },
  {
    id: 3,
    title: "3. Auto-Submit & Timer",
    subtitle: "Real-time Countdown",
    description: "A strict 90-minute timer runs in the header. If time runs out, the test submits your responses automatically.",
    icon: Clock,
    color: "from-amber-400 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.2)",
    mockType: "submit",
  },
  {
    id: 4,
    title: "4. Result Engine",
    subtitle: "Dramatic 10s Calculation",
    description: "A dramatic calculation screen evaluates your answers, calculates subject percentiles, and prepares your reward.",
    icon: Cpu,
    color: "from-violet-400 to-fuchsia-500",
    glowColor: "rgba(139, 92, 246, 0.2)",
    mockType: "loading",
  },
  {
    id: 5,
    title: "5. Meme Surprise",
    subtitle: "Audio & Warning Popup",
    description: "A surprise audio trigger will catch you off guard, flashing warning popups saying you aren't even worth ₨100!",
    icon: Gift,
    color: "from-rose-400 to-pink-500",
    glowColor: "rgba(244, 63, 94, 0.2)",
    mockType: "surprise",
  },
  {
    id: 6,
    title: "6. Detailed Analytics & Prize",
    subtitle: "Score 50%+ to Win ₨500",
    description: "Get detailed subject-wise bar charts. If you cross the 50% passing marks, claim your cash prize!",
    icon: Trophy,
    color: "from-yellow-400 to-amber-500",
    glowColor: "rgba(234, 179, 8, 0.2)",
    mockType: "result",
  },
];

export default function ThreeDWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  // Auto rotate preview on idle (optional micro-interaction)
  useEffect(() => {
    if (isHovered !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % STEPS.length) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const currentStepData = STEPS.find((s) => s.id === activeStep) || STEPS[0];

  return (
    <section className="relative py-14 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[#080F25]/40 to-transparent overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4"
          >
            <Play className="w-3 h-3 fill-current" />
            Interactive 3D Demo
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 sm:mb-4">
            How The Mock Test Works
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base px-2">
            Tap or click on any step to see the interactive preview of the student experience flow.
          </p>
        </div>

        {/* Main Grid: Steps on Left, Device Preview on Right */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          {/* Steps Timeline (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4 relative">
            {/* Connection Line */}
            <div className="absolute left-7 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500/30 via-cyan-500/20 to-yellow-500/30 -z-10 hidden sm:block" />

            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isStepHovered = isHovered === step.id;

              return (
                <motion.div
                  key={step.id}
                  onMouseEnter={() => {
                    setIsHovered(step.id);
                    setActiveStep(step.id);
                  }}
                  onMouseLeave={() => setIsHovered(null)}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 text-left select-none ${
                    isActive
                      ? "bg-white/8 border-white/15 shadow-xl shadow-black/30"
                      : "bg-white/2 border-white/5 hover:bg-white/4 hover:border-white/10"
                  }`}
                  style={{
                    transform: isActive
                      ? "perspective(1000px) rotateX(4deg) rotateY(-8deg) translateZ(10px)"
                      : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
                    boxShadow: isActive ? `0 10px 30px -10px ${step.glowColor}` : "none",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Step Number / Icon */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                        step.color
                      } flex items-center justify-center text-white shadow-lg transition-transform duration-300 ${
                        isActive ? "scale-110 rotate-3" : ""
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Active glow dot */}
                    {isActive && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                      </span>
                    )}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3
                      className={`font-bold text-base transition-colors duration-200 ${
                        isActive ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold mb-1">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Mockup Device Preview (Right 7 Cols) */}
          <div className="lg:col-span-7 flex justify-center order-first lg:order-last">
            <motion.div
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] aspect-[4/3] bg-[#0c1224] border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden group/device"
              style={{
                transform: "perspective(1200px) rotateX(8deg) rotateY(15deg) rotateZ(-2deg)",
                transformStyle: "preserve-3d",
              }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-30 transition-opacity duration-300 group-hover/device:opacity-60" />

              {/* Glowing borders inside mock device */}
              <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none z-20" />

              {/* Top camera pill */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black/60 rounded-full z-40 border border-white/5 flex items-center justify-between px-2">
                <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
                <div className="w-3 h-1 bg-white/10 rounded-full" />
              </div>

              {/* Dynamic Screen Wrapper */}
              <div className="w-full h-full bg-[#050b18] rounded-2xl overflow-hidden relative border border-white/10 pt-4 flex flex-col justify-between text-white text-left font-sans">
                <AnimatePresence mode="wait">
                  {currentStepData.mockType === "register" && (
                    <motion.div
                      key="register-mock"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-4 flex flex-col justify-center items-center h-full text-center relative"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center mb-3">
                        <UserPlus className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-sm text-white mb-1">
                        Register & Start Test
                      </h4>
                      <p className="text-[10px] text-slate-500 mb-3 max-w-[200px]">
                        Please enter your full name to generate UHS based 90 questions.
                      </p>

                      {/* Prize Badge Mini */}
                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2 mb-3 max-w-[230px] flex items-center gap-1.5 text-left">
                        <Trophy className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <div>
                          <p className="text-yellow-400 font-extrabold text-[9px]">
                            ₨500 Cash Reward!
                          </p>
                          <p className="text-slate-400 text-[8px]">
                            Score above 50% to claim prize.
                          </p>
                        </div>
                      </div>

                      {/* Fake Name Input */}
                      <div className="w-full max-w-[220px] bg-white/5 border border-white/10 rounded-lg p-2 text-left mb-3 flex items-center justify-between">
                        <span className="text-[10px] text-slate-300 font-mono">
                          Muhammad Ali Raza
                        </span>
                        <div className="w-1 h-3.5 bg-emerald-400 animate-pulse" />
                      </div>

                      {/* Fake CTA */}
                      <div className="w-full max-w-[220px] bg-gradient-to-r from-emerald-500 to-cyan-500 py-2 rounded-lg font-bold text-xs shadow-md text-white">
                        Register & Start Test
                      </div>
                    </motion.div>
                  )}

                  {currentStepData.mockType === "test" && (
                    <motion.div
                      key="test-mock"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-3 flex flex-col justify-between h-full"
                    >
                      {/* Fake Header */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px]">
                        <span className="font-bold text-emerald-400">MDCAT Mock Test</span>
                        <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded text-red-400 font-bold">
                          <Clock className="w-3 h-3" />
                          <span>01:29:42</span>
                        </div>
                      </div>

                      {/* Question */}
                      <div className="my-2 bg-white/5 border border-white/10 rounded-xl p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[9px] bg-blue-500/15 border border-blue-500/20 px-1.5 py-0.5 rounded text-blue-400 font-bold">
                            Question 42 of 90
                          </span>
                          <span className="text-[9px] text-slate-500">Physics</span>
                        </div>
                        <p className="text-[10.5px] font-medium leading-relaxed">
                          A 0.5 kg object moves in a circular path of radius 2.0 m with a constant speed of 10 m/s. What is its centripetal acceleration?
                        </p>
                      </div>

                      {/* Options */}
                      <div className="grid grid-cols-2 gap-2 text-[9.5px]">
                        {[
                          { text: "A. 10 m/s²", active: false },
                          { text: "B. 25 m/s²", active: false },
                          { text: "C. 50 m/s²", active: true },
                          { text: "D. 100 m/s²", active: false },
                        ].map((opt) => (
                          <div
                            key={opt.text}
                            className={`p-2 rounded-lg border text-left font-medium transition-all ${
                              opt.active
                                ? "bg-blue-500/20 border-blue-500/40 text-blue-300"
                                : "bg-white/3 border-white/5 text-slate-400"
                            }`}
                          >
                            {opt.text}
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 justify-between mt-2 pt-2 border-t border-white/5 text-[9px]">
                        <button className="px-2 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-bold">
                          🚩 Flagged
                        </button>
                        <div className="flex gap-1.5">
                          <button className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400">
                            Prev
                          </button>
                          <button className="px-2.5 py-1 rounded bg-blue-500 text-white font-bold">
                            Next
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStepData.mockType === "submit" && (
                    <motion.div
                      key="submit-mock"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-4 flex flex-col justify-center items-center h-full text-center"
                    >
                      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                        {/* Pulse outer rings */}
                        <div className="absolute inset-0 bg-orange-500/10 rounded-full animate-ping" />
                        <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center">
                          <Clock className="w-6 h-6 text-orange-400" />
                        </div>
                      </div>

                      <h4 className="font-bold text-sm text-orange-400 mb-1">
                        Time's Up! Submitting...
                      </h4>
                      <p className="text-[10px] text-slate-400 max-w-[220px] mb-4">
                        The 90-minute countdown completed. The platform is automatically saving and submitting your test sheets securely.
                      </p>

                      {/* Spinner */}
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                        <div className="w-3.5 h-3.5 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
                        <span className="text-[10px] font-mono text-slate-300">
                          Uploading MCQ sheets...
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {currentStepData.mockType === "loading" && (
                    <motion.div
                      key="loading-mock"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-4 flex flex-col justify-center items-center h-full text-center"
                    >
                      {/* Rotating Ring Brain */}
                      <div className="relative w-20 h-20 mb-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 rounded-full border-2 border-transparent"
                          style={{
                            background: "conic-gradient(from 0deg, transparent 0deg, #10B981 360deg)",
                            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px))",
                            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px))",
                          }}
                        />
                        <div className="absolute inset-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                          🧠
                        </div>
                      </div>

                      <h4 className="font-bold text-sm text-white mb-1">
                        Calculating Result
                      </h4>
                      <p className="text-[9px] text-slate-500 mb-3 animate-pulse">
                        Analyzing your subject wise score...
                      </p>

                      {/* Mini Progress */}
                      <div className="w-full max-w-[200px] mb-2">
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400" style={{ width: "75%" }} />
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">
                        75% Completed
                      </span>
                    </motion.div>
                  )}

                  {currentStepData.mockType === "surprise" && (
                    <motion.div
                      key="surprise-mock"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col justify-between h-full relative overflow-hidden"
                    >
                      {/* Strobe background elements */}
                      <div className="absolute inset-0 bg-yellow-400/5 animate-pulse" />

                      {/* Header Warning */}
                      <div className="bg-yellow-500/20 border-b border-yellow-500/30 px-3 py-1.5 text-center flex items-center justify-center gap-1.5 text-yellow-400">
                        <span className="text-[12px] animate-bounce">⚠️</span>
                        <span className="text-[10px] font-extrabold tracking-wider">
                          SURPRISE POPUP
                        </span>
                      </div>

                      {/* Joke Content */}
                      <div className="p-3 text-center flex-1 flex flex-col justify-center items-center">
                        <span className="text-3xl mb-2 animate-bounce">🤯</span>
                        <div className="bg-white/5 border border-white/8 rounded-xl p-2.5 max-w-[220px]">
                          <p className="text-[9.5px] text-slate-300 italic leading-relaxed">
                            "Jaisa aapka result hai, aap toh{" "}
                            <span className="text-rose-400 font-bold">100 rupaye ke laayak bhi nahi</span>... Phir bhi surprise hai!"
                          </p>
                        </div>
                      </div>

                      {/* Countdown Footer */}
                      <div className="p-2 bg-black/40 text-center border-t border-white/5">
                        <p className="text-[8px] text-slate-500">
                          Result reveals automatically in 8s
                        </p>
                        <div className="h-1 bg-yellow-500/40 rounded-full w-3/4 mx-auto mt-1 overflow-hidden">
                          <div className="h-full bg-yellow-400 w-2/3" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStepData.mockType === "result" && (
                    <motion.div
                      key="result-mock"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-3 flex flex-col justify-between h-full"
                    >
                      {/* Small Header */}
                      <div className="flex justify-between items-center text-[9px] border-b border-white/5 pb-1">
                        <span className="text-slate-400">Muhammad Ali Raza</span>
                        <span className="text-emerald-400 font-bold">PASSED ✅</span>
                      </div>

                      {/* Main Gauge and Info */}
                      <div className="flex gap-3 items-center my-1">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          {/* Circle Gauge SVG */}
                          <svg className="w-16 h-16 -rotate-90" viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                            <circle cx="20" cy="20" r="16" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray="100.5" strokeDashoffset="16" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[11px] font-black text-emerald-400">84%</span>
                            <span className="text-[6px] text-slate-500">Score</span>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="text-[13px] font-black text-white">76 / 90 Correct</p>
                          <p className="text-[9px] text-slate-400 leading-normal">
                            Top 1% Percentile. You qualify for the ₨500 reward!
                          </p>
                        </div>
                      </div>

                      {/* Small Subject chart bar mocks */}
                      <div className="space-y-1 my-1 bg-white/3 border border-white/5 rounded-lg p-2">
                        {[
                          { name: "Biology", percent: 90, color: "bg-emerald-400" },
                          { name: "Chemistry", percent: 80, color: "bg-blue-400" },
                          { name: "Physics", percent: 75, color: "bg-violet-400" },
                        ].map((sub) => (
                          <div key={sub.name} className="flex items-center justify-between text-[8px]">
                            <span className="text-slate-400 w-12">{sub.name}</span>
                            <div className="flex-1 mx-2 h-1 bg-white/10 rounded-full overflow-hidden">
                              <div className={`h-full ${sub.color}`} style={{ width: `${sub.percent}%` }} />
                            </div>
                            <span className="text-white font-bold">{sub.percent}%</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Claim */}
                      <div className="bg-yellow-500/10 border border-yellow-500/20 p-1.5 rounded-lg text-center text-yellow-400 text-[8.5px] font-bold">
                        🎁 Claim reward: Show screenshot to Admin
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Home indicator bar */}
              <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
