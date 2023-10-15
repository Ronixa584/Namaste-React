// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { IMG_CDN_URL } from "../contants";
// import Shimmer from "./Shimmer";
// import useRestaurantNames from "../utils/useRestaurantNames";

// const RestaurantMenu = () => {
//   const { id_R } = useParams();

//   const [restaurantNames, restaurantMenuNames] = useRestaurantNames(id_R);

//   return !restaurantNames ? (
//     <Shimmer />
//   ) : (
//     <div className="card_2 flex flex-col">
//       <div className="flex flex-col ">
//         <h1>Restaurant id: {id_R}</h1>
//         <h2>{restaurantNames.name}</h2>
//         <img src={IMG_CDN_URL + restaurantNames.cloudinaryImageId} />
//         <h3>{restaurantNames.areaName}</h3>
//         <h3>{restaurantNames.city}</h3>
//         <h3>{restaurantNames.avgRating} stars</h3>
//         <h3>{restaurantNames.costForTwoMessage}</h3>
//       </div>
//       <div>
//         {/* {console.log(Object.values(restaurantMenuNames))} */}
//         <h1>Menu</h1>
//         <ul>
//           {restaurantMenuNames.map((item) => (
//             <li key={item?.id}>{item?.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;






import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurantNames from "../utils/useRestaurantNames";

const RestaurantMenu = () => {
  const { id_R } = useParams();

  const [restaurantNames, restaurantMenuNames] = useRestaurantNames(id_R);

  if (!restaurantNames) {
    return <Shimmer />;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300">
      <div className="mb-4 flex justify-center items-center">
        <div className="w-1/2">
          <img
            src={IMG_CDN_URL + restaurantNames.cloudinaryImageId}
            alt={restaurantNames.name}
            className="w-96 h-96 rounded-lg"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold mb-2">{restaurantNames.name}</h1>
          <div className="text-gray-500">
            {restaurantNames.areaName}, {restaurantNames.city}
          </div>
          <div className="mt-2">
            <span className="bg-yellow-400 py-1 px-2 rounded-md text-white">
              {restaurantNames.avgRating} stars
            </span>
          </div>
          <div className="mt-2 text-gray-700">
            {restaurantNames.costForTwoMessage}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold mb-2">Menu</h1>
        <ul>
          {restaurantMenuNames.map((item) => (
            <li key={item?.id} className="mb-2 border-b border-gray-300 pb-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{item?.name}</span>
                <div className="flex items-center">
                  <span className="text-gray-500">{item?.price}</span>
                  <button className="bg-yellow-500 text-white py-1 px-3 rounded-full ml-2 hover:bg-yellow-600 transition duration-200">
                    Add
                  </button>
                </div>
              </div>
              <div className="text-gray-600">{item?.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
