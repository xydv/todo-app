import React from "react";

const Todo = (props) => {
  return (
    <div className="`alert shadow-lg alert-${}`">
      <div>
        <i className="bi bi-check-circle font-bold"></i>
        <span className="font-semibold">{props.text}</span>
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
  );
};

export default Todo;
