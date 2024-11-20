import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import GithubGraph from "./GithubGraph";
import GithubRepos from "./GithubRepos";
import { FaCheckCircle, FaLocationArrow } from "react-icons/fa";
import data from "../../data";

const GithubInfo = async () => {
  const username = data.Github.github_username;
  const res = await fetch(`https://api.github.com/users/${username}`);
  const githubInfo = await res.json();

  return (
    <div className="flex  gap-2 w-full  ">
      <div className="w-full ">
        <div className="flex justify-between items-center mb-3 w-6 h-6 ">
          <Link href={githubInfo.html_url} target="blank" className="w-full">
            <FiGithub className="text-lg hover:text-2xl transition-all duration-150"></FiGithub>
          </Link>
        </div>
        <div className="flex gap-3 flex-col w-full  ">
          <div className="flex gap-4 flex-col  xl:flex-row w-full   ">
            <div className="w-full gap-5 xl:border-gray-600 xl:border  rounded-xl  p-8">
              <div className="flex justify-center xl:justify-start xl:items-center items-start gap-2 ">
                <Image
                  src={githubInfo.avatar_url}
                  alt={username}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <p className="text-2xl  w-min xl:w-max">
                  <span className="flex w-full justify-end">
                    <FaCheckCircle
                      className="w-3 text-blue-500 "
                      title="hireable"
                    ></FaCheckCircle>
                  </span>
                  {githubInfo.name ? githubInfo.name : username}
                </p>
              </div>
              <div className="  mt-7 gap-3 max-w-full overflow-hidden hidden xl:flex">
                {githubInfo.bio && (
                  <>
                    {" "}
                    <p className="text-gray-600 dark:text-gray-400 ">Bio: </p>
                    <p
                      className="break-words text-wrap w-full overflow-hidden"
                      style={{
                        maxWidth: "100%",
                        wordBreak: "break-word",
                      }}
                    >
                      {githubInfo.bio}
                    </p>
                  </>
                )}
              </div>
            </div>

            <GithubGraphCard githubInfo={githubInfo}></GithubGraphCard>
          </div>
          <GithubRepos></GithubRepos>
        </div>
      </div>
    </div>
  );
};

function GithubGraphCard({
  githubInfo,
}: {
  githubInfo: {
    following: string;
    followers: string;
    location: string;
    public_repos: string;
    html_url: string;
  };
}) {
  return (
    <div className="w-full p-8 border rounded-xl border-gray-600 gap-8 flex flex-col">
      <Link href={githubInfo.html_url} target="blank">
        <div className="flex flex-col gap-4">
          <div className="flex  items-center justify-center ">
            <GithubGraph></GithubGraph>
          </div>
          <ul className="grid grid-cols-1  w-full gap-3 text-xs sm:text-sm md:text-md ">
            <li className="flex gap-2 justify-between">
              <p className="text-gray-600 dark:text-gray-400">
                {" "}
                Public repos: {githubInfo.public_repos}
              </p>

              <p className="text-gray-600 dark:text-gray-400 flex  items-center gap-2">
                <FaLocationArrow></FaLocationArrow> {githubInfo.location}
              </p>
            </li>
            <li className="flex gap-2 justify-between">
              <p className="text-gray-600 dark:text-gray-400">
                Followers: {githubInfo.followers}
              </p>

              <p className="text-gray-600 dark:text-gray-400 ">
                Following: {githubInfo.following}
              </p>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default GithubInfo;
