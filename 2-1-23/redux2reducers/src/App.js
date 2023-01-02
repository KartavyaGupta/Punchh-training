import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/cakecontainer";
import { Provider } from "react-redux";
import store1 from "./redux/store";
import Icecreamcontainer from "./components/icecreamcontainer";
function App() {
  return (
    <Provider store={store1}>
      <div className="App">
        <CakeContainer />
        <Icecreamcontainer />
      </div>
    </Provider>
  );
}

export default App;
