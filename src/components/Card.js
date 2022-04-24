import React, { useState } from "react";

const Card = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [imgSrc, setImgSrc] = useState(props.src);
  return (
    <div id={props.id} className="card">
      <img src={imgSrc}></img>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;