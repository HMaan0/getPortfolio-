import { atom } from "recoil";

export const signin = atom<boolean>({
  key: "signin",
  default: true,
});

export const sessionError = atom<string | null>({
  key: "sessionError",
  default: null,
});
