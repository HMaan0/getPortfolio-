"use client";
import React, { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { useWebContainers } from "../../app/hooks/WebContainer";
const CustomTerminal = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const webContainer = useWebContainers();

  useEffect(() => {
    const fitAddon = new FitAddon();
    const terminal = new Terminal({
      convertEol: true,
    });
    terminal.loadAddon(fitAddon);
    if (terminalRef.current) {
      terminal.open(terminalRef.current);
    }
    fitAddon.fit();
    async function main() {
      const installProcess = await webContainer?.spawn("npx", [
        "create-next-app@latest",
        "--example",
        "https://github.com/Harsh-deepsingh/Templates-",
        "my-app",
      ]);
    }
    main();
  }, []);
  return <div className="w-full h-full " ref={terminalRef}></div>;
};

export default CustomTerminal;
