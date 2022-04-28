import React, { useState } from "react";

const Card = (props) => {
  return (
    <div key={props.value} id={props.id} onClick={props.onClick} className="card" data-value={props.dataValue}>
      <img src={props.src}></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;