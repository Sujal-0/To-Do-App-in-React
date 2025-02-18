import React, { Fragment, useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import EditTodo from "./EditTodo";
import "./InputTodo.css";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  // Delete todo function
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>To-Do's</th>
            <th><EditIcon /></th>
            <th><ClearIcon /></th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button className="delBtn" onClick={() => deleteTodo(todo.todo_id)}><ClearIcon /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
