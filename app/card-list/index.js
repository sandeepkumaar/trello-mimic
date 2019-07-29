import React, { useState }  from "react";

import CardForm from "./card-form";

import createCard from "./create-card"; 
import { useDrag } from "react-dnd";

module.exports = function CardList() {
	const [ cardList, setCardList ] = useState([]);

  const [ {isDragging}, dragRef ] = useDrag({
    item: { type: "card"},
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
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

  // isDragging behaves as state. whenever dom events are triggered 
  // isDragging gets updated and component is re-rendered
  console.log(isDragging);

	return (
		<div className="list-container">
			<CardForm onCardInput={handleCardInput}/>
			<ul>
				{ 
					cardList.map((card, index) => (
						<li ref={dragRef} key={index}>
							<span>{card.id}</span>
							<span>{card.desc}</span>
							<button onClick={e => handleCardDelete(card)}>delete</button>
						</li> 
					))
				}
			</ul>
		</div>
	);
};
