
import React from "react"
import ReactDOM from "react-dom/client";
import classNames from "classnames";
// import "index.css";


const Title = () => {
  return (
    // <h1>Food Kingdom </h1>
    <a href="/">
      <img
        className="logo"
        alt="LOGO"
        src="https://play-lh.googleusercontent.com/HnUXLGXiXi0Fec5qt9Ag-CI-A567XkJamEcPnY9qDuodXsdAYu_T2UL4HEP3bMyvY5M"
      ></img>
    </a>
  );
}

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Config Driven UI i.e dynamic UI

//Method I :Dynamic Card
// const Body = () => {
//   return (
//     // <h4>Body</h4>
//     //restaurant={restaurantList[0]} is a props/properties
//     <div className="resturantcard-list">
//       {/* {ResturantCard(restaurantList[0])}  */}
//       {/* Above line is same as below.This is just a function call*/}
//       <ResturantCard restaurant={restaurantList[0]} />
//       <ResturantCard restaurant={restaurantList[1]} />
//       <ResturantCard restaurant={restaurantList[2]} />
//       <ResturantCard restaurant={restaurantList[3]} />
//       <ResturantCard restaurant={restaurantList[4]} />
//       <ResturantCard restaurant={restaurantList[5]} />
//       <ResturantCard restaurant={restaurantList[6]} />
//       <ResturantCard restaurant={restaurantList[7]} />
//       <ResturantCard restaurant={restaurantList[8]} />
//       <ResturantCard restaurant={restaurantList[9]} />
//       <ResturantCard restaurant={restaurantList[10]} />
//       <ResturantCard restaurant={restaurantList[11]} />
//     </div>
//   );
// }

// const ResturantCard = (props) => (
//   <div className="card">
//     <img
//       src={
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//         props.restaurant.info?.cloudinaryImageId
//       }
//     />
//     <h2>{props.restaurant.info?.name}</h2>
//     <h3>{props.restaurant.info?.cuisines.join(", ")}</h3>
//     <h4>{props.restaurant.info?.avgRating} stars</h4>
//   </div>
// );


//Method II :Dynamic Card i.e parameters are on the fly
// const Body = () => {
//   return (
//     // <h4>Body</h4>
//     //restaurant={restaurantList[0]} is a props/properties
//     <div className="resturantcard-list">
//       {/* {ResturantCard(restaurantList[0])}  */}
//       {/* Above line is same as below.This is just a function call*/}
//       <ResturantCard restaurant={restaurantList[0]} />
//       <ResturantCard restaurant={restaurantList[1]} />
//       <ResturantCard restaurant={restaurantList[2]} />
//       <ResturantCard restaurant={restaurantList[3]} />
//       <ResturantCard restaurant={restaurantList[4]} />
//       <ResturantCard restaurant={restaurantList[5]} />
//       <ResturantCard restaurant={restaurantList[6]} />
//       <ResturantCard restaurant={restaurantList[7]} />
//       <ResturantCard restaurant={restaurantList[8]} />
//       <ResturantCard restaurant={restaurantList[9]} />
//       <ResturantCard restaurant={restaurantList[10]} />
//       <ResturantCard restaurant={restaurantList[11]} />
//     </div>
//   );
// };

// const ResturantCard = ({restaurant}) => {
//   const {name, cuisines, cloudinaryImageId, avgRating } = restaurant.info;
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           cloudinaryImageId
//         }
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h4>{avgRating} stars</h4>
//     </div>
//   );
// };


//Method III :Dynamic Card i.e Destructuring 
const Body = () => {
  return (
    <div className="resturantcard-list">
      {/* Method I to pass paramenters like we done in normal function i.e the destructuring */}
      {/* <ResturantCard
        restaurant
        name={restaurantList[0].info.name}
        cuisines={restaurantList[0].info.cuisines}
      /> */}

      {/*Method I to pass paramenters i.e the the destructuring */}
      {/* <ResturantCard {...restaurantList[0].info} /> */}

      {restaurantList.map((restaurant) => {
        return <ResturantCard {...restaurant.info} key={restaurant.info.id} />;
      })}
      {/* key={restaurant.info.id} .This key removes warning and it helps in Reconcillation */}
      {/* no key (NOT Great)<<<<<< index key   <<<<<<< unique key(Best Practice) */}
    
    </div>
  );
};

