"use client";
import { MacNavbar } from "@repo/ui/MacNavbar";
import ProjectLink from "./ProjectLink";
import ScreenSize from "./ScreenSize";
import { DashboardButton } from "@repo/ui/DashboardButton";
import { CiShare1 } from "react-icons/ci";
import { useRecoilValue } from "recoil";
import { screen } from "../../store/screen";
import { MacButton } from "@repo/ui/MacButton";
const Navbar = () => {
  const screenSize = useRecoilValue(screen);
  return (
    <>
      {screenSize !== "desktop" ? (
        <div
          className={`transition-width duration-300 ${screenSize === "desktop" ? "w-full" : `${screenSize === "table" ? "w-[624px]" : `${screenSize === "mobile" ? "w-[390px]" : "w-[624px]"}`} `}`}
        >
          <MacNavbar>
            <div className="flex items-center justify-center w-full ">
              <ScreenSize></ScreenSize>
            </div>
          </MacNavbar>
        </div>
      ) : (
        <MacNavbar>
          <div className="hidden sm:flex w-full justify-start">
            <ProjectLink></ProjectLink>
            <div className="hidden lg:flex w-full justify-center ">
              <ScreenSize></ScreenSize>
            </div>
          </div>
          <div className="sm:hidden block">
            <MacButton />
          </div>
          <DashboardButton>
            <CiShare1 size={20} /> Preview
          </DashboardButton>
        </MacNavbar>
      )}
    </>
  );
};

export default Navbar;
