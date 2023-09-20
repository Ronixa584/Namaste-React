import React, { Suspense, lazy } from "react"
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


export const AppLayout = () =>{
  return (
    <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
    </React.Fragment>
  );
};

//Custome Hook
const appRouter = useAppRouter();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
