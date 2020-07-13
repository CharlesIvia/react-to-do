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

  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
