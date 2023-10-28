//Shimmer for card and search bar
import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-start">
      {/* Shimmer for Search Bar */}
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="p-5 flex space-x-16">
            <div className="shimmer-search-bar w-48 h-9 bg-gray-300 p-2 m-2 rounded-md shadow-xl">
              <div style={{ position: "relative", paddingBottom: "60%" }}>
                {/* <div className="absolute w-full h-full animate-pulse bg-gray-400 rounded-lg"></div> */}
              </div>
            </div>

            {/* Shimmer for Search Button */}
            <div className="shimmer-search-btn w-16 h-9 bg-gray-300 p-2 m-2 rounded-md shadow-xl">
              <div style={{ position: "relative", paddingBottom: "60%" }}>
                {/* <div className="absolute w-full h-full animate-pulse bg-gray-400 rounded-md"></div> */}
              </div>
            </div>

            <div className="shimmer-search-bar w-48 h-9 bg-gray-300 p-2 m-2 rounded-lg shadow-lg">
              <div style={{ position: "relative", paddingBottom: "60%" }}>
                {/* <div className="absolute w-full h-full animate-pulse bg-gray-400 rounded-lg"></div> */}
              </div>
            </div>

            {/* Shimmer for Search Button */}
            <div className="shimmer-search-btn w-16 h-9 bg-gray-300 p-2 m-2 rounded-md shadow-lg">
              <div style={{ position: "relative", paddingBottom: "60%" }}>
                {/* <div className="absolute w-full h-full animate-pulse bg-gray-400 rounded-md"></div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap place-content-evenly">
          {/* Shimmer for Cards */}
          {Array(20)
            .fill("")
            .map((e, index) => (
              <div
                key={index}
                className="shimmer-card w-64 p-4 m-4 bg-gray-300 rounded-lg shadow-lg"
              >
                <div style={{ position: "relative", paddingBottom: "60%" }}>
                  <div className="absolute w-full h-full animate-pulse bg-gray-400 rounded-t-lg"></div>
                </div>
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-xl font-bold mb-2 animate-pulse bg-gray-400 h-8 w-1/2 rounded-md"></div>
                    <div className="mt-2">
                      <div className="text-black animate-pulse bg-gray-400 h-4 w-1/3 rounded-md"></div>
                    </div>
                    <div className="h-16 overflow-y-auto">
                      {/* <div className="text-gray-500 text-sm animate-pulse bg-gray-400 h-4 rounded-md w-3/4"></div>
                  <div className="text-gray-500 text-sm animate-pulse bg-gray-400 h-4 rounded-md w-2/3"></div> */}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="bg-amber-400 py-1 px-2 rounded-md animate-pulse bg-gray-400 h-4 w-1/4"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;


























// import React from "react";

// // Shimmer card to display with animation
// const CardShimmer = () => {
//   return (
//     <div className="shimmer-card">
//       <div className="shimmer-img h-15 bg-gray-400 animate-shimmer"></div>
//       <div className="shimmer-title h-15 bg-gray-400 animate-shimmer"></div>
//       <div className="shimmer-tags h-15 bg-gray-400 animate-shimmer"></div>
//       <div className="shimmer-details h-15 bg-gray-400 animate-shimmer"></div>
//     </div>
//   );
// };

// export const MenuShimmer = () => {
//   return (
//     <div className="restaurant-menu">
//       <div className="restaurant-summary bg-gray-400 animate-shimmer">
//         <img className="shimmer-img h-15 bg-gray-400 animate-shimmer" />
//         <div className="restaurant-summary-details">
//           <h2 className="shimmer-w40 h-15 bg-gray-400 animate-shimmer"></h2>
//           <p className="shimmer-w20 h-15 bg-gray-400 animate-shimmer"></p>
//           <div className="shimmer-w60 h-15 bg-gray-400 animate-shimmer"></div>
//         </div>
//       </div>

//       <div className="restaurant-menu-content">
//         <div className="menu-items-container">
//           <div className="menu-title-wrap">
//             <h3 className="shimmer-w40 h-15 bg-gray-400 animate-shimmer"></h3>
//             <p className="shimmer-w20 h-15 bg-gray-400 animate-shimmer"></p>
//           </div>
//           <div className="menu-items-list">
//             {Array(4)
//               .fill("")
//               .map((element, index) => (
//                 <div className="shimmer-menu-card" key={index}>
//                   <div className="shimmer-item-details">
//                     <h3 className="shimmer-w40 h-15 bg-gray-400 animate-shimmer"></h3>
//                     <p className="shimmer-w20 h-15 bg-gray-400 animate-shimmer">
//                       {" "}
//                     </p>
//                     <p className="shimmer-w60 h-15 bg-gray-400 animate-shimmer"></p>
//                   </div>
//                   <div className="shimmer-img-wrapper">
//                     <img className="shimmer-img h-15 bg-gray-400 animate-shimmer" />
//                     <div className="shimmer-btn h-15 bg-gray-400 animate-shimmer">
//                       {" "}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       {/* create a new Array instance using Array() constructor and map through every element of the array */}
//       {Array(20)
//         .fill("")
//         .map((element, index) => {
//           return <CardShimmer key={index} />;
//         })}
//     </div>
//   );
// };

// export default Shimmer;