//Destructuring
const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
           cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};



const restaurantList= [
                  {
                    "info": {
                      "id": "507940",
                      "name": "EatFit",
                      "cloudinaryImageId": "8a9029f512e2a7a37a8ed381322cec30",
                      "locality": "Ghole Road",
                      "areaName": "Shivajinagar",
                      "costForTwo": "₹270 for two",
                      "cuisines": [
                        "Chinese",
                        "Healthy Food",
                        "Tandoor",
                        "Pizzas",
                        "North Indian",
                        "Thalis",
                        "Biryani"
                      ],
                      "avgRating": 4.2,
                      "feeDetails": {
                        "restaurantId": "507940",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3800
                      },
                      "parentId": "76139",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "18 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-18 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/eatfit-ghole-road-shivajinagar-pune-507940",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5624",
                      "name": "Subway",
                      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                      "locality": "FC Road",
                      "areaName": "Deccan Gymkhana",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "5624",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3800
                      },
                      "parentId": "2",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-19 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/subway-fc-road-deccan-gymkhana-pune-5624",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23719",
                      "name": "McDonald's",
                      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
                      "locality": "JM Road",
                      "areaName": "Shivajinagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "feeDetails": {
                        "restaurantId": "23719",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3800
                      },
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "21 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-19 01:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mcdonalds-jm-road-shivajinagar-pune-23719",
                      "type": "WEBLINK"
                    }
                  }, 
                  {
                    "info": {
                      "id": "243625",
                      "name": "KFC",
                      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                      "locality": "R Deccan Mall",
                      "areaName": "JM Road",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 4,
                      "feeDetails": {
                        "restaurantId": "243625",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3800
                      },
                      "parentId": "547",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-19 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/kfc-r-deccan-mall-jm-road-pune-243625",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "21001",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "FC Road",
                      "areaName": "Shivajinagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.8,
                      "feeDetails": {
                        "restaurantId": "21001",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3800
                      },
                      "parentId": "721",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-19 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/pizza-hut-fc-road-shivajinagar-pune-21001",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "20058",
                      "name": "SP's Biryani House",
                      "cloudinaryImageId": "b2jeywla2n5b8h25ey1p",
                      "locality": "Tilak Road",
                      "areaName": "Sadashiv Peth",
                      "costForTwo": "₹900 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Indian",
                        "Maharashtrian"
                      ],
                      "avgRating": 4.2,
                      "feeDetails": {
                        "restaurantId": "20058",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4300
                      },
                      "parentId": "192891",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-18 22:55:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/sps-biryani-house-tilak-road-sadashiv-peth-pune-20058",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "42581",
                      "name": "Burger King",
                      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      "locality": "The Pavillion Mall",
                      "areaName": "Shivajinagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 3.9,
                      "feeDetails": {
                        "restaurantId": "42581",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4900
                      },
                      "parentId": "166",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "31 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-19 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "EVERY ITEM",
                        "subHeader": "@ ₹129",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/burger-king-the-pavillion-mall-shivajinagar-pune-42581",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "11887",
                      "name": "Samudra Veg",
                      "cloudinaryImageId": "b7r9runu5yjkfsl20tri",
                      "locality": "Pandurang Colony",
                      "areaName": "Erandwane",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "South Indian"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "11887",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4900
                      },
                      "parentId": "176775",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "27 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-18 23:55:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/samudra-veg-pandurang-colony-erandwane-pune-11887",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5297",
                      "name": "Le Plaisir",
                      "cloudinaryImageId": "jiiy0xlkxs9zmt8nqbbp",
                      "locality": "Prabhat Road",
                      "areaName": "Deccan Gymkhana",
                      "costForTwo": "₹1000 for two",
                      "cuisines": [
                        "European"
                      ],
                      "avgRating": 4.6,
                      "feeDetails": {
                        "restaurantId": "5297",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4300
                      },
                      "parentId": "124544",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-18 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/le-plaisir-prabhat-road-deccan-gymkhana-pune-5297",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "305794",
                      "name": "Barbeque Nation",
                      "cloudinaryImageId": "eizjdmngzyna4mp0xmwm",
                      "locality": "Jangali Maharaj Rd",
                      "areaName": "Deccan Gymkhana",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "North Indian",
                        "Barbecue",
                        "Biryani",
                        "Kebabs",
                        "Mughlai",
                        "Desserts"
                      ],
                      "avgRating": 3.9,
                      "feeDetails": {
                        "restaurantId": "305794",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4300
                      },
                      "parentId": "2438",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "34 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-18 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "15% OFF",
                        "subHeader": "ABOVE ₹1000",
                        "discountTag": "FLAT DEAL",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/barbeque-nation-jangali-maharaj-rd-deccan-gymkhana-pune-305794",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "20154",
                      "name": "Nisarg",
                      "cloudinaryImageId": "kqldoyhvqgq48g5iuqgn",
                      "locality": "Karve Road",
                      "areaName": "Erandwane",
                      "costForTwo": "₹1200 for two",
                      "cuisines": [
                        "Coastal"
                      ],
                      "avgRating": 4.3,
                      "feeDetails": {
                        "restaurantId": "20154",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 5400
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 5400
                      },
                      "parentId": "149328",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-18 23:25:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/nisarg-karve-road-erandwane-pune-20154",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5743",
                      "name": "Madinah",
                      "cloudinaryImageId": "n07bhbglbqthyd45clul",
                      "locality": "Bhawani Peth",
                      "areaName": "Camp Area",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Mughlai",
                        "North Indian",
                        "Chinese",
                        "Biryani"
                      ],
                      "avgRating": 3.9,
                      "feeDetails": {
                        "restaurantId": "5743",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4900
                      },
                      "parentId": "1397",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "27 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-18 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/madinah-bhawani-peth-camp-area-pune-5743",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5107",
                      "name": "Blue Nile",
                      "cloudinaryImageId": "usj6ahnbc4lvrmxlzuee",
                      "locality": "Bund Garden Road",
                      "areaName": "Camp Area",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "5107",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 5400
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 5400
                      },
                      "parentId": "145",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-18 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/blue-nile-bund-garden-road-camp-area-pune-5107",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "394784",
                      "name": "Theobroma",
                      "cloudinaryImageId": "asd7v64r8hjmbx5nivyh",
                      "locality": "Karve Road",
                      "areaName": "Shivajinagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "feeDetails": {
                        "restaurantId": "394784",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4300
                      },
                      "parentId": "1040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-19 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/theobroma-karve-road-shivajinagar-pune-394784",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "32443",
                      "name": "Natural Ice Cream",
                      "cloudinaryImageId": "p8af4xnqjzsei0umtgnn",
                      "locality": "JM Road",
                      "areaName": "Shivajinagar",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "32443",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3800
                      },
                      "parentId": "2093",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-19 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/natural-ice-cream-jm-road-shivajinagar-pune-32443",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "73115",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                      "locality": "Kumar Pacific Mall",
                      "areaName": "Swargate",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Ice Cream"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "73115",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4900
                      },
                      "parentId": "5588",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-18 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-kumar-pacific-mall-swargate-pune-73115",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "33848",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "xxbztze8uhst6gb5jj9j",
                      "locality": "JM Road",
                      "areaName": "Shivajinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "33848",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3800
                      },
                      "parentId": "2233",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "18 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-19 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-jm-road-shivajinagar-pune-33848",
                      "type": "WEBLINK"
                    }
                  }]



const Footer = () => {
  return <h4>Footer</h4>;
};


const AppLayout = () =>{
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //TO render react element
root.render(<AppLayout />); //TO render react component






/*
Header
  Logo
  Nav Items(about,home,etc)
  Cart
Body
  search bar
  ResturantList
    ResturantCard
      Image
      Name
      Rating
      Cusiness
Footer
  links
  Copyrights

*/