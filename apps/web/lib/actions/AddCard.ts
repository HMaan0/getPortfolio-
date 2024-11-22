"use server";
import { Project, Work } from "../../project/types/types";
import { readFile, writeFile } from "fs/promises";
import path from "path";
const filePath = path.join(process.cwd(), "./data.ts");
const emptyObj: Work | Project = {};
export async function addEmptyCard(
  sectionData: Work[] | Project[],
  section: string
) {
  const rawData = await readFile(filePath, "utf-8");
  const start = rawData.indexOf("{");
  const end = rawData.lastIndexOf("}") + 1;
  const dataObjectCode = rawData.slice(start, end);

  const data = eval(`(${dataObjectCode})`);
  const obj = sectionData[0];
  for (const keys in obj) {
    emptyObj[keys] = "";
  }

  data[section].push(emptyObj);
  const updatedDataCode = `const data = ${JSON.stringify(data, null, 2)};\n\nexport default data;`;
  await writeFile(filePath, updatedDataCode, "utf-8");
}
