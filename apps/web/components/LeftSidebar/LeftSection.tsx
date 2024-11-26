import { DashboardButton } from "@repo/ui/DashboardButton";
import { WhiteLine } from "@repo/ui/WhiteLine";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Color from "./Color";
import Navbar from "./Navbar";
import SelectCard from "./SelectCard";
import TechSection from "./TechSection";

const LeftSection = () => {
  const sections = [
    "Color",
    "Navbar",
    "TechStack",
    "AnimateStack",
    "Card",
    "Background",
    "Metadata",
  ];

  const componentMap: { [key: string]: JSX.Element } = {
    Color: <Color />,
    Navbar: <Navbar />,
    Card: <SelectCard />,
    TechStack: <TechSection />,
  };

  const [isOpen, setIsOpen] = useState(sections.map(() => true));

  function handleClick(index: number) {
    setIsOpen((prev) => prev.map((open, i) => (i === index ? !open : open)));
  }

  return (
    <div>
      {sections.map((section, index) => (
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

            <DashboardButton className="w-min text-sm ">
              {section}
            </DashboardButton>
          </div>
          <div
            className={`flex flex-col p-4 overflow-hidden transition-all duration-500 ${
              isOpen[index] ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
            }`}
          >
            <div className="mb-20 overflow-y-auto custom-scroll">
              {componentMap[section]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSection;
