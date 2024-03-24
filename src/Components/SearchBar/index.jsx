import React from "react";
import "./style.css";
import CollegeData from "../../CollegeData.json";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setCheckbox } from "../../redux/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);
  const checkboxes = useSelector((state) => state.checkboxes);

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setCheckbox(name, checked));
  };

  return (
    <div className="main-container">
      <div className="bar-content bar-container">
        <h2>Found {CollegeData.collegeData.length} colleges</h2>
        <input
          type="search"
          placeholder="Search here"
          className="input"
          onChange={handleInputChange}
          value={searchTerm}
        />
      </div>
      <div className="bar-content bar-container">
        <h4>Sort By</h4>
        <label className="label">
          <input
            type="radio"
            value="Popularity"
            checked={checkboxes.popularity}
            name="popularity"
            onChange={handleCheckBoxChange}
          />
          Popularity
        </label>
        <label className="label">
          <input
            type="radio"
            value="HighestFees"
            checked={checkboxes.highestFees}
            name="highestFees"
            onChange={handleCheckBoxChange}
          />
          Highest Fees
        </label>
        <label className="label">
          <input
            type="radio"
            value="LowestFees"
            checked={checkboxes.lowestFees}
            name="lowestFees"
            onChange={handleCheckBoxChange}
          />
          Lowest Fees
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
