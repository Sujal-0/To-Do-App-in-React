import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import "./InputTodo.css";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="form">
      <form onSubmit={onSubmitForm}>
        <input type="text" value={description} onChange={handleChange} placeholder="Enter new todo" />
        <button type="submit" className="btn">
          <span><AddIcon fontSize="large" /></span>
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
