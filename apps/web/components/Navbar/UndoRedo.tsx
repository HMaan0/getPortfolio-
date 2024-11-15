import { Button } from "@repo/ui/Button";
import { DashboardButton } from "@repo/ui/DashboardButton";
import { BiRedo, BiUndo } from "react-icons/bi";
import { CiShare1 } from "react-icons/ci";

const UndoRedo = () => {
  return (
    <>
      <div className="flex gap-2">
        <Button>
          <BiUndo size={25}></BiUndo>
        </Button>
        <Button>
          <BiRedo size={25}></BiRedo>
        </Button>
        <DashboardButton>
          <CiShare1 size={25} /> Preview
        </DashboardButton>
      </div>
    </>
  );
};

export default UndoRedo;
