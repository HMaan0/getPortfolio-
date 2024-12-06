import { useRecoilValue } from "recoil";
import { signin } from "../../store/Signin";

const Heading = () => {
  const newUser = useRecoilValue(signin);
  return (
    <>
      <span className="px-4 py-1.5 rounded-full bg-green-400"></span>
      <div className="text-center flex flex-col sm:m-0 mb-10">
        <h3 className="text-xl">
          {newUser ? "Let’s get started" : "Welcome back"}
        </h3>
        <div className="w-4/3 container m-auto">
          <p className="text-gray-500 text-wrap">
            {newUser
              ? "         Get a professional portfolio website built in seconds AI and responsive design!"
              : "Please enter your details to log in."}
          </p>
        </div>
      </div>
    </>
  );
};

export default Heading;
