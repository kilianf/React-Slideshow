import React, { Component } from 'react';

class Callback extends Component {
 

  render() {

    let arr = [];
    const num = this.props.numTimes

    for(let i = 0; i < num; i++) {
      arr.push(this.props.children(i));
    }

    return (
      <ul>{arr}</ul>
    );
  }
}

export default Callback;

