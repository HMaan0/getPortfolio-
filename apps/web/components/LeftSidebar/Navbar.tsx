"use client";
import { useState } from "react";
import Toggle from "./Toggle";

const Navbar = () => {
  const [selectedNavbar, setSelectedNavbar] = useState<string>("");
  const [selectedScreen, setSelectedScreen] = useState<string | null>(null);

  const [isMobileScreen, setIsMobileScreen] = useState(true);

  const navbarType = ["Hamburger", "Navbar"];
  const screenType = ["Desktop", "Mobile"];
  const handleScreenSelect = (screen: string) => {
    setSelectedScreen(screen);
    setIsMobileScreen(screen === "Mobile");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mb-10 gap-4">
      <div className="flex gap-1 flex-wrap">
        {navbarType.map((nav) => (
          <Toggle
            key={nav}
            option={nav}
            selected={selectedNavbar}
            onSelect={setSelectedNavbar}
          />
        ))}
      </div>
      <div className="h-96 ">
        <iframe
          src={
            selectedNavbar === "Navbar"
              ? `http://localhost:3000/navbar `
              : `http://localhost:3000/hamburger`
          }
          className="h-full rounded-lg w-full shadow-2xl shadow-emerald-500/[0.1] border-white/[0.2] border  "
          style={{
            width: isMobileScreen ? "200%" : "260%",
            height: "200%",
            transform: isMobileScreen ? "scale(0.5)" : "scale(0.40)",
            transformOrigin: "0 0",
            border: "none",
            display: "block",
          }}
        ></iframe>
      </div>

      <div className="flex gap-1 flex-wrap">
        {screenType.map((screen) => (
          <Toggle
            key={screen}
            option={screen}
            selected={selectedScreen}
            onSelect={handleScreenSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
