import React from "react";

const TravelPlanCard = ({ plan, handleDelete }) => {
  const { id, destination, totalCost, allInclusive } = plan;

  const onDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <li key={id}>
      <strong>{destination}</strong>: {totalCost}{" "}
      {totalCost <= 350 && <span>Great Deal</span>}
      {totalCost >= 1500 && <span>Premium</span>}
      {allInclusive && <span> All Inclusive</span>}
      <button onClick={onDeleteClick}>Delete</button>
    </li>
  );
};

export default TravelPlanCard;
