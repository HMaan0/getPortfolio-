"use client";
import { Button } from "@repo/ui/Button";
import { BiRedo, BiUndo } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { Stack, undo } from "../../store/undoRedo";
import { memo, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { writefile } from "../../lib/actions/UndoRedoWriteFile";
import { readfile } from "../../lib/actions/UndoRedoReadFile";

const UndoRedo = () => {
  const [undoStack, setUndoStack] = useRecoilState(undo);
  const [loading, setLoading] = useState<{
    loading: boolean;
    button: string | null;
  }>({ loading: false, button: null });
  const [redoStack, setRedoStack] = useState<Stack>([]);
  async function handleUndo() {
    if (undoStack.length === 0) return "No changes were made";

    setLoading({ loading: true, button: "undo" });
    try {
      const lastAction = undoStack[undoStack.length - 1];
      const { data: filename, fileCode } = lastAction || {};
      if (filename && fileCode) {
        const prevFileCode = await readfile(filename);
        setRedoStack([
          ...redoStack,
          { data: filename, fileCode: prevFileCode },
        ]);
        await writefile(filename, fileCode);
        const newUndoStack = undoStack.slice(0, -1);
        setUndoStack(newUndoStack);
      }
    } catch (error) {
      console.error("Error performing undo:", error);
    } finally {
      setLoading({ loading: false, button: null });
    }
  }
  console.log(undoStack);
  console.log(redoStack);

  async function handleRedo() {
    if (redoStack.length === 0) return "No changes were made";
    setLoading({ loading: true, button: "redo" });
    try {
      const lastAction = redoStack[redoStack.length - 1];
      const { data: filename, fileCode } = lastAction || {};
      if (filename && fileCode) {
        await writefile(filename, fileCode);

        const prevFileCode = await readfile(filename);
        setUndoStack([
          ...undoStack,
          { data: filename, fileCode: prevFileCode },
        ]);
        const newRedoStack = redoStack.slice(0, -1);
        setRedoStack(newRedoStack);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading({ loading: false, button: null });
    }
  }

  return (
    <div className="flex gap-2">
      <Button onClick={handleUndo} disabled={undoStack[0]?.data.length === 0}>
        {loading.loading && loading.button === "undo" ? (
          <AiOutlineLoading3Quarters className="animate-spin text-xl" />
        ) : (
          <BiUndo size={20} />
        )}
      </Button>
      <Button onClick={handleRedo}>
        {loading.loading && loading.button === "redo" ? (
          <AiOutlineLoading3Quarters className="animate-spin text-xl" />
        ) : (
          <BiRedo size={20} />
        )}
      </Button>
    </div>
  );
};

export default memo(UndoRedo);
