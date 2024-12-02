"use server";
import { writeFile } from "fs/promises";

export async function UndoFile(filename: string, fileCode: string) {
  try {
    await writeFile(filename, fileCode, "utf-8");
    return "undo completed";
  } catch (error) {
    return error;
  }
}
