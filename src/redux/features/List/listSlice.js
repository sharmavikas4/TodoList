import { createSlice } from "@reduxjs/toolkit";
const initialState = { list: [] };
const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.list.push(action.payload);
    },
    deleteList: (state, action) => {
      state.list = state.list.filter((item, id) => id !== action.payload);
    },
    completeTask: (state, action) => {
      state.list = state.list.map((item, id) =>
        id === action.payload ? { ...item, complete: !item.complete } : item
      );
    },
  },
});
export const { addList, deleteList, completeTask } = listSlice.actions;
export default listSlice.reducer;
