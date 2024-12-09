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
          answer="Rollout is an AI-powered landing page builder that allows you to create stunning, professional websites in minutes without any coding."
        />
        <AskedQuestion
          question="What is Get Portfolio?"
          answer="Rollout is an AI-powered landing page builder that allows you to create stunning, professional websites in minutes without any coding."
        />
        <AskedQuestion
          question="What is Get Portfolio?"
          answer="Rollout is an AI-powered landing page builder that allows you to create stunning, professional websites in minutes without any coding."
        />
        <AskedQuestion
          question="What is Get Portfolio?"
          answer="Rollout is an AI-powered landing page builder that allows you to create stunning, professional websites in minutes without any coding."
        />
      </div>
    </>
  );
};

export default QASection;
