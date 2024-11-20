import Image from "next/image";
import data from "../../data";
import TypeWriter from "../components/TypeWriter";

const Hero = async () => {
  let image = false;
  if (data.Hero.image.length > 0) {
    image = true;
  }
  return (
    <>
      <div className="flex justify-center items-center">
        {data.Hero.image.length > 0 && (
          <div className="flex gap-20 sm:gap-2 sm:flex-row flex-col mt-10 ">
            <div className="flex flex-col justify-center w-full sm:w-1/2 text-center md:text-start">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                {data.Hero.name}
              </p>
              <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mt-6">
                {data.Hero.des}
              </p>
              <TypeWriter words={data.Hero.words}></TypeWriter>
            </div>
            <div className=" flex justify-center ">
              <div className="overflow-hidden transition-all duration-700 hover:scale-95 rounded-lg w-7/12 sm:w-3/4 lg:w-1/2 items-center flex justify-center">
                <Image
                  src={data.Hero.image}
                  alt="my Image"
                  width={500}
                  height={500}
                  className="transition-all object-cover duration-700 hover:scale-125 rounded-lg w-full h-auto max-w-xs sm:max-w-md lg:max-w-lg "
                />
              </div>
            </div>
          </div>
        )}
        {!image && (
          <div className="mt-28 text-center flex flex-col justify-center w-full sm:w-1/2 ">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
              {data.Hero.name}
            </p>
            <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mt-10">
              {data.Hero.des}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
