"use client";
import { motion } from "framer";
const Gradient = () => {
  return (
    <>
      <motion.div
        className="-z-10 rotate-45 absolute top-0 sm:-top-52  left-0 transform -translate-x-1/2 w-40 h-96 sm:h-4/5 bg-gradient-radial  from-theme_gradient to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0, x: 0, rotate: -45 }}
        animate={{ opacity: 1, x: 0, rotate: -45 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: 1,
        }}
      ></motion.div>
    </>
  );
};

export default Gradient;
