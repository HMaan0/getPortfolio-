import AiTextareaUi from "./AiTextareaUi";
import AskedQuestion from "./AskedQuestion";
import PrePrompt from "./PrePrompt";

const HeroSection = () => {
  return (
    <>
      <section className="mt-24 h-full">
        <div className="w-10/12 container m-auto flex flex-col gap-10 py-10">
          <p className="text-center bg-gradient-to-tl from-white via-gray-300 to-gray-700 bg-clip-text text-transparent sm:text-6xl text-5xl md:text-7xl font-semibold">
            Build Stunning Portfolios Websites with AI.
          </p>
          <div className="flex gap-10 flex-col w-full md:w-3/4 container m-auto ">
            <AiTextareaUi />
            <PrePrompt />
          </div>
        </div>
      </section>
      <section className="h-full">
        <div className="sm:w-10/12 w-10/12 md:w-2/3 lg:w-1/2 gap-5 container m-auto flex items-center flex-col justify-center">
          <AskedQuestion />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
