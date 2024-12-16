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
      className={`p-4 sticky top-0 w-full flex bg-theme-bar z-30 ${className}`}
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        <FiSidebar className="sm:text-2xl text-lg" />
      </button>
    </div>
  );
};

export default SideIcon;
