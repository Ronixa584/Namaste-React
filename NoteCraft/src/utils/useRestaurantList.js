// import { useState, useEffect } from "react";

// const useRestaurantList = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [allRestaurants, setAllRestaurants] = useState([]);

//   useEffect(() => {
//     //API call
//     getRestaurants();
//   }, []);

//   async function getRestaurants() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     console.log(json);

//     setAllRestaurants(
//       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredRestaurants(
//       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );

//     // if(allRestaurants.length === 0){
//     //       setAllRestaurants(
//     //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     // );
//     // setFilteredRestaurants(
//     //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     // );
//     // }
//     //Whenever Images not load just change index
//     // data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
//     // 2,4
//   }

//   return [
//     searchInput,
//     setSearchInput,
//     filteredRestaurants,
//     setFilteredRestaurants,
//     allRestaurants,
//   ];

// }

// export default useRestaurantList



















// import { useState, useEffect } from "react";

// const useRestaurantList = (selectedCity) => {
//   const [searchInput, setSearchInput] = useState("");
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [allRestaurants, setAllRestaurants] = useState([]);

//   useEffect(() => {
//     // API call
//     getRestaurants(selectedCity);
//   }, [selectedCity]);

//   async function getRestaurants(city) {
//     const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${city.latitude}&lng=${city.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

//     try {
//       const data = await fetch(apiUrl);
//       const json = await data.json();
//       console.log(json);

//       setAllRestaurants(
//         json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants
//       );
//       setFilteredRestaurants(
//         json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants
//       );
//     } catch (error) {
//       console.error("Error fetching restaurant data: ", error);
//     }
//   }

//   return [
//     searchInput,
//     setSearchInput,
//     filteredRestaurants,
//     setFilteredRestaurants,
//     allRestaurants,
//   ];
// };

// export default useRestaurantList;



//New serach as per city

import { useState, useEffect } from "react";

const useRestaurantList = (selectedCity) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  //This will render page if we change the city
  useEffect(() => {
    // Check if selectedCity is defined before making the API call
    if (selectedCity) {
      getRestaurants(selectedCity);
    }
  }, [selectedCity]);

  async function getRestaurants(city) {
    if (!city) {
      return; // Return early if city is undefined
    }

    const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${city.latitude}&lng=${city.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

    try {
      const data = await fetch(apiUrl);
      const json = await data.json();

      console.log("Resturants List :",json);

      setAllRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return [
    searchInput,
    setSearchInput,
    filteredRestaurants,
    setFilteredRestaurants,
    allRestaurants,
  ];
};

export default useRestaurantList;
