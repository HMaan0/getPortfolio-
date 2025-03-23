"use client";
import DashboardInput from "@repo/ui/DashboardDiv";
import { PiFrameCornersLight } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";
import { useRecoilState, useRecoilValue } from "recoil";
import { code } from "../../store/screen";
import { iFrameUrl } from "../../store/webContainer";
const CodeAndPreview = () => {
  const url = useRecoilValue(iFrameUrl);
  const [CodeAndPreview, setCodeAndPreview] = useRecoilState(code);
  return (
    <>
      <div className="flex gap-2">
        <DashboardInput>
          <div className="flex justify-center items-center gap-2 ">
            <button
              onClick={() => setCodeAndPreview("preview")}
              className={`flex justify-center items-center gap-2 text-lg transition-colors duration-200 hover:bg-white/30 rounded-full px-2 ${CodeAndPreview === "preview" ? "bg-white/15" : ""} ${url.length === 0 ? "cursor-not-allowed" : " "}`}
              disabled={url.length === 0}
            >
              <PiFrameCornersLight /> Preview
            </button>
            <button
              onClick={() => setCodeAndPreview("code")}
              className={`flex justify-center items-center gap-2 text-lg transition-colors duration-200 hover:bg-white/30 rounded-full px-2 ${CodeAndPreview === "code" ? "bg-white/15" : ""} ${url.length === 0 ? "cursor-not-allowed" : " "}`}
              disabled={url.length === 0}
            >
              <VscVscode /> Code
            </button>
          </div>
        </DashboardInput>
      </div>
    </>
  );
};

export default CodeAndPreview;
