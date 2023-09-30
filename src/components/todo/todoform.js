// TodoForm.js
import React, { useState } from "react";
import classes from "./todoform.module.css";
const TodoForm = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    date: "",
    priority: "Low",
    done:false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleAddTodo = () => {
    if (newTodo.title.trim() !== "" && newTodo.date.trim() !== "") {
      onAddTodo({
        id: Date.now(), // Generate a unique ID (use a better method in production)
        ...newTodo,
      });

      setNewTodo({
        title: "",
        date: "",
        priority: "Low",
      });
    }
    else{
      alert("please enter some valid todotitle and date");
    }
  };

  return (
    <div className={classes.add_todo_form}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newTodo.title}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={newTodo.date}
        onChange={handleInputChange}
      />
      <select
        name="priority"
        value={newTodo.priority}
        onChange={handleInputChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
