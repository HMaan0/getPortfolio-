"use client";
import GitHubCalendar, { Activity } from "react-github-calendar";
import data from "../../data";

const GithubGraph = () => {
  const username = data.Github.github_username;
  const transformData = (contributions: Activity[]) => {
    const weeksToShow = 114;
    return contributions.slice(-weeksToShow);
  };
  return (
    <>
      <div className="flex w-min flex-col  items-center justify-center">
        <div className="custom__scrollbar    overflow-hidden">
          <GitHubCalendar
            username={username}
            transformData={transformData}
            // loading={true}
            maxLevel={10}
            hideColorLegend={true}
            hideMonthLabels={true}
            hideTotalCount={true}
          />
        </div>
      </div>
    </>
  );
};

export default GithubGraph;
