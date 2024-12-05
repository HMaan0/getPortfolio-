"use client";
import SideIcon from "../RightSidebar/SideIcon";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import LeftSection from "./LeftSection";
import { RecoilRoot } from "recoil";
const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const transitionClasses = "transition-all duration-300 ";
  return (
    <>
      <Sidebar
        className={`${isOpen ? `w-10/12 h-full absolute z-50 ${transitionClasses}` : `w-20 ${transitionClasses}`}`}
      >
        <div className="flex justify-end bg-theme-bar z-50 sticky top-0 w-full ">
          <SideIcon
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            className="justify-end"
          />
        </div>
        <div className={`${transitionClasses} ${!isOpen && "hidden"} `}>
          <RecoilRoot>
            <LeftSection></LeftSection>
          </RecoilRoot>
        </div>
      </Sidebar>
    </>
  );
};

export default LeftSidebar;
