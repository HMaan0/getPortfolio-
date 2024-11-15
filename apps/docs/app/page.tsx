import { DashboardButton } from "@repo/ui/DashboardButton";

export default function Home() {
  return (
    <main>
      HELLO world
      <div className="flex h-full w-full justify-center items-center  p-96">
        <DashboardButton>Desktop</DashboardButton>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}
