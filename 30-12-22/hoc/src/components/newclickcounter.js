import React, { Component } from "react";
import UpdateComponent from "./withcounter";

class NewClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>clicked {count} times</button>
      </div>
    );
  }
}
export default UpdateComponent(NewClickCounter,1);
