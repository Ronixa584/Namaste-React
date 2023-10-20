//Original
// import { IMG_CDN_URL } from "../contants";

// //Destructuring
// const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
//   return (
//     <div className="card w-56 p-5 m-5 shadow-lg shadow-green-400">
//       <img src={IMG_CDN_URL + cloudinaryImageId} />
//       <h2 className="font-bold">{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h4>
//         <span className="bg-amber-400 rounded-sm">
//           {<b className="">{avgRating}</b>} stars
//         </span>
//       </h4>
//     </div>
//   );
// };

// export default ResturantCard;


//All cards aligned PERFECT
// import { IMG_CDN_URL } from "../contants";

// const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
//   return (
//     <div className="w-64 p-4 mx-4 my-4 bg-white rounded-lg shadow-lg">
//       <img
//         src={IMG_CDN_URL + cloudinaryImageId}
//         alt={name}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-2">{name}</h2>
//         <h3 className="text-gray-500 text-sm">{cuisines.join(", ")}</h3>
//         <div className="mt-2">
//           <span className="bg-amber-400 py-1 px-2 rounded-md">
//             <b className="text-white">{avgRating}</b> stars
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResturantCard;




//All card same size but not good
// import { IMG_CDN_URL } from "../constants";

// const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
//   return (
//     <div className="w-64 h-96 p-4 m-4 bg-white rounded-lg shadow-lg">
//       <img
//         src={IMG_CDN_URL + cloudinaryImageId}
//         alt={name}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-2">{name}</h2>
//         <h3 className="text-gray-500 text-sm">{cuisines.join(", ")}</h3>
//         <div className="mt-2">
//           <span className="bg-amber-400 py-1 px-2 rounded-md">
//             <b className="text-white">{avgRating}</b> stars
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResturantCard;


// //Final
// import { IMG_CDN_URL } from "../contants";

// const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
//   return (
//     <div className="w-64 h-96 p-4 m-4 bg-white rounded-lg shadow-lg hover:scale-95 transform transition-transform duration-300">
//       <img
//         src={IMG_CDN_URL + cloudinaryImageId}
//         alt={name}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-2">{name}</h2>
//         <h3 className="text-gray-500 text-sm">{cuisines.join(", ")}</h3>
//         <div className="mt-2">
//           <span className="bg-amber-400 py-1 px-2 rounded-md">
//             <b className="text-white">{avgRating}</b> stars
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResturantCard;




//Only 2 cusines
import { IMG_CDN_URL } from "../contants";

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  areaName,avgRating,
}) => {
  // Ensure cuisines are limited to 3
  const limitedCuisines = cuisines.slice(0, 2);

  return (
    <div className="w-64 p-4 m-4 bg-white rounded-lg shadow-lg hover:scale-95 transform transition-transform duration-300">
      <div style={{ position: "relative", paddingBottom: "60%" }}>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="absolute w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <div className="mt-2">
            {/* <span className="bg-amber-400 py-1 px-2 rounded-md"> */}
            <b className="text-black">{areaName}</b>
            {/* </span> */}
          </div>
          <div className="h-16 overflow-y-auto">
            {/* Display up to 3 cuisines */}
            {limitedCuisines.map((cuisine, index) => (
              <h3 key={index} className="text-gray-500 text-sm">
                {cuisine}
              </h3>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <span className="bg-amber-400 py-1 px-2 rounded-md">
            <b className="text-white">{avgRating}</b> stars
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;








// //Focus on cards
// import { IMG_CDN_URL } from "../contants";

// const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
//   // Ensure cuisines are limited to 3
//   const limitedCuisines = cuisines.slice(0, 3);

//   return (
//     <div className="w-64 p-4 m-4 bg-white rounded-lg shadow-lg hover:scale-95 transform transition-transform duration-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
//       <div style={{ position: "relative", paddingBottom: "60%" }}>
//         <img
//           src={IMG_CDN_URL + cloudinaryImageId}
//           alt={name}
//           className="absolute w-full h-full object-cover rounded-t-lg"
//         />
//       </div>
//       <div className="p-4 flex flex-col justify-between h-full">
//         <div>
//           <h2 className="text-xl font-bold mb-2">{name}</h2>
//           <div className="h-16 overflow-y-auto">
//             {/* Display up to 3 cuisines */}
//             {limitedCuisines.map((cuisine, index) => (
//               <h3 key={index} className="text-gray-500 text-sm">
//                 {cuisine}
//               </h3>
//             ))}
//           </div>
//         </div>
//         <div className="mt-2">
//           <span className="bg-amber-400 py-1 px-2 rounded-md">
//             <b className="text-white">{avgRating}</b> stars
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResturantCard;
















