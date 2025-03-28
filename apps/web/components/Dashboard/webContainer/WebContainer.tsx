"use client";
import React, { memo, useEffect, useRef, useState } from "react";
import { useWebContainers } from "../../../hooks/WebContainer";
import { FitAddon } from "@xterm/addon-fit";
import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cloneComplete, getRoot, iFrameUrl } from "../../../store/webContainer";

const WebContainer = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const webContainer = useWebContainers();
  const [terminalLogs, setTerminalLogs] = useState("");
  const [complete, setComplete] = useRecoilState(cloneComplete);
  const [root, setRoot] = useRecoilState(getRoot);
  const setUrl = useSetRecoilState(iFrameUrl);
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
            await input.write("npm i @harshmaan/vite-template \n");
          }, 4000);
        }

        // terminal.onData((data) => {
        //   input?.write(data);
        // });

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
      if (terminalLogs.includes("[?25h[?2004h") && root === false) {
        await inputWriter?.write(
          "cp -r node_modules/@harshmaan/vite-template . \n"
        );
        setTimeout(async () => {
          await inputWriter?.write("rm -rf node_modules && rm package.json \n");
        }, 1000);
        setTimeout(async () => {
          await inputWriter?.write("cd vite-template \n");
        }, 4000);
        setTimeout(async () => {
          await inputWriter?.write("npm i --force \n");
          setComplete(true);
        }, 8000);
        setRoot(true);
      }

      if (terminalLogs.includes("❯") && complete && root)
        await inputWriter?.write("npm run dev \n");
    }
    handleLogs();
  }, [terminalLogs]);

  webContainer?.on("server-ready", (port, url) => {
    setUrl(url);
  });

  return (
    <div
      className=" w-10/12 sm:w-full h-full rounded-b-[36px]"
      ref={terminalRef}
    ></div>
  );
};

export default memo(WebContainer);

function stripAnsiCodes(text: string): string {
  // eslint-disable-next-line no-control-regex
  return text.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, "");
}
