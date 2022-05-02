import React, { useState } from "react";
import Deck from "./Deck";

const Main = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const liftCurrentScore = (score) => {
    setCurrentScore(score);
  }
  const liftHighScore = (score) => {
    setHighScore(score);
  }  
  return (
    <main>
      <h1>Memory Card!</h1>
      <p>Current score: {currentScore}</p>
      <p>High score: {highScore}</p>
      <Deck liftCurrentScore={liftCurrentScore} liftHighScore={liftHighScore}/>
    </main>
  );
}

export default Main;