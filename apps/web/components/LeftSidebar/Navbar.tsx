"use client";
import { useState } from "react";
import Toggle from "./Toggle";
import HamburgerMenu from "../../project/sections/Hamburger";
import NavbarComponent from "../../project/sections/Navbar";
const Navbar = () => {
  const [selectedNavbar, setSelectedNavbar] = useState<string>("");
  const navbarType = ["Hamburger", "Navbar"];

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
      <div className="h-96 w-full relative bg-black rounded-3xl">
        {selectedNavbar === "Hamburger" ? (
          <HamburgerMenu />
        ) : (
          <NavbarComponent />
        )}
      </div>

      <div className="flex gap-1 flex-wrap"></div>
    </div>
  );
};

export default Navbar;
