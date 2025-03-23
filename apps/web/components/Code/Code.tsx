"use client";
import { SetStateAction, useEffect, useState } from "react";
import { fileName, webContainerInstance } from "../../store/webContainer";
import { useRecoilValue } from "recoil";
import Editor from "@monaco-editor/react";

const Code = () => {
  const webContainer = useRecoilValue(webContainerInstance);
  const [file, setFile] = useState<any>(null);
  //const [codeContent, setCodeContent] = useState("");
  const filePath = useRecoilValue(fileName);
  const [completePath, setCompletePath] = useState("vite-template/src/App.tsx");

  useEffect(() => {
    async function main() {
      if (webContainer) {
        let newPath = "vite-template/src/App.tsx";

        if (filePath.length > 0) {
          if (filePath.includes("vite-template/")) {
            newPath = filePath;
          } else if (filePath.includes("Background")) {
            newPath = "vite-template/" + "src/components/" + filePath;
          } else {
            if (filePath.includes("src")) {
              newPath = "vite-template/" + filePath;
            } else {
              newPath = "vite-template/" + "src/" + filePath;
            }
          }
        }

        setCompletePath(newPath);

        const fileContent = await webContainer.fs.readFile(newPath, "utf-8");
        setFile(fileContent);
      }
    }
    main();
  }, [filePath, webContainer]);

  async function changeCode(value: string | undefined) {
    if (value !== undefined) {
      await webContainer?.fs.writeFile(completePath, value);
    }
  }
  if (!file) return <div className="p-4">Loading file...</div>;

  return (
    <div className="bg-theme-button w-full h-full flex flex-col overflow-hidden">
      <div className="text-gray-400 border-b border-theme-border px-2 text-white/55 sticky top-0 z-10 bg-theme-button flex-shrink-0">
        {completePath}
      </div>
      <div className="overflow-y-auto overflow-x-auto h-full">
        <Editor
          height="100%"
          defaultLanguage="typescript"
          theme="vs-dark"
          value={file || ""}
          onChange={changeCode}
          options={{
            readOnly: false,
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            scrollBeyondLastLine: true,
          }}
          beforeMount={(monaco) => {
            monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
              {
                noSemanticValidation: true,
                noSyntaxValidation: true,
              }
            );
          }}
        />
      </div>
    </div>
  );
};

export default Code;
