import React, { Suspense, lazy, useState } from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import{RouterProvider, Outlet} from "react-router-dom";
import useAppRouter from "./utils/useAppRouter";

//Lazy loading or chunking
//This is chunking, code splitting, Dynamic Bundling, Lazy Loading
//This will generate two js file when clicking on Instamart
//Upon Deamand Loading -> upon render -> react suspend loading first time
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";


export const AppLayout = () =>{
  const [user,setUser] = useState({
    name:"Aniket",
    email:"asp@gmail.com",
  });

  return (
    //This provider will override the context value
    <>
      <Provider store={store}>
        <userContext.Provider value={{ user: user, setUser: setUser }}>
          {/* <React.Fragment> */}
          <Header />
          <Outlet />
          <Footer />
          {/* </React.Fragment> */}
        </userContext.Provider>
      </Provider>
    </>
  );
};

//Custome Hook
const appRouter = useAppRouter();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
