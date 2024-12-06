import { DashboardButton } from "@repo/ui/DashboardButton";
import DashboardInput from "@repo/ui/DashboardDiv";
import { useRecoilState, useRecoilValue } from "recoil";
import { sessionError, signin } from "../../store/Signin";
import { useState } from "react";
import { credentialsSchema } from "../../lib/zod/authSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Email = () => {
  const newUser = useRecoilValue(signin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useRecoilState(sessionError);
  const router = useRouter();
  async function handleClick() {
    try {
      const validation = credentialsSchema.safeParse({ email, password });
      if (!validation.success) {
        const errorMessages = validation.error.issues.map(
          (issue) => issue.message
        );
        setError(errorMessages.join(" "));
        return;
      } else if (validation.success) {
        setError(null);
        const res = await signIn("credentials", {
          email,
          password,
          newUser,
          redirect: false,
        });
        if (res?.ok) {
          router.push("/");
        } else {
          setError(
            newUser === true
              ? "Email already exists"
              : "Email or Password is Incorrect"
          );
          console.error(res?.error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="w-full flex flex-col gap-2 text-center">
        <DashboardInput>
          <input
            className="font-semibold bg-transparent w-full outline-none px-1 sm:mb-1 mb-0.5  items-center flex sm:py-0 py-2"
            placeholder="name@example.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </DashboardInput>
        <DashboardInput>
          <input
            className="font-semibold bg-transparent w-full outline-none sm:mb-1 mb-0.5 px-1 sm:py-0 py-2"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </DashboardInput>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        {!error && null}
      </div>

      <DashboardButton
        onClick={handleClick}
        disabled={email.length === 0 || password.length === 0 ? true : false}
        className="w-full flex justify-center mt-5 "
      >
        <p className="w-full flex justify-center items-center font-semibold  sm:py-0 py-2">
          {newUser ? " Create account" : " Sign In"}
        </p>
      </DashboardButton>
    </>
  );
};

export default Email;
