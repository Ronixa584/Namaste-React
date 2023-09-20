
// const Shimmer = () =>{
//     return (
//       <div className="resturantcard-list">
//         {Array(20)
//           .fill("")
//           .map((e, index) => (
//             <div key={index} className="shimmer-card"></div>
//           ))}
//       </div>
//     );
// };

// export default Shimmer;





const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-start">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card w-48 h-48 bg-gray-300 m-5">
            {/* Specify your card content here */}
          </div>
        ))}
    </div>
  );
};

export default Shimmer;






