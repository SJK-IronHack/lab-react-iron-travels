import React, { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = ({ travelData }) => {
  const [travelPlans, setTravelPlans] = useState(travelData);

  const handleDelete = (id) => {
    const updatedTravelPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedTravelPlans);
  };

  return (
    <div>
      <ul>
        {travelPlans.map((plan) => (
          <TravelPlanCard key={plan.id} plan={plan} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
