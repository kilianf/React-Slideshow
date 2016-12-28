import React, { Component } from 'react';


function Items(props) {
	let background = require('../grunt-assets/img/' + props.thing.url);
	let cssProps = {
		backgroundImage: `url(${background})`
	}
	return <li style={ cssProps } key={props.ind}></li> 
	// {props.thing.url}
}

class Slides extends Component {
	render(){

		var mover = this.props.move

		var ulStyle = {
		  transform: "translate(" + mover + "%)",
		  width: this.props.length * 100 + "vw"
		};

		return (
			<ul style={ ulStyle }>
				{this.props.slides.map((item, index) => 
					<Items thing={item} key={index} ind={index} />
				)}				
			</ul>
		)
	}
}

export default Slides;