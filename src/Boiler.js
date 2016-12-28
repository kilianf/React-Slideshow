import React, { Component } from 'react';
import Callback from './Callback';

class Boiler extends Component {
  constructor(props){
    super(props)
    this.tempCheck = this.tempCheck.bind(this);
    this.state = { 
      value: '',
      temperature: this.props.temp
    }
  }



  tempCheck(){
    this.setState({temperature: this.props.temp})
    console.log('something')
  }

  render() {
    let tempy = 0;

    this.props.temp > 10 ? tempy = <h2>it be bigger</h2> : tempy = <h2>it be smaller</h2>

    return (
      <div className="App">
        {this.props.left}
        {this.props.children}
        {tempy}
        <Callback numTimes={10} >
          { (index) => <li key={index}>This has happened {index} times</li> }
        </Callback>
      </div>
    );
  }
}

export default Boiler;
