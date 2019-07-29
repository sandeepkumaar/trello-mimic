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

  const handleCardFormSubmit = function handleCardFormSubmit({title, description}) {
    const card = createCard(title, description);
    setCardList(prevCardList => [...prevCardList, card]);
  };

  const handleCardDelete = function handleCardDelete(card) {
    setCardList(prevCardList => {
      return prevCardList.filter(cardItem =>  card.id !== cardItem.id)
      
    })
  };

  const handleCardUpdate = function handleCardUpdate({id, title, description}) {
    
    setCardList(prevCardList => {
      return prevCardList.map(cardItem => (
         cardItem.id == id ? {...cardItem, title, description} : cardItem
      ));
    });
  };


  return (
    <li className="list-card-container" ref={dropRef} >
      <CardForm onSubmit={handleCardFormSubmit}/>
      <ul>
        { 
          cardList.map((card, index) => (
            <Card 
              card={card} 
              onDelete={handleCardDelete} 
              onUpdate={handleCardUpdate}
              key={index}
            />
          ))
        }
      </ul>
    </li>
  );
};
