import React, { useState }  from "react";
import { useDrop } from "react-dnd";

import CardForm from "./card-form";
import Card from "./card";
import createCard from "./create-card"; 

module.exports = function ListCard() {
  const [ cardList, setCardList ] = useState([]);

  const [ , dropRef ] = useDrop({
    accept: "card",
    drop: (item,monitor) => {
      console.log("card dropped", item);
      let card = item.card;
      setCardList(prevCardList => [...prevCardList, card]);
      // returned as obj, to distinguish card from dnd props
      return { card };
    }
  });

  const handleCardInput = function handleCardInput(text) {
    const card = createCard(text);
    setCardList(prevCardList => [...prevCardList, card]);
  };

  const handleCardDelete = function handleCardDelete(card) {
    setCardList(prevCardList => {
      return prevCardList.filter(cardItem =>  card.id !== cardItem.id)
      
    })
  };


  return (
    <li className="list-card-container" ref={dropRef} >
      <CardForm onCardInput={handleCardInput}/>
      <ul>
        { 
          cardList.map((card, index) => (
            <Card card={card} onDelete={handleCardDelete} key={index}/>
          ))
        }
      </ul>
    </li>
  );
};
