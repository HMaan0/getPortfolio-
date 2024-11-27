"use client";
import { Button } from "@repo/ui/Button";
import DashboardInput from "@repo/ui/DashboardDiv";
import { useTheme } from "next-themes";
import { useState } from "react";
import { BiDesktop, BiMobile } from "react-icons/bi";
import { BsMoonStars, BsTablet } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

const ScreenSize = () => {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState<string | null>("desktop");
  function changeMode() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <>
      <div className="flex">
        <DashboardInput>
          <div className="flex justify-center items-center gap-2 ">
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
        <Button onClick={changeMode}>
          {theme === "light" ? <MdLightMode /> : <BsMoonStars />}
        </Button>
      </div>
    </>
  );
};

export default ScreenSize;
