import React, { Component } from 'react'
export class Lifecycle extends Component {
    state={
        
    }
    constructor(){
        super();
        console.log("in constructor");
    }
    static getDerivedStateFromProps(){
        console.log("in getDerivedStateFromProps");
        return null;
    }
  render() {
    console.log("component render method")
    return (

        <div>lifecycle</div>
    )
  }
  componentDidMount(){
    console.log("component mounteds")
  }
}

export default Lifecycle;