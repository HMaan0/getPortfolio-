"use client";
import Toggle from "./Toggle";
import { useState } from "react";

const AnimateStack = () => {
  const hoverEffect = ["None", "Shake", "Float"];
  const [selected, setSelected] = useState<string | null>("None");
  return (
    <>
      <div className="flex gap-1 justify-center flex-wrap mb-10">
        {hoverEffect.map((effect) => (
          <Toggle
            key={effect}
            option={effect}
            selected={selected}
            onSelect={setSelected}
          />
        ))}
      </div>

      <div className="h-[295px] mb-20">
        <iframe
          src="http://localhost:3000/techstack"
          className="overflow-hidden h-full rounded-lg w-full shadow-2xl shadow-emerald-500/[0.1] border-white/[0.2] border  "
          style={{
            width: "90%",
            height: "100%",
            transform: "scale(1.1)",
            transformOrigin: "0 0",
            border: "none",
            display: "block",
          }}
        ></iframe>
      </div>
    </>
  );
};

export default AnimateStack;
