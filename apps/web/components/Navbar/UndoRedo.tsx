"use client";
import { Button } from "@repo/ui/Button";
import { BiRedo, BiUndo } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { undo } from "../../store/component";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { UndoFile } from "../../lib/actions/UndoFile";

const UndoRedo = () => {
  const [undoStack, setUndoStack] = useRecoilState(undo);
  const [loading, setLoading] = useState(false);

  async function handleUndo() {
    if (undoStack.length === 0) return "No changes were made";

    setLoading(true);
    try {
      const lastAction = undoStack[undoStack.length - 1];
      const { data: filename, fileCode } = lastAction || {};

      if (filename && fileCode) {
        await UndoFile(filename, fileCode);
        const newUndoStack = undoStack.slice(0, -1);
        setUndoStack(newUndoStack);
      }
    } catch (error) {
      console.error("Error performing undo:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex gap-2">
      <Button onClick={handleUndo} disabled={undoStack[0]?.data.length === 0}>
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin text-xl" />
        ) : (
          <BiUndo size={20} />
        )}
      </Button>
      <Button>
        <BiRedo size={20} />
      </Button>
    </div>
  );
};

export default UndoRedo;
