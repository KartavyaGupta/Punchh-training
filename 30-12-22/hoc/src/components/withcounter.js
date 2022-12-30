import React from "react";
import { Component } from "react";
const UpdateComponent = (OriginalComponent,incrementNumber) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    //   console.log(this);
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
        console.log(this.props);
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {... this.props}
        />
      );
    }
  }
  return NewComponent;
};
export default UpdateComponent;
