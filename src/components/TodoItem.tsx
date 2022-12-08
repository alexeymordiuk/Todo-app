import React, { useState } from "react";
import Chek from "./Chek";
import { todoItems } from "../types/todoTypes";
import { useAppDispatch } from "../store/store";
import { removeItems } from "../store/todoSlice/todoSlice";
import {
  BtnGreen,
  BtnRed,
  IconList,
  IconTrash,
  Input,
  Target,
  Wrraper,
} from "../style-components/TodoItems";

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
    <Wrraper className={`${todo.isCompletead ? "bg-slate-300" : "bg-white"}`}>
      <Target>
        <Chek todo={todo} />
        <Input
          ref={inputRef}
          type="text"
          value={newValue}
          disabled={disabled}
          onChange={(e) => setNewValue(e.target.value)}
        />
      </Target>
      <Target>
        <BtnGreen onClick={onClickEdit}>
          <IconList size={22} />
        </BtnGreen>
        <BtnRed onClick={onClickRemove}>
          <IconTrash size={22} />
        </BtnRed>
      </Target>
    </Wrraper>
  );
};

export default TodoItem;
