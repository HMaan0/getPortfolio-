"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = ({ words }: { words: string[] }) => {
  const handleType = () => {};
  const handleDone = () => {};
  return (
    <span style={{ color: "green", fontWeight: "bold" }}>
      <Typewriter
        words={words}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onLoopDone={handleDone}
        onType={handleType}
      />
    </span>
  );
};

export default TypeWriter;
