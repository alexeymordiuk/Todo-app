import React, { useState } from "react";
import Chek from "./Chek";
import { BsTrash } from "react-icons/bs";
import { todoItems } from "../types/todoTypes";
import { useAppDispatch } from "../store/store";
import { removeItems } from "../store/todoSlice/todoSlice";
import { VscTasklist } from "react-icons/vsc";

export type todoProps = {
  todo: todoItems;
};

const TodoItem: React.FC<todoProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [newValue, setNewValue] = useState(todo.title);
  const [disabled, setDisabled] = useState(true);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickRemove = () => {
    if (window.confirm("Delete record?")) {
      dispatch(removeItems(todo.title));
    }
  };

  const onClickEdit = () => {
    inputRef.current.focus();
    if (window.confirm("Edit record?")) {
      setDisabled(!disabled);
    }
  };

  return (
    <div
      className={`${
        todo.isCompletead ? "active" : ""
      } flex items-center justify-between bg-white border border-gray text-black p-4 w-full`}
    >
      <button>
        <div className="flex items-center gap-x-3">
          <Chek todo={todo} />
          <input
            className="record"
            ref={inputRef}
            type="text"
            value={newValue}
            disabled={disabled}
            onChange={(e) => setNewValue(e.target.value)}
          />
        </div>
      </button>
      <div className="flex items-center gap-3">
        <button className="bg-green-500 p-2 rounded-md" onClick={onClickEdit}>
          <VscTasklist
            size={22}
            className="text-white hover:text-blue-500 transition-colors ease-out duration-10"
          />
        </button>
        <button className="bg-red-600 p-2 rounded-md" onClick={onClickRemove}>
          <BsTrash
            size={22}
            className="text-white hover:text-blue-500 transition-colors ease-out duration-10"
          />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
