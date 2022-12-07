import React, { Component } from 'react'
export class Example extends Component {
    constructor(){
        super();
        this.state={
            name:"rahul",
            roll:123
        }
    }
    handleClick=()=>{
        console.log(this);
        this.setState({name:"kartavya",roll:246})
    }
  render() {
    return (
      <div><button onClick={this.handleClick}>set state</button>
      {this.state.name} {this.state.roll}
      </div>
    )
  }
}

export default Example;