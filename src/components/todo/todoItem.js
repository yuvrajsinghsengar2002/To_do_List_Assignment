import React from "react";
import { useState } from "react";
import classes from "./todoitem.module.css";
import classes2 from "./todoform.module.css";
const TodoItem = ({ id,title, date, priority, done,onEdit, onDelete,onToggleDone }) => {
  const [editForm,setEditForm]=useState(false);
  const editHandler =()=>{
    setEditForm(!editForm);
  }
  
  const [newTodo, setNewTodo] = useState({
    title: title,
    date: date,
    priority: priority,
    done:done
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };
 const handleUpdateTodo = ()=>{
  if (newTodo.title.trim() !== "" && newTodo.date.trim() !== "") {
    onEdit(id,{
      ...newTodo,
    });
   setEditForm(!editForm)
  }
 }
 const handleToggleDone=()=>{
  onToggleDone(id,!done)
 }

  return (
    <div className={classes.todo_item}>
      <h3 className={classes.todo_title}>{title}</h3>
      <p className={classes.todo_date}>Date: {date}</p>
      <p className={classes.todo_priority}>Priority: {priority}</p>
         <label >
        <input
          type="checkbox"
          checked={done}
          onChange={handleToggleDone}
          className={classes.todo_item_checkbox}
        />
        Mark Done
      </label>
      <div className={classes.button_container}>
        <button className={classes.edit_button} onClick={editHandler}>
          Edit
        </button>
        <button className={classes.delete_button} onClick={onDelete}>
          Delete
        </button>
      </div>
      {editForm && (
        <div className={classes2.add_todo_form}>
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
          <button onClick={handleUpdateTodo}>Update Todo</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
