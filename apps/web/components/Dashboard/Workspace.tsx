"use client";

import { useRecoilValue } from "recoil";
import { preview, screen } from "../../store/screen";
import { iFrameUrl } from "../../store/webContainer";
import WebContainer from "./webContainer/WebContainer";
import { useEffect, useState } from "react";
import LoadingText from "./LoadingText";

const Workspace = () => {
  const screenSize = useRecoilValue(screen);
  const url = useRecoilValue(iFrameUrl);
  const fullScreen = useRecoilValue(preview);
  const [showLoadingText, setShowLoadingText] = useState(false);
  useEffect(() => {
    if (url.length > 0) {
      setShowLoadingText(true);

      const loadingTimer = setTimeout(() => {
        setShowLoadingText(false);
      }, 45000);
      return () => {
        clearTimeout(loadingTimer);
      };
    } else {
      setShowLoadingText(false);
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
