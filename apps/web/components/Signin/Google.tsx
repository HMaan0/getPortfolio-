import { BsGoogle } from "react-icons/bs";
import { Button } from "@repo/ui/Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sessionError, signin } from "../../store/Signin";
import { signIn } from "next-auth/react";

const Google = () => {
  const setError = useSetRecoilState(sessionError);
  const newUser = useRecoilValue(signin);

  async function handleGoogleAuth() {
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      setError("Something went Wrong! try again");
      console.error(error);
    }
  }
  return (
    <>
      <Button className="w-full " onClick={handleGoogleAuth}>
        <div className="w-full flex justify-center items-center gap-2.5 sm:py-0 py-2">
          <BsGoogle size={25} />
          {newUser ? "Sign up with google" : "Sign in with google"}
        </div>
      </Button>
      <p></p>
    </>
  );
};

export default Google;
