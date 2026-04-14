"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loaderExit } from "@/lib/animations";

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const steps = duration / interval;
    const stepIncrement = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + stepIncrement;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10005] bg-[#0a0a0a] flex flex-col items-center justify-center"
      variants={loaderExit}
      animate="initial"
      exit="animate"
    >
      <div className="flex flex-col items-center gap-8 px-8 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-accent font-display text-7xl font-bold"
        >
          AP
        </motion.div>
        
        <div className="overflow-hidden h-[1px] w-full bg-white/10 relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/60 font-display text-xl uppercase tracking-[0.3em]"
        >
          Aditya Prakash
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
