import Card from "../components/Card";
import data from "../../data";

const Work = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        My Work Experience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.Work.map((work, index) => (
          <>
            <Card key={work.title}>
              <p className="text-xl sm:text-2xl font-semibold mb-2">
                {work.title}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                {work.company}
              </p>
              <div className="text-sm text-gray-500 mb-4">{work.duration}</div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {work.description}
              </p>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default Work;
