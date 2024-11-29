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
        <div>
          {selectedBackground !== "None" && (
            <div className="h-96">
              <iframe
                src={`http://localhost:3000/background/${selectedBackground.toLowerCase()}`}
                className="h-full rounded-lg w-full shadow-2xl shadow-emerald-500/[0.1] border-white/[0.2] border  "
                style={{
                  width: "260%",
                  height: "200%",
                  transform: "scale(0.40)",
                  transformOrigin: "0 0",
                  border: "none",
                  display: "block",
                }}
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Backgrounds;
