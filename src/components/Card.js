import React, { Component } from "react";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      title: "Odin Odinson",
      description: "A very realistic character description",
      imgSrc: require('../assets/odin.png'),
    }
  }
  render() {
    const { title, description, imgSrc } = this.state;
    return (
      <div className="card">
        <img src={imgSrc}></img>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default Card;