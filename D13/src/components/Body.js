// import ResturantCard from "./ResturantCard";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import { filterData } from "../utils/helper";
// import useOnline from "../utils/useOnline";
// import useRestaurantList from "../utils/useRestaurantList";

// const Body = () => {
//   //Custom Hooks
//   const [
//     searchInput,
//     setSearchInput,
//     filteredRestaurants,
//     setFilteredRestaurants,
//     allRestaurants,
//   ] = useRestaurantList();

//   const isOnline = useOnline();

//   if (!isOnline) {
//     return <h1>Offline, Please check your internet connection</h1>;
//   }

//   //Not render component(Early return)
//   if (!allRestaurants) return null;

//   // if(filteredRestaurants?.length === 0) return <h1>No match for resturant!!</h1>;

//   return allRestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="Body bg-gradient-to-r from-pink-400 to-yellow-500">
//       <div className="search-container p-5">
//         <input
//           type="text"
//           className="search-input h-8 w-80 bg-white focus:bg-yellow-50"
//           placeholder="search"
//           value={searchInput}
//           onChange={(e) => {
//             setSearchInput(e.target.value);
//           }}
//         />
//         <button
//           className="search-btn p-2 m-2 bg-indigo-600 text-white rounded-md shadow-xl"
//           onClick={() => {
//             //need to filter data
//             const data = filterData(searchInput, allRestaurants); //Input and list_of_hotels
//             //Update the state
//             setFilteredRestaurants(data);
//           }}
//         >
//           Search
//         </button>
//       </div>

//       <div className="resturantcard-list flex flex-wrap place-content-evenly">
//         {filteredRestaurants.map((restaurant) => {
//           return (
//             <Link
//               to={"/restaurant/" + restaurant?.info?.id}
//               key={restaurant?.info?.id}
//             >
//               <ResturantCard {...restaurant.info} />
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Body;










// //Enter button
// import ResturantCard from "./ResturantCard";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import { filterData } from "../utils/helper";
// import useOnline from "../utils/useOnline";
// import useRestaurantList from "../utils/useRestaurantList";

// const Body = () => {
//   // Custom Hooks
//   const [
//     searchInput,
//     setSearchInput,
//     filteredRestaurants,
//     setFilteredRestaurants,
//     allRestaurants,
//   ] = useRestaurantList();

//   const isOnline = useOnline();

//   if (!isOnline) {
//     return <h1>Offline, Please check your internet connection</h1>;
//   }

//   // Not render component (Early return)
//   if (!allRestaurants) return null;

//   // if(filteredRestaurants?.length === 0) return <h1>No match for restaurant!!</h1>;

//   const handleSearch = () => {
//     // Need to filter data
//     const data = filterData(searchInput, allRestaurants); // Input and list_of_hotels
//     // Update the state
//     setFilteredRestaurants(data);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       // Trigger search when Enter key is pressed
//       handleSearch();
//     }
//   };

//   return allRestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="Body bg-gradient-to-r from-pink-400 to-yellow-500  ">
//       <div className="search-container p-5">
//         <input
//           type="text"
//           className="search-input h-8 w-80 bg-white focus:bg-yellow-50"
//           placeholder="search"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           onKeyPress={handleKeyPress} // Trigger search on Enter key press
//         />
//         <button
//           className="search-btn p-2 m-2 bg-indigo-600 text-white rounded-md shadow-xl"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>

//       <div className="resturantcard-list flex flex-wrap place-content-evenly">
//         {filteredRestaurants.map((restaurant) => (
//           <Link
//             to={"/restaurant/" + restaurant?.info?.id}
//             key={restaurant?.info?.id}
//           >
//             <ResturantCard {...restaurant.info} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;









//Serach by City

import React, { useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // Import useParams
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantList from "../utils/useRestaurantList";
import { cities } from "../contants";
import SearchableDropdown from './SearchableDropdown'; // Import the SearchableDropdown component



const Body = () => {
  const isOnline = useOnline();
  const navigate = useNavigate();


  const { cityName } = useParams(); // Get the selected city from route parameters

  //Find the selected city object based on the route parameter
  // const selectedCity = cities.find((city) => city.name === cityName);
  let selectedCity = cities.find((city) => city.name === cityName);

  // If cityName is undefined or not found in cities, set the default city to Pune
  if (!selectedCity) {
    selectedCity = cities.find((city) => city.name === "Pune");
  }

  // console.log("Selected City is ", selectedCity);

  // Custom Hooks
  const [
    searchInput,
    setSearchInput,
    filteredRestaurants,
    setFilteredRestaurants,
    allRestaurants,
  ] = useRestaurantList(selectedCity);


  if (!isOnline) {
    return <h1>Offline, Please check your internet connection</h1>;
  }

  // Not render component (Early return)
  if (!allRestaurants){
    return(
      <div>No Service Available</div>
    );
  };

  const handleSearch = () => {
    // Need to filter data
    const data = filterData(searchInput, allRestaurants);
    // Update the state
    setFilteredRestaurants(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Trigger search when Enter key is pressed
      handleSearch();
    }
  };

  const [chosenCity, setChosenCity] = useState(""); // Change 'selectedCity' to 'chosenCity'
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);

  const handleCityChange = (e) => {
    const newChosenCity = e.target.value;
    setChosenCity(newChosenCity);
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && chosenCity) {
      navigate(`/city/${chosenCity}`);
    }
  };
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body bg-gradient-to-r from-pink-400 to-yellow-500">
      {/* <slider/> */}
      <div className="search-container p-5">
        <input
          type="text"
          className="search-btn p-2 m-2 bg-yellow-200 text-black rounded-md shadow-xl hover:bg-emerald-400 transition"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress} // Trigger search on Enter key press
        />
        <button
          className="search-btn p-2 m-2 bg-indigo-600 text-white rounded-md shadow-xl"
          onClick={handleSearch}
        >
          Search
        </button>

        {/* <select
          className="city-select p-2 m-2 bg-indigo-600 text-white rounded-md shadow-xl"
          value={cityName} // Use cityName from route parameters
          onChange={(e) => {
            // Update the route when the city is changed
            const newCityName = e.target.value;
            // Use React Router's Link to navigate to the selected city
            // window.location.href = `/city/${newCityName}`; //Will load entire page
            //OR
            navigate(`/city/${newCityName}`); //Will laod only body
          }}
        
        >
          {cities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select> */}

        {/* <SearchableDropdown
          options={cities.map((city, index) => city.name)}
          value={cityName}
          onChange={(e) => navigate(`/city/${e.target.value}`)}
        /> */}

        <input
          type="text"
          placeholder="Search for a city"
          onChange={handleSearchInputChange}
          onKeyPress={handleEnterKey}
          value={searchQuery}
        />
        <select
          className="city-select p-2 m-2 bg-indigo-600 text-white rounded-md shadow-xl"
          value={chosenCity} // Updated variable name here
          onChange={handleCityChange}
        >
          {filteredCities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div className="resturantcard-list flex flex-wrap place-content-evenly">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            <ResturantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;








