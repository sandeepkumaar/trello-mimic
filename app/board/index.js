import React, { useState }  from "react";



// 
import ListCard from "./list-card";

module.exports = function Board() {
  const [ listContainer, setListContainer ] = useState([]);
	const [listInput, setListInput ] = useState("");
  

  const handleClick = function handleClick(e) {
		e.preventDefault();
    setListContainer(prevListCount => [...prevListCount , 1])
  } 

  return (
    <div className="board-container">
			<div className="board-form div-32">
				<form className="form">
					<input className="input gutter-8" type="text" value={listInput} onChange={e => setListInput(e.target.value) } placeholder="create list"></input>
					<button className="btn" onClick={handleClick}>Add List</button>
				</form>
			</div>

			<div className="board-list">
        <ul className="list-container">
          {
            listContainer.map((item, index) => {
              return (
                  <ListCard key={index}/>
              )

            })

          }
      
        </ul>
			</div>
    </div>

  )
};

