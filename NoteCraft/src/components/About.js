import { Outlet } from "react-router-dom";
import ProfileFunction from "./ProfileFunctional";
import ProfileClass from "./ProfileClass";
import React from "react";
import userContext from "../utils/userContext";

//Functional component
// const About = () =>{
//     return (
//       <div>
//         <h1>This is About Page</h1>
//         <p>This is first route for this project</p>
//         {/* <Outlet/> */}
//         <ProfileFunction name={"Avdut"} />
//         <ProfileClass name={"Arjun"} xyz="Anything" />
//       </div>
//     );
// };

//Class component
class About extends React.Component {
  constructor(props){
    super(props);
    console.log("Parent - Constructor");
  }

  componentDidMount(){
    //API calls
    console.log("Parent - ComponentDidMount");
  }
  render() {
    console.log("Parent - Render");
    return (
      <div className="h-[580] bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-violet-500 to-orange-300">
        <h1>This is About Page</h1>
        <userContext.Consumer>
          {/* {(value) => console.log(value)} */}
          {({user}) => <h4 className="font-bold text-xl">{user.name} - {user.email}</h4>}  
        </userContext.Consumer>
        <p>This is first route for this project</p>
        {/* <Outlet/> */}
        <ProfileFunction />
        {/* <ProfileClass name={"First Child"} xyz="Anything" /> */}
        {/* <ProfileClass name={"Second Child"} xyz="Anything" /> */}
      </div>
    );
  }
}

export default About;