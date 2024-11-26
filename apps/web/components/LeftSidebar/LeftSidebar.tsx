"use client";
import SideIcon from "../RightSidebar/SideIcon";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import LeftSection from "./LeftSection";
const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const transitionClasses = "transition-all duration-300";
  return (
    <>
      <Sidebar
        className={`${isOpen ? transitionClasses : `w-20 ${transitionClasses}`}`}
      >
        <div className="flex justify-end bg-theme-bar z-50 sticky top-0 w-full ">
          <SideIcon setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div className={`${transitionClasses} ${!isOpen && "hidden"} `}>
          <LeftSection></LeftSection>
        </div>
      </Sidebar>
    </>
  );
};

export default LeftSidebar;
