import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { promptAtom } from "../store/prompt";
import { callOpenAi, promptAi } from "../lib/actions/PromptAi";
import { undo } from "../store/undoRedo";
import { webContainerInstance } from "../store/webContainer";

export function useTextarea() {
  const [prompt, setPrompt] = useRecoilState(promptAtom);
  const [loading, setLoading] = useState(false);
  const [undoStack, setUndoStack] = useRecoilState(undo);
  const webContainer = useRecoilValue(webContainerInstance);
  function handlePrompt(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setPrompt(e.target.value);
  }

  async function submitPrompt() {
    if (prompt) {
      setLoading(true);
      let fileName = await promptAi(prompt);
      fileName = `my-app/src${fileName?.trim()}`;
      if (webContainer && typeof fileName === "string") {
        const currentCode = await webContainer.fs.readFile(fileName, "utf-8");
        const changedCode = await callOpenAi(
          prompt + "\n" + currentCode + ", prompt number 2"
        );
        await webContainer.fs.writeFile(fileName, changedCode);

        setPrompt("");
        const res = { fileName, fileCode: currentCode };
        if (res) {
          setLoading(false);
          setUndoStack([...undoStack, res]);
        }
      }
    }
  }
  return { prompt, loading, handlePrompt, submitPrompt };
}
