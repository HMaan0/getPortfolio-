import { atom } from "recoil";

export const screen = atom<string>({
  key: "screen",
  default: "desktop",
});
