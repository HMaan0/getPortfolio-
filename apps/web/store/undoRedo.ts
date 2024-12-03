import { atom } from "recoil";
export type Stack = {
  data: string;
  fileCode: string;
}[];
export const undo = atom<Stack>({
  key: "undo",
  default: [],
});
