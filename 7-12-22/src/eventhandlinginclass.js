import React, { Component } from "react";

export class Eventhandlinginclass extends Component {
  constructor() {
    super();
    // console.log(this);
    this.newhandleclick = this.newhandleclick.bind(this);
    this.state={
        name:"slim shady"
    }
  }
  newhandleclick() {
    console.log("button click", this);
  }
  handleclick = () => {
    console.log("button clicked", this);
  };
  render() {
    return (
      <>
        <div>eventhandlinginclass</div>
        <button onClick={this.handleclick}>click me!</button>
        <button onClick={this.newhandleclick}>click me!</button>
        <p>hi my name is {this.state.name}</p>
      </>
    );
  }
}

export default Eventhandlinginclass;
