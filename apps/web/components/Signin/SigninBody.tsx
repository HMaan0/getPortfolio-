"use client";
import { RecoilRoot } from "recoil";
import Email from "./Form";
import Footer from "./Footer";
import Google from "./Google";
import Heading from "./Heading";

const SigninBody = () => {
  return (
    <>
      <RecoilRoot>
        <Heading />
        <Google />
        <div className="w-full flex flex-row gap-2.5 justify-center items-center">
          <span className="p-1 border-b border-gray-500 w-full ml-10"></span>
          <span className="text-gray-500">or</span>
          <span className="p-1 border-b border-gray-500 w-full mr-10"></span>
        </div>
        <Email />
        <Footer />
      </RecoilRoot>
    </>
  );
};

export default SigninBody;
