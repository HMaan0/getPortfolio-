"use client";
import { DashboardButton } from "@repo/ui/DashboardButton";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { WhiteLine } from "@repo/ui/WhiteLine";
import data from "../../data";
import CardItems from "./CardItems";
import Data from "../../project/types/types";

const Section = () => {
  const typedData: Data = data;
  const dataKeys = Object.keys(typedData);
  const [isOpen, setIsOpen] = useState(dataKeys.map(() => true));

  function handleClick(index: number) {
    setIsOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  }

  return (
    <>
      {dataKeys.map((section, index) => (
        <>
          <div key={index} className="sticky top-16 bg-theme-bar">
            <WhiteLine />
            <div className="flex justify-between items-center p-2 sticky top-0">
              <button
                onClick={() => handleClick(index)}
                className={`hover:bg-white/20 active:bg-white/50 p-2 rounded-full flex justify-center items-center transition-all duration-300 ${
                  isOpen[index] ? "" : "rotate-180"
                }`}
              >
                <IoIosArrowDown />
              </button>

              <DashboardButton className="w-min text-sm">
                {section}
              </DashboardButton>
            </div>
            <div
              className={`flex flex-col p-4 overflow-hidden transition-all duration-500 mb-0 ${
                isOpen[index] ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
              }`}
            >
              <CardItems
                sectionData={typedData[section as keyof Data]}
                section={section}
              />
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Section;
