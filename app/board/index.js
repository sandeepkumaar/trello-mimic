import React, { useState }  from "react";



// 
import ListCard from "./list-card";

module.exports = function Board() {
  const [ boardList, setBoardList ] = useState([]);
	const [listInput, setListInput ] = useState("");
  

  const handleSubmit = function handleSubmit(e) {
		e.preventDefault();
    setBoardList(prevListCount => [...prevListCount , {name: listInput}])
    setListInput("");
  } 

  return (
    <div className="board-container">
			<div className="board-form div-32">
				<form className="form" onSubmit={handleSubmit}>
					<input className="input gutter-8" type="text" value={listInput} onChange={e => setListInput(e.target.value) } placeholder="create list"></input>
					<button className="btn" type="submit" >Add List</button>
				</form>
			</div>

      <ul className="board-list">
        {
          boardList.map((list, index) => {
            return (
                <ListCard list={list}  key={index}/>
            )

          })

        }
    
      </ul>
    </div>

  )
};

