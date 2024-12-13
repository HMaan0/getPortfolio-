"use client";
import { Button } from "@repo/ui/Button";
import DashboardInput from "@repo/ui/DashboardDiv";
import { MacButton } from "@repo/ui/MacButton";
import { BiLock, BiSolidCopy } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { iFrameUrl } from "../../store/webContainer";

const ProjectLink = () => {
  const url = useRecoilValue(iFrameUrl);

  return (
    <>
      <div className="flex gap-2">
        <MacButton></MacButton>
        <DashboardInput>
          <BiLock color="lightgreen" size={20}></BiLock>{" "}
          {url ? "http://localhost/dashboard/project" : "Loading..."}
        </DashboardInput>
        <Button>
          <BiSolidCopy></BiSolidCopy>
        </Button>
      </div>
    </>
  );
};

export default ProjectLink;
