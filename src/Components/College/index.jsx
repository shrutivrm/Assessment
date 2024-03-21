import React, { useState, useEffect } from "react";
import "./style.css";
import CollegeCard from "../CollegeCard";
import CourseFeesCard from "../CourseFeesCard";
import PlacementCard from "../PlacementCard";
import ReviewCard from "../ReviewCard";
import RankingCard from "../RankingCard";
import CollegeData from "../../CollegeData.json";
import { useSelector } from "react-redux";

const CollegeTable = () => {
  const collegeDdata = CollegeData.collegeData;
  const searchData = useSelector((state) => state.search);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10; // Number of items per page

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    setLoading(true);
    // Simulated delay for data loading
    setTimeout(() => {
      const startIdx = (page - 1) * pageSize;
      const newData = collegeDdata.slice(startIdx, startIdx + pageSize);
      setData((prevData) => [...prevData, ...newData]);
      setLoading(false);
    }, 1000); // Simulated delay
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  // const filteredData = data.filter((item) => item.name.includes(searchData));
  return (
    <>
      {loading ? (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Loading...
        </h1>
      ) : (
        <table
          className="table"
          style={{ height: "400px", overflowY: "scroll" }}
          onScroll={handleScroll}
        >
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
                        featured={item.Featured}
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
                    {
                      <ReviewCard
                        review={item.Review}
                        totalUser={item.Totaluser}
                      />
                    }
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
      )}
    </>
  );
};

export default CollegeTable;
