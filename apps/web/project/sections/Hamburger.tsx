"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Links from "./Links";
import { Link as ScrollLink } from "react-scroll";
import data from "../../data";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`items-center fixed top-0 flex flex-row justify-end w-full p-8 md:p-6 backdrop-blur-md md:border-none border-b border-gray-600 md:backdrop-blur-none z-50 ${
          isOpen ? "bg-blur" : ""
        }`}
      >
        <button
          onClick={toggleMenu}
          className="fixed md:p-3 p-6 top-0 z-50 left-3 flex flex-col justify-center items-center w-10 group outline-none"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="w-8 h-1  dark:bg-white  bg-black mb-1 rounded transition-all duration-100 ease-out"
          />

          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-8 h-1 dark:bg-white  bg-black mb-1 rounded transition-opacity duration-100 ease-out"
          />

          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="w-8 h-1 dark:bg-white  bg-black rounded transition-all duration-100 ease-out"
          />
        </button>
        <div className=" fixed flex flex-row gap-4 justify-center items-center ">
          <Links />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full fixed z-50 top-0 left-0 mt-20 sm:w-2/12 w-11/12"
          >
            <ContentOfSideBar onChildClick={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out"></div>
      )}
    </>
  );
};

function ContentOfSideBar({ onChildClick }: { onChildClick: () => void }) {
  return (
    <div className=" h-5/6 shadow-lg dark:border-none border border-slate-300 xl:text-xl lg:text-2xl  m-4 mt-4 rounded-lg font-semibold font-sans sm:text-xl text-xl w-full bg-primary_light dark:bg-primary_dark flex justify-center items-center flex-col gap-16">
      {data.Hero.name.length > 0 && (
        <button
          onClick={onChildClick}
          className="transform hover:scale-125 transition-transform duration-100"
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={onChildClick}
          >
            Home
          </ScrollLink>
        </button>
      )}

      {data.Work.map((work) => work.title.length).at(0) ? (
        <button
          onClick={onChildClick}
          className="transform hover:scale-125 transition-transform duration-100"
        >
          <ScrollLink
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={onChildClick}
          >
            Work
          </ScrollLink>
        </button>
      ) : null}

      {data.projectData.map((projects) => projects.title.length).at(0) ? (
        <button
          onClick={onChildClick}
          className="transform hover:scale-125 transition-transform duration-100"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={onChildClick}
          >
            Projects
          </ScrollLink>
        </button>
      ) : null}

      {data.aboutData.description.length ||
      // data.aboutData.personalDetails.email ||
      // data.aboutData.personalDetails.location.length > 0 ||
      data.aboutData.skills.map((skill) => skill.length).at(0) ? (
        <button
          onClick={onChildClick}
          className="transform hover:scale-125 transition-transform duration-100"
        >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={onChildClick}
          >
            About
          </ScrollLink>
        </button>
      ) : null}

      {data.contact.Email.length ||
      data.contact.Github.length ||
      data.contact.LinkedIn.length ||
      data.contact.Twitter.length > 0 ? (
        <button
          onClick={onChildClick}
          className="transform hover:scale-125 transition-transform duration-100"
        >
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={onChildClick}
          >
            Contact
          </ScrollLink>
        </button>
      ) : null}
    </div>
  );
}

export default HamburgerMenu;
