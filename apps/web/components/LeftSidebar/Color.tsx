"use client";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Toggle from "./Toggle";
import WriteIcon from "./WriteIcon";
import { useRecoilValue } from "recoil";
import { webContainerInstance } from "../../store/webContainer";

const colorFor = ["Background", "Card", "Gradient", "Button"];
const modes = ["Light", "Dark"];
const Color = () => {
  const webContainer = useRecoilValue(webContainerInstance);

  const [color, setColor] = useState("#111111");
  const [component, setComponent] = useState<string | null>("Background");
  const [theme, setTheme] = useState<string | null>("Light");

  async function writeColor() {
    let obj: string;
    let updatedRawData: string;

    if (webContainer) {
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
      const rawData = await webContainer.fs.readFile(
        "my-app/tailwind.config.ts",
        "utf-8"
      );
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
      await webContainer.fs.writeFile(
        "my-app/tailwind.config.ts",
        updatedRawData
      );
    }
  }

  return (
    <div className=" w-full flex flex-col justify-center items-center mb-10 gap-4">
      <div className="flex gap-1  flex-wrap">
        {colorFor.map((ele) => (
          <Toggle
            key={ele.toString()}
            option={ele}
            selected={component}
            onSelect={setComponent}
          />
        ))}
      </div>
      <HexColorPicker color={color} onChange={setColor} />
      <div className="flex gap-1">
        {modes.map((mode) => (
          <Toggle
            key={mode.toString()}
            option={mode}
            selected={theme}
            onSelect={setTheme}
          ></Toggle>
        ))}
        <WriteIcon onClick={writeColor}></WriteIcon>
      </div>
    </div>
  );
};

export default Color;
