import React, { useState } from "react";
import Inputs from "./Inputs";
import CardLine from "./CardLine";
import { DashboardButton } from "@repo/ui/DashboardButton";
import { BiPlus } from "react-icons/bi";
import { Project, Work } from "../../project/types/types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toggle, webContainerInstance } from "../../store/webContainer";
const CardItems = ({
  sectionData,
  section,
}: {
  sectionData: Work[] | Project[];
  section: string;
}) => {
  const emptyObj: Work | Project = {};
  const webContainer = useRecoilValue(webContainerInstance);
  const [hideValue, setHideValue] = useState(false);
  const setCardToggle = useSetRecoilState(toggle);

  async function addCard() {
    if (webContainer) {
      const rawData = await webContainer.fs.readFile("my-app/data.ts", "utf-8");
      const start = rawData.indexOf("{");
      const end = rawData.lastIndexOf("}") + 1;
      const dataObjectCode = rawData.slice(start, end);
      const data = eval(`(${dataObjectCode})`);
      const obj = sectionData[0];
      for (const keys in obj) {
        emptyObj[keys] = "";
      }
      data[section].push(emptyObj);
      const updatedDataCode = `const data = ${JSON.stringify(data, null, 2)};\n\nexport default data;`;
      await webContainer.fs.writeFile("my-app/data.ts", updatedDataCode);
      setCardToggle((prev) => !prev);
    }
  }
  async function remove() {
    if (webContainer) {
      let rawData = await webContainer.fs.readFile("my-app/data.ts", "utf-8");
      let start = rawData.indexOf("{");
      let end = rawData.lastIndexOf("}") + 1;
      let dataObjectCode = rawData.slice(start, end);
      let obj = sectionData[0];
      let data = eval(`(${dataObjectCode})`);
      if (data[section].length < 2) {
        await addCard();
        let rawData = await webContainer.fs.readFile("my-app/data.ts", "utf-8");
        let start = rawData.indexOf("{");
        let end = rawData.lastIndexOf("}") + 1;
        let dataObjectCode = rawData.slice(start, end);
        let data1 = eval(`(${dataObjectCode})`);
        data1[section].shift();
        const updatedDataCode = `const data = ${JSON.stringify(data1, null, 2)};\n\nexport default data;`;
        await webContainer.fs.writeFile("my-app/data.ts", updatedDataCode);
      } else {
        data[section].pop(obj);
        const updatedDataCode = `const data = ${JSON.stringify(data, null, 2)};\n\nexport default data;`;
        await webContainer.fs.writeFile("my-app/data.ts", updatedDataCode);
      }
      setCardToggle((prev) => !prev);
    }
    if (sectionData.length === 1) {
      setHideValue(true);
    }
  }

  return (
    <>
      {Array.isArray(sectionData) ? (
        <div className="overflow-y-auto scrollbar-custom mb-32">
          {sectionData.map((arr, index) => (
            <React.Fragment key={arr.title}>
              <CardLine className="mr-2" onClick={remove}>
                {Object.keys(arr).map((key) => (
                  <div className="flex flex-col gap-1 last:mb-10" key={key}>
                    {key}

                    <>
                      <Inputs
                        index={index}
                        value={hideValue ? "" : (arr[key] ?? "")}
                        section={section}
                        sectionKey={key}
                      ></Inputs>
                    </>
                  </div>
                ))}
                {index === sectionData.length - 1 && (
                  <div className="flex justify-center items-center mb-7">
                    <DashboardButton onClick={addCard}>
                      <BiPlus></BiPlus>
                    </DashboardButton>
                  </div>
                )}
              </CardLine>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <CardLine>
          {Object.keys(sectionData).map((key) => (
            <div className="flex gap-7 flex-col" key={key}>
              <div className="flex flex-col gap-1 last:mb-10" key={key}>
                {key}
                <Inputs
                  value={sectionData[key]}
                  section={section}
                  sectionKey={key}
                ></Inputs>
              </div>
            </div>
          ))}
        </CardLine>
      )}
    </>
  );
};

export default CardItems;
