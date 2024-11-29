"use client";
import { componentsMap } from "./ComponentMap";
import { CardBody, CardContainer, CardItem } from "../components/HoverCard";
import { motion } from "framer-motion";
import { useState } from "react";
import icons from "../icon";
import components from "../../component";
const TechStack = () => {
  const rows = [];
  let to = 0;
  let from = 0;
  for (let i = 0; to < icons.length; i++) {
    to++;
    to = to + i;
    from = to - i - 1;
    rows.push(icons.slice(from, to));
  }
  const [framer] = useState(components.animatestack.shake);
  const [hover] = useState(components.animatestack.float);
  return (
    <div className="mt-4 w-full flex flex-col-reverse gap-7 items-center text-2xl sm:3xl xl:text-4xl lg:text-4xl md:text-3xl">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex gap-8 sm:gap-12 xl:gap-24 lg:gap-24 md:gap-16  h-12 ${
            rowIndex === rows.length - 1 && to > icons.length
              ? "w-full lg:w-10/12 justify-between"
              : ""
          }`}
        >
          {row.map((icon, iconIndex) => {
            const IconComponent = componentsMap[icon.component];

            console.log(IconComponent);

            return (
              <>
                <div key={iconIndex}>
                  {framer && !hover && (
                    <>
                      <FramerWrapper>
                        <IconComponent color={icon.color} />
                      </FramerWrapper>
                    </>
                  )}
                  {hover && !framer && (
                    <>
                      <CardContainer>
                        <CardBody className="bg-transparent">
                          <CardItem translateZ={300}>
                            <IconComponent color={icon.color} />
                          </CardItem>
                        </CardBody>
                      </CardContainer>
                    </>
                  )}
                  {framer && hover && (
                    <>
                      <FramerWrapper>
                        <CardContainer>
                          <CardBody className="bg-transparent">
                            <CardItem translateZ={300}>
                              <IconComponent color={icon.color} />
                            </CardItem>
                          </CardBody>
                        </CardContainer>
                      </FramerWrapper>
                    </>
                  )}
                  {!framer && !hover && <IconComponent color={icon.color} />}
                </div>
              </>
            );
          })}
        </div>
      ))}
    </div>
  );
};

function FramerWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ y: 10 }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          rotate: [0, -5, 5, -5, 5, 0],
          transition: { duration: 0.6 },
        }}
        className="cursor-pointer "
      >
        {children}
      </motion.div>
    </>
  );
}

export default TechStack;
