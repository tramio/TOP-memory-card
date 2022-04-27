import React, { useState } from "react";

const useCards = () => {
   const [cards, setCards] = useState([
    {
      key: 1,
      id: "card-1",
      title: "Bamboo",
      description: "A realistic description",
      src: require("../assets/bamboo.png"),
    },
    {
      key: 2,
      id: "card-2",
      title: "Bear",
      description: "Another description",
      src: require("../assets/bear.png"),
    },
    {
      key: 3,
      id: "card-3",
      title: "Description",
      description: "A realistic description",
      src: require("../assets/description.png"),
    },
    {
      key: 4,
      id: "card-4",
      title: "Gold",
      description: "Another description",
      src: require("../assets/gold.png"),
    },
    {
      key: 5,
      id: "card-5",
      title: "Header",
      description: "A realistic description",
      src: require("../assets/header.png"),
    },
    {
      key: 6,
      id: "card-6",
      title: "Leaf",
      description: "Another description",
      src: require("../assets/leaf.png"),
    },
    {
      key: 7,
      id: "card-7",
      title: "Moss",
      description: "A realistic description",
      src: require("../assets/moss.png"),
    },
    {
      key: 8,
      id: "card-8",
      title: "Stone",
      description: "Another description",
      src: require("../assets/stone.png"),
    },    {
      key: 9,
      id: "card-9",
      title: "Title",
      description: "A realistic description",
      src: require("../assets/title.png"),
    },
    {
      key: 10,
      id: "card-10",
      title: "Water",
      description: "Another description",
      src: require("../assets/water.png"),
    },
  ]);
  return cards;
}

export default useCards;