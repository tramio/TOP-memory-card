import React, { useState, useEffect } from "react";
import Card from "./Card";
import useCards from "./useCards";

const Deck = () => {
  const [baseDeck, setBaseDeck] = useState(useCards());

  return (
    <div className="deck">
      {baseDeck.map(card => {
        return <Card id={card.id} title={card.title} description={card.description} src={card.src} />;
      })}
    </div>
  )
}

export default Deck;