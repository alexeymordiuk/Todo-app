import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoItems } from "../../types/todoTypes";
import { RootState } from "../store";

interface TodoSliceState {
  items: todoItems[];
  totalCount: number;
}

const initialState: TodoSliceState = {
  items: [
    { id: 0, title: "Go to the gym", isCompletead: false, count: 1 },
    { id: 1, title: "Read intresting book", isCompletead: false, count: 1 },
    {
      id: 2,
      title: "Meets with friends at 14:00",
      isCompletead: true,
      count: 1,
    },
  ],
  totalCount: 0,
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<todoItems>) {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        isCompletead: false,
        count: 1,
      };
      state.items.push({ ...action.payload, count: 1 });
    },
    removeItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.title !== action.payload);
    },
    toggleSuccess(state, action: PayloadAction<todoItems>) {
      const index = state.items.find((obj) => obj.id === action.payload.id);
      index.isCompletead = action.payload.isCompletead;
    },
  },
});

export const selectTodoItemById = (id: number) => (state: RootState) =>
  state.todo.items.find((obj) => obj.id === id);
export const selectTodo = (state: RootState) => state.todo;
export const { addTodo, removeItems, toggleSuccess } = TodoSlice.actions;
export default TodoSlice.reducer;
