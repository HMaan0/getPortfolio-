"use server";
import { readFile, writeFile } from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "./data.ts");

export async function writeToFile(
  newValue: string,
  section: string,
  key: string,
  index: number
) {
  try {
    const rawData = await readFile(filePath, "utf-8");
    const start = rawData.indexOf("{");
    const end = rawData.lastIndexOf("}") + 1;
    const dataObjectCode = rawData.slice(start, end);

    const data = eval(`(${dataObjectCode})`);
    if (section === "aboutData" && key === "skills") {
      const newSkills = newValue.split(",").map((skill) => skill.trim());
      if (Array.isArray(data[section][key])) {
        data[section][key] = [];
        data[section][key].push(...newSkills);
      }
    } else if (section in data && key in data[section] && section !== "Work") {
      data[section][key] = newValue;
    } else if (
      section.toLowerCase() === "work" ||
      section.toLocaleLowerCase() === "projectdata"
    ) {
      data[section][index][key] = newValue;
    } else {
      throw new Error(
        `Section "${section}" or key "${key}" not found in data.`
      );
    }

    const updatedDataCode = `const data = ${JSON.stringify(data, null, 2)};\n\nexport default data;`;

    await writeFile(filePath, updatedDataCode, "utf-8");
    console.log(`Updated ${key} in section ${section} with value: ${newValue}`);
  } catch (error) {
    console.error("Error updating file:", error);
  }
}
