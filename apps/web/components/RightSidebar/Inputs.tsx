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
  index?: number;
}) => {
  const [input, setInput] = useState<string>(value);
  const [isEdited, setIsEdited] = useState(false);
  const webContainer = useRecoilValue(webContainerInstance);

  // Update local state when prop changes
  useEffect(() => {
    setInput(value);
  }, [value]);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    const newValue = e.target.value as string;
    setInput(newValue);
    setIsEdited(true);
  };

  const saveChanges = async () => {
    if (!webContainer || !isEdited) return;

    try {
      const rawData = await webContainer.fs.readFile(
        "vite-template/data.ts",
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
      } else if (section === "Hero" && sectionKey === "words") {
        const typeWriter = input.split(",").map((skill) => skill.trim());
        data[section][sectionKey] = [];
        data[section][sectionKey].push(...typeWriter);
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
        if (index !== undefined) {
          data[section][index][sectionKey] = input;
        }
      } else {
        throw new Error(
          `Section "${section}" or sectionKey "${sectionKey}" not found in data.`
        );
      }

      const updatedDataCode = `const data = ${JSON.stringify(data, null, 2)};\n\nexport default data;`;
      await webContainer.fs.writeFile("vite-template/data.ts", updatedDataCode);

      setIsEdited(false);
    } catch (err) {
      console.error("Error writing to file:", err);
    }
  };

  return (
    <div className={`${sectionKey === "Email" && "mb-[146px]"}`}>
      <DashboardInput>
        <textarea
          placeholder="Type Heading here"
          className="bg-transparent focus:outline-none overflow-hidden w-full h-full resize-none p-1 text-lg font-medium"
          value={input}
          onChange={handleChange}
          rows={1}
        />

        <button
          onClick={saveChanges}
          disabled={!isEdited}
          className={`${!isEdited ? "opacity-50" : "opacity-100"}`}
        >
          <BiPencil
            size={25}
            className="hover:bg-white/20 active:bg-white/50 w-max h-max p-2 rounded-full flex justify-center items-center transition-all duration-300 text-lg sm:text-sm"
          />
        </button>
      </DashboardInput>
    </div>
  );
};

export default Inputs;
