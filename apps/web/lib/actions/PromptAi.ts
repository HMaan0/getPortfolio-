"use server";
import { readFile } from "fs/promises";
import OpenAI from "openai";

const api = process.env.AI_API;
const openai = new OpenAI({ apiKey: api });

export async function promptAi(prompt: string) {
  try {
    const promptWithNumber = prompt + ", prompt number 1";
    const fileName = await callOpenAi(promptWithNumber);
    return fileName;
  } catch (error) {
    console.error("Error in promptAi function:", error);
  }
}

export async function callOpenAi(promptWithNumber: string) {
  const content = await readFile("./fineTune.txt", "utf-8");
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
