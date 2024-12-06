"use client";
import { RecoilRoot } from "recoil";
import Navbar from "../Navbar/Navbar";
import Workspace from "./Workspace";

const Dashboard = () => {
  return (
    <>
      <RecoilRoot>
        <div className="sm:w-full w-10/12 flex justify-center items-center">
          <Navbar></Navbar>
        </div>
        <Workspace />
      </RecoilRoot>
    </>
  );
};

export default Dashboard;
