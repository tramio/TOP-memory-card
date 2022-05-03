import React, { useState, useEffect } from "react";
import Card from "./Card";
import useCards from "./useCards";

const Main = (props) => {
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
  useEffect(updateScore, [clickCounter]);
  function updateScore() {
    if (currentHand.includes(currentCard)) {
      setCurrentScore(0);
    } else if (currentCard != null) {
      setCurrentScore(currentScore + 1);
    }
  }

  const [highScore, setHighScore] = useState(0);
  useEffect(updateHighScore, [currentScore]);
  function updateHighScore() {
    if (currentScore > highScore) {
      setHighScore(currentScore);
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
      const randomIndex = Math.floor(Math.random() * currentArray.length);
      randomized.push(currentArray[randomIndex]);
      currentArray.splice(randomIndex, 1);
    }
    return randomized;
  }

  const deck = randomizedDeck.map((card) => (
    <Card
      dataValue={card.dataValue}
      description={card.description}
      id={card.id}
      key={card.value}
      onClick={onCardClick}
      src={card.src}
      title={card.title}
    />
  ));

  return (
    <main>
      <h1>Memory Card!</h1>
      <p>Current score: {currentScore}</p>
      <p>High score: {highScore}</p>
      <div className="deck">{deck}</div>
    </main>
  );
};

export default Main;
