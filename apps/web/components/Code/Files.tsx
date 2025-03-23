"use client";
import React, { useEffect, useState } from "react";
import { CiFileOn } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { LuFolders } from "react-icons/lu";
import { fileName, webContainerInstance } from "../../store/webContainer";
import { useRecoilState, useRecoilValue } from "recoil";

const Files = () => {
  const webContainer = useRecoilValue(webContainerInstance);
  const [fileStructure, setFileStructure] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useRecoilState(fileName);
  console.log(selectedFile);
  let root = "/vite-template";

  useEffect(() => {
    async function getStructure(dir: string) {
      const data = await webContainer?.fs.readdir(dir, {
        withFileTypes: true,
      });

      if (!data) return null;

      const folderTree: any[] = [];
      await Promise.all(
        data.map(async (type) => {
          if (type.isFile()) {
            folderTree.push(type.name);
          } else if (type.isDirectory()) {
            if (["node_modules", "public", "assets"].includes(type.name))
              return;

            const subDir = await getStructure(`${dir}/${type.name}`);
            folderTree.push({ [type.name]: subDir });
          }
        })
      );

      return folderTree;
    }

    const fetchStructure = async () => {
      const folderTree = await getStructure(root);
      setFileStructure(folderTree);
    };

    fetchStructure();
  }, []);

  const FileTree = ({ item, depth = 0, folderName }: any) => {
    const [isOpen, setIsOpen] = useState(true);

    if (typeof item === "string") {
      return (
        <button
          className="px-1 flex justify-start items-center gap-1 hover:bg-white/35 hover:text-white w-full"
          onClick={() => setSelectedFile(`${folderName}/${item}`)}
        >
          <CiFileOn /> {item}
        </button>
      );
    }
    return Object.entries(item).map(([folderName, content]) => {
      if (!isNaN(Number(folderName))) {
        return (
          <FileTree
            key={`item-${depth}-${folderName}`}
            item={content}
            depth={depth}
            folderName={folderName}
          />
        );
      }

      return (
        <div key={`folder-${depth}-${folderName}`}>
          <p
            className="px-1 flex justify-start items-end gap-1 hover:bg-white/35 hover:text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />} {folderName}
          </p>
          {isOpen && (
            <div className="flex flex-col ml-2">
              {Array.isArray(content) ? (
                content.map((item, id) => (
                  <FileTree
                    key={`content-${depth}-${folderName}-${id}`}
                    item={item}
                    depth={depth + 1}
                    folderName={folderName}
                  />
                ))
              ) : (
                <FileTree
                  item={content}
                  depth={depth + 1}
                  folderName={folderName}
                />
              )}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex h-full  lg:w-2/12 md:w-3/12 sm:w-4/12 w-4/12 bg-theme-button text-white/55 flex-shrink-0 overflow-hidden">
      <div className="flex flex-col w-full h-full justify-start items-start">
        <div className="flex justify-center items-center gap-1 w-full h-min border-b border-r border-theme-border sticky top-0 z-10 bg-theme-button">
          <LuFolders /> <p>Files</p>
        </div>
        <div className="flex flex-col overflow-y-auto w-full h-full overflow-x-hidden bg-theme-button scrollbar-hide">
          {fileStructure?.map((item: any, index: any) => (
            <FileTree
              key={`root-${index}`}
              item={item}
              folderName={"/vite-template"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Files;
