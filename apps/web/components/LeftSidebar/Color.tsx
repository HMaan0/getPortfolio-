"use client";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Toggle from "./Toggle";
import WriteIcon from "./WriteIcon";
import { writeTailwind } from "../../lib/actions/WriteTailwind";

const colorFor = ["Background", "Card", "Gradient", "Button"];
const modes = ["Light", "Dark"];
const Color = () => {
  const [color, setColor] = useState("#111111");
  const [component, setComponent] = useState<string | null>("Background");
  const [theme, setTheme] = useState<string | null>("Light");

  async function writeColor() {
    await writeTailwind(component, theme, color);
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
