import React, { useState }  from "react";


import CardList from "./card-list";

module.exports = function App() {
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
							<li key={index}>
								<CardList />
							</li>
						)

					})

				}
		
			</ul>
		</div>

	)
};

