import React, { useEffect } from "react";
import { useDrag } from "react-dnd";

module.exports = function Card({ card, onDelete }) {

  const [ {isDragging, dropResult}, dragRef ] = useDrag({
    item: { type: "card", card: card},
    end: (item, monitor) => {
      let { card }  = monitor.getDropResult();
      //console.log("drag-end", card);
      onDelete(card);
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      dropResult: monitor.getDropResult()
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
