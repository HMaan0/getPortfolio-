"use client";
import { Button } from "@repo/ui/Button";
import { MacButton } from "@repo/ui/MacButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CiShare1 } from "react-icons/ci";
import { preview } from "../../store/screen";
import { iFrameUrl } from "../../store/webContainer";

const ProjectLink = () => {
  const url = useRecoilValue(iFrameUrl);
  const setFullScreen = useSetRecoilState(preview);

  return (
    <>
      <div className="flex gap-2">
        <MacButton></MacButton>
        {/* <DashboardInput>
          <BiLock color="lightgreen" size={20}></BiLock>{" "}
          {url ? "http://localhost/dashboard/project" : "Loading..."}
        </DashboardInput> */}
        <Button
          onClick={() => setFullScreen((prev) => !prev)}
          className={`${url.length === 0 ? "cursor-not-allowed" : " "}`}
          disabled={url.length === 0}
        >
          <CiShare1 size={20} /> Preview
        </Button>
      </div>
    </>
  );
};

export default ProjectLink;
