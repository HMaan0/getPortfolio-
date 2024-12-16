"use server";
import JSZip from "jszip";

export async function downloadCode(
  itemPath: string,
  fileData: string,
  isLast: boolean
) {
  try {
    console.log(`File: ${itemPath}`);

    const zip = new JSZip();
    zip.file(itemPath, fileData);
    console.log("is Last in the backend" + isLast);

    if (isLast) {
      console.log(isLast);

      console.log("This is last");

      const content = await zip.generateAsync({ type: "nodebuffer" });
      console.log(content);

      return content;
    }
  } catch (error) {
    return error;
  }
}
