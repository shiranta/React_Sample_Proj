import "./styles.css";

//vriables
let subject = "JavaScript";

export default function App() {
  return (
    <div className="App">
      <h1>Hello {subject.toUpperCase()}</h1>
    </div>
  );
}
