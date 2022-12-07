import React, { Component } from "react";
//state without class constructor
export class Stateex extends Component {
  state = {
    subject: "english",
    rollnumber:this.props.roll
  };

  render() {
    {
      this.state.subject = "maths";
    }
    return <div>{this.state.subject}  {this.state.rollnumber}</div>;
  }
}

export default Stateex;
