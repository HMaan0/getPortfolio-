import { Button } from "@repo/ui/Button";
import { DashboardButton } from "@repo/ui/DashboardButton";
import { FaCheck } from "react-icons/fa";
const PaymentSection = () => {
  return (
    <div className="flex gap-10 md:flex-row flex-col">
      <div className="py-4 px-6 flex flex-col gap-7 rounded-2xl border border-theme-border w-full">
        <div className="flex gap-1 flex-col ">
          <h1 className="font-bold text-3xl">Free</h1>
          <h1 className="font-bold text-4xl">$0</h1>
          <p className="text-gray-400 text-md">
            Prefect for simple portfolio website
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <p className="flex justify-start items-center gap-5">
            <FaCheck color="gray" /> Unlimited Projects
          </p>
          <p className="flex justify-start items-center gap-5">
            <FaCheck color="gray" />
            Basic webpage generation
          </p>
          <p className="flex justify-start items-center gap-5">
            <FaCheck color="gray" />
            Basic SEO tools
          </p>
          <p className="flex justify-start items-center gap-5">
            <FaCheck color="gray" />
            Limited modifications
          </p>
        </div>
        <Button className="w-full">
          <p className="text-center w-full text-xl">Start Free</p>
        </Button>
      </div>
      <div className="bg-gradient-to-tr from-gray-500/50 py-4 px-6 flex flex-col gap-7 rounded-2xl border border-theme-border w-full">
        <div className="flex gap-1 flex-col ">
          <h1 className="font-bold text-3xl">Premium</h1>
          <h1 className="font-bold text-4xl">$7.99</h1>
          <p className="text-gray-400 text-md">
            Ideal for best looking personalized portfolio website
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <p className="flex justify-start items-center gap-5">
            <FaCheck color="gray" /> 1 Projects
          </p>
          <p className="flex justify-start items-center gap-5">
            <FaCheck color="gray" />
            Personalized webpage generation
          </p>
          <p className="flex justify-start items-center gap-5">
            <FaCheck color="white" />
            Unlimited modifications
          </p>
          <p className="flex justify-start items-center gap-5">
            <FaCheck color="white" />
            Text to code with AI integration
          </p>
        </div>
        <DashboardButton className="w-full">
          <p className="text-center w-full text-xl">Pay $7.99</p>
        </DashboardButton>
      </div>
    </div>
  );
};

export default PaymentSection;
