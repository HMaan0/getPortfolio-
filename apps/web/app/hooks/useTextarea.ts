import { useState } from "react";
import { useRecoilState } from "recoil";
import { promptAi } from "../../lib/actions/PromptAi";
import { promptAtom } from "../../store/prompt";
import { undo } from "../../store/undoRedo";

export function useTextarea() {
  const [prompt, setPrompt] = useRecoilState(promptAtom);
  const [loading, setLoading] = useState(false);
  const [undoStack, setUndoStack] = useRecoilState(undo);
  function handlePrompt(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setPrompt(e.target.value);
  }

  async function submitPrompt() {
    if (prompt) {
      setLoading(true);
      const res = await promptAi(prompt);
      setPrompt("");
      if (res) {
        setLoading(false);
        setUndoStack([...undoStack, res]);
      }
    }
  }
  return { prompt, loading, handlePrompt, submitPrompt };
}
