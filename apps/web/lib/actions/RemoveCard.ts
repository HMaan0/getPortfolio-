"use server";
import { Project, Work } from "../../project/types/types";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { addEmptyCard } from "./AddCard";
const filePath = path.join(process.cwd(), "./data.ts");

export async function removeCard(
  sectionData: Work[] | Project[],
  section: string
) {
  let rawData = await readFile(filePath, "utf-8");
  let start = rawData.indexOf("{");
  let end = rawData.lastIndexOf("}") + 1;
  let dataObjectCode = rawData.slice(start, end);
  let obj = sectionData[0];
  let data = eval(`(${dataObjectCode})`);
  if (data[section].length < 2) {
    await addEmptyCard(sectionData, section);

    let rawData = await readFile(filePath, "utf-8");
    let start = rawData.indexOf("{");
    let end = rawData.lastIndexOf("}") + 1;
    let dataObjectCode = rawData.slice(start, end);
    let data1 = eval(`(${dataObjectCode})`);

    data1[section].shift();

    const updatedDataCode = `const data = ${JSON.stringify(data1, null, 2)};\n\nexport default data;`;
    await writeFile(filePath, updatedDataCode, "utf-8");
  } else {
    data[section].pop(obj);
    const updatedDataCode = `const data = ${JSON.stringify(data, null, 2)};\n\nexport default data;`;
    await writeFile(filePath, updatedDataCode, "utf-8");
  }
}
