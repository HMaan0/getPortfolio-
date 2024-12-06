import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Input from "../../components/Input/Input";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
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
  } else {
    redirect("/signin");
  }
};

export default page;
