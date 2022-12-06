import React, { Component } from "react";
class Mychildusingclass extends Component {
  render() {
    return (
      <div>
        <h1>
          this component is a class component and props has been passed to it {this.props.name} {this.props.roll}
        </h1>
      </div>
    );
  }
}
export default Mychildusingclass;
