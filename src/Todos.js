import React, { useState, useEffect } from "react";
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
      <div className="navbar bg-base-100 shadow-xl rounded-box">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Todo App</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div tabIndex="0" className="mt-3 card card-compact w-52 dropdown-content bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
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
            <div className="my-4" key={element.ts}>
              <div className={`alert shadow-lg alert-${element.done ? "error" : "success"}`}>
                <div>
                  {element.done ? <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  <span className="font-semibold">{element.todo}</span>
                </div>
                <div className="flex-none font-bold">
                  <button className="btn btn-sm btn-success">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-sm btn-error">
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
