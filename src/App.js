import "./styles.css";
import chef from "./Images/chef.jpg";

//vriables
let subject = "JavaScript";
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
  return (
    <main>
      <ul>
        {dishes.map((dish=><li>{dish}</li>))}
      </ul>
    </main>
  );
}

export default function App() {
  return (
    <main>
      <img src={chef} height={200} alt="chef" ></img>
      <div className="App" >
      <h1>Hello {subject.toUpperCase()}</h1>
      <Header name="Anton" year={2025}/>
      <Main dishes={items} />
    </div>
    </main>
    
  );
}
