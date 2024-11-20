"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = ({ words }: { words: string[] }) => {
  const handleType = (count: number) => {
    console.log(count);
  };
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
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
