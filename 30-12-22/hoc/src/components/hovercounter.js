import React, { Component } from "react";

export default class Hovercounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount=()=>{
    this.setState((prevState)=>{
        return {count:prevState.count+1}
    })
  }
  render() {
    return <div onMouseOver={this.incrementCount}>hovered {this.state.count} times</div>;
  }
}
