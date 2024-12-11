"use client";
import React, { useEffect, useRef, useState } from "react";
import { useWebContainers } from "../hooks/WebContainer";
import { FitAddon } from "@xterm/addon-fit";
import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";
import { useRecoilState } from "recoil";
import { cloneComplete, getRoot } from "../../store/cloneComplete";

const Test = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const webContainer = useWebContainers();
  const [terminalLogs, setTerminalLogs] = useState("");
  const [complete, setComplete] = useRecoilState(cloneComplete);
  const [root, setRoot] = useRecoilState(getRoot);
  const [inputWriter, setInputWriter] = useState<
    WritableStreamDefaultWriter<string> | undefined
  >(undefined);

  useEffect(() => {
    const fitAddon = new FitAddon();
    const terminal = new Terminal({ convertEol: true });

    if (terminalRef.current) {
      terminal.open(terminalRef.current);
      fitAddon.fit();
    }

    terminal.loadAddon(fitAddon);

    async function initializeShell() {
      try {
        const shellProcess = await startShell(terminal);
        if (!shellProcess) {
          console.error("Failed to start shell process.");
        }
      } catch (error) {
        console.error("Error starting shell:", error);
      }
    }

    async function startShell(terminal: Terminal) {
      try {
        const shellProcess = await webContainer?.spawn("jsh", {
          terminal: {
            cols: terminal.cols,
            rows: terminal.rows,
          },
        });

        shellProcess?.output.pipeTo(
          new WritableStream({
            write(data) {
              const cleanData = stripAnsiCodes(data);
              setTerminalLogs(cleanData);
              terminal.write(data);
            },
          })
        );

        const input = shellProcess?.input.getWriter();
        setInputWriter(input);

        if (input) {
          setTimeout(async () => {
            await input.write(
              "npx create-next-app@latest --example https://github.com/Harsh-deepsingh/Templates- my-app \n"
            );
          }, 5000);
        }

        terminal.onData((data) => {
          input?.write(data);
        });

        return shellProcess;
      } catch (error) {
        console.error("Error starting shell process:", error);
        return null;
      }
    }

    initializeShell();

    const handleResize = () => {
      if (terminalRef.current) {
        fitAddon.fit();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      terminal.dispose();
    };
  }, [webContainer]);

  useEffect(() => {
    async function handleLogs() {
      if (terminalLogs.includes("Ok to proceed? (y)")) {
        setComplete(true);
        await inputWriter?.write("y\n");
      }

      if (terminalLogs.includes("❯") && complete === true && root === false) {
        await inputWriter?.write("cd my-app \n");
        setRoot(true);
      }
      if (terminalLogs.includes("❯") && complete && root)
        await inputWriter?.write("npm run dev \n");
    }
    handleLogs();
  }, [terminalLogs]);

  return <div className="w-10/12 sm:w-full h-full" ref={terminalRef}></div>;
};

export default Test;

function stripAnsiCodes(text: string): string {
  return text.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, "");
}
