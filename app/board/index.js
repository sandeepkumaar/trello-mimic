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
 
  const addCard = function addCard(card) {
    setCards(cards => [...cards, card]);
    
  }
  

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
                  addCard={addCard}
                  key={index}/>
            )

          })

        }
    
      </ul>
    </div>

  )
};

