"use server";
import JSZip from "jszip";

export async function downloadCode(
  itemPath: string,
  fileData: string,
  isLast: boolean
) {
  try {
    const zip = new JSZip();
    zip.file(itemPath, fileData);
    if (isLast) {
      const content = await zip.generateAsync({ type: "nodebuffer" });
      return content;
    }
  } catch (error) {
    return error;
  }
}
