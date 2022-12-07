import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoItems } from "../../types/todoTypes";
import { RootState } from "../store";
import { fetchTodos } from "./fetcthSlice";

  export enum Status {
    LOADING = 'loading',
    SUCCES = 'success',
    ERROR = 'error'
  }

  interface ItemsSliceState {
    items: todoItems[];
    status: Status;
  }

  const initialState: ItemsSliceState = {
    items: [],
    status: Status.LOADING,
  };

  export const itemsSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<todoItems[]>) {
        state.items = action.payload;
      },
    },
    extraReducers : (builder) => {
      builder.addCase(fetchTodos.pending,(state, action) => {
        state.status = Status.LOADING;
        state.items = [];
      });
      builder.addCase(fetchTodos.fulfilled,(state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCES;
      });
      builder.addCase(fetchTodos.rejected,(state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      });
    }
  });

export const selectTodosData = (state: RootState) => state.items;

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
