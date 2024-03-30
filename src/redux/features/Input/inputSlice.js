import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
};
const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    addInput: (state, action) => {
      state.value = action.payload;
    },
    deleteInput: (state) => {
      state.value = "";
    },
  },
});
export const { addInput, deleteInput } = inputSlice.actions;
export default inputSlice.reducer;
