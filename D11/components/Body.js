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










//Enter button
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  // Custom Hooks
  const [
    searchInput,
    setSearchInput,
    filteredRestaurants,
    setFilteredRestaurants,
    allRestaurants,
  ] = useRestaurantList();

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, Please check your internet connection</h1>;
  }

  // Not render component (Early return)
  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length === 0) return <h1>No match for restaurant!!</h1>;

  const handleSearch = () => {
    // Need to filter data
    const data = filterData(searchInput, allRestaurants); // Input and list_of_hotels
    // Update the state
    setFilteredRestaurants(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Trigger search when Enter key is pressed
      handleSearch();
    }
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body bg-gradient-to-r from-pink-400 to-yellow-500  ">
      <div className="search-container p-5">
        <input
          type="text"
          className="search-input h-8 w-80 bg-white focus:bg-yellow-50"
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
      </div>

      <div className="resturantcard-list flex flex-wrap place-content-evenly">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
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
