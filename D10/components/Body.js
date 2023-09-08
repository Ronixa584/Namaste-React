import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  //Custom Hooks
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

  //Not render component(Early return)
  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length === 0) return <h1>No match for resturant!!</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter data
            const data = filterData(searchInput, allRestaurants); //Input and list_of_hotels
            //Update the state
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="resturantcard-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <ResturantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
