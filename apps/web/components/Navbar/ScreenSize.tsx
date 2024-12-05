"use client";
import { Button } from "@repo/ui/Button";
import DashboardInput from "@repo/ui/DashboardDiv";
import { useTheme } from "next-themes";
import { BiDesktop, BiMobile } from "react-icons/bi";
import { BsMoonStars, BsTablet } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useRecoilState } from "recoil";
import { screen } from "../../store/screen";
const ScreenSize = () => {
  const { theme, setTheme } = useTheme();

  const [screenSize, setScreenSize] = useRecoilState(screen);
  function changeMode() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <>
      <div className="flex gap-2">
        <DashboardInput>
          <div className="flex justify-center items-center gap-2 ">
            <button
              onClick={() => setScreenSize("desktop")}
              className={`flex justify-center items-center gap-2 text-lg transition-colors duration-200 hover:bg-white/30 rounded-full px-2 ${screenSize === "desktop" ? "bg-white/15" : ""}`}
            >
              <BiDesktop /> Desktop
            </button>
            <button
              onClick={() => setScreenSize("tablet")}
              className={`flex justify-center items-center gap-2 text-lg transition-colors duration-200 hover:bg-white/30 rounded-full px-2 ${screenSize === "tablet" ? "bg-white/15" : ""}`}
            >
              <BsTablet /> Tablet
            </button>
            <button
              onClick={() => setScreenSize("mobile")}
              className={`flex justify-center items-center gap-2 text-lg transition-colors duration-200 hover:bg-white/30 rounded-full px-2 ${screenSize === "mobile" ? "bg-white/15" : ""}`}
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
