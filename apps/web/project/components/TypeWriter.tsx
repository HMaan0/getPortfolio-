"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = ({ words }: { words: string[] }) => {
  const handleType = () => {};
  const handleDone = () => {};
  return (
    <span className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold">
      <Typewriter
        words={words}
        loop={false}
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
