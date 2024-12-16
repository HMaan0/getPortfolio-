"use client";
import { Link as ScrollLink } from "react-scroll";
import Links from "./Links";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div>
      <div className=" w-full z-30">
        <nav className="backdrop-blur-lg border border-theme-border rounded-lg mx-2 my-3 px-2 py-2  flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-black dark:text-white font-bold text-sm "
          >
            {!isMenuOpen && <ContentOfSideBar />}
          </motion.div>

          <motion.button
            onClick={toggleMenu}
            className="text-md focus:outline-none text-black dark:text-white"
            aria-label="Toggle menu"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="flex-grow justify-end md:flex flex-row gap-4 w-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <Links />
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
};

function ContentOfSideBar() {
  const sections = [
    { id: "home", label: "Home", condition: true },
    {
      id: "work",
      label: "Work",
      condition: true,
    },
    {
      id: "projects",
      label: "Projects",
      condition: true,
    },
    {
      id: "about",
      label: "About",
      condition: true,
    },
  ];

  return (
    <motion.div className="flex gap-2">
      {sections
        .filter((section) => section.condition)
        .map((section) => (
          <NavButton key={section.id} to={section.id} label={section.label} />
        ))}
    </motion.div>
  );
}

function NavButton({ to, label }: { to: string; label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="transform transition-transform duration-200"
    >
      <ScrollLink
        to={to}
        smooth={true}
        duration={1000}
        className="cursor-pointer text-black dark:text-white"
        aria-label={`Scroll to ${label}`}
      >
        {label}
      </ScrollLink>
    </motion.button>
  );
}

export default NavbarComponent;
