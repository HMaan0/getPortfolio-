"use client";
import { useTextarea } from "../../hooks/useTextarea";
import TextareaUI from "./TextareaUI";
const Textarea = () => {
  const { prompt, loading, handlePrompt, submitPrompt } = useTextarea();

  return (
    <TextareaUI
      prompt={prompt}
      loading={loading}
      handlePrompt={handlePrompt}
      submitPrompt={submitPrompt}
      disable={!prompt.length}
      value=""
    ></TextareaUI>
  );
};

export default Textarea;
