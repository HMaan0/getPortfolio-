"use server";
import { readFile, writeFile } from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "./tailwind.config.js");
let updatedRawData: string;

function extractColors(rawData: string | string[]) {
  const start = rawData.indexOf("colors:");
  if (start === -1) {
    throw new Error("Colors object not found in configuration file.");
  }

  let bracketCount = 0;
  let end = start;

  for (let i = start; i < rawData.length; i++) {
    if (rawData[i] === "{") bracketCount++;
    if (rawData[i] === "}") bracketCount--;

    if (bracketCount === 0 && rawData[i] === "}") {
      end = i + 1;
      break;
    }
  }

  const colorsBlock = rawData.slice(start, end);
  return colorsBlock;
}

let obj: string;
export async function writeTailwind(
  component: string | null,
  theme: string | null,
  color: string
) {
  try {
    if (component === "Background") {
      if (theme === "Light") {
        obj = "theme_bg_light";
      } else {
        obj = "theme_bg_dark";
      }
    } else if (component === "Card") {
      theme === "Light" ? (obj = "primary_light") : (obj = "primary_dark");
    } else if (component === "Gradient") {
      theme ? (obj = "theme_gradient") : (obj = "");
    } else if (component === "Button") {
      obj = "theme_secondary";
    } else {
      return { message: "Error component cannot be null" };
    }

    const rawData = await readFile(filePath, "utf-8");
    const colorsBlock = extractColors(rawData);

    const colors = new Function(`return { ${colorsBlock} }`)().colors;

    colors[obj] = color;

    const updatedColorsBlock = JSON.stringify(colors, null, 2).replace(
      /^{|}$/g,
      ""
    );

    if (Array.isArray(colorsBlock)) {
      updatedRawData = rawData.replace(
        colorsBlock.toString(),
        `colors: {\n${updatedColorsBlock}\n}`
      );
    } else {
      updatedRawData = rawData.replace(
        colorsBlock,
        `colors: {\n${updatedColorsBlock}\n}`
      );
    }

    await writeFile(filePath, updatedRawData, "utf-8");
    return colors;
  } catch (error) {
    console.error(
      "Error reading or processing the Tailwind configuration file:",
      error
    );
    throw error;
  }
}
