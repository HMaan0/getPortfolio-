"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;

  onClick?: () => void;
}

export const DashboardButton = ({
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 flex justify-between items-center font-semibold text-lg dark:bg-white bg-black dark:text-black text-white  rounded-full hover:bg-white/70 transition-color duration-200 ease-linear ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
