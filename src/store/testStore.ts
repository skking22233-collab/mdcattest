// ============================================================
// Global Test State Store (Zustand)
// ============================================================

import { create } from "zustand";
import { MCQ, Subject, generateTest } from "../data/mcqs";
import { saveStudentToFirebase, getStudentsFromFirebase, deleteStudentFromFirebase, saveSurpriseSoundToFirebase, getSurpriseSoundFromFirebase } from "../lib/firebase";

export type AppPage = "landing" | "test" | "loading" | "surprise" | "result" | "review" | "admin";

export interface StudentAnswer {
  questionId: string;
  selectedOption: number | null;
  flagged: boolean;
}

export interface SubjectScore {
  subject: Subject;
  correct: number;
  total: number;
  percentage: number;
}

interface TestStore {
  // Navigation
  currentPage: AppPage;
  setCurrentPage: (page: AppPage) => void;

  // Student info
  studentName: string;
  setStudentName: (name: string) => void;

  // Test data
  questions: MCQ[];
  answers: Record<string, StudentAnswer>;
  currentQuestionIndex: number;

  // Timer
  timeLeft: number; // seconds (1.5 hours = 5400)
  timerActive: boolean;

  // Admin
  adminLoggedIn: boolean;
  surpriseSound: string | null; // base64 or URL
  students: Array<{
    id: string;
    name: string;
    date: string;
    score: number;
    percentage: number;
    subjectScores: SubjectScore[];
  }>;

  // Actions
  startTest: (name: string) => void;
  answerQuestion: (questionId: string, optionIndex: number) => void;
  toggleFlag: (questionId: string) => void;
  setCurrentQuestion: (index: number) => void;
  decrementTimer: () => void;
  submitTest: () => void;
  adminLogin: (email: string, password: string) => boolean;
  adminLogout: () => void;
  setSurpriseSound: (soundData: string | null) => void;
  deleteStudent: (id: string) => void;
  goToLanding: () => void;
  goToReview: () => void;
  fetchStudents: () => Promise<void>;
  fetchSurpriseSound: () => Promise<void>;

  // Result
  finalScore: number;
  finalPercentage: number;
  subjectScores: SubjectScore[];
}

const ADMIN_EMAIL = "admin@mdcatpro.com";
const ADMIN_PASSWORD = "admin123";

const computeResults = (
  questions: MCQ[],
  answers: Record<string, StudentAnswer>
): { finalScore: number; finalPercentage: number; subjectScores: SubjectScore[] } => {
  let totalCorrect = 0;
  const subjectMap: Record<string, { correct: number; total: number }> = {};

  for (const q of questions) {
    if (!subjectMap[q.subject]) {
      subjectMap[q.subject] = { correct: 0, total: 0 };
    }
    subjectMap[q.subject].total += 1;
    const ans = answers[q.id];
    if (ans && ans.selectedOption === q.correct) {
      subjectMap[q.subject].correct += 1;
      totalCorrect += 1;
    }
  }

  const subjectScores: SubjectScore[] = Object.entries(subjectMap).map(([subject, data]) => ({
    subject: subject as Subject,
    correct: data.correct,
    total: data.total,
    percentage: Math.round((data.correct / data.total) * 100),
  }));

  return {
    finalScore: totalCorrect,
    finalPercentage: Math.round((totalCorrect / questions.length) * 100),
    subjectScores,
  };
};

// Students are now fetched asynchronously from Firebase
const saveStudents = (students: TestStore["students"]) => {
  // Legacy local storage save fallback removed
};

const loadSurpriseSound = (): string | null => {
  try {
    return localStorage.getItem("mdcat_surprise_sound");
  } catch {
    return null;
  }
};

