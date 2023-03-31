import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoItem todo={todo} index={i} key={i} />
      ))}
    </ul>
  );
};

export default TodoList;
