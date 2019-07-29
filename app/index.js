import React, { useState }  from "react";
import { DndProvider, useDrop } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";



// 
import CardList from "./card-list";

module.exports = function App() {
	const [ listContainer, setListContainer ] = useState([]);
  
  const [ , dropRef ] = useDrop({
    accept: "card",
    drop: (item,monitor) => console.log(item)
  });

	const handleClick = function handleClick(e) {
		setListContainer(prevListCount => [...prevListCount , 1])
	}	

	return (
		<div>
			<button onClick={handleClick}>Add List</button>

				<ul style={{display: "flex", justifyContent: "space-between"}}>
					{
						listContainer.map((item, index) => {
							return (
								<li ref={dropRef} key={index}>
									<CardList />
								</li>
							)

						})

					}
			
				</ul>
		</div>

	)
};

