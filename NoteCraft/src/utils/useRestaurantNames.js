import { useState ,useEffect} from "react";
const useRestaurantNames = (id_R) => {
  const [restaurantNames, setRestaurantNames] = useState(null);
  const [restaurantMenuNames, setRestaurantMenuNames] = useState([]);
  //IMPORTANT
  // const [restaurantNames, setRestaurantNames] = useState(null);
  // const [restaurantMenuNames, setRestaurantMenuNames] = useState([]);
  //We used two hooks
  //one for updating restaurant id, image, name, city,rating,etc
  //second one for udpdating menulist as per restaurant

  useEffect(() => {
    getRestaurantInfo(id_R);
  }, [id_R]);

  async function getRestaurantInfo() {
    //API for fetching restaurant menu
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=" +
        id_R +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("Resturants Menu List :", json);
    setRestaurantNames(json?.data?.cards[0]?.card?.card?.info);

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

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });

    setRestaurantMenuNames(uniqueMenuItems);
  }
  return [restaurantNames, restaurantMenuNames];
};

export default useRestaurantNames;