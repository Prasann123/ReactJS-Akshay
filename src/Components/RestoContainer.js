import React from "react";
import { SWIGGY_CARD_URL } from "../utils/constants";
export const RestoContainer = ({ cartDetails }) => {
  const cartdata = cartDetails?.card?.card?.info;
  const imageUrlWithId = `${SWIGGY_CARD_URL}${cartdata?.cloudinaryImageId}`;
  return (
    <div className="resto-Card">
      <img className="food-image" alt="food-image" src={imageUrlWithId}></img>
      <h3 className="rest-Name">{cartdata?.name}</h3>
      <h4 className="rest-Address">{cartdata?.locality} </h4>
      <h4 className="rest-Address">{cartdata?.cuisines.join(", ")} </h4>
      <h4 className="rest-Ratings"> {cartdata?.avgRating} Stars</h4>
      <h4 className="rest-Cost"> {cartdata?.costForTwo} </h4>
    </div>
  );
};
