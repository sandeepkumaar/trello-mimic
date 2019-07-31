import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd-cjs";

import CardForm from "./card-form";


module.exports = function Card({ card, onDelete, onUpdate, cardForm }) {


  const [ {isDragging, dropResult}, dragRef ] = useDrag({
    item: { type: "card", card: card},
    end: (item, monitor) => {
      if(monitor.didDrop()) {
        let { card }  = monitor.getDropResult();
        onDelete(card);
      }
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
    setEditable(false);
  };


  return (
    <li className="card-container" ref={dragRef}>
      <div className="card div-8">
        <div className="card-header">
          <div><h5>#{card.id}</h5></div>
          <div className="card-options">
            <button onClick={e => onDelete(card)}>DELETE</button>
            <button onClick={e => setEditable(!editable)}>EDIT</button>
          </div>
        </div>
        <div className="card-main">
          <div><h5>{card.title}</h5></div>
          <div><p>{card.description}</p></div>
        </div>

      </div>
      {
        editable && 
        <div className="card-form">
          <CardForm onSubmit={handleSubmit} name="update"/>
        </div>
      }
    </li> 
  )
}
