import React, { useState }  from "react";



module.exports = function ListForm({onSubmit}) {
  const [input, setInput ] = useState("");

  const handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if(!input) return;
    onSubmit(input);
    setInput("");
  } 
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
        className="input gutter-8" 
        type="text" 
        value={input} 
        onChange={e => setInput(e.target.value) } 
        placeholder="create list">
      </input>
      <button className="btn btn--contained" type="submit" >Add List</button>
    </form>
  );

}
