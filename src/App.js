import "./styles.css";
import chef from "./Images/chef.jpg";
import { useState } from "react";
//vriables
let subject = "Kitchen";
function Header({name,year}) {
  //props are used to get data dynamically.
  //props are the parameters of the function.
  //props are the object that contains all the data passed to the component.
  return (
    <header>
      
      <h2>This is {name}'s Kitchen.</h2>
      <p>This is a sub componemt of App componemt.</p>
      <p>CopyRight@: {year}</p>
    </header>
  );
}
const items=["Rice & curry","Kottu","Noodles","Pizza","Burger"];

function Main({dishes}) {
   const [status,setstatus] =useState("Kitchen Open");
      console.log(status);
  //useState is a hook that allows us to use state in functional components.
  //useState returns an array with two elements: the current state and a function to update it.
  return (
    <main>
      <h2>Resturent {status}</h2>
      <ul>
        {dishes.map((dish=><li>{dish}</li>))}
      </ul>
    </main>
  );
}

export default function App() {
 
  return (
    <>
    <div>
        <h2>This is our Menu</h2>
      </div>
    <main>
      
      
      <div className="App" >
      <h1>Hello! Welocome to {subject.toUpperCase()}</h1>

      <img src={chef} height={200} alt="chef" ></img>//add image
      
      
      <Main dishes={items} />
      <Header name="Anton" year={2025}/>
    </div>
    </main>
    </>// By doing a fragmentation we can include divs and other elements
    // without wrapping them in a single parent element.
  );
}
