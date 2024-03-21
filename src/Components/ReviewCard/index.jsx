import React from "react";
import "./styles.css";

const ReviewCard = ({ review, totalUser }) => {
  return (
    <div className="review-card-container">
      <p className="review">{review} /10</p>
      <p className="review-tag">Based on {totalUser} User Reviews</p>
    </div>
  );
};

export default ReviewCard;
