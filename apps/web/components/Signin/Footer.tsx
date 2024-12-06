import { useRecoilState } from "recoil";
import { signin } from "../../store/Signin";

const Footer = () => {
  const [newUser, setNewUser] = useRecoilState(signin);
  return (
    <>
      <div className="flex items-center flex-col mt-10">
        <p className="text-xs text-gray-600 text-center sm:mb-0 mb-2">
          {newUser &&
            "By continuing, you agree to change this later Terms of Service and Privacy Policy"}
        </p>
        <div className="font-semibold text-sm flex text-gray-500 gap-2">
          {newUser ? (
            <>
              <p>Already have an account? </p>
              <button
                onClick={() => setNewUser(!newUser)}
                className="text-white"
              >
                Log In
              </button>
            </>
          ) : (
            <>
              <p>Don't have an account yet? </p>
              <button
                onClick={() => setNewUser(!newUser)}
                className="text-white"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
