"use client";
import { useRecoilValue } from "recoil";
import Navbar from "../Navbar/Navbar";
import Workspace from "./Workspace";
import { preview } from "../../store/screen";
import Input from "../Input/Input";

const Dashboard = () => {
  const fullScreen = useRecoilValue(preview);
  return (
    <div
      className={`bg-[#525252] w-full  h-full flex flex-col  items-center ${fullScreen ? "z-50 fixed" : "sm:p-5 p-3 relative"}`}
    >
      <>
        {fullScreen ? (
          <>
            <div
              className={`${fullScreen ? "h-full z-50 fixed w-full flex flex-col justify-center items-center" : "sm:w-full w-10/12  flex justify-center items-center"}  `}
            >
              <Navbar></Navbar>
              <Workspace />
            </div>
          </>
        ) : (
          <>
            <div
              className={`${fullScreen ? "h-full z-50 fixed w-full" : "sm:w-full w-10/12  flex justify-center items-center"}  `}
            >
              <Navbar></Navbar>
            </div>
            <Workspace />
          </>
        )}
      </>
      <Input />
    </div>
  );
};

export default Dashboard;
