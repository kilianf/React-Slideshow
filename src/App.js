import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clicker(e,index){
    console.log(e.target,index)
    this.setState({index:index})
  }

  render() {

    var self = this,
        indexOf = this.state.index,
        classToAdd = '';

    return (
      <ul>
        { this.props.menu.map(function(item,index,arr){
           var arr = arr;
          return <li onClick={ (e) => self.clicker(e,index) } className={ arr[indexOf] === item ? 'focused' : ''  }>{item}</li>
        }) }
      </ul>
    );
 }
}

export default App;