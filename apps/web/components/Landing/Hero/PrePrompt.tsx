"use client";
import DashboardInput from "@repo/ui/DashboardDiv";
import { useSetRecoilState } from "recoil";
import { prePrompt } from "../../../store/prompt";
import { BiArrowToRight } from "react-icons/bi";
import { BsArrowBarRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const PrePrompt = () => {
  const setPrePrompt = useSetRecoilState(prePrompt);
  return (
    <>
      <div className="flex gap-2 flex-col">
        <div className="flex gap-2  md:flex-row flex-col">
          <DashboardInput>
            <button
              onClick={() => setPrePrompt("Add Gradient to the Hero section")}
              className="group flex justify-between items-center w-full hover:bg-white/20 rounded-full transition-colors duration-300"
            >
              <p className="md:text-md text-md lg:text-lg mb-0.5 ml-2 sm:py-0 py-2">
                Add Gradient to the Hero section
              </p>
              <FaArrowRightLong
                size={20}
                className="mr-7 group-hover:-rotate-45 transition-transform duration-300"
              />
            </button>
          </DashboardInput>
          <DashboardInput>
            <button
              onClick={() =>
                setPrePrompt("Make text bigger in Work experience")
              }
              className="w-full group flex justify-between items-center hover:bg-white/20 rounded-full transition-colors duration-300"
            >
              <p className=" md:text-md text-md lg:text-lg mb-0.5 ml-2 sm:py-0 py-2">
                Make text size in Work experience
              </p>{" "}
              <FaArrowRightLong
                size={20}
                className="mr-7 group-hover:-rotate-45 transition-transform duration-300"
              />
            </button>
          </DashboardInput>
        </div>

        <div className="justify-center items-center flex ">
          <div className="w-full md:w-1/2">
            <DashboardInput>
              <button
                onClick={() => setPrePrompt("Change the color to Crimson")}
                className="group flex justify-between items-center w-full hover:bg-white/20 rounded-full transition-colors duration-300"
              >
                <p className="md:text-md text-md lg:text-lg mb-0.5 ml-2 sm:py-0 py-2 ">
                  Change the color to Crimson
                </p>{" "}
                <FaArrowRightLong
                  size={20}
                  className="mr-7 group-hover:-rotate-45 transition-transform duration-300"
                />
              </button>
            </DashboardInput>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrePrompt;
