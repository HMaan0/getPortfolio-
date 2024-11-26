import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Toggle from "./Toggle";

const colorFor = ["Background", "Card", "Button", "Text"];
const modes = ["light", "Dark"];
const Color = () => {
  const [color, setColor] = useState("#111111");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className=" w-full flex flex-col justify-center items-center mb-10 gap-4">
      <div className="flex gap-1  flex-wrap">
        {colorFor.map((ele) => (
          <Toggle
            key={ele}
            option={ele}
            selected={selected}
            onSelect={setSelected}
          />
        ))}
      </div>
      <HexColorPicker color={color} onChange={setColor} />
      <div className="flex gap-1">
        {modes.map((mode) => (
          <>
            <Toggle
              key={mode}
              option={mode}
              selected={selected}
              onSelect={setSelected}
            ></Toggle>
          </>
        ))}
      </div>
    </div>
  );
};

export default Color;
