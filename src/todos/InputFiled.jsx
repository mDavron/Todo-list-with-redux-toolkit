import React from "react";
import { addTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const InputFiled = () => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  console.log(text);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default InputFiled;
