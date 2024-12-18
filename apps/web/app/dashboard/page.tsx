import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import Dashboard from "../../components/Dashboard/Dashboard";
const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <>
        <main className="flex flex-row h-screen">
          <LeftSidebar></LeftSidebar>
          <Dashboard />
          <RightSidebar></RightSidebar>
        </main>
      </>
    );
  } else {
    redirect("/signin");
  }
};

export default page;
