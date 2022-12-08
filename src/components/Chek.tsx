import React from "react";
import { BsCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleSuccess } from "../store/todoSlice/todoSlice";
import { AiOutlineCheck } from "react-icons/ai";
import { todoItems } from "../types/todoTypes";
import { Check } from "../style-components/Check";

type propsChek = {
  todo: todoItems;
};

const Chek: React.FC<propsChek> = ({ todo }) => {
  const dispatch = useDispatch();

  const onClickToggle = () => {
    dispatch(toggleSuccess({ id: todo.id, isCompletead: !todo.isCompletead }));
  };

  return (
    <Check
      className={`${todo.isCompletead ? <AiOutlineCheck size={24} /> : ""}`}
      onClick={onClickToggle}
    >
      {todo.isCompletead && <BsCheck size={24} />}
    </Check>
  );
};

export default Chek;
