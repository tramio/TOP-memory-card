import React, { useState } from "react";

const Card = (props) => {
  return (
    <div key={props.id} id={props.id} className="card">
      <img src={props.src}></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;