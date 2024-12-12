"use client";
import DashboardInput from "@repo/ui/DashboardDiv";
import { SetStateAction, useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { webContainerInstance } from "../../store/webContainer";

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
  const webContainer = useRecoilValue(webContainerInstance);
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInput(e.target.value);
    if (!file) setFile(true);
  };

  const getFile = async (
    value: string,
    section: string,
    sectionKey: string,
    index: number
  ) => {
    if (webContainer) {
      try {
        const rawData = await webContainer.fs.readFile(
          "my-app/data.ts",
          "utf-8"
        );
        const start = rawData.indexOf("{");
        const end = rawData.lastIndexOf("}") + 1;
        const dataObjectCode = rawData.slice(start, end);
        const data = eval(`(${dataObjectCode})`);
        if (section === "aboutData" && sectionKey === "skills") {
          const newSkills = input.split(",").map((skill) => skill.trim());
          if (Array.isArray(data[section][sectionKey])) {
            data[section][sectionKey] = [];
            data[section][sectionKey].push(...newSkills);
          }
        } else if (
          section in data &&
          sectionKey in data[section] &&
          section !== "Work"
        ) {
          data[section][sectionKey] = input;
        } else if (
          section.toLowerCase() === "work" ||
          section.toLocaleLowerCase() === "projectdata"
        ) {
          data[section][index][sectionKey] = input;
        } else {
          throw new Error(
            `Section "${section}" or sectionKey "${sectionKey}" not found in data.`
          );
        }

        const updatedDataCode = `const data = ${JSON.stringify(data, null, 2)};\n\nexport default data;`;
        await webContainer.fs.writeFile("my-app/data.ts", updatedDataCode);
        console.log(file);
        setFile(!file);
      } catch (err) {
        console.error("Error writing to file:", err);
      } finally {
        setFile(false);
      }
    }
  };

  useEffect(() => {
    setInput(value);
  }, [file]);

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
        <button
          className=""
          onClick={() => getFile(value, section, sectionKey, index)}
          disabled={!file}
        >
          <BiPencil className="hover:bg-white/20 active:bg-white/50 w-max h-max p-2 rounded-full flex justify-center items-center transition-all duration-300 text-lg sm:text-sm" />
        </button>
      </DashboardInput>
    </div>
  );
};

export default Inputs;
