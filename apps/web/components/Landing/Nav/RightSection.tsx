"use client";
import { DashboardButton } from "@repo/ui/DashboardButton";
import { useRouter } from "next/navigation";

const RightSection = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex gap-3 sm:gap-5 md:gap-10 items-center justify-center">
        <button
          onClick={() => router.push("/signin")}
          className="font-semibold relative sm:text-md md:text-xl sm:p-1 sm:py-2 md:p-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Login
        </button>
        <DashboardButton
          className="hover:shadow-[0_0_20px_0px_rgba(255,255,255,0.5)] hover:bg-white"
          onClick={() => router.push("/signin")}
        >
          <p className="sm:p-1 md:p-2 sm:text-md md:text-xl">Try Now ✨</p>
        </DashboardButton>
      </div>
    </>
  );
};

export default RightSection;
