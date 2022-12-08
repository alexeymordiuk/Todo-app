import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux/es/exports";
import { todoItems } from "../types/todoTypes";
import { useAppDispatch } from "../store/store";
import { selectTodo } from "../store/todoSlice/todoSlice";
import { addTodo } from "../store/todoSlice/todoSlice";
import {
  Btn,
  Form,
  Input,
  Record,
  Title,
  Wrapper,
} from "../style-components/Input";

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
    <Wrapper>
      <Title>Todos ({total})</Title>
      <Form>
        <Input
          type="text"
          placeholder="Enter todo here"
          required
          value={value}
          onChange={onChangeInput}
        />
        <Btn onClick={onClickSubmit} type="submit">
          Submit
        </Btn>
      </Form>
      <Record>
        {items.map((todo: todoItems) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </Record>
    </Wrapper>
  );
};

export default Home;
