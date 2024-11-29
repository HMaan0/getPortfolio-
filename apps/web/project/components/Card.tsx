import components from "../../component";
import { CardBody, CardContainer, CardItem } from "./HoverCard";

const Card = ({
  children,
  key,
}: {
  children: React.ReactNode;
  key?: number;
}) => {
  return (
    <>
      {components.card["3d-effect"] ? (
        <CardContainer className="w-full h-full">
          <CardBody className="w-full h-full">
            <CardItem className="w-full h-full">
              <div
                key={key}
                className={`dark:bg-primary_dark  bg-primary_light p-6 shadow-lg rounded-lg  `}
              >
                {children}
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      ) : (
        <div
          key={key}
          className={`dark:bg-primary_dark  bg-primary_light p-6 shadow-lg rounded-lg  ${components.card.scale ? "hover:scale-105 transition-transform duration-300" : ""}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Card;
