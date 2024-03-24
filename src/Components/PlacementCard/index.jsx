import React from "react";
import "./styles.css";
import { MdCompareArrows } from "react-icons/md";

const PlacementCard = ({ averagePackage, highestPackage }) => {
  return (
    <div className="placement-card-container">
      <p className="fees">&#x20b9; {averagePackage}</p>
      <p className="package">Average Package</p>
      <p className="fees">&#x20b9; {highestPackage}</p>
      <p className="package">Highest Package</p>
      <a href="" className="placement">
        <MdCompareArrows /> Compare Placement
      </a>
    </div>
  );
};

export default PlacementCard;
