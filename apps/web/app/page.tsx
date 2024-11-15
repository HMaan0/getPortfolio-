import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Line } from "@repo/ui/Line";
export default function Home() {
  return (
    <>
      <main className="flex flex-row h-screen">
        <Sidebar>Harsh</Sidebar>
        <div className="bg-[#525252] w-full p-10 h-full flex flex-col">
          <Navbar></Navbar>
          <div className="w-full bg-slate-500 flex flex-grow rounded-b-[36]"></div>
        </div>
        <Sidebar>
          Harsh
          <Line></Line>
        </Sidebar>
      </main>
    </>
  );
}
