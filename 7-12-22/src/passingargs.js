import React, { Component } from "react";
//passing arguments to event handlers

export class Passingargs extends Component {
  state = {
    id: 1,
  };
  handleClick = (e, id) => {
    console.log(e);
    console.log(id);
  };
  handleClickArgs= (e) =>{
    console.log(this)
    this.handleClick(e, this.state.id);
  }
  render() {
    return (
      <>
        <div>passingargs</div>
        <button onClick={this.handleClickArgs}> click me</button>
      </>
    );
  }
}
export default Passingargs;
