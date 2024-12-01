import Button from "../components/Button";
import data from "../../data";
import Card from "../components/Card";
const aboutData = data.aboutData;

const About = () => {
  return (
    <Card>
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        About Me
      </p>
      <p className="text-lg  mb-6">{aboutData.description}</p>

      {data.aboutData.skills.map((skill) => skill.length).at(0) ? (
        <>
          <div className="mb-8">
            <p className="text-2xl font-semibold mb-4">Skills</p>
            <ul className="flex flex-wrap gap-4">
              {aboutData.skills.map((skill, index) => (
                <li key={index}>
                  <Button>{skill}</Button>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </Card>
  );
};

export default About;
