import Test from "../../app/dashboard/Test";
import Navbar from "../Navbar/Navbar";
import Workspace from "./Workspace";

const Dashboard = () => {
  return (
    <>
      <div className="sm:w-full w-10/12 flex justify-center items-center">
        <Navbar></Navbar>
      </div>
      {/* <Workspace /> */}

      <Test />
      {/* <CustomTerminal /> */}
    </>
  );
};

export default Dashboard;
