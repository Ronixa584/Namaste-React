
// import { IMG_CDN_URL } from "../contants";

// //Destructuring
// const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
//   return (
//     <div className="card w-56 p-5 m-5 shadow-lg shadow-green-400">
//       <img src={IMG_CDN_URL + cloudinaryImageId} />
//       <h2 className="font-bold">{name}</h2>
//       <h3>{description}</h3>
//       <h4>Rs: {price/100}</h4>
//     </div>
//   );
// };

// export default FoodItem;
// // 




import { IMG_CDN_URL } from "../contants";
// import FoodItem from './FoodItem';

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {

  return (
    <div className="w-64 p-4 m-4 bg-white rounded-lg shadow-lg hover:scale-95 transform transition-transform duration-300">
      {/* <div style={{ position: "relative", paddingBottom: "60%" }}>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="absolute w-full h-full object-cover rounded-t-lg"
        />
      </div> */}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <div className="mt-2">
            {/* <span className="bg-amber-400 py-1 px-2 rounded-md"> */}
            <b className="text-black">{description}</b>
            {/* </span> */}
          </div>
        </div>

        <div className="mt-2">
          <span className="bg-amber-400 py-1 px-2 rounded-md">
            <b className="text-white">{price}</b> Rs
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;