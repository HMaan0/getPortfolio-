import data from "../../data";
import Card from "../../project/components/Card";
import GithubInfo from "../../project/components/GithubInfo";
import About from "../../project/sections/About";
import Contact from "../../project/sections/Contact";
import HamburgerMenu from "../../project/sections/Hamburger";
import Hero from "../../project/sections/Hero";
import Projects from "../../project/sections/Projects";
import TechStack from "../../project/sections/TechStack";
import Work from "../../project/sections/Work";
const Admin = () => {
  return (
    <>
      <div className="flex-row flex justify-between items-start ">
        <HamburgerMenu></HamburgerMenu>

        {/* <Navbar></Navbar> */}
      </div>

      <div className=" flex justify-center items-center">
        <div className="mt-20 w-10/12 sm:w-7/12 flex flex-col gap-40">
          <section id="home" className="h-full ">
            <Hero></Hero>
            <div className="mt-10">
              <Card>
                <GithubInfo></GithubInfo>
              </Card>
            </div>
          </section>
          {/* <TechStack></TechStack> */}
          {data.Work.map((work) => work.title.length > 0).at(0) && (
            <section id="work" className="h-full  ">
              <Work></Work>
            </section>
          )}
          {/* <TitleCard
            title="3D Card"
            icon="path/to/icon.png"
            tiltOptions={{ max: 45, scale: 1.1, speed: 500 }}
          /> */}

          {/* <ThreeDCard></ThreeDCard> */}
          {data.projectData
            .map((projects) => projects.title.length > 0)
            .at(0) && (
            <section id="projects" className="h-full ">
              <Projects></Projects>
            </section>
          )}
          {data.aboutData.description.length ||
          data.aboutData.personalDetails.email ||
          data.aboutData.personalDetails.location.length > 0 ||
          data.aboutData.skills.map((skill) => skill.length).at(0) ? (
            <section id="about" className="h-full ">
              <About></About>
            </section>
          ) : null}
          {data.contact.Email.length ||
          data.contact.Github.length ||
          data.contact.LinkedIn.length ||
          data.contact.Twitter.length > 0 ? (
            <section id="contact" className="h-full ">
              <Contact></Contact>
            </section>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Admin;
