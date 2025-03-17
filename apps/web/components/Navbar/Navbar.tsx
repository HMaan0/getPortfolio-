"use client";
import { MacNavbar } from "@repo/ui/MacNavbar";
import ProjectLink from "./ProjectLink";
import ScreenSize from "./ScreenSize";
import { DashboardButton } from "@repo/ui/DashboardButton";
import { useRecoilValue } from "recoil";
import { preview, screen } from "../../store/screen";
import { MacButton } from "@repo/ui/MacButton";
import { BiDownload } from "react-icons/bi";
import { iFrameUrl, webContainerInstance } from "../../store/webContainer";
import JSZip from "jszip";
const Navbar = () => {
  const screenSize = useRecoilValue(screen);
  const webContainer = useRecoilValue(webContainerInstance);
  const fullScreen = useRecoilValue(preview);
  const url = useRecoilValue(iFrameUrl);
  const downloadSrcCode = async () => {
    if (webContainer) {
      try {
        const zip = new JSZip();

        const readFolder = async (path: string) => {
          let folderContent = await webContainer.fs.readdir(path, "utf-8");
          folderContent = folderContent.filter(
            (item) =>
              item !== "node_modules" &&
              item !== ".next" &&
              item !== "public" &&
              item !== "favicon.ico"
          );

          for (const item of folderContent) {
            const itemPath = `${path}/${item}`;
            if (!item.includes(".")) {
              await readFolder(itemPath);
            } else {
              const fileData = await webContainer.fs.readFile(
                itemPath,
                "utf-8"
              );
              zip.file(itemPath, fileData);
            }
          }
        };

        await readFolder("vite-template");

        const zipContent = await zip.generateAsync({ type: "blob" });
        const blobUrl = URL.createObjectURL(zipContent);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = "source-code.zip";
        a.click();
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Error reading source code:", error);
      }
    }
  };

  return (
    <>
      {screenSize !== "desktop" ? (
        <div
          className={`transition-width duration-300 ${screenSize === "desktop" ? "w-full" : `${screenSize === "table" ? "w-[624px]" : `${screenSize === "mobile" ? "w-[390px]" : "w-[624px]"}`} `}`}
        >
          <MacNavbar className={`${fullScreen ? "" : "rounded-t-[36px]"}`}>
            <div className="flex items-center justify-center w-full ">
              <ScreenSize></ScreenSize>
            </div>
          </MacNavbar>
        </div>
      ) : (
        <MacNavbar className={`${fullScreen ? "" : "rounded-t-[36px]"}`}>
          <div className="hidden sm:flex w-full justify-start">
            <ProjectLink></ProjectLink>
            <div className="hidden lg:flex w-full justify-center ">
              <ScreenSize></ScreenSize>
            </div>
          </div>
          <div className="sm:hidden block">
            <MacButton />
          </div>
          <DashboardButton
            onClick={downloadSrcCode}
            disabled={url.length === 0}
            className={`${url.length === 0 && "cursor-not-allowed"}`}
          >
            <BiDownload /> Download
          </DashboardButton>
        </MacNavbar>
      )}
    </>
  );
};

export default Navbar;
