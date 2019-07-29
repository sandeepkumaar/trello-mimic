import React, { useState }  from "react";
import { DndProvider, useDrop } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";



// 
import Board from "./board"

module.exports = function App() {

  return (
    <div>
      <Board/>
    </div>

  )
};

