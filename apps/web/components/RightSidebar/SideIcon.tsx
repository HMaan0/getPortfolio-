"use client";

import { FiSidebar } from "react-icons/fi";

const SideIcon = ({
  setIsOpen,
  isOpen,
  className,
}: {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  className: string;
}) => {
  return (
    <div
      className={`p-4 sticky top-0 w-full flex bg-theme-bar z-50 ${className}`}
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        <FiSidebar size={25} />
      </button>
    </div>
  );
};

export default SideIcon;
