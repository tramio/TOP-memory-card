import React, { Component } from "react";
import Card from "./Card";

class Deck extends Component {
  render() {
    return (
      <div className="deck">
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default Deck;