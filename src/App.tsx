// ============================================================
// MDCAT Pro Mock Tests - Main App Router
// Route "/" → Main test app (landing → test → loading → surprise → result → review)
// Route "/admin" → Admin Panel (direct URL access)
// ============================================================

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTestStore } from "./store/testStore";
import LandingPage from "./components/LandingPage";
import TestInterface from "./components/TestInterface";
import LoadingScreen from "./components/LoadingScreen";
import SurprisePopup from "./components/SurprisePopup";
import ResultPage from "./components/ResultPage";
import AnswerReviewPage from "./components/AnswerReviewPage";
import AdminPanel from "./components/AdminPanel";

const PAGE_VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Main test flow — driven by Zustand state
function MainApp() {
  const { currentPage } = useTestStore();

  const renderPage = () => {
    switch (currentPage) {
      case "test":
        return <TestInterface key="test" />;
      case "loading":
        return <LoadingScreen key="loading" />;
      case "surprise":
        return <SurprisePopup key="surprise" />;
      case "result":
        return <ResultPage key="result" />;
      case "review":
        return <AnswerReviewPage key="review" />;
      default:
        return <LandingPage key="landing" />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        variants={PAGE_VARIANTS}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.2 }}
      >
        {renderPage()}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const fetchSurpriseSound = useTestStore((s) => s.fetchSurpriseSound);

  useEffect(() => {
    fetchSurpriseSound();
  }, [fetchSurpriseSound]);

  return (
    <Routes>
      {/* Admin Panel — accessible only via /#/admin URL */}
      <Route path="/admin" element={<AdminPanel />} />

      {/* Main test app — all other routes */}
      <Route path="*" element={<MainApp />} />
    </Routes>
  );
}
