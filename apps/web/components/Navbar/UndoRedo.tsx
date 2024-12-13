"use client";
import { Button } from "@repo/ui/Button";
import { BiRedo, BiUndo } from "react-icons/bi";
import { useRecoilState, useRecoilValue } from "recoil";
import { Stack, undo } from "../../store/undoRedo";
import { memo, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { webContainerInstance } from "../../store/webContainer";

const UndoRedo = () => {
  const [undoStack, setUndoStack] = useRecoilState(undo);
  const [loading, setLoading] = useState<{
    loading: boolean;
    button: string | null;
  }>({ loading: false, button: null });
  const [redoStack, setRedoStack] = useState<Stack>([]);
  const webContainer = useRecoilValue(webContainerInstance);
  async function handleUndo() {
    if (undoStack.length === 0) return "No changes were made";

    setLoading({ loading: true, button: "undo" });
    try {
      const lastAction = undoStack[undoStack.length - 1];
      const { fileName, fileCode } = lastAction || {};
      if (fileName && fileCode && webContainer) {
        const prevFileCode = await webContainer?.fs.readFile(fileName, "utf-8");
        setRedoStack([...redoStack, { fileName, fileCode: prevFileCode }]);
        await webContainer.fs.writeFile(fileName, fileCode);
        const newUndoStack = undoStack.slice(0, -1);
        setUndoStack(newUndoStack);
      }
    } catch (error) {
      console.error("Error performing undo:", error);
    } finally {
      setLoading({ loading: false, button: null });
    }
  }

  async function handleRedo() {
    if (redoStack.length === 0) return "No changes were made";
    setLoading({ loading: true, button: "redo" });
    try {
      const lastAction = redoStack[redoStack.length - 1];
      const { fileName, fileCode } = lastAction || {};
      if (fileName && fileCode && webContainer) {
        await webContainer?.fs.writeFile(fileName, fileCode);
        const prevFileCode = await webContainer?.fs.readFile(fileName, "utf-8");
        setUndoStack([...undoStack, { fileName, fileCode: prevFileCode }]);
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
      <Button
        onClick={handleUndo}
        disabled={undoStack[0]?.fileName.length === 0}
        title="undo"
      >
        {loading.loading && loading.button === "undo" ? (
          <AiOutlineLoading3Quarters className="animate-spin text-xl" />
        ) : (
          <BiUndo
            size={20}
            className={`${undoStack.length === 0 && "cursor-not-allowed"}`}
          />
        )}
      </Button>
      <Button onClick={handleRedo} title="redo">
        {loading.loading && loading.button === "redo" ? (
          <AiOutlineLoading3Quarters className="animate-spin text-xl" />
        ) : (
          <BiRedo
            size={20}
            className={`${redoStack.length === 0 && "cursor-not-allowed"}`}
          />
        )}
      </Button>
    </div>
  );
};

export default memo(UndoRedo);
