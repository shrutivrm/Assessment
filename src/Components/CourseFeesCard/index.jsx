import React from "react";
import "./style.css";

const CourseFeesCard = ({ courseFees }) => {
  return (
    <div className="course-card-container">
      <p className="clg-fees"> &#x20b9; {courseFees}</p>
      <p className="course"> BE/B.Tech</p>
      <p className="clg-year">-1st year fees</p>
      <a href="" className="compare">
        ⇉ Compare Fees
      </a>
    </div>
  );
};

export default CourseFeesCard;
