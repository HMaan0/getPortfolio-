import { atom } from "recoil";
export type Stack = {
  fileName: string;
  fileCode: string;
}[];
export const undo = atom<Stack>({
  key: "undo",
  default: [],
});
