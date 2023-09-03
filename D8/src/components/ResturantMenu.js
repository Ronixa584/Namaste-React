import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { id_R } = params;

  //OR

  // const { id } = useParams();
  // console.log(params);

  const [restaurantNames, setRestaurantNames] = useState([null]);
  const [restaurantMenuNames, setRestaurantMenuNames] = useState([]);

  useEffect(() => {
    getRestaurantInfo(id_R);
  }, [id_R]); //No need to add id_R .Just check it??

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=" +
        id_R +
        "&catalog_qa=undefined&submitAction=ENTER"
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=23719&catalog_qa=undefined&submitAction=ENTER"+id
    );
    const json = await data.json();
    console.log(json);
    setRestaurantNames(json?.data?.cards[0]?.card?.card?.info);
    // setRestaurantMenuNames2(json?data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.info);

    // setRestaurantMenuNames(

    const menuItemsData =
      json?.data?.cards
        ?.find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];
    // );

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });

    setRestaurantMenuNames(uniqueMenuItems);
  }

  // if(!restaurantNames){
  //   return <Shimmer/>
  // }

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
        {console.log(Object.values(restaurantMenuNames))}
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
