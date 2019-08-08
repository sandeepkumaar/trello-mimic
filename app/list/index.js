import React, { useState }  from "react";
import { useDrop } from "react-dnd-cjs";

import CardForm from "../card/card-form";
import Card from "../card";
import createCard from "../card/create-card"; 

module.exports = function List({list, cards, onAddCard, onDeleteCard, onUpdateCard}) {
  //const [ cards, setCards] = useState([]);

  const [ , dropRef ] = useDrop({
    accept: "card",
    drop: (item,monitor) => {
      console.log("card dropped", item);
      let card = item.card;
      let newCard = { ...card, listId:list.id} 
      onUpdateCard(newCard);
      // returned as obj, to distinguish card from dnd props
      return { newCard };
    },
    canDrop: (item, monitor) => {
      let cardExists = card => card.id == item.card.id;
      //console.log(!cardList.some(cardExists));
      return !cards.some(cardExists);
    }
  });

  const handleCardFormSubmit = function handleCardFormSubmit({title, description}) {
    const card = createCard(title, description, list.id);
    onAddCard(card);

    //setCards(prevCardList => [...prevCardList, card]);
  };

  const handleCardDelete = function handleCardDelete(card) {
    onDeleteCard(card)
  };

  const handleCardUpdate = function handleCardUpdate(card) {
    onUpdateCard(card)
    
  //  setCards(prevCardList => {
  //    return prevCardList.map(cardItem => (
  //       cardItem.id == id ? {...cardItem, title, description} : cardItem
  //    ));
  //  });
  };


  return (
    <li className="list-container" ref={dropRef} >
      <div className="list-header div-32">
        <h4>{list.title}</h4>
        <div className="">
          <CardForm name="create" onSubmit={handleCardFormSubmit}/>
        </div>
      </div>
			<div>
				<ul>
					{ 
						cards.map((card, index) => (
							<Card 
								card={card} 
								onDelete={handleCardDelete} 
								onUpdate={handleCardUpdate}
								key={index}
							/>
						))
					}
				</ul>
			</div>
    </li>
  );
};
