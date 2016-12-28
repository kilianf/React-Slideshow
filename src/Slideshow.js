import React, { Component } from 'react';
import Controls from './Controls'
import Slides from './Slides'





class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.clickerHandle = this.clickerHandle.bind(this)
    this.sliderMover = this.sliderMover.bind(this)
    this.state = {
      open: false,
      translate: 0,
      slide: 1
    }
  }


  clickerHandle(e){
    e.preventDefault();
    this.setState({
      open : !this.state.open
    })
  }

  sliderMover(e, clicks){
      const increment = (100 / this.props.slideshow.length).toFixed(2);
      let current = '';
      let old = this.state.translate;
      let buttonCheck = e.target.classList.contains('previous');

      if (buttonCheck && this.state.slide > 1) {
        this.setState({ 
          translate: old + Math.abs(increment),
          slide: this.state.slide - 1
        })
      } else if (!buttonCheck && this.state.slide < this.props.slideshow.length) {
        this.setState({ 
          translate: old + -Math.abs(increment),
          slide: this.state.slide + 1
        })
      }


  }

  render() {

    let opened = this.state.open ? 'open' : 'close';

    return (
      <div className={`slider ${opened}`}>
        <h2 className="slideshow-title">The Great Outdoors</h2>
        <div className="center">
          <input onClick={this.clickerHandle} className="button" type="button" value="Begin slideshow" />
        </div>
        <p className="slideNumber">{this.state.slide} / {this.props.slideshow.length}</p>
        <button className="slideshow-close" onClick={this.clickerHandle} >Close</button>
        <Slides slides={this.props.slideshow} move={this.state.translate} length={this.props.slideshow.length} />
        <Controls onClick={this.sliderMover} />
      </div>
    )
  }


}

export default Slideshow;