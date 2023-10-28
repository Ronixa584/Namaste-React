// import logo from "../assets/img/logo.png";
// import { Link } from "react-router-dom";
// import useAuth from "../utils/useAuth";
// import { useContext } from "react";

// const Title = () => {
//   return (
//     // <h1>Food Kingdom </h1>
//     <a href="/">
//       <img
//         className="h-28 p-2 transition-transform transform hover:scale-105"
//         alt="LOGO"
//         //src="https://play-lh.googleusercontent.com/HnUXLGXiXi0Fec5qt9Ag-CI-A567XkJamEcPnY9qDuodXsdAYu_T2UL4HEP3bMyvY5M"
//         src={logo}
//       ></img>
//     </a>
//   );
// };

// const loggedInUser = () => {
//   return false;
// };

// const Header = () => {
//   //Custome Hook
//   const { isLoggedIn, login, logout } = useAuth();

//   return (
//     // bg-gradient-to-r from-blue-800 to-green-400
//     <div className="flex justify-between bg-gradient-to-b from-violet-500 to-orange-300">
//       <Title />

//       <div className="">
//         <ul className="flex py-10">
//           <li className="px-2">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="px-2">
//             <Link to="/About">About</Link>
//           </li>
//           <li className="px-2">
//             <Link to="/Contact">Contact</Link>
//           </li>
//           <li className="px-2">
//             <Link to="/Cart">Cart</Link>
//           </li>
//           <li className="px-2">
//             <Link to="/Instamart">Instamart</Link>
//           </li>
//         </ul>
//       </div>

//       {isLoggedIn ? (
//         <button onClick={logout}>Logout</button>
//       ) : (
//         <button onClick={login}>Login</button>
//       )}
//     </div>
//   );
// };

// export default Header;







//New 9/11/23
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../utils/useAuth";
import { useSelector } from "react-redux";


const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28 p-2 transition-transform transform hover:scale-105"
        alt="LOGO"
        src={logo}
      ></img>
    </a>
  );
};

const Header = () => {
  const { isLoggedIn, userName,login, logout } = useAuth();

  const cartItems = useSelector(store => store.cart.items);

  console.log(cartItems);

  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-6000 p-4 font-StylishFont md:flex flex-col">
      <div className="container mx-auto flex justify-between items-center">
        <Title />

        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:text-green-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-white hover:text-green-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-white hover:text-green-500 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/Cart"
              className="text-white hover:text-green-500 transition-colors duration-300"
            >
              Cart- {cartItems.length} Items
            </Link>
          </li>
          <li>
            <Link
              to="/Instamart"
              className="text-white hover:text-green-500 transition-colors duration-300"
            >
              Instamart
            </Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded-md"
          >
            Logout{userName}
          </button>
        ) : (
          <button
            onClick={login}
            className="bg-orange-500 text-white hover:bg-orange-400 px-4 py-2 rounded-md"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;


