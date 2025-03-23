import { atom } from "recoil";

export const screen = atom<string>({
  key: "screen",
  default: "desktop",
});

export const preview = atom({
  key: "preview",
  default: false,
});

export const code = atom({
  key: "code",
  default: "preview",
});
