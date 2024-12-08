"use client";
import React from "react";
import TextareaUI from "../../Input/TextareaUI";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { prePrompt } from "../../../store/prompt";

const AiTextareaUi = () => {
  const router = useRouter();
  const prep = useRecoilValue(prePrompt);
  return (
    <>
      <TextareaUI
        disable={false}
        submitPrompt={() => router.push("/signin")}
        value={prep}
      />
    </>
  );
};

export default AiTextareaUi;
