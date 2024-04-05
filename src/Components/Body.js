import React from "react";
import { swiggyApi } from "../utils/swiggyApi";
import { RestoContainer } from "./RestoContainer";

export const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="resto-container">
        {swiggyApi.cards?.map((res) => (
          <RestoContainer key={res.id} cartDetails={res} />
        ))}
        <RestoContainer cartDetails={swiggyApi} />
      </div>
    </div>
  );
};
