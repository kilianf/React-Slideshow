import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './Slideshow'

// import Thing from './Thing';
import '../grunt-assets/css/main.css';



const slides = [
  { name: "The Barn", url: "building.jpg" },
  { name: "The Street", url: "street.jpg" },
  { name: "The Holmes", url: "holmes.jpg" },
  { name: "The Trees", url: "trees.jpg" },
]



ReactDOM.render(
  <Slideshow slideshow={slides} />,
  document.getElementById('root')
);
