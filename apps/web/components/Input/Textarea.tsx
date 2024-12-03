"use client";
import { DashboardButton } from "@repo/ui/DashboardButton";
import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { promptAtom } from "../../store/prompt";
import { promptAi } from "../../lib/actions/PromptAi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { undo } from "../../store/undoRedo";
import UndoRedo from "../Navbar/UndoRedo";
const Textarea = () => {
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

  return (
    <div className="bg-theme-bar flex rounded-3xl">
      <textarea
        rows={2}
        value={prompt}
        placeholder="Message AI"
        className="resize-none w-full p-4 focus:outline-none bg-transparent overflow-hidden"
        onChange={handlePrompt}
      />
      <div className="mx-2 my-3 flex items-end gap-7">
        <UndoRedo></UndoRedo>

        {loading ? (
          <>
            <DashboardButton>
              <AiOutlineLoading3Quarters className="animate-spin text-xl" />
            </DashboardButton>
          </>
        ) : (
          <>
            <DashboardButton
              disabled={!prompt?.length}
              onClick={submitPrompt}
              className={` ${prompt?.length ? "" : "cursor-not-allowed"}`}
            >
              <FaArrowUpLong size={21} />
            </DashboardButton>
          </>
        )}
      </div>
    </div>
  );
};

export default Textarea;
