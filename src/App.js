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

function Main({dishes ,openstatus}) {
  //dishes is the array of items that we are passing to the Main component.
   

  //useState is a hook that allows us to use state in functional components.
  //useState returns an array with two elements: the current state and a function to update it.
  return (
    <main>
      <h1>our beutiful resturent is{" "}{openstatus ?"open":"close"}</h1>
      
      <ul>
        {dishes.map((dish=><li>{dish}</li>))}
      </ul>
    </main>
  );
}

export default function App() {
 const [status,setstatus] =useState(true);   
   console.log(status);
  
  return (
    <>
    <div>
        <h2>This is our Menu</h2>
      </div>
    <main>
      
      
      <div className="App" >
      <h1>Hello! Welocome to {subject.toUpperCase()}</h1>

      <img src={chef} height={200} alt="chef" ></img>
      <h1>Resturent is currently {""}</h1>
      {status ? "open" : "close"}
      <button onClick={() => setstatus(!status)}>Resturent {""}
        {status ? "close" : "open"}
      </button>

      
      <Main dishes={items} openstatus={status}/>
      
      <Header name="Anton" year={2025}/>
    </div>
    </main>
    </>// By doing a fragmentation we can include divs and other elements
    // without wrapping them in a single parent element.
    //we can pass a useState variable to a child component as a prop.
  );
}
