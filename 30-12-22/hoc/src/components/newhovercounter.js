import React, { Component } from "react";
import UpdateComponent from "./withcounter";
class NewHoverCounter extends Component {

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <div onMouseOver={incrementCount}>
          clicked {count} times
        </div>
      </div>
    );
  }
}
export default UpdateComponent(NewHoverCounter,3);
