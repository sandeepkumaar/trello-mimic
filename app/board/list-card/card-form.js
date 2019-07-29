import React, { useState }  from "react";

module.exports = function CardForm({onCardInput}) {
  const [input, setInput] =  useState("");
  const handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onCardInput(input)
    setInput("");
  };
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  );
}
