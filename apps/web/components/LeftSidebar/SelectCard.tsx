import { useState } from "react";
import Toggle from "./Toggle";
import Card from "../../project/components/Card";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../project/components/HoverCard";
const CardType = ["Scale", "3D-Effect", "Digital"];
const SelectCard = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div>
      <div className="flex gap-1  flex-wrap">
        {CardType.map((card) => (
          <Toggle
            key={card}
            option={card}
            selected={selected}
            onSelect={setSelected}
          />
        ))}
      </div>
      <div
        className={`m-4 ${selected === "Scale" ? "hover:scale-105 transition-transform duration-300" : ""} `}
      >
        {selected === "3D-Effect" ? (
          <>
            <CardContainer>
              <CardBody>
                <SampleCard selected={selected} />
              </CardBody>
            </CardContainer>
          </>
        ) : (
          <div className="py-20 ">
            <SampleCard selected={selected}></SampleCard>
          </div>
        )}
      </div>
    </div>
  );
};

function SampleCard({ selected }: { selected: string | null }) {
  return (
    <>
      <Card>
        <div className="grid gap-4">
          <h6 className="text-3xl font-bold">Heading </h6>

          <p>
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <div className="flex w-full justify-between mt-5">
            <button className="bg-white px-4 py-2 rounded-lg text-black font-semibold">
              Button
            </button>
            <button className="bg-white px-4 py-2 rounded-lg text-black font-semibold">
              Button
            </button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default SelectCard;
