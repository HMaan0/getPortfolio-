import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const Nav = () => {
  return (
    <nav className="top-0 fixed left-0 right-0  mt-5 py-5 backdrop-blur-md px-5 sm:py-2.5 sm:px-5  md:py-5 md:px-10 sm:rounded-2xl rounded-xl md:rounded-3xl w-11/12 container m-auto border-theme-border border flex justify-between items-center">
      <LeftSection />
      <RightSection />
    </nav>
  );
};

export default Nav;
