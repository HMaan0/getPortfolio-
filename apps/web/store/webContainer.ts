import { WebContainer } from "@webcontainer/api";
import { atom } from "recoil";

export const cloneComplete = atom({
  key: "cloneComplete",
  default: false,
});
export const getRoot = atom({
  key: "getRoot",
  default: false,
});
export const iFrameUrl = atom({
  key: "iFrameUrl",
  default: "",
});
export const webContainerInstance = atom<WebContainer | undefined>({
  key: "webContainerInstance",
  default: undefined,
});
export const toggle = atom({
  key: "toggle",
  default: false,
});
export const fileName = atom({
  key: "fileName",
  default: "",
});
