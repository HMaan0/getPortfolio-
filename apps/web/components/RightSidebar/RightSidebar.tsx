"use client";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Section from "./Section";
import SideIcon from "./SideIcon";

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const transitionClasses = "transition-all duration-300";

  return (
    <>
      <Sidebar
        className={`${isOpen ? `right-0 w-10/12 h-full absolute z-50 sm:static sm:w-1/3 sm:right-auto sm:z-0 sm:h-auto ${transitionClasses}` : `w-10 sm:w-20 ${transitionClasses}`}`}
      >
        <SideIcon
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          className="justify-start"
        />
        <div className={`${transitionClasses} ${!isOpen && "hidden"} `}>
          <Section />
        </div>
      </Sidebar>
    </>
  );
};

export default RightSidebar;
