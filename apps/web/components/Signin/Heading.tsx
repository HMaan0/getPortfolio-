import { useRecoilValue } from "recoil";
import { signin } from "../../store/Signin";
import Image from "next/image";
const Heading = () => {
  const newUser = useRecoilValue(signin);
  return (
    <>
      <Image src="logo.svg" width={50} height={50} alt="get portfolio" />
      <div className="text-center flex flex-col sm:m-0 mb-10">
        <h3 className="text-xl">
          {newUser ? "Let’s get started" : "Welcome back"}
        </h3>
        <div className="w-4/3 container m-auto">
          <p className="text-gray-500 text-wrap">
            {newUser
              ? "Get a professional portfolio website built in seconds and responsive design!"
              : "Please enter your details to log in."}
          </p>
        </div>
      </div>
    </>
  );
};

export default Heading;
