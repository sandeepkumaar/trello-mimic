import React, { useState }  from "react";
// 
import List from "../list";

let listId = 0;
const createList = function createList(title, boardId) {
  return {
    id: listId++,
    boardId,
    title
  }
};
const ListForm = function ListForm({onSubmit}) {
  const [input, setInput ] = useState("");

  const handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if(!input) return;
    onSubmit(input);
    setInput("");
  } 
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
        className="input gutter-8" 
        type="text" 
        value={input} 
        onChange={e => setInput(e.target.value) } 
        placeholder="create list">
      </input>
      <button className="btn btn--contained" type="submit" >Add List</button>
    </form>
  );

}
module.exports = function Board() {
  const [ boardList, setBoardList ] = useState([]);
  

  const handleSubmit = function handleSubmit(listTitle) {
    const list = createList(listTitle, "b1");
    setBoardList(prevListCount => [...prevListCount , list])
  } 

  return (
    <div className="board-container">
			<div className="board-form div-32">
        <ListForm onSubmit={handleSubmit}/>
			</div>

      <ul className="board-list">
        {
          boardList.map((list, index) => {
            return (
                <List list={list}  key={index}/>
            )

          })

        }
    
      </ul>
    </div>

  )
};

