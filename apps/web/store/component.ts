import { IconType } from "react-icons";
import { atom } from "recoil";

export interface IconItem {
  component: IconType;
  color: string;
}
export const sectionComponent = atom({
  key: "component",
  default: "",
});
export const techStack = atom<IconItem[]>({
  key: "techStack",
  default: [],
});
export const searchQuery = atom<string>({
  key: "searchQuery",
  default: "",
});

export const undo = atom<{ data: string; fileCode: string }[]>({
  key: "undo",
  default: [],
});
