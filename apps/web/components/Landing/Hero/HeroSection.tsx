import AiTextareaUi from "./AiTextareaUi";
import PrePrompt from "./PrePrompt";

const HeroSection = () => {
  return (
    <>
      <section className="mt-24 h-svh">
        <div className="w-10/12 container m-auto flex flex-col 2xl:gap-32 2xl:py-32 gap-10 py-7 sm:gap-10 sm:py-10">
          <p className=" text-center bg-gradient-to-tl from-white via-gray-300 to-gray-700 bg-clip-text text-transparent sm:text-6xl text-5xl md:text-7xl font-semibold">
            Build Stunning Portfolios Websites with AI.
          </p>
          <div className="flex gap-10 flex-col w-full md:w-3/4 container m-auto ">
            <AiTextareaUi />
            <PrePrompt />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
