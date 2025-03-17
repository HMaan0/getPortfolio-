"use client";
import { DashboardButton } from "@repo/ui/DashboardButton";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { WhiteLine } from "@repo/ui/WhiteLine";
import CardItems from "./CardItems";
import Data from "../../project/types/types";
import { useRecoilValue } from "recoil";
import {
  iFrameUrl,
  toggle,
  webContainerInstance,
} from "../../store/webContainer";
import SideBarLoading from "../Loading/SideBarLoading";
import data from "../../data";

const Section = () => {
  const webContainer = useRecoilValue(webContainerInstance);
  const [fileData, setFileData] = useState<Data | null>(null);
  const containerActive = useRecoilValue(iFrameUrl);
  const cardToggle = useRecoilValue(toggle);
  useEffect(() => {
    async function main() {
      if (webContainer && containerActive.length > 0) {
        const rawData = await webContainer.fs.readFile(
          "vite-template/data.ts",
          "utf-8"
        );
        const start = rawData.indexOf("{");
        const end = rawData.lastIndexOf("}") + 1;
        const dataObjectCode = rawData.slice(start, end);
        const data = eval(`(${dataObjectCode})`);
        setFileData(data);
      }
    }
    main();
  }, [containerActive, webContainer, cardToggle]);

  function handleClick(index: number) {
    setIsOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  }
  const typedData: Data = data;

  const dataKey = Object.keys(typedData);

  const dataKeys = fileData ? Object.keys(fileData) : [];

  const [isOpen, setIsOpen] = useState(dataKey.map(() => false));

  return (
    <>
      {containerActive.length > 0 && fileData ? (
        <>
          {dataKeys.map((section, index) => (
            <div key={section} className="sticky top-16 bg-theme-bar">
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
                className={` flex flex-col p-4 overflow-hidden transition-all duration-500   ${
                  isOpen[index]
                    ? "opacity-100 max-h-screen"
                    : "opacity-0 max-h-0"
                }`}
              >
                <CardItems sectionData={fileData[section]} section={section} />
              </div>
            </div>
          ))}
        </>
      ) : (
        <SideBarLoading />
      )}
    </>
  );
};

export default Section;
