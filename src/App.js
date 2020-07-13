import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn React Hooks",
    },
    {
      text: "Play soccer and exercise.",
    },
    {
      text: "Read the Bible.",
    },
  ]);

  const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
