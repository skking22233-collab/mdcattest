// ============================================================
// Surprise Popup - Plays surprise sound, then shows result
// ============================================================

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTestStore } from "../store/testStore";

const SURPRISE_EMOJIS = ["🎁", "🎉", "😲", "🤯", "😂", "😆", "🎊", "⚠️"];

export default function SurprisePopup() {
  const { setCurrentPage, surpriseSound } = useTestStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [countdown, setCountdown] = useState(10);
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show text after brief delay
    const textTimer = setTimeout(() => setShowText(true), 600);

    // Emoji animation
    const emojiInterval = setInterval(() => {
      setEmojiIndex((prev) => (prev + 1) % SURPRISE_EMOJIS.length);
    }, 500);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          // Countdown hit 0! Show button instead of autoplaying to avoid mobile browser restrictions
          setShowButton(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(textTimer);
      clearInterval(emojiInterval);
      clearInterval(countdownInterval);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [setCurrentPage, surpriseSound]);

  const handlePlaySurprise = () => {
    if (surpriseSound) {
      setSoundPlaying(true);
      try {
        const audio = new Audio(surpriseSound);
        audioRef.current = audio;
        
        // Boost volume (300% / 3x loud)
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
          // Ignore if AudioContext is not supported
          audio.volume = 1.0;
        }

        audio.play().catch(() => {
          // If browser blocks autoplay, navigate after 3 seconds fallback
          setTimeout(() => {
            setCurrentPage("result");
          }, 3000);
        });
        audio.onended = () => {
          setCurrentPage("result");
        };
      } catch {
        setCurrentPage("result");
      }
    } else {
      setCurrentPage("result");
    }
  };

  return (
    <div className="min-h-screen bg-[#050B18] flex items-center justify-center text-white overflow-hidden">

      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Flashing strobe effect */}
        <motion.div
          animate={{ opacity: [0, 0.05, 0, 0.03, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute inset-0 bg-yellow-400"
        />
        {/* Colorful blobs */}
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-rose-500/15 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, -40, 60, 0], y: [0, 50, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, 30, -50, 0], y: [0, -30, 40, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-[60px]"
        />

        {/* Floating party emojis */}
        {["🎊", "🎉", "✨", "💥", "🎁", "⭐", "🎈", "😂"].map((emoji, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: `${10 + i * 12}%`, opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
            className="absolute text-3xl select-none"
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Main Popup */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 12, stiffness: 200 }}
        className="relative z-10 max-w-lg w-full mx-4"
      >
        <div className="bg-[#0d1426] border-2 border-yellow-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-900/20">

          {/* Warning Header */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 px-8 py-5 border-b border-yellow-500/20 text-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="text-4xl sm:text-5xl mb-2"
            >
              ⚠️
            </motion.div>
            <h2 className="text-xl sm:text-2xl font-black text-yellow-400 tracking-tight">
              Surprise For You!
            </h2>
          </div>

          {/* Content */}
          <div className="px-8 py-8 text-center">

            {/* Animated Emoji */}
            <AnimatePresence mode="wait">
              <motion.div
                key={emojiIndex}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-6xl mb-6"
              >
                {SURPRISE_EMOJIS[emojiIndex]}
              </motion.div>
            </AnimatePresence>

            {/* Surprise Text */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="bg-white/5 border border-white/8 rounded-2xl p-4 sm:p-6">
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                      "Jaisa aapka result hai, aap toh{" "}
                      <span className="text-rose-400 font-bold">100 rupaye ke laayak bhi nahi</span>...
                    </p>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                      Phir bhi aapke liye ek{" "}
                      <span className="text-yellow-400 font-bold">special surprise</span> hai!
                    </p>
                    <p className="text-slate-400 text-sm mt-3">
                      Wait kijiye..."
                    </p>
                  </div>

                  {/* Sound indicator */}
                  {soundPlaying && (
                    <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs">
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-emerald-400"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
                        className="w-2 h-4 rounded-full bg-emerald-400"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
                        className="w-2 h-2 rounded-full bg-emerald-400"
                      />
                      <span>Playing surprise sound...</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer / Countdown */}
          <div className="px-8 pb-6 text-center">
            {showButton ? (
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={handlePlaySurprise}
                disabled={soundPlaying}
                className="w-full py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-900 shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-75 disabled:hover:scale-100"
              >
                {soundPlaying ? "Playing Surprise... 🎵" : "Tap to Reveal Surprise! 🎁"}
              </motion.button>
            ) : (
              <>
                <div className="text-xs text-slate-600 mb-3">
                  Result reveals automatically in...
                </div>
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-amber-500"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-yellow-500/30 border-t-yellow-500 rounded-full"
                  />
                  <span className="text-yellow-400 font-bold text-sm">
                    {countdown}s
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
