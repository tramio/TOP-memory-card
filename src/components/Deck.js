import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import useCards from "./useCards";

const Deck = () => {
  const [baseDeck, setBaseDeck] = useState(useCards());
  // const [score, setScore] = useState(0);
  // const [currentHand, setCurrentHand] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  function onCardClick(e) {
    setCurrentCard(e.currentTarget.dataset.value);
    // if (currentHand.includes(currentCard)) {
    //   setCurrentHand([]);
    //   setCurrentScore(0);
    // } else {
      // setCurrentHand(prevCurrentHand.push(currentCard));
      // setScore(prevState++);
    // }
  }

  const [randomizedDeck, setRandomizedDeck] = useState(randomize(baseDeck));
  useEffect(() => {
    setRandomizedDeck(randomize(baseDeck));
  }, [currentCard])

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

  return (
    <div className="deck">
      {randomizedDeck.map(card => {
        return <Card dataValue={card.dataValue} description={card.description} id={card.id} key={card.value} onClick={onCardClick} src={card.src} title={card.title} />;
      })}
    </div>
  )
}

export default Deck;