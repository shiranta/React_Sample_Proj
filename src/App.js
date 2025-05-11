import "./styles.css";

//vriables
let subject = "JavaScript";
function Header({name,year}) {
  //props are used to get data dynamically.
  return (
    <header>
      
      <h2>This is {name}'s Kitchen.</h2>
      <p>This is a sub componemt of App componemt.</p>
      <p>CopyRight@: {year}</p>
    </header>
  );
}

export default function App() {
  return (
    <div className="App" >
      <h1>Hello {subject.toUpperCase()}</h1>
      <Header name="Anton" year={2025}/>
    </div>
  );
}
