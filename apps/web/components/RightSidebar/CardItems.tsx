import { Button } from "@repo/ui/Button";
import DashboardInput from "@repo/ui/DashboardDiv";
import { Line } from "@repo/ui/Line";

const CardItems = () => {
  return (
    <>
      <div className="flex gap-5 flex-col">
        <Line></Line>
        <Button className="w-min">Card</Button>

        <div className="flex flex-col gap-3">
          Heading
          <DashboardInput>
            <input
              placeholder="Type Heading here"
              className="bg-transparent focus:outline-none "
            />
          </DashboardInput>
        </div>
        <div className="flex flex-col gap-3">
          Company
          <DashboardInput>
            <input
              placeholder="Type Heading here"
              className="bg-transparent focus:outline-none "
            />
          </DashboardInput>
        </div>
        <div className="flex flex-col gap-3">
          Description
          <DashboardInput>
            <textarea
              placeholder="Type Heading here"
              className="placeholder:translate-y-2 bg-transparent focus:outline-none resize-none w-full overflow-hidden"
            />
          </DashboardInput>
        </div>
      </div>
    </>
  );
};

export default CardItems;
