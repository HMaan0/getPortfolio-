"use client";

import { motion } from "framer-motion";

const Eyes = () => {
  return (
    <>
      <div className="flex justify-between items-center absolute w-full -z-30  ">
        <div className="w-full">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            className="overflow-hidden "
            initial={{ filter: "drop-shadow(0 0 0px rgb(31, 81, 255))" }}
            animate={{ filter: "drop-shadow(0 0 20px rgb(31, 81, 255))" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <path
              className="blur-md "
              style={{
                fill: "rgb(31, 81, 255)",
                stroke: "rgb(0, 0, 0)",

                transformOrigin: "50% 50%",
              }}
              d="M 81.047 116.165 L 96.997 86.981 L 224.658 191.195 L 205.932 216.342 L 121.973 178.389 L 81.047 116.165 Z"
              transform="matrix(0.951056, -0.309018, 0.309018, 0.951056, -1.315527, -0.773111)"
            ></path>
          </motion.svg>
        </div>
        <div className="w-full">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            initial={{ filter: "drop-shadow(0 0 0px rgb(31, 81, 255))" }}
            animate={{ filter: "drop-shadow(0 0 20px rgb(31, 81, 255))" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <path
              className="-scale-x-100 rotate-[16.8deg] blur-md"
              style={{
                fill: "rgb(31, 81, 255)",
                stroke: "rgb(0, 0, 0)",

                transformOrigin: "50% 50%",
              }}
              d="M 81.047 116.165 L 96.997 86.981 L 224.658 191.195 L 205.932 216.342 L 121.973 178.389 L 81.047 116.165 Z"
              transform="matrix(0.951056, -0.309018, 0.309018, 0.951056, -1.315527, -0.773111)"
            ></path>
          </motion.svg>
        </div>
      </div>
    </>
  );
};

export default Eyes;
