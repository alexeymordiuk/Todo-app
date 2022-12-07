import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { todoItems } from "../../types/todoTypes";

export const fetchTodos = createAsyncThunk<todoItems[], Record<string, string>>(
    "pizzas/fetchShipsStatus",
    async () => {
      const { data } = await axios.get<todoItems[]>(
       'https://631fba6f58a1c0fe9f6e4aae.mockapi.io/todo'
      );
      return data;
    }
  );