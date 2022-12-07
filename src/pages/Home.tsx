import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux/es/exports";
import { todoItems } from "../types/todoTypes";
import { useAppDispatch } from "../store/store";
import { selectTodo } from "../store/todoSlice/todoSlice";
import { addTodo } from "../store/todoSlice/todoSlice";

const Home: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectTodo);

  const onClickSubmit = () => {
    if (value !== "") {
      setValue("");
      const item: todoItems = {
        title: value,
        id: Date.now(),
      };
      dispatch(addTodo(item));
    } else {
      alert("Cant create void todo ):");
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const total = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className=" text-white w-4/5 mx-auto border border-gray p-4">
      <h1 className="text-2xl font-bold text-black mb-5 bg-slate-100 p-4">
        Todos ({total})
      </h1>
      <form className="flex items-center mb-4 rounded-md justify-between border-2 border-gray  bg-white w-full">
        <input
          type="text"
          className="bg-transparent w-full outline-none pl-3 text-black"
          placeholder="Enter todo here"
          required
          value={value}
          onChange={onChangeInput}
        />
        <button
          onClick={onClickSubmit}
          type="submit"
          className="bg-sky-500 p-3 hover:bg-red-500 rounded-md transition-colors"
        >
          Submit
        </button>
      </form>
      <div className="border border-gray ">
        {items.map((todo: todoItems) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Home;
