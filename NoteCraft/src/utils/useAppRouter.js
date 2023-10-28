import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../App";
import Body from "../components/Body";
import About from "../components/About";
import Profile from "../components/ProfileFunctional";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import RestaurantMenu from "../components/ResturantMenu";
import { Suspense } from "react";
import Instamart from "../components/Instamart";
import Shimmer from "../components/Shimmer";

const useAppRouter = () => {
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
          path: "/about",
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <About />
            </Suspense>
          ),
          children: [
            {
              path: "profile",
              element: <Profile />,
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
        {
          path: "/instamart",
          element: (
            <Suspense fallback={<Shimmer />}>
              <Instamart />
            </Suspense>
          ),
        },
        {
          path: "/city/:cityName",
          element:<Body />,
        },
      ],
    },
  ]);

  return appRouter;
};

export default useAppRouter;
