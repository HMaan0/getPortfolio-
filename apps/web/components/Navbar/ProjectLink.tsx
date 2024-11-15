import { Button } from "@repo/ui/Button";
import DashboardInput from "@repo/ui/DashboardDiv";
import { MacButton } from "@repo/ui/MacButton";
import { BiLock, BiSolidCopy } from "react-icons/bi";

const ProjectLink = () => {
  return (
    <>
      <div className="flex gap-2">
        <MacButton></MacButton>
        <DashboardInput>
          <BiLock color="lightgreen" size={20}></BiLock> https:localhost:3000
        </DashboardInput>
        <Button>
          <BiSolidCopy></BiSolidCopy>
        </Button>
      </div>
    </>
  );
};

export default ProjectLink;
