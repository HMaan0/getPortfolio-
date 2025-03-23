"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import { preview, screen } from "../../store/screen";
import { iFrameUrl } from "../../store/webContainer";
import WebContainer from "./webContainer/WebContainer";
import { useEffect } from "react";
import LoadingText from "./LoadingText";
import { showLoading } from "../../store/showLoading";
import { code } from "../../store/screen";
import Editor from "../Code/Editor";
const Workspace = () => {
  const screenSize = useRecoilValue(screen);
  const url = useRecoilValue(iFrameUrl);
  const fullScreen = useRecoilValue(preview);
  const [showLoadingText, setShowLoadingText] = useRecoilState(showLoading);
  const [codeAndPreview] = useRecoilValue(code);
  useEffect(() => {
    if (url.length > 0) {
      setShowLoadingText(false);
    } else {
      setShowLoadingText(true);
    }
    return;
  }, [url]);

  return (
    <>
      {url.length > 0 ? (
        <>
          <div
            className={`  transition-width duration-300 shadow-sm shadow-black custom-scroll overflow-y-auto h-full max-h-full relative  ${screenSize === "desktop" ? "sm:w-full w-10/12" : `${screenSize === "table" ? "w-[624px]" : `${screenSize === "mobile" ? "w-[390px]" : "w-[624px]"}`} `} dark:bg-black bg-white ${fullScreen ? "" : "rounded-b-[36]"} `}
            style={{
              transform: "translateZ(0)",
              maxHeight: "calc(100vh - 20px)",
            }}
          >
            {showLoadingText && (
              <>
                <LoadingText />
              </>
            )}
            {codeAndPreview === "c" ? (
              <Editor />
            ) : (
              <>
                <iframe
                  src={url}
                  className="transition-all duration-1000 w-full h-full fixed"
                  style={{
                    width: "150%",
                    height: "150%",
                    transform: "scale(0.67)",
                    transformOrigin: "0 0",
                    border: "none",
                  }}
                ></iframe>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <WebContainer />
        </>
      )}
    </>
  );
};

export default Workspace;
