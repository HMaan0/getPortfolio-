"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingTimer = () => {
  const loadingMessages = [
    "Initializing dependencies...",
    "WebContainer is booting up...",
    "This is taking longer than expected",
    "Loading resources, please hold on...",
    "Almost there, preparing the environment...",
    "WebContainer is Up! Loading Iframe",
    "Iframe is Up...",
    "Next js is compiling / route",
    "Almost there!!",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % loadingMessages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-full w-full ">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessageIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="text-xl font-semibold text-white text-center "
        >
          {loadingMessages[currentMessageIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoadingTimer;
