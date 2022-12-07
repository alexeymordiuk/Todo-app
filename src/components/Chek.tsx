import React from "react";
import { BsCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleSuccess } from "../store/todoSlice/todoSlice";
import { AiOutlineCheck } from "react-icons/ai";
import { todoItems } from "../types/todoTypes";

type propsChek = {
  todo: todoItems;
};

const Chek: React.FC<propsChek> = ({ todo }) => {
  const dispatch = useDispatch();

  const onClickToggle = () => {
    dispatch(toggleSuccess({ id: todo.id, isCompletead: !todo.isCompletead }));
  };

  return (
    <div
      className={`border-2 border-slate-400 rounded-md ${
        todo.isCompletead ? <AiOutlineCheck className="text-2xl" /> : ""
      } w-5 h-5 flex items-center justify-center`}
      onClick={onClickToggle}
    >
      {todo.isCompletead && <BsCheck size={24} className="text-gray-900" />}
    </div>
  );
};

export default Chek;
