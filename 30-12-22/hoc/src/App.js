import logo from "./logo.svg";
import "./App.css";
import Clickcounter from "./components/clickcounter";
import Hovercounter from "./components/hovercounter";
import NewHovercounter from "./components/newhovercounter";
import NewClickCounter from "./components/newclickcounter";
function App() {
  return (
    <div className="App" style={{ border: "1px solid black"}}>
      without Hoc
      <div style={{ border: "1px solid black" }}>
        <Clickcounter />
        <Hovercounter />
      </div>
      with HOC
      <div style={{ border: "1px solid black" }}>
        <NewHovercounter name="kartavya" />
        <NewClickCounter />
      </div>
    </div>
  );
}

export default App;
