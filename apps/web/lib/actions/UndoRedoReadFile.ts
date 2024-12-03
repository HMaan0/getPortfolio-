"use server";

import { readFile } from "fs/promises";

export async function readfile(filename: string) {
  try {
    const fileCode = await readFile(filename, "utf-8");

    return fileCode;
  } catch (error) {
    return `${error}`;
  }
}
