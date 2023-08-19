
import React from "react"
import ReactDOM from "react-dom/client";
//Default export
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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