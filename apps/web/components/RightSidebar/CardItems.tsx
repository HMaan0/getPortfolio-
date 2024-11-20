import { Button } from "@repo/ui/Button";
import DashboardInput from "@repo/ui/DashboardDiv";
import { Line } from "@repo/ui/Line";
interface CardItemsProps {
  sectionData: any;
}
const CardItems = ({ sectionData }: CardItemsProps) => {
  return (
    <>
      <div className="flex gap-5 flex-col">
        <Line></Line>
        <Button className="w-min">Card</Button>

        {Array.isArray(sectionData) ? (
          <>
            {sectionData.map((arr) =>
              Object.keys(arr).map((key) => (
                <>
                  <div className="flex flex-col gap-3">
                    {key}
                    <DashboardInput>
                      <input
                        placeholder="Type Heading here"
                        className="bg-transparent focus:outline-none "
                      />
                    </DashboardInput>
                  </div>
                </>
              ))
            )}
          </>
        ) : (
          <>
            {Object.keys(sectionData).map((key) => (
              <>
                <div className="flex flex-col gap-3">
                  {key}
                  <DashboardInput>
                    <input
                      placeholder="Type Heading here"
                      className="bg-transparent focus:outline-none "
                    />
                  </DashboardInput>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default CardItems;
