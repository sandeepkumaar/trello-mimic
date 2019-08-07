import React, { useState }  from "react";



// 
import List from "../list";

module.exports = function Board() {
  const [ boardList, setBoardList ] = useState([]);
	const [listInput, setListInput ] = useState("");
  

  const handleSubmit = function handleSubmit(e) {
		e.preventDefault();
    if(!listInput) return;
    setBoardList(prevListCount => [...prevListCount , {name: listInput}])
    setListInput("");
  } 

  return (
    <div className="board-container">
			<div className="board-form div-32">
				<form className="form" onSubmit={handleSubmit}>
					<input className="input gutter-8" type="text" value={listInput} onChange={e => setListInput(e.target.value) } placeholder="create list"></input>
					<button className="btn btn--contained" type="submit" >Add List</button>
				</form>
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

