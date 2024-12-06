import { BsGoogle } from "react-icons/bs";
import { Button } from "@repo/ui/Button";
import { useRecoilValue } from "recoil";
import { signin } from "../../store/Signin";

const Google = () => {
  const newUser = useRecoilValue(signin);
  return (
    <>
      <Button className="w-full ">
        <div className="w-full flex justify-center items-center gap-2.5 sm:py-0 py-2">
          <BsGoogle size={25} />
          {newUser ? "Sign up with google" : "Sign in with google"}
        </div>
      </Button>
    </>
  );
};

export default Google;
