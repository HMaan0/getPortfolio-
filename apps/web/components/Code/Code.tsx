"use client";
import { useEffect, useState } from "react";
import { fileName, webContainerInstance } from "../../store/webContainer";
import { useRecoilValue } from "recoil";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const Code = () => {
  const webContainer = useRecoilValue(webContainerInstance);
  const [file, setFile] = useState<any>(null);
  const [language, setLanguage] = useState("json");
  const filePath = useRecoilValue(fileName);
  let completePath = "vite-template/";
  useEffect(() => {
    async function main() {
      if (webContainer) {
        if (filePath.includes(completePath)) {
          completePath = filePath;
        } else if (filePath.includes("Background")) {
          completePath = completePath + "src/components/" + filePath;
        } else {
          if (filePath.includes("src")) {
            completePath = completePath + filePath;
          } else {
            completePath = completePath + "src/" + filePath;
          }
        }
        const fileContent = await webContainer.fs.readFile(
          completePath,
          "utf-8"
        );
        setFile(fileContent);

        const extension = filePath.split(".").pop()?.toLowerCase();
        switch (extension) {
          case "js":
            setLanguage("javascript");
            break;
          case "jsx":
            setLanguage("jsx");
            break;
          case "ts":
            setLanguage("typescript");
            break;
          case "tsx":
            setLanguage("tsx");
            break;
          case "json":
            setLanguage("json");
            break;
          case "css":
            setLanguage("css");
            break;
          default:
            setLanguage("javascript");
        }
      }
    }
    main();
  }, [webContainer, filePath]);

  useEffect(() => {
    if (file) {
      Prism.highlightAll();
    }
  }, [file, language]);

  if (!file) return <div className="p-4">Loading file...</div>;

  return (
    <div className="bg-theme-button w-full h-full flex flex-col overflow-hidden">
      <div className="text-gray-400 border-b border-theme-border px-2 text-white/55 sticky top-0 z-10 bg-theme-button flex-shrink-0">
        {filePath}
      </div>
      <div className="overflow-y-auto overflow-x-auto h-full">
        <pre className="line-numbers m-0">
          <code className={`language-${language}`}>{file}</code>
        </pre>
      </div>
    </div>
  );
};

export default Code;
