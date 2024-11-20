import Link from "next/link";
import {
  FaBook,
  FaDotCircle,
  FaEye,
  FaRegDotCircle,
  FaRegStar,
} from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import data from "../../data";

const GithubRepos = async () => {
  const username = data.Github.github_username;
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const repoInfo = await res.json();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
      {repoInfo.slice(0, 4).map((repo: repo) => (
        <>
          <div className="w-full p-4 sm:p-8 border mb-2 sm:mb-4 rounded-xl border-gray-600">
            <div className="mb-3 sm:mb-6">
              <div className="flex gap-3 justify-start items-center ">
                <FaBook className="text-gray-600 dark:text-gray-400"></FaBook>
                <p className="text-lg font-semibold text-blue-500">
                  <Link href={repo.html_url} target="blank">
                    {repo.name}
                  </Link>
                </p>
                <div className="flex gap-1">
                  <FaDotCircle className="w-2 text-gray-600 dark:text-gray-400"></FaDotCircle>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {repo.language}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  gap-3 sm:gap-6 flex-col">
              <ul className="flex justify-between text-md">
                <li className="flex items-center gap-2  text-gray-600 dark:text-gray-400">
                  <FaCodeFork></FaCodeFork> <p>{repo.forks_count}</p>
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaRegStar></FaRegStar> <p>{repo.stargazers_count}</p>
                </li>
              </ul>
              <ul className="flex justify-between">
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaEye></FaEye>
                  <p>{repo.watchers_count}</p>
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaRegDotCircle></FaRegDotCircle>
                  <p>{repo.open_issues_count}</p>
                </li>
              </ul>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default GithubRepos;
