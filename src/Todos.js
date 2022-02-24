import React, { useState, useEffect } from "react";
const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState(0);
  // Copy Of todos
  let todoss = todos;
  // Get Todos From Localstorage And Rerender When state Changes
  useEffect(() => { setTodos(JSON.parse(localStorage.getItem("todos") || "[]")); }, [state]);
  // For Text Value
  const handleChange = (event) => { setText(event.target.value) };
  // If User Press Enter
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      // If No Text
      if (!text) {
        return
      } else {
        // Add Todo If Text Is There To todoss
        todoss.unshift({ ts: Date.now(), todo: text, done: false });
        //Set todoss to localStorage "todos"
        localStorage.setItem("todos", JSON.stringify(todoss));
        // Make Text Field Empty
        setText("");
      }
    }
  }
  // Clear Storage
  const clearStorage = () => {
    // Change state For Re-Render
    setState(state + 1)
    // Set todos to Empty array
    localStorage.setItem("todos", JSON.stringify([]));
  }
  // Delete Todo
  const deleteTodo = (id) => {
    // Get Index By Id
    // let dindex = todoss.findIndex(e => e.ts == id);
    // console.log(dindex)
    // Set Empty Object
    todoss = todoss.filter(item => item.ts != id)
    localStorage.setItem("todos", JSON.stringify(todoss));
    // Change state For Re-Render
    setState(state + 1);
  }
  // Done
  const doneTodo = (id) => {
    // Get Index By Id
    let tindex = todoss.findIndex(e => e.ts == id);
    // Change Done Status
    if (todoss[tindex].done) {
      todoss[tindex].done = false;
    } else {
      todoss[tindex].done = true;
    }
    // Set New todoss to Localstorage
    localStorage.setItem("todos", JSON.stringify(todoss));
    // Change state For Re-Render
    setState(state + 1);
  }
  return (
    <>
      <div className="navbar bg-base-100 shadow-xl rounded-box">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Todo App</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <i className="bi bi-gear-fill"></i>
              </div>
            </label>
            <div tabIndex="0" className="mt-3 card card-compact w-52 dropdown-content bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg text-center">{todos.length} Items</span>
                <div className="card-actions">
                  <button onClick={clearStorage} className="btn btn-primary btn-block">Clear All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider">Add</div>
      <div className="container mx-auto px-4">
        <input onKeyPress={keyPressed} onChange={handleChange} value={text} type="text" placeholder="Add A Todo And Press Enter To Add To List!!!" className="input input-bordered w-full" />
      </div>
      <div className="divider">Todos</div>
      <div className="container mx-auto">
        {todos.map((element) => {
          return (
            <div className="my-4 mx-4" key={element.ts}>
              <div className={`alert shadow-lg alert-${element.done ? "error" : "success"}`}>
                <div>
                  {element.done ? <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /><title>Done</title></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /><title>Undone</title></svg>}
                  <span className="font-semibold">{element.todo}</span>
                </div>
                <div className="flex-none font-bold">
                  <button onClick={() => { doneTodo(element.ts) }} className="btn btn-sm">
                    {element.done ? <i className="bi bi-x-circle"></i> : <i className="bi bi-check-circle"></i>}
                  </button>
                  <button onClick={() => { deleteTodo(element.ts) }} className="btn btn-sm">
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Todos;
