import { atom } from "recoil";

export const signin = atom<boolean>({
  key: "signin",
  default: true,
});
