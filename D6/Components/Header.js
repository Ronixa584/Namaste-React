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

export default Header