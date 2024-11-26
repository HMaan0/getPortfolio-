import Navbar from "../components/Navbar/Navbar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";

export default function Home() {
  return (
    <>
      <main className="flex flex-row h-screen">
        <LeftSidebar></LeftSidebar>
        <div className="bg-[#525252] w-full p-5 h-full flex flex-col">
          <Navbar></Navbar>
          <div
            className="custom-scroll overflow-y-auto h-full max-h-full relative w-full dark:bg-black bg-white rounded-b-[36]"
            style={{
              transform: "translateZ(0)",
              maxHeight: "calc(100vh - 20px)",
            }}
          >
            <iframe
              src="http://localhost:3000/admin"
              className="transition-all duration-1000 w-full h-full fixed"
              style={{
                width: "150%",
                height: "150%",
                transform: "scale(0.67)",
                transformOrigin: "0 0",
                border: "none",
              }}
            ></iframe>
          </div>
        </div>
        <RightSidebar></RightSidebar>
      </main>
    </>
  );
}
