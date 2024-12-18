"use client";
import { useState } from "react";
import Toggle from "./Toggle";
const Backgrounds = () => {
  const [selectedBackground, setSelectedBackground] = useState<string>("None");
  const backgroundType = ["None", "Gradient", "Eyes", "Grids"];
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mb-10 gap-4">
        <div className="flex gap-1 flex-wrap">
          {backgroundType.map((back) => (
            <Toggle
              key={back}
              option={back}
              selected={selectedBackground}
              onSelect={setSelectedBackground}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Backgrounds;
