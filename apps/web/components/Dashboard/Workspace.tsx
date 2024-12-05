"use client";

import { useRecoilValue } from "recoil";
import { screen } from "../../store/screen";

const Workspace = () => {
  const screenSize = useRecoilValue(screen);
  return (
    <>
      <div
        className={`  transition-width duration-300 shadow-sm shadow-black custom-scroll overflow-y-auto h-full max-h-full relative  ${screenSize === "desktop" ? "sm:w-full w-10/12" : `${screenSize === "table" ? "w-[624px]" : `${screenSize === "mobile" ? "w-[390px]" : "w-[624px]"}`} `} dark:bg-black bg-white rounded-b-[36]`}
        style={{
          transform: "translateZ(0)",
          maxHeight: "calc(100vh - 20px)",
        }}
      >
        <iframe
          src="http://localhost:3000/admin"
          className="transition-all duration-1000 w-full h-full fixed"
          style={{
            width: "150%",
            height: "150%",
            transform: "scale(0.67)",
            transformOrigin: "0 0",
            border: "none",
          }}
        ></iframe>
      </div>
    </>
  );
};

export default Workspace;
