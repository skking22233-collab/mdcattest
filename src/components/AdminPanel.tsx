// ============================================================
// Admin Panel - Login + Dashboard + Sound Upload + Students
// Mobile Responsive: bottom tab bar on mobile
// ============================================================

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Lock, LogOut, Upload, Users, BarChart2, Volume2,
  Brain, CheckCircle, XCircle, Trash2, Eye, RefreshCw,
  Database, Settings, VolumeX, FileAudio, Shield
} from "lucide-react";
import { useTestStore } from "../store/testStore";
import { ALL_MCQS, SUBJECT_DISTRIBUTION } from "../data/mcqs";
import { clearAllStudentsFromFirebase } from "../lib/firebase";

type AdminTab = "dashboard" | "students" | "mcqs" | "sound" | "settings";

// ── Admin Login Form ────────────────────────────────────────
function AdminLogin() {
  const { adminLogin } = useTestStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@mdcatpro.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    const ok = adminLogin(email, password);
    setLoading(false);
    if (!ok) setError("Invalid credentials. Check the admin details.");
  };

  return (
    <div className="min-h-screen bg-[#050B18] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm relative z-10"
      >
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-violet-900/40">
            <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Admin Portal</h1>
          <p className="text-slate-500 text-sm mt-1">MDCAT Pro Mock Tests</p>
        </div>

        <form onSubmit={handleLogin} className="bg-[#0d1426] border border-white/8 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/50 transition"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="Enter password..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/50 transition"
            />
          </div>
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-sm"
          >
            {loading ? (
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                <RefreshCw className="w-4 h-4" />
              </motion.div>
            ) : (
              <Lock className="w-4 h-4" />
            )}
            {loading ? "Verifying..." : "Login to Admin"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full text-xs text-slate-600 hover:text-slate-400 transition"
          >
            ← Back to Landing Page
          </button>
        </form>

        <div className="text-center mt-4 text-xs text-slate-700">
          <p>Demo: admin@mdcatpro.com / admin123</p>
        </div>
      </motion.div>
    </div>
  );
}

