import React, { useState, useEffect } from "react";
import Card from "./Card";
import useCards from "./useCards";

const Deck = (props) => {
  const { liftCurrentScore, liftHighScore } = props;
  const [currentCard, setCurrentCard] = useState(null);
  const [clickCounter, setClickCounter] = useState(0);
  function onCardClick(e) {
    setCurrentCard(e.currentTarget.dataset.value);
    setClickCounter(clickCounter + 1);
  }

  const [currentHand, setCurrentHand] = useState([]);
  useEffect(updateHand, [clickCounter]);
  function updateHand() {
    if (currentHand.includes(currentCard) || currentCard === null) {
      setCurrentHand([]);
    } else {
      let newHand = currentHand.slice().concat(currentCard);
      setCurrentHand(newHand);
    }
  }

  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    updateScore();
    liftCurrentScore(currentScore);
  }, [clickCounter]);
  function updateScore() {
    if (currentHand.includes(currentCard)) {
      setCurrentScore(0);
      console.log("if");
    } else {
      setCurrentScore(currentScore + 1);
      console.log("else");
    }
  };

  const [highScore, setHighScore] = useState(0);
  useEffect(updateHighScore, [currentScore]);
  function updateHighScore() {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      liftHighScore(highScore);
    }
  }

  const [baseDeck] = useState(useCards());
  const [randomizedDeck, setRandomizedDeck] = useState(randomize(baseDeck));
  useEffect(() => {
    setRandomizedDeck(randomize(baseDeck));
  }, [clickCounter]);

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