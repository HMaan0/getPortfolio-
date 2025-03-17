"use client";
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
import { useRecoilState, useRecoilValue } from "recoil";
import { sectionComponent, techStack } from "../../store/component";
import Backgrounds from "./Backgrounds";
import { webContainerInstance } from "../../store/webContainer";

const LeftSection = () => {
  const sections = [
    {
      id: 1,
      component: "Color",
    },
    {
      id: 2,
      component: "Navbar",
    },
    // {
    //   id: 3,
    //   component: "TechStack",
    // },
    // {
    //   id: 4,

    //   component: "AnimateStack",
    // },
    {
      id: 3,

      component: "Card",
    },
    {
      id: 4,
      component: "Background",
    },
    // {
    //   id: 7,
    //   component: "Metadata",
    // },
  ];

  const componentMap: { [key: string]: JSX.Element } = {
    Color: <Color />,
    Navbar: <Navbar />,
    Card: <SelectCard />,
    TechStack: <TechSection />,
    AnimateStack: <AnimateStack />,
    Background: <Backgrounds />,
  };
  const webContainer = useRecoilValue(webContainerInstance);
  const [isOpen, setIsOpen] = useState(sections.map(() => false));
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

      if (webContainer) {
        if (section === "TechStack" && serializedTechIcon) {
          const rawData = await webContainer.fs.readFile(
            "vite-template/src/icon.ts",
            "utf-8"
          );
          const start = rawData.indexOf("[");
          const end = rawData.lastIndexOf("]") + 1;
          const dataObjectCode = rawData.slice(start, end);
          const string = JSON.stringify(serializedTechIcon);

          const data = eval(`(${dataObjectCode})`);
          const evalString = eval(`(${string})`);

          const newData = [...data, ...evalString];
          const updatedRawData =
            rawData.slice(0, start) +
            JSON.stringify(newData, null, 2) +
            rawData.slice(end);

          await webContainer.fs.writeFile(
            "vite-template/src/icon.ts",
            updatedRawData
          );
        } else {
          const rawData = await webContainer.fs.readFile(
            "vite-template/component.ts",
            "utf-8"
          );
          const start = rawData.indexOf("{");
          const end = rawData.lastIndexOf("}") + 1;
          const dataObjectCode = rawData.slice(start, end);
          const data = eval(`(${dataObjectCode})`);

          let sectionL = section.toLocaleLowerCase();
          let componentL = component.toLocaleLowerCase();
          if (!data[sectionL]) {
            throw new Error(`Section "${sectionL}" not found in the data.`);
          }
          Object.keys(data[sectionL]).forEach((key) => {
            data[sectionL][key] = key === componentL;
          });
          const updatedData = `${rawData.slice(0, start)}${JSON.stringify(
            data,
            null,
            2
          )}${rawData.slice(end)}`;

          await webContainer.fs.writeFile(
            "vite-template/component.ts",
            updatedData
          );
        }
      }
    } catch (error) {
      console.error("Error writing component:", error);
    }
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={section.id} className="sticky top-16 bg-theme-bar">
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
              {section.component}
            </DashboardButton>
          </div>
          <div
            className={`flex flex-col p-4 overflow-hidden transition-all duration-500 ${
              isOpen[index] ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
            }`}
          >
            <div className="overflow-y-auto custom-scroll">
              {componentMap[section.component]}
              <div
                className={` ${section.component === "Color" ? "hidden" : "w-full flex justify-center items-start"}`}
              >
                <div className="w-full mb-28 last:mb-[100px] p-4 justify-center items-start flex">
                  <WriteIcon
                    onClick={() => handleWriteComponent(section.component)}
                  />
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
