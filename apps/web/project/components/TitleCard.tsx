"use client";
import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

// Define a reusable fade-in function with framer-motion
const fadeIn = (
  direction = "up",
  type = "spring",
  delay = 0,
  duration = 0.75
) => {
  return {
    initial: {
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
      },
    },
  };
};

const TitleCard = ({
  title = "HELLO",
  icon,
  tiltOptions = { max: 35, scale: 1.05, speed: 500 },
}) => {
  return (
    <Tilt
      options={{ max: 35, scale: 1.1, speed: 400, perspective: 1000 }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.2, 0.75)}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1, rotateX: 5, rotateY: -5 }}
        className="relative w-full p-[2px] rounded-[20px] shadow-2xl bg-gradient-to-br from-purple-500 to-pink-500"
        style={{
          boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.4)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="bg-slate-700 rounded-[20px] py-6 px-12 min-h-[280px] flex flex-col justify-center items-center transform transition-transform"
          style={{
            transform: "translateZ(30px)",
            boxShadow:
              "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.15)",
            perspective: "1000px",
          }}
        >
          {icon && (
            <motion.img
              src={icon}
              alt="icon"
              className="w-16 h-16 object-contain mb-4 transition-transform duration-500"
              style={{
                transform: "translateZ(50px)",
                boxShadow: "0 8px 12px rgba(0, 0, 0, 0.4)",
              }}
              whileHover={{ scale: 1.2, rotateZ: 10, translateZ: 60 }}
            />
          )}
          <motion.h3
            className="text-white text-[20px] font-bold text-center"
            style={{
              transform: "translateZ(40px)",
              textShadow:
                "1px 1px 3px rgba(0, 0, 0, 0.6), -1px -1px 3px rgba(255, 255, 255, 0.2)",
            }}
            whileHover={{
              scale: 1.1,
              rotateZ: -2,
              translateZ: 45,
              textShadow:
                "2px 2px 8px rgba(0, 0, 0, 0.6), -2px -2px 8px rgba(255, 255, 255, 0.3)",
            }}
          >
            {title}
          </motion.h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default TitleCard;
