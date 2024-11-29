import { atom } from "recoil";

export const promptAtom = atom<string>({
  key: "prompt",
  default: "",
});
