import React, { useState }  from "react";
import { DndProvider } from "react-dnd-cjs";
import HTML5Backend from "react-dnd-html5-backend-cjs";
//


// 
import Board from "./board"

module.exports = function App() {

  return (
		<div className="app-container flex-column">
			<header className="app-header">
				<h4 className="app-header-title">Trello Mimic</h4>
			</header>
			<main className="main">
				<DndProvider backend={HTML5Backend}>
					<Board/>
				</DndProvider>
			</main>

		</div>

  )
};

