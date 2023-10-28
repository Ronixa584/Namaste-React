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






// import React from "react";
// import { useParams } from "react-router-dom";
// import { IMG_CDN_URL } from "../contants";
// import Shimmer from "./Shimmer";
// import useRestaurantNames from "../utils/useRestaurantNames";
// import { addItem } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";


// const RestaurantMenu = () => {
//   const { id_R } = useParams();

//   const [restaurantNames, restaurantMenuNames] = useRestaurantNames(id_R);

//   // console.log(restaurantNames);  //Resturant image and location
//   console.log(restaurantMenuNames);

//   const dispatch = useDispatch();

//   const addFoodItem = (item) => {
//     dispatch(addItem(item));
//   }

//   // const img_id = // Assuming jsonData is your JSON data
// // const imageId = .cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.imageId;


//   if (!restaurantNames) {
//     return <Shimmer />;
//   }

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-lg bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300">
//       <div className="mb-4 flex justify-center items-center">
//         <div className="w-1/2">
//           <img
//             src={IMG_CDN_URL + restaurantNames.cloudinaryImageId}
//             alt={restaurantNames.name}
//             className="w-96 h-96 rounded-lg"
//           />
//         </div>
//         <div className="ml-4">
//           <h1 className="text-2xl font-bold mb-2">{restaurantNames.name}</h1>
//           <div className="text-gray-500">
//             {restaurantNames.areaName}, {restaurantNames.city}
//           </div>
//           <div className="mt-2">
//             <span className="bg-yellow-400 py-1 px-2 rounded-md text-white">
//               {restaurantNames.avgRating} stars
//             </span>
//           </div>
//           <div className="mt-2 text-gray-700">
//             {restaurantNames.costForTwoMessage}
//           </div>
//         </div>
//       </div>

//       <div className="mt-4 border border-black">
//         <h1 className="text-xl font-bold mb-2 flex justify-center items-center">
//           Menu
//         </h1>
//         <ul className="p-16">
//           {restaurantMenuNames.map((item) => (
//             <li key={item?.id} className="mb-2 border border-black pb-2">
//               <div className="flex justify-between items-center ">
//                 {item?.itemAttribute.vegClassifier === "VEG" ? (
//                   <span className="font-semibold">VEG</span>
//                 ) : (
//                   <span className="font-semibold">Non VEG</span>
//                 )}
//                 <span className="bg-amber-400 py-1 px-2 rounded-md">
//                   <b className="text-white">
//                     {item?.ratings.aggregatedRating.rating} stars
//                   </b>
//                 </span>

//                 <span className="font-semibold">{item?.name}</span>
//                 <div className="flex items-center">
//                   <span className="text-gray-500">{item?.price / 100}</span>
//                   <button
//                     onClick={() => addFoodItem(item)}
//                     className="bg-yellow-500 text-white py-1 px-3 rounded-full ml-2 hover:bg-yellow-600 transition duration-200"
//                   >
//                     Add
//                   </button>
//                 </div>
//               </div>
//               <div className="flex justify-between">
//                 <div className="text-gray-600">{item?.description}</div>
//                 <div className="p-4 m-4 rounded-lg shadow-lg ">
//                   <img
//                     src={IMG_CDN_URL + item?.imageId}
//                     alt={name}
//                     className="w-40 h-24"
//                   />
//                 </div>
//               </div>
//             </li>
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
import Shimmer2 from "./Shimmer2";
import useRestaurantNames from "../utils/useRestaurantNames";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id_R } = useParams();
  const [restaurantNames, restaurantMenuNames] = useRestaurantNames(id_R);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurantNames) {
    return <Shimmer2 />;
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

      <div className="resturantcard-list flex flex-wrap place-content-evenly ">
        <h1 className="text-xl font-bold mb-2 flex justify-center items-center">
          Menu
        </h1>

        <div className="">
          <ul className="resturantcard-list flex flex-wrap place-content-evenly">
            {restaurantMenuNames.map((item) => (
              <li
                key={item?.id}
                className="w-64 p-4 m-4 bg-white rounded-lg shadow-lg hover:scale-95 transform transition-transform duration-300"
              >
                <div>
                  <div className="flex justify-evenly">
                    <span className="bg-amber-400 py-1 px-2 rounded-md">
                      <b className="text-white">
                        {item?.ratings.aggregatedRating.rating} stars
                      </b>
                    </span>
                    <span className="text-gray-500">
                      Rs.{(item?.price / 100).toFixed(2)}
                    </span>
                    <button
                      onClick={() => addFoodItem(item)}
                      className="bg-yellow-500 text-white py-1 px-3 rounded-full ml-2 hover:bg-yellow-600 transition duration-200"
                    >
                      Add
                    </button>
                  </div>
                  <div className="mt-2">
                    {/* <div className="text-gray-600">{item?.description}</div> */}
                    <div className="p-4 m-4 rounded-lg shadow-lg">
                      <img
                        src={IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex justify-evenly">
                    <span
                      className={`font-semibold ${
                        item?.itemAttribute.vegClassifier === "VEG"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item?.itemAttribute.vegClassifier === "VEG"
                        ? "VEG"
                        : "Non VEG"}
                    </span>
                    <span className="font-semibold">{item?.name}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
