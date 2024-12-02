"use client";
import { MacNavbar } from "@repo/ui/MacNavbar";
import ProjectLink from "./ProjectLink";
import ScreenSize from "./ScreenSize";
import { DashboardButton } from "@repo/ui/DashboardButton";
import { CiShare1 } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <MacNavbar>
        <ProjectLink></ProjectLink>
        <div className="hidden lg:block ">
          <ScreenSize></ScreenSize>
        </div>
        <DashboardButton>
          <CiShare1 size={20} /> Preview
        </DashboardButton>
      </MacNavbar>
    </>
  );
};

export default Navbar;
