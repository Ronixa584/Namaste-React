import { restaurantList } from "../contants";
import ResturantCard from "./ResturantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchInput, setSearchInput] = useState(""); //returns = [variable name,function to update the varaible]  .//Used to rerender UI every time user enter key/charcetrs
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  // console.log("render()");//Type "st" in search bar and check console ,you will see rendering and also DOM rendering
  //console.log(restaurants);//Used to check why search only works one time/first time

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // setRestaurants(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // 2,4
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //Whenever Images not load just change index
    // data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
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
        {/*if(filteredRestaurants?.length === 0) return <h1>No match for resturant!!</h1>;*/}
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
