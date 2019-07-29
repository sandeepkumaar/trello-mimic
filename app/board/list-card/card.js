import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";

import CardForm from "./card-form";


module.exports = function Card({ card, onDelete, onUpdate, cardForm }) {


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


  const [ editable, setEditable ] = useState(false);

  const handleSubmit = function handleSubmit({title, description}) {
    onUpdate({
      title, 
      description,
      id: card.id
    });
  };


  return (
    <li className="card-container" ref={dragRef}>
      <div className="card">
        <div className="card-data">
          <span>{card.id}</span>
          <span>{card.title}</span>
          <span>{card.description}</span>
        </div>
        <div className="card-options">
          <button onClick={e => onDelete(card)}>delete</button>
          <button onClick={e => setEditable(true)}>Edit</button>
        </div>
      </div>
      {
        editable && 
        <div className="card-form">
          <CardForm onSubmit={handleSubmit} />
        </div>
      }
    </li> 
  )
}
