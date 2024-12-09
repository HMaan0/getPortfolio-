"use client";
import React from "react";
import { BiPlus } from "react-icons/bi";

const AskedQuestion = () => {
  function expand() {}
  return (
    <>
      <button onClick={expand}>
        <div className="p-4 px-6 bg-theme-bar hover:bg-white/15 transition-colors duration-150 w-full rounded-2xl flex flex-col gap-3">
          <div className="flex w-full justify-between items-center">
            <p className="text-xl font-bold">Questions are asked here</p>
            <BiPlus className="text-2xl" />
          </div>
          <p className="font-semibold">
            Answers are giving here Answers are giving here Answers are giving
            here Answers are giving here
          </p>
        </div>
      </button>
    </>
  );
};

export default AskedQuestion;
