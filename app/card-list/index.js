import React, { useState }  from "react";

import CardForm from "./card-form";

import createCard from "./create-card"; 

module.exports = function CardList() {
	const [ cardList, setCardList ] = useState([]);


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
		<div className="list-container">
			<CardForm onCardInput={handleCardInput}/>
			<ul>
				{ 
					cardList.map((card, index) => (
						<li key={index}>
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
