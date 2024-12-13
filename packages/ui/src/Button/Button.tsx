"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  title?: string;
}

export const Button = ({
  children,
  className,
  onClick,
  disabled,
  title,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-between gap-2   items-center lg:font-semibold  bg-theme-button px-2 py-1  rounded-full hover:bg-theme-button/50 transition-color duration-200 ease-linear border  border-theme-border ${className ? className : "text-md xl:text-lg lg:text-md md:text-sm sm:text-xs"}`}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};
