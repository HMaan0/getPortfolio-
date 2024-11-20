"use client";
import { DashboardButton } from "@repo/ui/DashboardButton";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { WhiteLine } from "@repo/ui/WhiteLine";
import data from "../../data";
import CardItems from "./CardItems";

const Section = () => {
  const dataKeys = Object.keys(data); // Get all keys from the data object
  const [isOpen, setIsOpen] = useState(dataKeys.map(() => true));

  function handleClick(index: number) {
    setIsOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  }

  return (
    <>
      {dataKeys.map((key, index) => (
        <div key={index} className="sticky top-[57px] bg-theme-bar z-50">
          <WhiteLine />
          <div className="flex justify-between items-center p-4 sticky top-0">
            <button
              onClick={() => handleClick(index)}
              className={`hover:bg-white/20 active:bg-white/50 p-3 rounded-full flex justify-center items-center transition-all duration-300 ${
                isOpen[index] ? "" : "rotate-180"
              }`}
            >
              <IoIosArrowDown />
            </button>

            <DashboardButton className="w-min">{key}</DashboardButton>
          </div>
          <div
            className={`flex flex-col gap-7 p-4 overflow-hidden transition-all duration-500 ${
              isOpen[index] ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
            }`}
          >
            <CardItems sectionData={data[key]} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Section;
