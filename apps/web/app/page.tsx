import RightSidebar from "../components/RightSidebar/RightSidebar";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import Input from "../components/Input/Input";
import Dashboard from "../components/Dashboard/Dashboard";

export default function Home() {
  return (
    <>
      <main className="flex flex-row h-screen">
        <LeftSidebar></LeftSidebar>
        <div className="bg-[#525252] w-full sm:p-5 p-3 h-full flex flex-col relative items-center">
          <Dashboard />
          <Input />
        </div>

        <RightSidebar></RightSidebar>
      </main>
    </>
  );
}
