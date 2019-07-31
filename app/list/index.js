import React, { useState }  from "react";
import { useDrop } from "react-dnd-cjs";

import CardForm from "../card/card-form";
import Card from "../card";
import createCard from "../card/create-card"; 

module.exports = function ListCard({list}) {
  const [ cardList, setCardList ] = useState([]);

  const [ , dropRef ] = useDrop({
    accept: "card",
    drop: (item,monitor) => {
      console.log("card dropped", item);
      let card = item.card;
      setCardList(prevCardList => [...prevCardList, card]);
      // returned as obj, to distinguish card from dnd props
      return { card };
    },
    canDrop: (item, monitor) => {
      let cardExists = card => card.id == item.card.id;
      //console.log(!cardList.some(cardExists));
      return !cardList.some(cardExists);
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
    <li className="list-container" ref={dropRef} >
      <div className="list-header div-32">
        <h4>{list.name}</h4>
        <div className="">
          <CardForm name="create" onSubmit={handleCardFormSubmit}/>
        </div>
      </div>
			<div>
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
			</div>
    </li>
  );
};
