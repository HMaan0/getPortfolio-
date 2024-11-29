"use client";
import { Link as ScrollLink } from "react-scroll";
import data from "../../data";
import Links from "./Links";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <nav className="backdrop-blur-lg border border-theme-border rounded-lg mx-4 my-6 sm:mx-8 sm:my-8 px-4 sm:px-6 py-4 lg:py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-black dark:text-white font-bold text-lg sm:text-2x "
          >
            {!isMenuOpen && <ContentOfSideBar />}
          </motion.div>

          <motion.button
            onClick={toggleMenu}
            className="text-xl focus:outline-none text-black dark:text-white"
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
                className="flex-grow justify-end md:flex flex-row gap-9 w-full"
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
    { id: "home", label: "Home", condition: data?.Hero?.name?.length > 0 },
    {
      id: "work",
      label: "Work",
      condition: data?.Work?.[0]?.title?.length > 0,
    },
    {
      id: "projects",
      label: "Projects",
      condition: data?.projectData?.[0]?.title?.length > 0,
    },
    {
      id: "about",
      label: "About",
      condition:
        data?.aboutData?.description?.length > 0 ||
        data?.aboutData?.personalDetails?.email ||
        data?.aboutData?.personalDetails?.location?.length > 0 ||
        data?.aboutData?.skills?.[0]?.length > 0,
    },
    {
      id: "contact",
      label: "Contact",
      condition:
        data?.contact?.Email?.length > 0 ||
        data?.contact?.Github?.length > 0 ||
        data?.contact?.LinkedIn?.length > 0 ||
        data?.contact?.Twitter?.length > 0,
    },
  ];

  return (
    <motion.div className="flex gap-4">
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

export default Navbar;
