import React from "react";
import Files from "./Files";
import Code from "./Code";

const Editor = () => {
  return (
    <>
      <div className="flex h-full overflow-hidden">
        <Files />
        <div className="h-full w-min border border-theme-border"></div>
        <div className="h-full flex-1 overflow-hidden">
          <Code />
        </div>
      </div>
    </>
  );
};

export default Editor;
