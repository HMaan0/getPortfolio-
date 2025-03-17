"use client";
import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";

const LoadingTimer = () => {
  return (
    <div className="flex items-center justify-center h-full w-full ">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="text-xl font-semibold text-white text-center "
        >
          Loading...
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default memo(LoadingTimer);
