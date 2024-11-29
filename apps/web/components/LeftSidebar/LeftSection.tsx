import { DashboardButton } from "@repo/ui/DashboardButton";
import { WhiteLine } from "@repo/ui/WhiteLine";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Color from "./Color";
import Navbar from "./Navbar";
import SelectCard from "./SelectCard";
import TechSection from "./TechSection";
import AnimateStack from "./AnimateStack";
import WriteIcon from "./WriteIcon";
import { WriteComponent } from "../../lib/actions/WriteComponent";
import { useRecoilState } from "recoil";
import { sectionComponent, techStack } from "../../store/component";
import Backgrounds from "./Backgrounds";

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
    AnimateStack: <AnimateStack />,
    Background: <Backgrounds />,
  };

  const [isOpen, setIsOpen] = useState(sections.map(() => true));
  const [component] = useRecoilState(sectionComponent);
  const [techIcon] = useRecoilState(techStack);
  function handleClick(index: number) {
    setIsOpen((prev) => prev.map((open, i) => (i === index ? !open : open)));
  }

  const handleWriteComponent = async (section: string) => {
    try {
      const serializedTechIcon = techIcon.map((item) => {
        if (typeof item.component === "function") {
          const componentName = item.component.name;
          return {
            ...item,
            component: componentName,
          };
        }
        return item;
      });

      await WriteComponent(section, component, serializedTechIcon);

      //await WriteComponent(section, component, obj);
    } catch (error) {
      console.error("Error writing component:", error);
    }
  };

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
            <div className="overflow-y-auto custom-scroll">
              {componentMap[section]}
              <div
                className={` ${section === "Color" ? "hidden" : "w-full flex justify-center items-start"}`}
              >
                <div className="w-full mb-28 p-4 justify-center items-start flex">
                  <WriteIcon onClick={() => handleWriteComponent(section)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSection;
