import React from "react";
import "./style.css";
import { FaDownload } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const CollegeCard = ({ logo, name, location, course, cutoff, featured }) => {
  return (
    <div className="card-container">
      {featured === "true" && (
        <div className="featured-icon">
          <div className="featured">Featured</div>
        </div>
      )}

      <div className="card-content">
        <img src={logo} alt="College Logo" className="clg-logo" />
        <div className="college-info">
          <p className="clg-header">{name}</p>
          <p className="clg-location">{location}</p>
          <div className="clg-course-cutoff">
            <p className="clg-course">{course}</p>
            <p className="clg-cutoff">JEE advanced 2023 cutoff: {cutoff}</p>
          </div>
        </div>
      </div>

      <div className="card-links">
        <a href="" className="apply-link link">
          <FaArrowRight style={{ paddingRight: "5px" }} />
          Apply Now
        </a>
        <a href="" className="brocher-link link">
          <FaDownload style={{ paddingRight: "5px" }} />
          Download Brocher
        </a>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox"> Add to Compare</label>
      </div>
    </div>
  );
};

export default CollegeCard;
