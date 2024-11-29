"use server";

import { readFile, writeFile } from "fs/promises";
import path from "path";
import { IconItem } from "../../store/component";

type techIcon = (
  | IconItem
  | {
      component: string;
      color: string;
    }
)[];
export async function WriteComponent(
  section: string,
  component: string,
  techIcon?: techIcon
) {
  try {
    if (section === "TechStack" && techIcon) {
      await componentFile(techIcon);
    } else {
      const filePath = path.join(process.cwd(), "./component.ts");
      const rawData = await readFile(filePath, "utf-8");
      const start = rawData.indexOf("{");
      const end = rawData.lastIndexOf("}") + 1;
      const dataObjectCode = rawData.slice(start, end);

      const data = eval(`(${dataObjectCode})`);
      let sectionL = section.toLocaleLowerCase();
      let componentL = component.toLocaleLowerCase();

      if (!data[sectionL]) {
        throw new Error(`Section "${sectionL}" not found in the data.`);
      }
      Object.keys(data[sectionL]).forEach((key) => {
        data[sectionL][key] = key === componentL;
      });

      const updatedData = `${rawData.slice(0, start)}${JSON.stringify(
        data,
        null,
        2
      )}${rawData.slice(end)}`;

      await writeFile(filePath, updatedData, "utf-8");
    }
  } catch (error) {
    console.error("Error updating component:", error);
  }
}

async function componentFile(techIcon: techIcon) {
  const filePath = path.join(process.cwd(), "./project/icon.ts");
  const rawData = await readFile(filePath, "utf-8");
  const start = rawData.indexOf("[");
  const end = rawData.lastIndexOf("]") + 1;
  const dataObjectCode = rawData.slice(start, end);
  const string = JSON.stringify(techIcon);

  const data = eval(`(${dataObjectCode})`);
  const evalString = eval(`(${string})`);

  const newData = [...data, ...evalString];

  const updatedRawData =
    rawData.slice(0, start) +
    JSON.stringify(newData, null, 2) +
    rawData.slice(end);

  await writeFile(filePath, updatedRawData, "utf-8");
}
