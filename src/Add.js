// import React, { useState } from 'react'

// const Add = () => {
//     let todos = JSON.parse(localStorage.getItem("todos") || "[]");
//     const [text, setText] = useState("");
//     const handleChange = (event) => {
//         setText(event.target.value)
//     }
//     const keyPressed = (event) => {
//         if (event.key === "Enter") {
//             todos.push({ ts: Date.now(), todo: text, done: false });
//             localStorage.setItem("todos", JSON.stringify(todos));
//             setText("");
//         }
//     }
//     return (
//         <div className="container mx-auto px-4">
//             <input onKeyPress={keyPressed} onChange={handleChange} value={text} type="text" placeholder="Type here" className="input input-bordered w-full" />
//         </div>
//     )
// }

// export default Add