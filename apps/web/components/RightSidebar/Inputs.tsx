"use client";
import DashboardInput from "@repo/ui/DashboardDiv";

import { SetStateAction, useEffect, useState } from "react";
import { writeToFile } from "../../lib/actions/WriteFile";
import { BiPencil } from "react-icons/bi";

const Inputs = ({
  value,
  section,
  sectionKey,
  index,
}: {
  value: string;
  section: string;
  sectionKey: string;
  index: number;
}) => {
  const [input, setInput] = useState(value);
  const [file, setFile] = useState(false);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInput(e.target.value);
    if (!file) setFile(true);
  };

  const getFile = async () => {
    if (file) {
      try {
        await writeToFile(input, section, sectionKey, index);
      } catch (err) {
        console.error("Error writing to file:", err);
      } finally {
        setFile(false);
      }
    }
  };

  useEffect(() => {
    setInput(value);
  }, []);

  return (
    <div className={`${sectionKey === "Email" && "mb-[146px]  "}`}>
      <DashboardInput>
        <textarea
          placeholder="Type Heading here"
          className="bg-transparent focus:outline-none overflow-hidden w-full h-full resize-none p-1"
          value={input}
          onChange={handleChange}
          rows={1}
        />
        <button className="" onClick={getFile} disabled={!file}>
          <BiPencil
            size={20}
            className="hover:bg-white/20 active:bg-white/50 w-max h-max p-2 rounded-full flex justify-center items-center transition-all duration-300"
          />
        </button>
      </DashboardInput>
    </div>
  );
};

export default Inputs;
