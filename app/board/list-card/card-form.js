import React, { useState }  from "react";



module.exports = function CardForm({onSubmit, name="submit"}) {
  const [ title, setTitle] = useState("");
  const [ description, setDescription ]  = useState("");

  const handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };


  return(
    <form className="card-form" onSubmit={handleSubmit}>

			<div className="gutter-8">
				<input 
					className="input" 
					type="text" 
					value={title} 
					onChange={e => setTitle(e.target.value)} 
					placeholder="title"
				/>
			</div>

			<div className="gutter-8">
				<input 
					className="input" 
					type="text" 
					value={description} 
					onChange={e => setDescription(e.target.value)} 
					placeholder="description"
				/>
			</div>

      <button className="btn" type="submit">{name}</button>
    </form>
  );
}
