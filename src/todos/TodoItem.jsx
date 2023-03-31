import React from "react";

const TodoItem = ({ todo, index }) => {
  console.log("TODO:", todo);
  return (
    <li
      key={index}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "400px",
        border: "1px solid #555",
        padding: "10px ",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <b>{index + 1}</b>&nbsp;
        <input type="checkbox" />
        <span>{todo.text}</span>
      </span>
      <button>Delete</button>
    </li>
  );
};

export default TodoItem;
