import data from "../../data";
import { FaGithub, FaLink } from "react-icons/fa";
import { SlArrowUpCircle } from "react-icons/sl";
import Card from "../components/Card";
import Iframe from "../components/Iframe";

const Projects = () => {
  return (
    <div className="">
      <p className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        My Projects
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {data.projectData.map((project, index) => (
          <Card key={index}>
            <p className="text-xl sm:text-2xl font-semibold mb-2">
              {project.title}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex gap-4 w-full justify-between p-5 ">
              {project.liveLink.length > 0 && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlArrowUpCircle className=" rotate-45 hover:rotate-[405deg] text-2xl transition-transform duration-500"></SlArrowUpCircle>
                </a>
              )}
              {project.codeLink.length > 0 && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl hover:scale-110  transition-transform duration-200"></FaGithub>
                </a>
              )}
            </div>

            {project.liveLink && (
              <div className=" w-full h-96 ">
                <Iframe link={project.liveLink}></Iframe>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
