import React, { Component } from "react";
import react from "react";
import reactDOM from "react-dom";
import NewHello from './newhello.js'
import Myparent from './myparent.js'
import Mystyle from './mystyle.js'

let el_usingjsx = <h1>Hello world using just jsx</h1>;
let el_usingcreatereactelement = React.createElement(
  "h2",
  null,
  "hello world using create react element"
);

const App_new = () => {
  return <h1>hello world using function component</h1>;
};

class App extends Component {
  render() {
    return (
      <div>
        {el_usingjsx}
        {el_usingcreatereactelement}
        <App_new />
        <h1>hello world using class component</h1>
        <hr></hr>
        <NewHello />
        <hr></hr>
        <Myparent/>
        <hr></hr>
        <Mystyle />
      </div>
    );
  }
}

export default App;
export { el_usingcreatereactelement, el_usingjsx };