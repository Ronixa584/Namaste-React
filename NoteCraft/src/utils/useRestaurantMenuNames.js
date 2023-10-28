// //Not used in main code

// import { useState,useEffect } from "react";

// const useRestaurantMenuNames = (id_R) =>{
//   const [restaurantMenuNames, setRestaurantMenuNames] = useState([]);
//   const [restaurantMenuNamesdetail, setRestaurantMenuNamesDetail] = useState();

//   useEffect(() => {
//     getRestaurantInfo(id_R);
//   }, [id_R]); //No need to add id_R .Just check it??

//   async function getRestaurantInfo() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=" +
//         id_R +
//         "&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     console.log(json);

//       const menuItemsData =
//         json?.data?.cards
//           ?.find((x) => x.groupedCard)
//           ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
//           ?.filter(
//             (x) =>
//               x["@type"] ==
//               "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//           )
//           ?.map((x) => x.itemCards)
//           .flat()
//           .map((x) => x.card?.info) || [];

//       const uniqueMenuItems = [];
//       menuItemsData.forEach((item) => {
//         if (!uniqueMenuItems.find((x) => x.id === item.id)) {
//           uniqueMenuItems.push(item);
//         }
//       });

//       setRestaurantMenuNames(uniqueMenuItems);
//       setRestaurantMenuNamesDetail(json);
//   }
//   return [restaurantMenuNames,restaurantMenuNamesdetail];

// };

// export default useRestaurantMenuNames;