import React, { Component } from "react";
import Mychild from "./mychild.js";
import Mychildusingclass from "./mychildusingclass.js";
const Myparent = () => {
  return <div>
    <Mychild name="rahul" roll="2013"/>
    <Mychildusingclass name="rahul" roll="2013"/>
  </div>;
};
export default Myparent;
