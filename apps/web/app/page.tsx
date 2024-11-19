import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import RightSidebar from "../components/RightSidebar/RightSidebar";

export default function Home() {
  return (
    <>
      <main className="flex flex-row h-screen">
        <Sidebar>Harsh</Sidebar>
        <div className="bg-[#525252] w-full p-5 h-full flex flex-col">
          <Navbar></Navbar>
          <div className="w-full bg-slate-500 flex flex-grow rounded-b-[36]"></div>
        </div>
        <RightSidebar></RightSidebar>
      </main>
    </>
  );
}
