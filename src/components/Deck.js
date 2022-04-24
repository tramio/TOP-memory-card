import React from "react";
import Card from "./Card";

const Deck = () => {
  return (
    <div className="deck">
      <Card id="card-1" title="Bamboo" description="A very realistic description" src={require("../assets/bamboo.png")} />
      <Card id="card-2" title="Bear" description="Another description" src={require("../assets/bear.png")} />
      <Card id="card-3" title="Brown" description="Hi" src={require("../assets/description.png")} />
      <Card id="card-4" title="Gold" description="Hi" src={require("../assets/gold.png")} />
      <Card id="card-5" title="Header" description="Hi" src={require("../assets/header.png")} />
      <Card id="card-6" title="Leaf" description="Hi" src={require("../assets/leaf.png")} />
      <Card id="card-7" title="Moss" description="Hi" src={require("../assets/moss.png")} />
      <Card id="card-8" title="Stone" description="Hi" src={require("../assets/stone.png")} />
      <Card id="card-9" title="Title" description="Hi" src={require("../assets/title.png")} />
      <Card id="card-10" title="Water" description="Hi" src={require("../assets/water.png")} />
    </div>
  )
}

export default Deck;