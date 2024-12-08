import { DashboardButton } from "@repo/ui/DashboardButton";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaArrowUpLong } from "react-icons/fa6";
import UndoRedo from "../Navbar/UndoRedo";
interface Textarea {
  prompt?: string;
  loading?: boolean;
  handlePrompt?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  submitPrompt: (() => void) | (() => Promise<void>);
  disable?: boolean;
  value?: string;
}
const TextareaUI = ({
  prompt,
  loading,
  handlePrompt,
  submitPrompt,
  disable,
  value,
}: Textarea) => {
  return (
    <>
      <div className="bg-theme-bar flex rounded-3xl">
        <textarea
          rows={2}
          value={prompt ? prompt : value}
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
                disabled={disable}
                onClick={submitPrompt}
                className={` ${disable === false ? "" : "cursor-not-allowed"}`}
              >
                <FaArrowUpLong size={21} />
              </DashboardButton>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TextareaUI;
