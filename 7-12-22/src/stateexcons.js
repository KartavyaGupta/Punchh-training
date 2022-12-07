import React, { Component } from 'react'
//class component using constructor

export class Stateexcons extends Component {
  constructor(){
    super();
    this.state={
        roll123:123
    }
  }
    render() {
    return (
      <div>{this.props.name} {this.state.roll123}</div>
    )
  }
}

export default Stateexcons;