export const useTestStore = create<TestStore>((set, get) => ({
  currentPage: "landing",
  studentName: "",
  questions: [],
  answers: {},
  currentQuestionIndex: 0,
  timeLeft: 5400, // 1.5 hours
  timerActive: false,
  adminLoggedIn: false,
  surpriseSound: loadSurpriseSound(),
  students: [], // Fetched on demand
  finalScore: 0,
  finalPercentage: 0,
  subjectScores: [],

  setCurrentPage: (page) => set({ currentPage: page }),

  setStudentName: (name) => set({ studentName: name }),

  startTest: (name) => {
    const questions = generateTest();
    const answers: Record<string, StudentAnswer> = {};
    questions.forEach((q) => {
      answers[q.id] = { questionId: q.id, selectedOption: null, flagged: false };
    });
    set({
      studentName: name,
      questions,
      answers,
      currentQuestionIndex: 0,
      timeLeft: 5400,
      timerActive: true,
      currentPage: "test",
      finalScore: 0,
      finalPercentage: 0,
      subjectScores: [],
    });
  },

  answerQuestion: (questionId, optionIndex) => {
    const { answers } = get();
    set({
      answers: {
        ...answers,
        [questionId]: { ...answers[questionId], selectedOption: optionIndex },
      },
    });
  },

  toggleFlag: (questionId) => {
    const { answers } = get();
    set({
      answers: {
        ...answers,
        [questionId]: { ...answers[questionId], flagged: !answers[questionId]?.flagged },
      },
    });
  },

  setCurrentQuestion: (index) => set({ currentQuestionIndex: index }),

  decrementTimer: () => {
    const { timeLeft, timerActive } = get();
    if (!timerActive) return;
    if (timeLeft <= 0) {
      get().submitTest();
      return;
    }
    set({ timeLeft: timeLeft - 1 });
  },

  submitTest: () => {
    const { questions, answers, studentName, students } = get();
    const { finalScore, finalPercentage, subjectScores } = computeResults(questions, answers);

    const newStudent = {
      id: Date.now().toString(),
      name: studentName,
      date: new Date().toLocaleString(),
      timestamp: Date.now(),
      score: finalScore,
      percentage: finalPercentage,
      subjectScores,
    };
    const updatedStudents = [...students, newStudent];
    
    // Save to Firebase asynchronously
    saveStudentToFirebase(newStudent);

    set({
      timerActive: false,
      finalScore,
      finalPercentage,
      subjectScores,
      students: updatedStudents,
      currentPage: "loading",
      // NOTE: questions and answers are intentionally kept for answer review
    });
  },

  adminLogin: (email, password) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      set({ adminLoggedIn: true });
      return true;
    }
    return false;
  },

  adminLogout: () => set({ adminLoggedIn: false }),

  setSurpriseSound: (soundData) => {
    try {
      if (soundData) {
        localStorage.setItem("mdcat_surprise_sound", soundData);
      } else {
        localStorage.removeItem("mdcat_surprise_sound");
      }
    } catch {}
    set({ surpriseSound: soundData });
    // Save to firebase in background
    saveSurpriseSoundToFirebase(soundData).catch(console.error);
  },

  deleteStudent: (id) => {
    const { students } = get();
    const updatedStudents = students.filter((s) => s.id !== id);
    set({ students: updatedStudents });
    deleteStudentFromFirebase(id);
  },

  fetchStudents: async () => {
    const students = await getStudentsFromFirebase();
    set({ students });
  },

  fetchSurpriseSound: async () => {
    const soundData = await getSurpriseSoundFromFirebase();
    if (soundData) {
      try { localStorage.setItem("mdcat_surprise_sound", soundData); } catch {}
      set({ surpriseSound: soundData });
    }
  },

  // Go to review page (preserves questions & answers)
  goToReview: () => set({ currentPage: "review" }),

  // Go back to landing — fully resets test state
  goToLanding: () =>
    set({
      currentPage: "landing",
      studentName: "",
      questions: [],
      answers: {},
      currentQuestionIndex: 0,
      timeLeft: 5400,
      timerActive: false,
      finalScore: 0,
      finalPercentage: 0,
      subjectScores: [],
    }),
}));
