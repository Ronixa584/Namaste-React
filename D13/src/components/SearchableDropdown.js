// import React, { useState } from "react";

// const SearchableDropdown = ({ options, value, onChange }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredOptions = options.filter((option) =>
//     option.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <select value={value} onChange={onChange}>
//         {filteredOptions.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default SearchableDropdown;
