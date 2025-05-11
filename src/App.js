import "./styles.css";

//vriables
let subject = "JavaScript";
function Header() {
  return (
    <header>
      <p>This is a sub componemt of App componemt.</p>
    </header>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello {subject.toUpperCase()}</h1>
      <Header/>
    </div>
  );
}