// ── Admin Dashboard ─────────────────────────────────────────
function AdminDashboard() {
  const { adminLogout, surpriseSound, setSurpriseSound, students, deleteStudent, goToLanding, fetchStudents } = useTestStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const soundInputRef = useRef<HTMLInputElement>(null);
  const [selectedStudent, setSelectedStudent] = useState<typeof students[0] | null>(null);
  const [mcqPage, setMcqPage] = useState(0);
  const MCQ_PER_PAGE = 30;

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const avgScore = students.length
    ? Math.round(students.reduce((acc, s) => acc + s.percentage, 0) / students.length)
    : 0;
  const passedCount = students.filter((s) => s.percentage >= 50).length;

  const handleSoundUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadError("");

    if (!file.type.startsWith("audio/")) {
      setUploadError("Please upload a valid audio file (MP3, WAV, OGG, etc.)");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setUploadError("File size must be under 10MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      setSurpriseSound(result);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    };
    reader.readAsDataURL(file);
  };

  const TABS: { id: AdminTab; label: string; icon: React.ReactNode }[] = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart2 className="w-4 h-4" /> },
    { id: "students", label: "Students", icon: <Users className="w-4 h-4" /> },
    { id: "mcqs", label: "MCQ Bank", icon: <Database className="w-4 h-4" /> },
    { id: "sound", label: "Sound", icon: <Volume2 className="w-4 h-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
  ];

  const paginatedMcqs = ALL_MCQS.slice(mcqPage * MCQ_PER_PAGE, (mcqPage + 1) * MCQ_PER_PAGE);
  const totalPages = Math.ceil(ALL_MCQS.length / MCQ_PER_PAGE);

  return (
    <div className="min-h-screen bg-[#050B18] text-white flex flex-col">

      {/* ── DESKTOP LAYOUT: sidebar + content ── */}
      <div className="flex flex-1 min-h-screen">

        {/* Sidebar — hidden on mobile */}
        <aside className="hidden md:flex w-56 lg:w-64 bg-[#0a0f1e] border-r border-white/5 flex-col flex-shrink-0">
          <div className="p-4 lg:p-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <Brain className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-xs lg:text-sm">MDCAT Pro</p>
                <p className="text-xs text-slate-500">Admin Panel</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-3 lg:p-4 space-y-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl text-xs lg:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>

          <div className="p-3 lg:p-4 border-t border-white/5 space-y-1">
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center gap-2 px-3 lg:px-4 py-2.5 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-white/5 text-xs lg:text-sm transition"
            >
              <Brain className="w-4 h-4" /> View Site
            </button>
            <button
              onClick={() => { adminLogout(); navigate("/"); }}
              className="w-full flex items-center gap-2 px-3 lg:px-4 py-2.5 rounded-xl text-rose-500/70 hover:text-rose-400 hover:bg-rose-500/5 text-xs lg:text-sm transition"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 overflow-y-auto pb-24 md:pb-6">

          {/* Mobile header */}
          <div className="flex md:hidden items-center justify-between mb-4 pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm">MDCAT Admin</span>
            </div>
            <button
              onClick={() => { adminLogout(); navigate("/"); }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 text-xs transition"
            >
              <LogOut className="w-3 h-3" /> Logout
            </button>
          </div>

          {/* ── DASHBOARD TAB ── */}
          {activeTab === "dashboard" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-xl sm:text-2xl font-bold mb-5">Dashboard</h1>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                {[
                  { label: "Total Students", value: students.length, icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />, color: "text-cyan-400" },
                  { label: "Avg Score", value: `${avgScore}%`, icon: <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />, color: "text-violet-400" },
                  { label: "Passed (≥50%)", value: passedCount, icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />, color: "text-emerald-400" },
                  { label: "MCQ Bank", value: ALL_MCQS.length, icon: <Database className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />, color: "text-amber-400" },
                ].map(({ label, value, icon, color }) => (
                  <div key={label} className="bg-[#0d1426] border border-white/8 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-slate-400 text-xs">{label}</span>
                      {icon}
                    </div>
                    <div className={`text-2xl sm:text-3xl font-black ${color}`}>{value}</div>
                  </div>
                ))}
              </div>

              {/* Subject Distribution */}
              <div className="bg-[#0d1426] border border-white/8 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4">
                <h2 className="font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <BarChart2 className="w-4 h-4 text-violet-400" /> Subject Distribution (Per Test)
                </h2>
                <div className="space-y-2.5 sm:space-y-3">
                  {Object.entries(SUBJECT_DISTRIBUTION).map(([subject, data]) => {
                    const colors: Record<string, string> = {
                      Biology: "bg-emerald-500",
                      Chemistry: "bg-blue-500",
                      Physics: "bg-violet-500",
                      English: "bg-amber-500",
                      "Logical Reasoning": "bg-rose-500",
                    };
                    return (
                      <div key={subject} className="flex items-center gap-2 sm:gap-4">
                        <span className="text-slate-300 text-xs w-28 sm:w-36 flex-shrink-0">{subject}</span>
                        <div className="flex-1 h-1.5 sm:h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${colors[subject]}`}
                            style={{ width: `${data.percentage}%` }}
                          />
                        </div>
                        <span className="text-slate-400 text-xs w-20 sm:w-24 text-right flex-shrink-0">{data.count} ({data.percentage}%)</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Surprise Sound Status */}
              <div className={`border rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 ${
                surpriseSound
                  ? "bg-emerald-500/5 border-emerald-500/20"
                  : "bg-amber-500/5 border-amber-500/20"
              }`}>
                {surpriseSound ? (
                  <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0" />
                ) : (
                  <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-xs sm:text-sm ${surpriseSound ? "text-emerald-400" : "text-amber-400"}`}>
                    {surpriseSound ? "✅ Surprise Sound Uploaded" : "⚠️ No Surprise Sound Uploaded"}
                  </p>
                  <p className="text-slate-500 text-xs truncate">
                    {surpriseSound ? "Sound will play after test submission." : "Upload in the Sound tab."}
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("sound")}
                  className="text-xs text-violet-400 hover:text-violet-300 transition flex-shrink-0"
                >
                  Manage →
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STUDENTS TAB ── */}
          {activeTab === "students" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center justify-between mb-5">
                <h1 className="text-xl sm:text-2xl font-bold">Students &amp; Results</h1>
                <span className="text-slate-500 text-sm">{students.length} total</span>
              </div>

              {students.length === 0 ? (
                <div className="bg-[#0d1426] border border-white/8 rounded-2xl p-10 sm:p-12 text-center">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-slate-700 mx-auto mb-3" />
                  <p className="text-slate-500 text-sm">No students have taken the test yet.</p>
                </div>
              ) : (
                <div className="space-y-2.5 sm:space-y-3">
                  {students.map((student) => (
                    <motion.div
                      key={student.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[#0d1426] border border-white/8 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-white/15 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/20 flex items-center justify-center text-base sm:text-lg font-bold text-violet-400 flex-shrink-0">
                            {student.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-white text-xs sm:text-sm truncate">{student.name}</p>
                            <p className="text-slate-500 text-xs truncate">{student.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                          <div className="text-right">
                            <p className={`font-bold text-base sm:text-lg ${student.percentage >= 50 ? "text-emerald-400" : "text-rose-400"}`}>
                              {student.percentage}%
                            </p>
                            <p className="text-xs text-slate-500">{student.score}/90</p>
                          </div>
                          <div className={`hidden sm:block px-2 py-1 rounded-lg text-xs font-semibold ${
                            student.percentage >= 50
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-rose-500/10 text-rose-400"
                          }`}>
                            {student.percentage >= 50 ? "PASS" : "FAIL"}
                          </div>
                          <button
                            onClick={() => setSelectedStudent(selectedStudent?.id === student.id ? null : student)}
                            className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-slate-400 hover:text-white"
                            title="View details"
                          >
                            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Delete result of ${student.name}?`)) {
                                deleteStudent(student.id);
                              }
                            }}
                            className="p-1.5 sm:p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 hover:text-rose-400 transition text-slate-400"
                            title="Delete student"
                          >
                            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Expanded subject breakdown */}
                      <AnimatePresence>
                        {selectedStudent?.id === student.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 pt-3 border-t border-white/5 grid grid-cols-3 sm:grid-cols-5 gap-2">
                              {student.subjectScores.map((s) => (
                                <div key={s.subject} className="bg-white/3 rounded-xl p-2.5 text-center">
                                  <p className="text-xs text-slate-500 mb-1 truncate">{s.subject.split(" ")[0]}</p>
                                  <p className={`text-base sm:text-lg font-bold ${s.percentage >= 50 ? "text-emerald-400" : "text-rose-400"}`}>
                                    {s.percentage}%
                                  </p>
                                  <p className="text-xs text-slate-600">{s.correct}/{s.total}</p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* ── MCQ BANK TAB ── */}
          {activeTab === "mcqs" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center justify-between mb-5">
                <h1 className="text-xl sm:text-2xl font-bold">MCQ Bank</h1>
                <span className="px-2.5 sm:px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs sm:text-sm font-semibold">
                  {ALL_MCQS.length} Questions
                </span>
              </div>

              {/* Stats by subject */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 mb-5">
                {(["Biology", "Chemistry", "Physics", "English", "Logical Reasoning"] as const).map((subject) => {
                  const count = ALL_MCQS.filter((q) => q.subject === subject).length;
                  const colors: Record<string, string> = {
                    Biology: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
                    Chemistry: "text-blue-400 border-blue-500/20 bg-blue-500/5",
                    Physics: "text-violet-400 border-violet-500/20 bg-violet-500/5",
                    English: "text-amber-400 border-amber-500/20 bg-amber-500/5",
                    "Logical Reasoning": "text-rose-400 border-rose-500/20 bg-rose-500/5",
                  };
                  return (
                    <div key={subject} className={`border rounded-xl p-3 sm:p-4 text-center ${colors[subject]}`}>
                      <div className="text-xl sm:text-2xl font-black">{count}</div>
                      <div className="text-xs mt-0.5 opacity-70">{subject.split(" ")[0]}</div>
                    </div>
                  );
                })}
              </div>

              {/* MCQ Table — scrollable on mobile */}
              <div className="bg-[#0d1426] border border-white/8 rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <div className="max-h-80 sm:max-h-96 overflow-y-auto min-w-[500px]">
                    <table className="w-full text-xs">
                      <thead className="sticky top-0 bg-[#0d1426] border-b border-white/5">
                        <tr>
                          <th className="text-left py-3 px-3 sm:px-4 text-slate-400 font-semibold w-10">#</th>
                          <th className="text-left py-3 px-3 sm:px-4 text-slate-400 font-semibold">Question</th>
                          <th className="text-left py-3 px-3 sm:px-4 text-slate-400 font-semibold w-20">Subject</th>
                          <th className="text-left py-3 px-3 sm:px-4 text-slate-400 font-semibold w-14">Year</th>
                          <th className="text-left py-3 px-3 sm:px-4 text-slate-400 font-semibold w-14">Source</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedMcqs.map((q, i) => (
                          <tr key={q.id} className="border-t border-white/3 hover:bg-white/3 transition">
                            <td className="py-2.5 px-3 sm:px-4 text-slate-600">{mcqPage * MCQ_PER_PAGE + i + 1}</td>
                            <td className="py-2.5 px-3 sm:px-4 text-slate-300 max-w-xs">
                              <div className="line-clamp-2">{q.question}</div>
                            </td>
                            <td className="py-2.5 px-3 sm:px-4">
                              <span className={`px-1.5 py-0.5 rounded-md font-medium ${
                                q.subject === "Biology" ? "bg-emerald-500/10 text-emerald-400" :
                                q.subject === "Chemistry" ? "bg-blue-500/10 text-blue-400" :
                                q.subject === "Physics" ? "bg-violet-500/10 text-violet-400" :
                                q.subject === "English" ? "bg-amber-500/10 text-amber-400" :
                                "bg-rose-500/10 text-rose-400"
                              }`}>
                                {q.subject.split(" ")[0]}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 sm:px-4 text-slate-500">{q.year || "—"}</td>
                            <td className="py-2.5 px-3 sm:px-4 text-slate-500">{q.source || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Pagination */}
                <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Showing {mcqPage * MCQ_PER_PAGE + 1}–{Math.min((mcqPage + 1) * MCQ_PER_PAGE, ALL_MCQS.length)} of {ALL_MCQS.length}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setMcqPage((p) => Math.max(0, p - 1))}
                      disabled={mcqPage === 0}
                      className="px-3 py-1 text-xs rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 transition"
                    >
                      ← Prev
                    </button>
                    <button
                      onClick={() => setMcqPage((p) => Math.min(totalPages - 1, p + 1))}
                      disabled={mcqPage >= totalPages - 1}
                      className="px-3 py-1 text-xs rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 transition"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── SOUND TAB ── */}
          {activeTab === "sound" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-xl sm:text-2xl font-bold mb-5">Surprise Sound</h1>

              {/* Current Sound Status */}
              <div className={`border rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-5 ${
                surpriseSound
                  ? "bg-emerald-500/5 border-emerald-500/20"
                  : "bg-white/3 border-white/8"
              }`}>
                <div className="flex items-center gap-3 sm:gap-4">
                  {surpriseSound ? (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <FileAudio className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm ${surpriseSound ? "text-emerald-400" : "text-slate-300"}`}>
                      {surpriseSound ? "Sound Uploaded & Active" : "No Sound Uploaded"}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {surpriseSound
                        ? "This sound will automatically play in the Surprise Popup."
                        : "Upload an audio file below."}
                    </p>
                  </div>
                  {surpriseSound && (
                    <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                      <button
                        onClick={() => {
                          const audio = new Audio(surpriseSound);
                          try {
                            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
                            if (AudioContextClass) {
                              const ctx = new AudioContextClass();
                              const source = ctx.createMediaElementSource(audio);
                              const gainNode = ctx.createGain();
                              gainNode.gain.value = 3.0; // 300% taiz volume
                              source.connect(gainNode);
                              gainNode.connect(ctx.destination);
                            }
                          } catch (err) {
                            audio.volume = 1.0;
                          }
                          audio.play();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs hover:bg-emerald-500/20 transition"
                      >
                        ▶ Preview
                      </button>
                      <button
                        onClick={() => setSurpriseSound(null)}
                        className="px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs hover:bg-rose-500/20 transition flex items-center gap-1 justify-center"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Upload Area */}
              <div
                onClick={() => soundInputRef.current?.click()}
                className="relative border-2 border-dashed border-white/10 hover:border-violet-500/40 rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all group bg-white/2 hover:bg-white/4"
              >
                <input
                  ref={soundInputRef}
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={handleSoundUpload}
                />
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2">Upload Surprise Sound</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4">
                  Tap to select an audio file
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs sm:text-sm font-semibold">
                  <Upload className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Choose Audio File
                </div>
                <p className="text-slate-700 text-xs mt-3">MP3, WAV, OGG, AAC · Max 10MB</p>
              </div>

              {uploadSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  Sound uploaded successfully! It will play in the Surprise Popup.
                </motion.div>
              )}
              {uploadError && (
                <div className="mt-4 flex items-center gap-2 px-4 py-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-sm">
                  <XCircle className="w-4 h-4" /> {uploadError}
                </div>
              )}

              <div className="mt-5 bg-[#0d1426] border border-white/8 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <h4 className="font-semibold mb-2 sm:mb-3 text-sm text-slate-300">How It Works</h4>
                <ol className="space-y-1.5 sm:space-y-2 text-xs text-slate-500">
                  <li className="flex gap-2"><span className="text-violet-400 font-bold">1.</span> Upload your surprise audio file above</li>
                  <li className="flex gap-2"><span className="text-violet-400 font-bold">2.</span> When a student submits, a 10-second loading animation plays</li>
                  <li className="flex gap-2"><span className="text-violet-400 font-bold">3.</span> The Surprise Popup appears with the funny Urdu message</li>
                  <li className="flex gap-2"><span className="text-violet-400 font-bold">4.</span> Your uploaded sound plays automatically</li>
                  <li className="flex gap-2"><span className="text-violet-400 font-bold">5.</span> After the sound ends, the result page shows</li>
                </ol>
              </div>
            </motion.div>
          )}

          {/* ── SETTINGS TAB ── */}
          {activeTab === "settings" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-xl sm:text-2xl font-bold mb-5">Settings</h1>
              <div className="space-y-4">
                <div className="bg-[#0d1426] border border-white/8 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="font-bold mb-3 sm:mb-4 text-slate-300 text-sm sm:text-base">Test Configuration</h3>
                  <div className="space-y-2.5 sm:space-y-3">
                    {[
                      { label: "Total Questions", value: "90 MCQs" },
                      { label: "Test Duration", value: "90 Minutes (5400 seconds)" },
                      { label: "Passing Score", value: "50% (45/90)" },
                      { label: "Prize Amount", value: "₨500 (display only)" },
                      { label: "Surprise Delay", value: "10s loading + 10s popup" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between py-2 border-b border-white/3 gap-4">
                        <span className="text-slate-400 text-xs sm:text-sm">{label}</span>
                        <span className="text-white text-xs sm:text-sm font-medium text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ✅ Bug Fix: Password removed from display. Admin credentials not shown publicly */}
                <div className="bg-[#0d1426] border border-white/8 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="font-bold mb-2 text-slate-300 text-sm sm:text-base">Admin Login</h3>
                  <p className="text-slate-500 text-xs">
                    Admin credentials are configured in the source code. Contact your developer to change them.
                  </p>
                </div>

                {/* ✅ Bug Fix: Danger Zone uses Zustand goToLanding instead of window.location.reload() */}
                <div className="bg-rose-500/5 border border-rose-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="font-bold mb-2 text-rose-400 text-sm sm:text-base">Danger Zone</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mb-3">This will permanently delete all student data.</p>
                  <button
                    onClick={async () => {
                      if (confirm("Are you sure? This will delete ALL student records permanently from the database.")) {
                        await clearAllStudentsFromFirebase();
                        useTestStore.setState({ students: [] });
                        goToLanding();
                        navigate("/");
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 transition text-xs sm:text-sm font-medium"
                  >
                    <Trash2 className="w-4 h-4" /> Clear All Student Data
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </main>
      </div>

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#0a0f1e]/95 backdrop-blur border-t border-white/8">
        <div className="flex items-center justify-around px-2 py-1.5 safe-bottom">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all min-w-[52px] ${
                activeTab === tab.id
                  ? "text-violet-400"
                  : "text-slate-600 hover:text-slate-400"
              }`}
            >
              <span className={`transition-transform ${activeTab === tab.id ? "scale-110" : ""}`}>
                {tab.icon}
              </span>
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Admin Entry ────────────────────────────────────────
export default function AdminPanel() {
  const { adminLoggedIn } = useTestStore();
  return adminLoggedIn ? <AdminDashboard /> : <AdminLogin />;
}
