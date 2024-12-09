"use client";
import React, { useState, useRef, useEffect } from "react";
import { BiPlus } from "react-icons/bi";

const AskedQuestion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [show, setShow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (show && contentRef.current !== null) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [show]);

  return (
    <button onClick={() => setShow(!show)} className="w-full">
      <div
        className={`p-4 px-6 bg-theme-bar hover:bg-white/15 transition-colors duration-150 w-full rounded-2xl flex flex-col gap-3`}
      >
        <div className="flex w-full justify-between items-center mt-1.5 ">
          <p className="text-xl font-bold ">{question}</p>
          <BiPlus
            className={`text-2xl ${
              show ? "-rotate-45" : "rotate-0"
            } transition-transform duration-700`}
          />
        </div>

        <div
          className={`transition-all duration-700 overflow-hidden`}
          style={{ height: `${height}px` }}
        >
          <p
            ref={contentRef}
            className={`font-semibold text-gray-400 text-lg transition-opacity duration-700 text-left ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </button>
  );
};

export default AskedQuestion;
