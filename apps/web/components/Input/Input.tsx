"use client";
import { DashboardButton } from "@repo/ui/DashboardButton";
import { useState, useRef, useEffect } from "react";
import { FcMindMap } from "react-icons/fc";
import Textarea from "./Textarea";
import { RecoilRoot } from "recoil";

const Input: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={inputRef}
      className={`overflow-hidden transition-[width] duration-700 ease-in-out p-5 shadow-md rounded-[36px] border border-theme-border ${
        isOpen ? "w-[98%]" : "w-20 right-10"
      } bottom-10 backdrop-blur-lg absolute`}
    >
      {isOpen ? (
        <RecoilRoot>
          <Textarea />
        </RecoilRoot>
      ) : (
        <DashboardButton onClick={() => setIsOpen(true)}>
          <div className="p-1 hover:rotate-180 duration-300" title="AI">
            <FcMindMap />
          </div>
        </DashboardButton>
      )}
    </div>
  );
};

export default Input;
