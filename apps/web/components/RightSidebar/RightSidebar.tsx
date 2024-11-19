"use client";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Section from "./Section";
import SideIcon from "./SideIcon";

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const transitionClasses = "transition-all duration-300";

  return (
    <>
      <Sidebar
        className={`${isOpen ? transitionClasses : `w-16 ${transitionClasses}`}`}
      >
        <SideIcon setIsOpen={setIsOpen} isOpen={isOpen} />
        <div className={`${transitionClasses} ${!isOpen && "hidden"}`}>
          <Section />
          <Section />
        </div>
      </Sidebar>
    </>
  );
};

export default RightSidebar;
