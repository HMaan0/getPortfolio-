"use client";
import { FiSidebar } from "react-icons/fi";

const SideIcon = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}) => {
  return (
    <div className="p-4 sticky top-0 bg-theme-bar">
      <button onClick={() => setIsOpen(!isOpen)}>
        <FiSidebar size={25} />
      </button>
    </div>
  );
};

export default SideIcon;
