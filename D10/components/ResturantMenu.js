import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurantNames from "../utils/useRestaurantNames";

const RestaurantMenu = () => {
  const { id_R } = useParams();

  const [restaurantNames, restaurantMenuNames] = useRestaurantNames(id_R);

  return !restaurantNames ? (
    <Shimmer />
  ) : (
    <div className="card_2">
      <div>
        <h1>Restaurant id: {id_R}</h1>
        <h2>{restaurantNames.name}</h2>
        <img src={IMG_CDN_URL + restaurantNames.cloudinaryImageId} />
        <h3>{restaurantNames.areaName}</h3>
        <h3>{restaurantNames.city}</h3>
        <h3>{restaurantNames.avgRating} stars</h3>
        <h3>{restaurantNames.costForTwoMessage}</h3>
      </div>
      <div>
        {/* {console.log(Object.values(restaurantMenuNames))} */}
        <h1>Menu</h1>
        <ul>
          {restaurantMenuNames.map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
