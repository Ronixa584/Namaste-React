import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    // <h1>Food Kingdom </h1>
    <a href="/">
      <img
        className="logo"
        alt="LOGO"
        //src="https://play-lh.googleusercontent.com/HnUXLGXiXi0Fec5qt9Ag-CI-A567XkJamEcPnY9qDuodXsdAYu_T2UL4HEP3bMyvY5M"
        src={logo}
      ></img>
    </a>
  );
};

const loggedInUser = () => {
  return false;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">about</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
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

export default Header;
