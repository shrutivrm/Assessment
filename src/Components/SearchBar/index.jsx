import React from "react";
import "./style.css";
import CollegeData from "../../CollegeData.json";

const SearchBar = () => {
  return (
    <div className="main-container">
      <div className="bar-content bar-container">
        <h2>Found {CollegeData.collegeData.length} colleges</h2>
        <input type="search" placeholder="Search here" className="input" />
      </div>
      <div className="bar-content bar-container">
        <h4>Sort By</h4>
        <label className="label">
          <input type="radio" value="Popularity" checked={true} />
          Popularity
        </label>
        <label className="label">
          <input type="radio" value="Rating" checked={false} />
          Rating
        </label>
        <label className="label">
          <input type="radio" value="HighestFees" checked={false} />
          Highest Fees
        </label>
        <label className="label">
          <input type="radio" value="LowestFees" checked={false} />
          Lowest Fees
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
