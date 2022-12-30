import React, { Component } from "react";

export default class Clickcounter extends Component {
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
    return (
      <div>
        <button onClick={this.incrementCount}>
          clicked {this.state.count} times
        </button>
      </div>
    );
  }
}
