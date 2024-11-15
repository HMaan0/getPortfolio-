"use client";
import DashboardInput from "@repo/ui/DashboardDiv";
import { useState } from "react";
import { BiDesktop, BiMobile } from "react-icons/bi";
import { BsTablet } from "react-icons/bs";

const ScreenSize = () => {
  const [selected, setSelected] = useState<string | null>("desktop");

  return (
    <>
      <DashboardInput>
        <div className="flex justify-center items-center gap-4 text-lg">
          <button
            onClick={() => setSelected("desktop")}
            className={`flex justify-center items-center gap-2 text-lg transition-colors duration-200 hover:bg-white/30 rounded-full px-2 ${selected === "desktop" ? "bg-white/15" : ""}`}
          >
            <BiDesktop /> Desktop
          </button>
          <button
            onClick={() => setSelected("tablet")}
            className={`flex justify-center items-center gap-2 text-lg transition-colors duration-200 hover:bg-white/30 rounded-full px-2 ${selected === "tablet" ? "bg-white/15" : ""}`}
          >
            <BsTablet /> Tablet
          </button>
          <button
            onClick={() => setSelected("mobile")}
            className={`flex justify-center items-center gap-2 text-lg transition-colors duration-200 hover:bg-white/30 rounded-full px-2 ${selected === "mobile" ? "bg-white/15" : ""}`}
          >
            <BiMobile /> Mobile
          </button>
        </div>
      </DashboardInput>
    </>
  );
};

export default ScreenSize;
