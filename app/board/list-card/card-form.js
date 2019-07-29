import React, { useState }  from "react";



module.exports = function CardForm({onSubmit}) {
  const [ title, setTitle] = useState("");
  const [ description, setDescription ]  = useState("");

  const handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };


  return(
    <form onSubmit={handleSubmit}>
      <label> 
        Title 
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
       </label>
      <label>   
        Description 
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
       </label>
      <button type="submit">submit</button>
    </form>
  );
}
