import React from "react";
import "./syles.css";

const RankingCard = ({ ranking, totalRank }) => {
  return (
    <div className="rank-card-container">
      <p className="rank">
        #{ranking}/{totalRank} in India
      </p>
    </div>
  );
};

export default RankingCard;
