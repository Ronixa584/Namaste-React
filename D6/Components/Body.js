import { restaurantList } from "../contants";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

    
function filterData(searchInput,restaurants){
    const filterData = restaurants.filter((restaurant) => 
        restaurant.info.name.includes(searchInput)
    );
    return filterData;
}


const Body = () => {
  const [searchInput, setSearchInput] = useState(); //returns = [variable name,function to update the varaible]
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
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
            const data = filterData(searchInput, restaurants); //Input and list_of_hotels
                //Update the state
                setRestaurants(data);

          }}
        >
          Search
        </button>
      </div>

      <div className="resturantcard-list">
        {restaurants.map((restaurant) => {
          return (
            <ResturantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;