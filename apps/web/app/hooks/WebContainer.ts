import { WebContainer } from "@webcontainer/api";
import { useEffect, useState } from "react";
export function useWebContainers() {
  const [webContainer, setWebContainer] = useState<WebContainer>();
  useEffect(() => {
    async function bootContainer() {
      const webContainerInstant = await WebContainer.boot();
      setWebContainer(webContainerInstant);
    }
    bootContainer();
  }, []);

  return webContainer;
}
