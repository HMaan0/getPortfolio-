"use server";
import { readFile, writeFile } from "fs/promises";
import OpenAI from "openai";

const api = process.env.AI_API;
const openai = new OpenAI({ apiKey: api });

export async function promptAi(prompt: string) {
  try {
    const promptWithNumber = prompt + ", prompt number 1";

    const content = await readFile("./fineTune.txt", "utf-8");

    const data = await callOpenAi(content, promptWithNumber);

    if (typeof data === "string") {
      const fileCode = await readFile(data, "utf-8");

      const changedCode = await callOpenAi(
        content,
        prompt + "\n" + fileCode + ", prompt number 2"
      );

      await writeFile(data, changedCode);

      return { data, fileCode };
    }
  } catch (error) {
    console.error("Error in promptAi function:", error);
  }
}

async function callOpenAi(content: string, promptWithNumber: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: content },
        { role: "user", content: promptWithNumber },
      ],
    });

    return completion.choices[0]?.message?.content ?? "No response content";
  } catch (error) {
    console.error("Error in callOpenAi function:", error);
    throw error;
  }
}
