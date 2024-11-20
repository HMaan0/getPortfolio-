import React from "react";

const Iframe = ({ link }: { link: string }) => {
  return (
    <div className=" w-full h-full ">
      <iframe
        src={link}
        title="project"
        className="rounded-3xl transition-all duration-1000 w-full h-full aspect-auto"
        style={{
          width: "200%",
          height: "200%",
          transform: "scale(0.5)",
          transformOrigin: "0 0",
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default Iframe;
