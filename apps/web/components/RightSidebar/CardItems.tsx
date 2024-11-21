import { Button } from "@repo/ui/Button";
import { Line } from "@repo/ui/Line";
import Inputs from "./Inputs";

interface CardItemsProps {
  sectionData: any;
}
const CardItems = ({
  sectionData,
  section,
}: {
  sectionData: CardItemsProps;
  section: string;
}) => {
  return (
    <>
      <div className="flex gap-7 flex-col">
        <Line></Line>
        <Button className="w-min text-sm">Card</Button>

        {Array.isArray(sectionData) ? (
          <>
            {sectionData.map((arr) =>
              Object.keys(arr).map((key) => (
                <>
                  <div className="flex flex-col gap-1">
                    {key}
                    <Inputs
                      value={arr[key]}
                      section={section}
                      sectionKey={key}
                    ></Inputs>
                  </div>
                </>
              ))
            )}
          </>
        ) : (
          <>
            {Object.keys(sectionData).map((key) => (
              <>
                <div className="flex flex-col gap-1">
                  {key}

                  <Inputs
                    value={sectionData[key]}
                    section={section}
                    sectionKey={key}
                  ></Inputs>
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
