"use client";
import DashboardInput from "@repo/ui/DashboardDiv";

import { SetStateAction, useEffect, useState } from "react";
import { writeToFile } from "../../lib/actions/WriteFile";

const Inputs = ({
  value,
  section,
  sectionKey,
}: {
  value: string;
  section: string;
  sectionKey: string;
}) => {
  const [input, setInput] = useState("");
  const [file, setFile] = useState(false);
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    async function getFile() {
      try {
        await writeToFile(input, section, sectionKey);
      } catch (err) {
        console.error("Error reading file:", err);
      }
    }

    if (file) {
      getFile();
    }
  }, [file]);

  return (
    <>
      <DashboardInput>
        <textarea
          placeholder="Type Heading here"
          className="bg-transparent focus:outline-none overflow-hidden w-full h-full resize-none p-1 "
          value={input.length ? input : value}
          onChange={handleChange}
          rows={1}
        />
      </DashboardInput>
      <button onClick={() => setFile(!file)} className="p-1 bg-red-500 w-min">
        Post
      </button>
    </>
  );
};

export default Inputs;
