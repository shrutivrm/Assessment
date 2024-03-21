import React from "react";
import "./style.css";
import CollegeCard from "../CollegeCard";
import CourseFeesCard from "../CourseFeesCard";
import PlacementCard from "../PlacementCard";
import ReviewCard from "../ReviewCard";
import RankingCard from "../RankingCard";
import CollegeData from "../../CollegeData.json";

const CollegeTable = () => {
  const data = CollegeData.collegeData;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>CD Rank</th>
          <th>College</th>
          <th>Course Fees</th>
          <th>Placement</th>
          <th>User Reviews</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr>
              <td key={index}> # {item.Id}</td>
              <td className="college-card" key={index}>
                {
                  <CollegeCard
                    logo={item.Logo}
                    name={item.Name}
                    location={item.Location}
                    course={item.Course}
                    cutoff={item.Cutoff}
                  />
                }
              </td>
              <td className="fees-card" key={index}>
                {<CourseFeesCard courseFees={item.CourseFess} />}
              </td>
              <td className="placement-card" key={index}>
                {
                  <PlacementCard
                    averagePackage={item.AveragePackage}
                    highestPackage={item.HighestPackage}
                  />
                }
              </td>
              <td key={index}>
                {<ReviewCard review={item.Review} totalUser={item.Totaluser} />}
              </td>
              <td key={index}>
                {
                  <RankingCard
                    ranking={item.Ranking}
                    totalRank={item.TotalRank}
                  />
                }
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CollegeTable;
