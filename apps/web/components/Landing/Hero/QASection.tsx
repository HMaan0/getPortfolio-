import React from "react";
import AskedQuestion from "./AskedQuestion";

const QASection = () => {
  return (
    <>
      <div className="sm:w-10/12 w-10/12 md:w-2/3 lg:w-1/2 gap-5 container m-auto flex items-center flex-col justify-center">
        <h3 className="text-2xl md:text-4xl text-center ">
          Frequently asked questions
        </h3>
        <h4 className="text-lg md:text-2xl text-center">
          Answers to some of the Most Important Questions
        </h4>
        <AskedQuestion
          question="What is Get Portfolio?"
          answer="Get Portfolio is an AI-powered Portfolio website builder that allows you to create stunning, professional websites in minutes without any coding."
        />
        <AskedQuestion
          question="How does Get Portfolio work?"
          answer="Simply describe your desired changes in natural language, and watch as our AI instantly transforms your ideas into a polished website."
        />
        <AskedQuestion
          question="Do I need coding skills to use Get Portfolio?"
          answer="Not at all! Get Portfolio is designed for everyone. No coding skills are required – just your ideas and our AI will do the rest."
        />
        <AskedQuestion
          question="What is difference between free and premium user?"
          answer=" Free users can create a portfolio website with customizable text, sections, and colors, but lack access to AI features. Premium users enjoy advanced AI tools, enhanced customization options, and additional features for a more personalized and dynamic experience."
        />
      </div>
    </>
  );
};

export default QASection;
