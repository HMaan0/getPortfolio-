import React from "react";
import { BiPencil } from "react-icons/bi";

const WriteIcon = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      <button className="" onClick={onClick}>
        <BiPencil
          size={20}
          className="hover:bg-white/20 active:bg-white/50 w-max h-max p-2 rounded-full flex justify-center items-center transition-all duration-300"
        />
      </button>
    </>
  );
};

export default WriteIcon;
