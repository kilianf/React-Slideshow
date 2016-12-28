import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';



class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inp: 'Blank'
    }
  }

  updateText(e, props){
    this.setState({inp: e.target.value})
    this.props.addItem(e.target.value);
    console.log(e.target.value, props)
  }

  handleClick(props){
    console.log(props)
    this.props.addItem('ed');
  }

  render() {
    return (
      <div>
        <h1>Me Kilian</h1>
        <button onClick={() => this.handleClick()}>Adder</button>
        <input value={this.state.inp} onChange={(e, props) => this.updateText(e, props) }></input>
      </div>
    );
  }
}

export default Phone;
