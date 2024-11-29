"use client";
import { DashboardButton } from "@repo/ui/DashboardButton";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { promptAtom } from "../../store/prompt";
import { promptAi } from "../../lib/actions/PromptAi";

const Textarea = () => {
  const [prompt, setPrompt] = useRecoilState(promptAtom);

  function handlePrompt(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setPrompt(e.target.value);
  }

  async function submitPrompt() {
    if (prompt) {
      await promptAi(prompt);
      setPrompt("");
    }
  }

  return (
    <div className="bg-theme-bar flex rounded-3xl">
      <textarea
        rows={2}
        value={prompt} // Bind the textarea value to the Recoil state
        placeholder="Message AI"
        className="resize-none w-full p-4 focus:outline-none bg-transparent overflow-hidden"
        onChange={handlePrompt}
      />
      <div className="mx-2 my-3 flex items-end">
        <DashboardButton
          disabled={!prompt?.length}
          onClick={submitPrompt}
          className={`${prompt?.length ? "" : "cursor-not-allowed"}`}
        >
          <FaArrowUpLong />
        </DashboardButton>
      </div>
    </div>
  );
};

export default Textarea;
