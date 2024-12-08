import { atom } from "recoil";

export const promptAtom = atom<string>({
  key: "prompt",
  default: "",
});

export const prePrompt = atom<string>({
  key: "prePrompt",
  default: "",
});
