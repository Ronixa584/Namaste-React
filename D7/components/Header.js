 import { useState } from "react"; 
 
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
};

const loggedInUser = () =>{
  return false;
};

const Header = () => {
  // const title = "Food KingDom";

  //Array Destructuring
  const [title,settitle] = useState("Food KingDom"); //Intialize with empty value
  
  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />

      <h1>{title}</h1>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
      {/* <button>Login</button>
      <button>SignIN</button> */}
    </div>
  );
};

export default Header 