import React, { useState, useEffect } from "react";
import Card from "./Card";
import useCards from "./useCards";

const Deck = () => {
  const [baseDeck, setBaseDeck] = useState(useCards());

  const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function randomize(array) {
    const initialLength = array.length;
    const currentArray = array.slice();
    const randomized = [];
    for (let i = 0; i < initialLength; i++) {
      const randomIndex = Math.floor(Math.random()*(currentArray.length));
      randomized.push(currentArray[randomIndex]);
      currentArray.splice(randomIndex, 1);
    }
    return randomized;
  }

  const [randomizedDeck, setRandomizedDeck] = useState(randomize(baseDeck));
  return (
    <div className="deck">
      {randomizedDeck.map(card => {
        return <Card key={card.id} id={card.id} title={card.title} description={card.description} src={card.src} />;
      })}
    </div>
  )
}

export default Deck;