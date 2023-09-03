
import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
//createBrowserRouter is function used to create routing
//RouterProvider 
import{ createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/ResturantMenu";
import Profile from "./components/Profile";

const AppLayout = () =>{
  return (
    <React.Fragment>
      <Header />
      {/* <Body/> */}
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

//Always write appRouter after AppLayout (Due to hoisting and flow of code)
//Place where we will define what will happen if we click on certain button
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",//about
        element: <About />,
        children:[
          {
          path: "profile",
          element: <Profile/>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id_R",
        element: <RestaurantMenu />,
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //TO render react element
// root.render(<AppLayout />); //TO render react component
root.render(<RouterProvider router={appRouter} />);// router={appRouter} is a prop
// root.render(<About />);





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