import React, { Component } from 'react';

function Buttonclick(props){
	return <a onClick={props.click} className={props.buttonName}>{props.buttonName}</a>
}

class Controls extends Component {
	constructor(props) {
		super(props)
		this.buttonClick = this.buttonClick.bind(this);
	}

	buttonClick(e){		
		e.preventDefault();		
		this.props.onClick(e)
	}


	render(){
		return (
			<div className="controls">
				<Buttonclick click={ this.buttonClick } buttonName="previous" /> 
				<Buttonclick click={ this.buttonClick } buttonName="next" /> 
			</div>
		)
	}
}

export default Controls;