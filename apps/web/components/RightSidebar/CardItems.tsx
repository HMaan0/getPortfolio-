import React, { useState } from "react";
import Inputs from "./Inputs";
import CardLine from "./CardLine";
import { DashboardButton } from "@repo/ui/DashboardButton";
import { BiPlus } from "react-icons/bi";
import { addEmptyCard } from "../../lib/actions/AddCard";
import { Project, Work } from "../../project/types/types";
import { removeCard } from "../../lib/actions/RemoveCard";
const CardItems = ({
  sectionData,
  section,
}: {
  sectionData: Work[] | Project[];
  section: string;
}) => {
  const [hideValue, setHideValue] = useState(false);

  async function addCard() {
    await addEmptyCard(sectionData, section);
  }
  async function remove() {
    await removeCard(sectionData, section);
    if (sectionData.length === 1) {
      setHideValue(true);
    }
  }

  return (
    <>
      {Array.isArray(sectionData) ? (
        <>
          <div className="overflow-y-auto scrollbar-custom mb-32">
            {sectionData.map((arr, index) => (
              <React.Fragment key={index}>
                <CardLine className="mr-2" onClick={remove}>
                  {Object.keys(arr).map((key) => (
                    <div className="flex flex-col gap-1 last:mb-10" key={key}>
                      {key}
                      <Inputs
                        index={index}
                        value={hideValue ? "" : arr[key]}
                        section={section}
                        sectionKey={key}
                      ></Inputs>
                    </div>
                  ))}
                  {index === sectionData.length - 1 && (
                    <>
                      <div className="flex justify-center items-center mb-7">
                        <DashboardButton onClick={addCard}>
                          <BiPlus></BiPlus>
                        </DashboardButton>
                      </div>
                    </>
                  )}
                </CardLine>
              </React.Fragment>
            ))}
          </div>
        </>
      ) : (
        <>
          <CardLine>
            {Object.keys(sectionData).map((key, index) => (
              <>
                <div className="flex gap-7 flex-col" key={index}>
                  <div className="flex flex-col gap-1 last:mb-10" key={key}>
                    {key}
                    <Inputs
                      value={sectionData[key]}
                      section={section}
                      sectionKey={key}
                    ></Inputs>
                  </div>
                </div>
              </>
            ))}
          </CardLine>
        </>
      )}
    </>
  );
};

export default CardItems;
