
import React from "react"
import ReactDOM from "react-dom/client";


//Create the HTML element using react
//React element
const heading = React.createElement("h1",{id:"h1_id",key:"h1",},"Heading1");
//OR
// const heading1 = <h1 id="title" key="h1">Heading1</h1>;
//OR
const heading1 = (
    <h1 id="title" key="h1" className="">This is JSX</h1>
);



//React Components
const HeaderComponent = () =>{
return <h1>This is functional component</h1>;
}

//OR

const HeaderComponent1 = () => {
  return (
    <div>
      <h1>This is H1 heading</h1>
      <h2>This is H2 heading</h2>
    </div>
  );
}; 

//OR

const HeaderComponent2 = () => (
    <div>
      <h1>This is H1 heading</h1>
      <h2>This is H2 heading</h2>
    </div>
  );
//As there is only one return so don't need of return keyword.This is not react part .This is JS arrow function part.

//Using react element inside react component
//JSX
const heading2 = (
  <h1 id="title" key="h1" className="">
    This is JSX
  </h1>
);

const HeaderComponent3 = () => (
  <div>
    {heading2}
    <h1>This is H1 heading</h1>
    <h2>This is H2 heading</h2>
  </div>
);


//Using react component inside react component i.e component composition
const Heading3 = () =>(
  <h1 id="title" key="h1">
    This is functional component
  </h1>
);

const HeaderComponent4 = () => (
  <div>
    <Heading3/>  
    {Heading3()}  //Normal JS function
    { }  //You can write any JS inside { } brackets
    <h1>This is H1 heading</h1>
    <h2>This is H2 heading</h2>
  </div>
);

//Hackers can use XSS ,beacause anything you sent through {} will get executed
//But JSX is secure ,the process called sanitization



//Its an API in react but its also a function
const root = ReactDOM.createRoot(document.getElementById("root"));//find location to place react element(i.e heading for this eg) in DOM

//async defer
root.render(heading); //TO render react element
root.render(<HeaderComponent4/>); //TO render react component
//Here second render will override first one