import React, { useState } from "react";

const Card = () => {
  const [title, setTitle] = useState("Odin Odinson");
  const [description, setDescription] = useState("A very realistic character description");
  const [imgSrc, setImgSrc] = useState(require('../assets/odin.png'));
  return (
    <div className="card">
      <img src={imgSrc}></img>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;