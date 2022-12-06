import React, { Component } from "react";
const Mychild = (props) => {
  console.log(props);
  return <div>
    <h1>
      this component is a functional component and props has been passed to it
    </h1>
    <h1>
      {props.name} {props.roll}
    </h1>
  </div>;
};
export default Mychild;
