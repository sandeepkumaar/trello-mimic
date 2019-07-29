import React from "react";
import { useDrag } from "react-dnd";

module.exports = function Card({ card, onDelete }) {

  const [ {isDragging}, dragRef ] = useDrag({
    item: { type: "card"},
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  

  return (
    <li ref={dragRef}>
      <span>{card.id}</span>
      <span>{card.desc}</span>
      <button onClick={e => onDelete(card)}>delete</button>
    </li> 
  )
}
