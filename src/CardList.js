import React from "react";
import CardItem from "./Card";

function Card(props) {
  return (
    <div className="app">
      {props.monster.map(monster => (
        <CardItem key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default Card;
