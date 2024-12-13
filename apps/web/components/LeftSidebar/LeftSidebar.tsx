"use client";
import SideIcon from "../RightSidebar/SideIcon";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import LeftSection from "./LeftSection";
import { useRecoilValue } from "recoil";
import { iFrameUrl } from "../../store/webContainer";
import SideBarLoading from "../Loading/SideBarLoading";
const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const loadingComplete = useRecoilValue(iFrameUrl);
  const transitionClasses = "transition-all duration-300 ";
  return (
    <>
      <Sidebar
        className={`${isOpen ? `w-10/12 h-full absolute z-50 sm:static sm:w-1/3 sm:z-0 sm:h-auto ${transitionClasses}` : `sm:w-20 w-10 ${transitionClasses}`}`}
      >
        <div className="flex justify-end bg-theme-bar z-50 sticky top-0 w-full ">
          <SideIcon
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            className="justify-end"
          />
        </div>
        <div className={`${transitionClasses} ${!isOpen && "hidden"} `}>
          {loadingComplete.length > 0 ? (
            <LeftSection></LeftSection>
          ) : (
            <SideBarLoading />
          )}
        </div>
      </Sidebar>
    </>
  );
};

export default LeftSidebar;
