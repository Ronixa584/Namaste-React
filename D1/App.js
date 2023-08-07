//Create the HTML element using react
const heading1 = React.createElement("h1",{id:"h1_id"},"Heading1");
const heading2 = React.createElement("h2",{id:"h2_id"},"Heading2");
const container = React.createElement("div",{id:"container"},[heading1,heading2]); 
// console.log(heading);
/* <h2 id:"h1_id">Heading1</h2> */
//SO this attributes in HTML are called props in react
//For production we need optimization,bundle,minification,etc


const root = ReactDOM.createRoot(document.getElementById("root"));//find location to place react element(i.e heading for this eg) in DOM

root.render(container);

