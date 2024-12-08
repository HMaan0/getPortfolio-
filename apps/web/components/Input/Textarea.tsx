"use client";
import { useTextarea } from "../../app/hooks/useTextarea";
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
    ></TextareaUI>
  );
};

export default Textarea;
