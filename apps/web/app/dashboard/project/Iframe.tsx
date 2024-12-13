"use client";

import { useRecoilValue } from "recoil";
import { webContainerInstance } from "../../../store/webContainer";
import { useState } from "react";

const Iframe = () => {
  const [url, setUrl] = useState("");
  const webContainer = useRecoilValue(webContainerInstance);
  webContainer?.on("server-ready", (port, url) => {
    setUrl(url);
  });

  return <>{url.length > 0 ? <iframe src={url}></iframe> : <>Loading...</>}</>;
};

export default Iframe;
