"use client";
import { DashboardButton } from "@repo/ui/DashboardButton";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CardItems from "./CardItems";
import { WhiteLine } from "@repo/ui/WhiteLine";

const Section = () => {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <>
      <div className="sticky top-[57px] bg-theme-bar z-50">
        <WhiteLine />
        <div className="flex justify-between items-center p-4 sticky top-0">
          <button
            onClick={handleClick}
            className={`hover:bg-white/20 active:bg-white/50 p-3 rounded-full flex justify-center items-center transition-all duration-300 ${
              isOpen ? "" : "rotate-180"
            }`}
          >
            <IoIosArrowDown />
          </button>
          <DashboardButton className="w-min">Work</DashboardButton>
        </div>
      </div>
      <div
        className={`flex flex-col gap-7 p-4 overflow-hidden transition-all duration-500 ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
        }`}
      >
        <CardItems />
        <CardItems />
      </div>
    </>
  );
};

export default Section;
