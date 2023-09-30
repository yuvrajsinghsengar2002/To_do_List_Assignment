import React, { useState } from "react";
import TodoItem from "./todoItem.js";
import classes from "./todoitemlist.module.css";
import TodoForm from "./todoform.js";
import { logoutUser,addTodoItem,getTodoItems,removeTodoItem, updateTodoItem, updateTodoItemDoneStatus } from "../Authservices.js";
import { useNavigate } from "react-router-dom";
const TodoList = ({authenticatedUser,onLogout}) => {
  
  const navigate=useNavigate()

  
  const [todoList, setTodoList] = useState(getTodoItems(authenticatedUser.id));
  const [sortBy, setSortBy] = useState("date"); 

   const sortTodoList = (criteria) => {
     const sortedList = [...todoList];

     if (criteria === "date") {
       sortedList.sort((a, b) => new Date(a.date) - new Date(b.date));
     } else if (criteria === "priority") {
       sortedList.sort((a, b) => {
         const priorityOrder = { High: 1, Medium: 2, Low: 3 };
         return priorityOrder[a.priority] - priorityOrder[b.priority];
       });
     }

     setTodoList(sortedList);
     setSortBy(criteria);
   };


  const handleEdit = (id,updatedTodoItem) => {
    updateTodoItem(authenticatedUser.id,id,updatedTodoItem);
     setTodoList(getTodoItems(authenticatedUser.id));
  };
  const handleToggleDone =(id,markdone)=>{
    updateTodoItemDoneStatus(authenticatedUser.id,id,markdone);
      setTodoList(getTodoItems(authenticatedUser.id));
  }

  const handleDelete = (id) => {
    removeTodoItem(authenticatedUser.id,id);
    setTodoList(getTodoItems(authenticatedUser.id));
  };
  
  const handleAddTodo = (newTodo) => {
    addTodoItem(authenticatedUser.id,newTodo);
    setTodoList([...todoList, newTodo]);
  };
  
  const handleLogout=()=>{
   logoutUser();
   onLogout();
   navigate("/To_Do_List_Assignment/signin");
  }
  return (
    <>
      <div className={classes.todo_list_header}>
        <h1>Welcome, {authenticatedUser.id}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className={classes.todo_list}>
        <h1>Todo List</h1>
        <div className={classes.button_container}>
          <button onClick={() => sortTodoList("date")}>Sort by Date</button>
          <button onClick={() => sortTodoList("priority")}>
            Sort by Priority
          </button>
        </div>
        <TodoForm onAddTodo={handleAddTodo} />
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            date={todo.date}
            priority={todo.priority}
            done={todo.done}
            onEdit={handleEdit}
            onDelete={() => handleDelete(todo.id)}
            onToggleDone={handleToggleDone}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
