import React, { useState }  from "react";



// 
import ListCard from "./list-card";

module.exports = function Board() {
	const [ listContainer, setListContainer ] = useState([]);
  

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
									<ListCard key={index}/>
							)

						})

					}
			
				</ul>
		</div>

	)
};

