import React, { useState }  from "react";
// 
import List from "../list";
import ListForm from "../list/list-form"



let listId = 0;
const createList = function createList(title, boardId) {
  return {
    id: listId++,
    boardId,
    title
  }
};
module.exports = function Board() {
  const [ list, setList ] = useState([]);
  const [ cards, setCards] = useState([]);
 
  const handleAddCard = function handleAddCard(card) {
    setCards(cards => [...cards, card]);
    
  };
  const handleCardDelete = function handleCardDelete(card) {
    setCards(cards => {
      return cards.filter(cardItem =>  card.id !== cardItem.id)
    })
  };
  
  const handleCardUpdate = function handleCardUpdate(card) {
    let id = card.id;
    setCards(cards => {
      return cards.map(cardItem => (
         cardItem.id == id ? {...cardItem, ...card} : cardItem
      ));
    });
  };

  const handleSubmit = function handleSubmit(listTitle) {
    const list = createList(listTitle, "b1");
    setList(prevListCount => [...prevListCount , list])
  } 

  
  let getCardsByList = function getCardsByList(id) {
    return cards.filter(card => card.listId == id);
  };

  return (
    <div className="board-container">
			<div className="board-form div-32">
        <ListForm onSubmit={handleSubmit}/>
			</div>

      <ul className="board-list">
        {
         list.map((list, index) => {
            return (
                <List 
                  list={list}  
                  cards={getCardsByList(list.id)}
                  onAddCard={handleAddCard}
                  onDeleteCard={handleCardDelete}
                  onUpdateCard={handleCardUpdate}
                  key={index}/>
            )

          })

        }
    
      </ul>
    </div>

  )
};

