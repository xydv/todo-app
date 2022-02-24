import React, { useState, useEffect } from "react";
import Todo from "./Todo";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value)
  }
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      todos.unshift({ ts: Date.now(), todo: text, done: false });
      localStorage.setItem("todos", JSON.stringify(todos));
      setText("");
    }
  }
  return (
    <>
      <div className="divider">Add</div>
      <div className="container mx-auto px-4">
        <input onKeyPress={keyPressed} onChange={handleChange} value={text} type="text" placeholder="Add A Todo And Press Enter To Add To List!!!" className="input input-bordered w-full" />
      </div>
      <div className="divider">Todos</div>
      <div className="container mx-auto">
        {todos.map((element) => {
          return (
            <div className="my-4" key={element.ts}>
              <Todo text={element.todo} />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Todos;
