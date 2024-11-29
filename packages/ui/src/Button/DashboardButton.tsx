"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;

  onClick?: () => void;
  disabled?: boolean;
}

export const DashboardButton = ({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={` md:px-2 md:py-1 px-4 py-2 flex justify-between items-center font-semibold text-md bg-white text-black   rounded-full hover:bg-white/70 transition-color duration-200 ease-linear ${className ? className : "xl:text-lg lg:text-md md:text-sm sm:text-xs"} `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
