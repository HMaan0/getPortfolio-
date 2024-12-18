import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <Image src="logo.svg" width={50} height={50} alt="Get Portfolio" />
        <p className="font-bold sm:text-xl md:text-2xl bg-gradient-to-tr from-gray-200 to-gray-700 bg-clip-text text-transparent">
          Get Portfolio
        </p>
      </div>
    </>
  );
};

export default LeftSection;
