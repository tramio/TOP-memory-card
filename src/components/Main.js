import React from "react";
import Deck from "./Deck";

const Main = () => {
  return (
    <main>
      <h1>Memory Card!</h1>
      <p>Current score:</p>
      <p>High score:</p>
      <Deck />
    </main>
  );
}

export default Main;