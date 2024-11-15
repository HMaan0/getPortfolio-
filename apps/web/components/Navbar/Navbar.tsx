import { MacNavbar } from "@repo/ui/MacNavbar";
import ProjectLink from "./ProjectLink";
import ScreenSize from "./ScreenSize";
import UndoRedo from "./UndoRedo";

const Navbar = () => {
  return (
    <>
      <MacNavbar>
        <ProjectLink></ProjectLink>
        <ScreenSize></ScreenSize>
        <UndoRedo></UndoRedo>
      </MacNavbar>
    </>
  );
};

export default Navbar;
