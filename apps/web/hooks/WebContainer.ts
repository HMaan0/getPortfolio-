import { WebContainer } from "@webcontainer/api";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { webContainerInstance } from "../store/webContainer";
export function useWebContainers() {
  const [webContainer, setWebContainer] = useState<WebContainer>();
  const setWebContainerInstance = useSetRecoilState(webContainerInstance);
  useEffect(() => {
    async function bootContainer() {
      const webContainerInstant = await WebContainer.boot();
      setWebContainer(webContainerInstant);
    }
    bootContainer();
  }, []);
  setWebContainerInstance(webContainer);
  return webContainer;
}
