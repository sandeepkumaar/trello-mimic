import React, { useState }  from "react";


module.exports = function App() {
	const [ list, setList] = useState([]);

	const [input, setInput] =  useState("");

	const handleSubmit = function handleSubmit(e) {
		e.preventDefault();
		setList(prevList => [...prevList, input]);
		setInput("");
	};

	const handleClick = function handleClick(id) {
		setList(prevList => {
		  return prevList.filter((item, index) => id !== index)
			
		})
	}


	return (
		<div className="list-container">
			<form onSubmit={handleSubmit}>
				<input type="text" value={input} onChange={e => setInput(e.target.value)}/>
			</form>
			<ul>
				{ 
					list.map((item, index) => (
						<li key={index}>
							<span>{item}</span>
							<button onClick={e => handleClick(index)}>delete</button>
						</li> 
					))
				}
			</ul>
		</div>
	);
};

